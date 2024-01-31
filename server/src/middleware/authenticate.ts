import express from "express"
import { jwtVerify } from "../helpers/index";

export const authenticate = (req:express.Request,res:express.Response,next:express.NextFunction)=>{
        const token = req.headers.authorization;
        console.log(req.headers.authorization.split(" ")[1],'cookies',token);
        
        if(!token){
           res.json({messgae:"Something"})
        }
        else{
            try {
                console.log('in else try');
                
                const data = jwtVerify(token)
                // req.userId = data.id;
                console.log(data,'data');
                
                // req.userRole = data.role;
                return next();
              } catch {
                res.send("no daaaaaata")
              }
        }

}