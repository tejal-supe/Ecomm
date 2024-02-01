import crypto from "crypto";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


const SERECT = "wjfwhfkwenflwefwefwfwef";
export const random = () => crypto.randomBytes(128).toString("base64");
const saltRounds = 10;

export const encryptData = (password:string)=>{
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  // Store hash in your password DB.
  return hash
  
  
}

export const decryptData = (hash:string,password:string) =>{  
  return bcrypt.compareSync(hash, password); // true

}

export const jwtSign = (data:object) =>{
  const token= jwt.sign({data}, SERECT,{expiresIn:360000})
  return token;

}
export const jwtVerify =(token:string) =>{
  return jwt.verify(token, SERECT);
}
  
  