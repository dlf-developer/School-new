import mongoose from 'mongoose'

const GlobalSectionSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
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

export default mongoose.models.GlobalSection || mongoose.model('GlobalSection', GlobalSectionSchema)
