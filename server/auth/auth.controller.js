import mongoose from "mongoose";
import UserModel from '../User/User.model.js'
import StationModel from '../Station/Station.model.js'
import bcryptjs from "bcryptjs";
import { createError } from "../../error.js";
import jwt from "jsonwebtoken"

export const signupUser = async (req, res, next) => {
    try {
      const salt = bcryptjs.genSaltSync(10);
      const hash = bcryptjs.hashSync(req.body.password, salt);
      const newUser = new UserModel({ ...req.body, password: hash });
        
      await newUser.save();
      res.status(200).json("User has been created!");
    } catch (error) {
        next(error)
    }
};

export const signupStation = async (req, res, next) => {
    try {
      const salt = bcryptjs.genSaltSync(10);
      const hash = bcryptjs.hashSync(req.body.password, salt);
      const newStation = new StationModel({ ...req.body, password: hash });
        
      await newStation.save();
      res.status(200).json("Station has been created!");
    } catch (error) {
        next(error)
    }
};

export const signinUser = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({email: req.body.email})
    if(!user) return next(createError(404, "User not found!"))

    const isCorrect = await bcryptjs.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong credencials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);

  } catch (error) {
    next(error)
  }
}

export const signinStatioin = async (req, res, next) => {
  try {
    const station = await StationModel.findOne({email: req.body.email})
    if(!station) return next(createError(404, "Station not found!"))

    const isCorrect = await bcryptjs.compare(req.body.password, station.password);
    if (!isCorrect) return next(createError(400, "Wrong credencials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);

  } catch (error) {
    next(error)
  }
}