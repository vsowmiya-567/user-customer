import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Database/db.Config.js'
import orderRouter from './Routers/order.router.js'
import userRouter from './Routers/user.router.js'
dotenv.config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',orderRouter)
app.use('/api',userRouter)

connectDB()
app.listen(port,()=>{
    console.log("app is started in port",port);
})