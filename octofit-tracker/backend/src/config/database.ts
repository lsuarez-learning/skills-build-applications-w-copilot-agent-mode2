import mongoose from 'mongoose'

export const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db'

export async function connectDatabase(): Promise<typeof mongoose> {
  await mongoose.connect(mongoUri, { dbName: 'octofit_db' })
  return mongoose
}

export async function disconnectDatabase(): Promise<void> {
  await mongoose.disconnect()
}

export default mongoose.connection
