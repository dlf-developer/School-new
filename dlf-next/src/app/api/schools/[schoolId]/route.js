import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '@/lib/mongodb'
import School from '@/models/School'
import { getSessionUser } from '@/lib/auth'
import { schoolsData as defaultSchools } from '@/data/schoolsData'

export async function GET(request, { params }) {
  try {
    const { schoolId } = await params
    await connectToDatabase()

    const schoolDoc = await School.findOne({ schoolId }).lean()
    if (schoolDoc && schoolDoc.data) {
      return NextResponse.json({ success: true, schoolId, data: schoolDoc.data })
    }

    if (defaultSchools[schoolId]) {
      return NextResponse.json({ success: true, schoolId, data: defaultSchools[schoolId] })
    }

    return NextResponse.json({ error: 'School not found' }, { status: 404 })
  } catch (error) {
    console.warn(`MongoDB error for school:`, error.message)
    const { schoolId } = await params
    if (defaultSchools[schoolId]) {
      return NextResponse.json({ success: true, schoolId, data: defaultSchools[schoolId] })
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

    const { schoolId } = await params
    const body = await request.json()

    await connectToDatabase()

    const updated = await School.findOneAndUpdate(
      { schoolId },
      {
        schoolId,
        name: body.data?.name || body.name || schoolId,
        data: body.data !== undefined ? body.data : body,
        updatedBy: user.email || 'admin',
      },
      { upsert: true, new: true }
    )

    try {
      revalidatePath(`/school/${schoolId}`)
      revalidatePath(`/school/${schoolId}/[...slug]`, 'page')
    } catch (revalErr) {
      console.warn('Revalidation warning:', revalErr.message)
    }

    return NextResponse.json({
      success: true,
      message: `School '${schoolId}' updated in database successfully`,
      data: updated.data,
    })
  } catch (error) {
    console.error(`Failed to update school:`, error)
    return NextResponse.json(
      { error: error.message || 'Failed to update school' },
      { status: 500 }
    )
  }
}
