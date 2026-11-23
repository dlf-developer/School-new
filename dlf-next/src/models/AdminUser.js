import mongoose from 'mongoose'

const AdminUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password hash is required'],
    },
    name: {
      type: String,
      default: 'DLF Admin',
    },
    role: {
      type: String,
      default: 'superadmin',
      enum: ['superadmin', 'editor'],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.AdminUser || mongoose.model('AdminUser', AdminUserSchema)
