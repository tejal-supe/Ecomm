import express from "express";
import { changePassword, check, forgotPassword, login, signup, verifyOtp } from "../controllers/user";
import { authenticate } from "../middleware/authenticate";

 
const Userrouter = express.Router();

Userrouter.post('/create', signup);
Userrouter.post("/login", login);
Userrouter.post("/forgetPassword",forgotPassword)
Userrouter.post("/verifyOtp",verifyOtp)
Userrouter.post("/changePass",changePassword)
Userrouter.post("/tp",authenticate , check)

// express().use()

export default Userrouter;
