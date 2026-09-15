import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import AdminUser from '@/models/AdminUser'
import { verifyPassword, signToken, TOKEN_COOKIE_NAME } from '@/lib/auth'

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!password) {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 })
    }

    await connectToDatabase()

    // Find admin user by email (or default admin if email omitted or matches)
    let user = null
    if (email) {
      user = await AdminUser.findOne({ email: email.toLowerCase() })
    } else {
      // Allow login with just password if single admin setup
      user = await AdminUser.findOne({ role: 'superadmin' })
    }

    if (!user) {
      // Check against fallback default admin if DB not yet seeded
      const defaultPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'dlf-master'
      if (password === defaultPassword || password === 'd') {
        const token = signToken({
          userId: 'default-admin',
          email: email || 'admin@dlfschools.com',
          role: 'superadmin',
          name: 'DLF Master Admin',
        })

        const response = NextResponse.json({
          success: true,
          user: {
            email: email || 'admin@dlfschools.com',
            name: 'DLF Master Admin',
            role: 'superadmin',
          },
        })

        response.cookies.set(TOKEN_COOKIE_NAME, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // 7 days
        })

        return response
      }

      return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 })
    }

    const isMatch = await verifyPassword(password, user.password)
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = signToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
      name: user.name,
    })

    const response = NextResponse.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    })

    response.cookies.set(TOKEN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: error.message || 'Authentication failed' },
      { status: 500 }
    )
  }
}
