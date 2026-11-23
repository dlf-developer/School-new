import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.JWT_SECRET || 'dlf_schools_jwt_secret_key_2026_super_secure'
export const TOKEN_COOKIE_NAME = 'dlf_admin_token'

export async function hashPassword(plainPassword) {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(plainPassword, salt)
}

export async function verifyPassword(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword)
}

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch {
    return null
  }
}

export async function getSessionUser() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(TOKEN_COOKIE_NAME)?.value
    if (!token) return null
    return verifyToken(token)
  } catch {
    return null
  }
}
