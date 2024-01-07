import express from "express";
import { login, signup } from "../controllers/user";

 
const Userrouter = express.Router();

Userrouter.post('/create', signup);
Userrouter.post("/login", login);

export default Userrouter;