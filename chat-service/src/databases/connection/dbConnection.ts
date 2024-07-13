import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../../.env') })

const dbConnection = async () => {
  try {
    const connectionUrl: string = process.env.DATABASE_URL as string
    const connection: typeof mongoose = await mongoose.connect(connectionUrl, { dbName: "Project" })
    console.log(`Connected to MongoDB`)
  } catch (error) {
    console.error(error)
  }
}

export default dbConnection