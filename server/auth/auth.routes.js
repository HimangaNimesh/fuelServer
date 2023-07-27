import express from 'express'
import { signup } from './auth.controller.js'

const router = express.Router()

//CREATE A USER
router.post("/signup", signup)

export default router