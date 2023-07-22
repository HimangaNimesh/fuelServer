import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

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

app.listen(8000, ()=>{
    console.log("connected...")
    connect()
})
