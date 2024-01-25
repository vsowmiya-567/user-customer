import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async()=>{
    const mongoURL = process.env.MONGODBCONNECTIONSTRING
    const connection = await mongoose.connect(mongoURL)
    console.log("mongoDB connected");
    return connection;
}
export default connectDB;