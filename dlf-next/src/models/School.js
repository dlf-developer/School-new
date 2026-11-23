import mongoose from 'mongoose'

const SchoolSchema = new mongoose.Schema(
  {
    schoolId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    updatedBy: {
      type: String,
      default: 'admin',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.School || mongoose.model('School', SchoolSchema)
