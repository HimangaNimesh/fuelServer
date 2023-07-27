import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRoutes from './server/User/User.routes.js'
import StationRoutes from './server/Station/Station.routes.js'
import AuthRoutes from './server/auth/auth.routes.js'

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

app.use("/api/auth", AuthRoutes)
app.use("/api/users", UserRoutes)
app.use("/api/stations", StationRoutes)

app.listen(8000, ()=>{
    console.log("connected...")
    connect()
})
