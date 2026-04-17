import { Router } from "express";
import { register } from "../controllers/user.controller.js";

const userRouter=Router();

userRouter.route("/register").post(register)
console.log("REGISTER =", register);
export default userRouter