import mongoose from "mongoose";
import { DB_NAME } from "../utils/dbConstants.js";

const dbConnect = async() => {
    try {
        const dbInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        console.log(`\n Database connected successfully !! DB HOST: ${dbInstance.connection.host}`)
    } catch (error) {
        console.log("Database connection failed", error)
        process.exit(1)
    }
}

export default dbConnect