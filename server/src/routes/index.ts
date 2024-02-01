import express from "express";
import { changePassword, check, editUserDetails, forgotPassword, login, signup, verifyOtp } from "../controllers/user";
import { authenticate } from "../middleware/authenticate";

 
const Userrouter = express.Router();

Userrouter.post('/create', signup);
Userrouter.post("/login", login);
Userrouter.post("/forgetPassword",forgotPassword)
Userrouter.post("/verifyOtp",verifyOtp)
Userrouter.post("/changePass",changePassword)
Userrouter.use(authenticate);
Userrouter.post("/tp" , check)
Userrouter.put("/editDetails",editUserDetails)
Userrouter.put("/updatePass",changePassword)

export default Userrouter;
