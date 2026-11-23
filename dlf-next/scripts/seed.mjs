import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { globalData, schoolsData } from '../src/data/siteData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from .env.local if present
const envLocalPath = path.resolve(__dirname, '../.env.local')
if (fs.existsSync(envLocalPath) && typeof process.loadEnvFile === 'function') {
  process.loadEnvFile(envLocalPath)
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://sodakshkhullar_db_user:CyZl3LFvukxHJCiI@cluster0.ect9bds.mongodb.net/dlf-next?retryWrites=true&w=majority'
const ADMIN_EMAIL = process.env.ADMIN_DEFAULT_EMAIL || 'admin@dlfschools.com'
const ADMIN_PASSWORD = process.env.ADMIN_DEFAULT_PASSWORD || 'dlf-master'

async function seed() {
  console.log('[INFO] Connecting to MongoDB at:', MONGODB_URI)
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('[SUCCESS] Connected to MongoDB successfully!')
  } catch (err) {
    console.error('[ERROR] Failed to connect to MongoDB:', err.message)
    console.log('[WARN] Please ensure MongoDB is running or check your MONGODB_URI.')
    process.exit(1)
  }

  const db = mongoose.connection.db

  // 1. Seed Admin User
  console.log('\n--- 1. Seeding Superadmin User ---')
  const usersCollection = db.collection('adminusers')
  const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10)

  await usersCollection.updateOne(
    { email: ADMIN_EMAIL.toLowerCase() },
    {
      $set: {
        email: ADMIN_EMAIL.toLowerCase(),
        password: hashedPassword,
        name: 'DLF Master Admin',
        role: 'superadmin',
        updatedAt: new Date(),
      },
      $setOnInsert: {
        createdAt: new Date(),
      },
    },
    { upsert: true }
  )
  console.log(`[SUCCESS] Superadmin seeded: ${ADMIN_EMAIL} (Password: ${ADMIN_PASSWORD})`)

  // 2. Seed Global Sections
  console.log('\n--- 2. Seeding Global CMS Sections ---')
  const sectionsCollection = db.collection('globalsections')
  let sectionCount = 0

  for (const [key, data] of Object.entries(globalData)) {
    await sectionsCollection.updateOne(
      { key },
      {
        $set: {
          key,
          data,
          updatedBy: 'system-seed',
          updatedAt: new Date(),
        },
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true }
    )
    sectionCount++
    console.log(`  + Section seeded: [${key}]`)
  }
  console.log(`[SUCCESS] Total ${sectionCount} global sections seeded into MongoDB!`)

  // 3. Seed School Branches
  console.log('\n--- 3. Seeding School Branches (Strict Isolation) ---')
  const schoolsCollection = db.collection('schools')
  let schoolCount = 0

  for (const [schoolId, data] of Object.entries(schoolsData)) {
    await schoolsCollection.updateOne(
      { schoolId },
      {
        $set: {
          schoolId,
          name: data.name || schoolId,
          data,
          updatedBy: 'system-seed',
          updatedAt: new Date(),
        },
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true }
    )
    schoolCount++
    console.log(`  + School branch seeded: [${schoolId}] - ${data.name}`)
  }
  console.log(`[SUCCESS] Total ${schoolCount} school branches seeded into MongoDB!`)

  console.log('\n[SUCCESS] MongoDB database seeding complete! All admin and dynamic sections are now stored in the database.\n')
  await mongoose.disconnect()
}

seed().catch(err => {
  console.error('Fatal seed error:', err)
  process.exit(1)
})
