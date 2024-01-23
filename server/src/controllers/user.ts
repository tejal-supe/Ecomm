import { isUserPresent } from "../middleware/userExists";
import { decryptData, encryptData, random } from "../helpers/index";
import { userModel } from "../modals/userModal";
import express from "express";

export const signup = async (req: express.Request, res: express.Response) => {
  try {
    let { fname, lname, email, mobile, password, googleId } = req.body;
    let dat = {
      email,isGoogleSigned:false
    }
    let userExists = await isUserPresent(dat);

    if (userExists) {
      res.json({ message: "User already exsists" });
      return;
    }
    if (fname && lname && email) {
      if (mobile && password) {
        const salt = random();
        const passEncrypt = encryptData(password);
        // console.log(passEncrypt);
        // console.log(decryptData(passEncrypt), "decrypted data");

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
    res.json({ message: "Welcome" });
  } else {
    res.json({ messgae: "Please sign up first" });
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, isGoogleSigned, googleId,password } = req.body;    
    if (isGoogleSigned) {
      const s = await isUserPresent(googleId);
      conditional(s, res);
    } else {
      let data ={
        email,isGoogleSigned,password
      }
      
      const s = await isUserPresent(data);      
      const decryptDta = decryptData(password,s.authentication.password)
console.log(decryptDta,s.authentication.password ,password);

      if(decryptData){
        conditional(s, res);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
