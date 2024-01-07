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


export const login = async (req : express.Request , res:express.Response) => {
        try {
            const data =await userModel.find({ email: req.body.email })
            if (data) {
                res.send(data)
            }
            else {
                console.log('no email found!!');
                
            }
        } catch (error) {
            console.log(error);
            
        }   
}