import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRoutes from './User/User.routes.js'
import StationRoutes from './Station/Station.routes.js'

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

app.use("/api/users", UserRoutes)
app.use("/api/stations", StationRoutes)

app.listen(8000, ()=>{
    console.log("connected...")
    connect()
})
