import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '@/lib/mongodb'
import GlobalSection from '@/models/GlobalSection'
import { getSessionUser } from '@/lib/auth'
import { globalData as defaultGlobal } from '@/data/siteData'

export async function GET(request, { params }) {
  try {
    const { key } = await params
    await connectToDatabase()

    const section = await GlobalSection.findOne({ key }).lean()
    if (section && section.data) {
      return NextResponse.json({ success: true, key, data: section.data })
    }

    // Fallback to default
    if (defaultGlobal[key] !== undefined) {
      return NextResponse.json({ success: true, key, data: defaultGlobal[key] })
    }

    return NextResponse.json({ error: 'Section not found' }, { status: 404 })
  } catch (error) {
    console.warn(`MongoDB error for section:`, error.message)
    const { key } = await params
    if (defaultGlobal[key] !== undefined) {
      return NextResponse.json({ success: true, key, data: defaultGlobal[key] })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const user = await getSessionUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized. Admin login required.' }, { status: 401 })
    }

    const { key } = await params
    const body = await request.json()

    await connectToDatabase()

    const updated = await GlobalSection.findOneAndUpdate(
      { key },
      {
        key,
        data: body.data !== undefined ? body.data : body,
        updatedBy: user.email || 'admin',
      },
      { upsert: true, new: true }
    )

    // Revalidate paths so Next.js static/cached pages immediately receive live changes
    try {
      revalidatePath('/')
      revalidatePath('/[...slug]', 'page')
    } catch (revalErr) {
      console.warn('Revalidation warning:', revalErr.message)
    }

    return NextResponse.json({
      success: true,
      message: `Section '${key}' updated in database successfully`,
      data: updated.data,
    })
  } catch (error) {
    console.error(`Failed to update section:`, error)
    return NextResponse.json(
      { error: error.message || 'Failed to update section' },
      { status: 500 }
    )
  }
}
