import express from "express";
import { signUp } from "../controller/authController.js";

const router = express.Router();
const auth = router.post("/sign-up", signUp);
export default auth;
