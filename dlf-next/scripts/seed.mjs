import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { fileURLToPath } from 'url'
import path from 'path'
import { globalData } from '../src/data/siteData.js'
import { schoolsData } from '../src/data/schoolsData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dlf_schools'
const ADMIN_EMAIL = process.env.ADMIN_DEFAULT_EMAIL || 'admin@dlfschools.com'
const ADMIN_PASSWORD = process.env.ADMIN_DEFAULT_PASSWORD || 'dlf-master'

async function seed() {
  console.log('🔄 Connecting to MongoDB at:', MONGODB_URI)
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Connected to MongoDB successfully!')
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message)
    console.log('⚠️ Please ensure MongoDB is running or check your MONGODB_URI.')
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
  console.log(`✅ Superadmin seeded: ${ADMIN_EMAIL} (Password: ${ADMIN_PASSWORD})`)

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
    console.log(`  ✓ Section seeded: [${key}]`)
  }
  console.log(`✅ Total ${sectionCount} global sections seeded into MongoDB!`)

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
    console.log(`  ✓ School branch seeded: [${schoolId}] - ${data.name}`)
  }
  console.log(`✅ Total ${schoolCount} school branches seeded into MongoDB!`)

  console.log('\n🎉 MongoDB database seeding complete! All admin and dynamic sections are now stored in the database.\n')
  await mongoose.disconnect()
}

seed().catch(err => {
  console.error('Fatal seed error:', err)
  process.exit(1)
})
