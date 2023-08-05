import express from 'express'
import { signupStation, signupUser, signin } from './auth.controller.js'

const router = express.Router()

//CREATE A USER
router.post("/user/signup", signupUser)

//CREATE A STATION
router.post("/station/signup", signupStation)

//SIGNIN
router.post("/signin", signin)

export default router