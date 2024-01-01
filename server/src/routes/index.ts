import express from "express";
import { signup } from "../controllers/user";


const Userrouter = express.Router();

Userrouter.post('/create', signup);

export default Userrouter;