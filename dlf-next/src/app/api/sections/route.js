import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import GlobalSection from '@/models/GlobalSection'
import { globalData as defaultGlobal } from '@/data/siteData'

export async function GET() {
  try {
    await connectToDatabase()
    const sections = await GlobalSection.find({}).lean()

    const resultMap = { ...defaultGlobal }
    for (const sec of sections) {
      resultMap[sec.key] = sec.data
    }

    return NextResponse.json({ success: true, data: resultMap })
  } catch (error) {
    console.warn('MongoDB query failed, falling back to default siteData:', error.message)
    return NextResponse.json({ success: true, data: defaultGlobal })
  }
}
