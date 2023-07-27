import mongoose from "mongoose";
import UserModel from '../User/User.model.js'

export const signup = async (req, res) => {
    try {
      const salt = bcryptjs.genSaltSync(10);
      const hash = bcryptjs.hashSync(req.body.password, salt);
      const newUser = new UserModel({ ...req.body, password: hash });
  
      await newUser.save();
      res.status(200).json("User has been created!");
    } catch (error) {

    }
  };