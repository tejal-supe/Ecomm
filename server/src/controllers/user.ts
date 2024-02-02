import express from "express";

import { isUserPresent } from "../middleware/userExists";
import { decryptData, encryptData, jwtSign, random } from "../helpers/index";
import { userModel } from "../modals/userModal";
import { sendTheMail } from "../helpers/nodemail";

export const signup = async (req: express.Request, res: express.Response) => {
  try {
    let { fname, lname, email, mobile, password, googleId } = req.body;
    let dat = {
      email,
      isGoogleSigned: false,
    };
    let userExists = await isUserPresent(dat);

    if (userExists) {
      res.json({ message: "User already exsists" });
      return;
    }
    if (fname && lname && email) {
      if (mobile && password) {
        const salt = random();
        const passEncrypt = encryptData(password);
        const user = await userModel.create({
          fname,
          lname,
          email,
          mobile,
          authentication: {
            password: passEncrypt,
            salt,
          },
        });
        const data = await user.save();
        res.json({ message: "User created!", d: data.toObject() });
      } else {
        const user = await userModel.create({
          fname,
          lname,
          email,
          googleId,
        });
        await user.save();
        res.status(200).json({ message: "Welcome!" });
      }
    } else {
      res.statusCode = 400;
      res.json({ message: "Please enter all details" });
    }
  } catch (error) {
    console.log(error);
  }
};

const conditional = (data: object, res: express.Response) => {
  if (data) {    
    const token = jwtSign(data);
    res.header("access_token", token)
    res.json({ message: "Welcome" });    
  } else {
    res.json({ messgae: "Please sign up first" });
  }
};

export const login = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { email, isGoogleSigned, googleId, password } = req.body;
    if (isGoogleSigned) {
      let data = {isGoogleSigned, googleId};
      
      const s = await isUserPresent(data);
      
      if(s){
        conditional(s, res);
      }
    } else {
      let data = { email, isGoogleSigned, password};

      const s = await isUserPresent(data);
      const decryptDta = decryptData(password, s.authentication.password);

      if (decryptDta) {
        conditional(s, res);
      }else{
        res.json({message:"Incorrect password"})
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword = async (req: express.Request,res: express.Response) => {
  try {
    const { email } = req.body;
    let userParamData = { email,isGoogleSigned: false};
    const isPresent = await isUserPresent(userParamData);
    if (isPresent) {
      res.json({ message: "Otp is sent to the email id" });
      sendTheMail(email)
    } else {
      res.status(403).json({ message: "Email id not found!" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const verifyOtp = async (req:express.Request,res:express.Response) =>{
try {
  const {email,otp} = req.body
  const checkData = {
    email,
    isGoogleSigned: false
  }
  const isUser = await isUserPresent(checkData)
  let otpFromDb = isUser.otp
  if(otpFromDb === otp){
    res.json({message:"Otp verified you can now change the password"})
  }else{
    res.json({message:"Incorrect otp"})
  }
  
} catch (error) {
  console.log(error);
}
}

export const changePassword = async(req:express.Request,res:express.Response)=>{
try {
  const {email,password,cpassword} = req.body;
  const isUser = {email,  isGoogleSigned: false}
  const data = isUserPresent(isUser);
  if(data){
    if(password === cpassword){
      const passEncrypt = encryptData(password);
      const find = {email};
      const updatedPasswordData = await userModel.findOneAndUpdate(find,{$set:{'authentication.password':passEncrypt}},{new:true})
  
      console.log(updatedPasswordData,'updated')
      res.json({message:"Password updates succesffully"})
    }
    else{
      res.json({message:"Passwords do not match"})
    }
  }
  else{
    res.json({message:"No user found"})
  }
  
} catch (error) {
  res.json({error:error})
}
}

export const check = async(req:express.Request,res:express.Response) =>{
  let userDetail = res.locals.userDetails.data
  
  const userDetails = {
    fname: userDetail.fname,
    lname:userDetail.lname,
    email:userDetail.email,
    _id:userDetail._id,
    mobile:userDetail.mobile?userDetail.mobile:null,
    googleId:userDetail.googleId?userDetail.googleId:null,
    iat:res.locals.userDetails.iat,
    exp:res.locals.userDetails.exp

  }
  
res.json({message:"User is authorized",data:userDetails})
}

export const editUserDetails =async(req:express.Request,res:express.Response)=>{
  try {
    const {email,fname,lname,mobile,address1,address2,city,pincode,state,country} = req.body;   
    const address = {
      address1,address2,city,pincode,state,country
    } 
    const userDetails = await userModel.findOneAndUpdate({email},{$set:{fname:fname,lname:lname,mobile:mobile,address:address}},{upsert:true,new:true})    
    res.json({message:"Data updated successfullly",data:userDetails})
  } catch (error) {
    res.send(error)
  }
  
}