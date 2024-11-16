import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signUp = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ userName, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    //res.status(500).json(error.message);
    next(error);
    //if the above error is not defind then we can create a function
    //next(errorHandler(550, "error form function"));
  }
};
