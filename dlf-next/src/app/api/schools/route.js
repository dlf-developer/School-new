import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import School from '@/models/School'
import { schoolsData as defaultSchools } from '@/data/schoolsData'

export async function GET() {
  try {
    await connectToDatabase()
    const schools = await School.find({}).lean()

    const resultMap = { ...defaultSchools }
    for (const sc of schools) {
      resultMap[sc.schoolId] = sc.data
    }

    return NextResponse.json({ success: true, data: resultMap })
  } catch (error) {
    console.warn('MongoDB query failed, falling back to default schoolsData:', error.message)
    return NextResponse.json({ success: true, data: defaultSchools })
  }
}
