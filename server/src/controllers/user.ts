import { userModel } from "../modals/userModal";
import express from "express";

export const signup = async (req:express.Request,res:express.Response) => {
    try {
        console.log(req,'res')
        const user = await userModel.create(req.body)
        user.save();
        res.json({message:"User created!"})
        
    } catch (error) {
        console.log(error);
        
    }
}