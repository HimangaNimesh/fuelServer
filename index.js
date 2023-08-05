import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRoutes from './server/User/User.routes.js'
import StationRoutes from './server/Station/Station.routes.js'
import AuthRoutes from './server/auth/auth.routes.js'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to DB...")
    })
    .catch((error)=>{
        throw error
    })
}
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", AuthRoutes)
app.use("/api/users", UserRoutes)
app.use("/api/stations", StationRoutes)

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.listen(8000, ()=>{
    console.log("connected...")
    connect()
})
