import { isUserPresent } from "../middleware/userExists";
import { decryptData, encryptData, random } from "../helpers/index";
import { GoogleUser, RegularUser, userModel } from "../modals/userModal";
import express, { request } from "express";

export const signup = async (req: express.Request, res: express.Response) => {
  try { 
    let { fname, lname, email, mobile, password, googleId } = req.body;
    let userExists = await isUserPresent(req.body.email)
    console.log(userExists,'user exixts');
    
    if(userExists){
      res.json({message:"User already exsists"})
      return
    }
    if (fname && lname && email) {
      if (mobile && password) {
        const salt = random();
        const passEncrypt = encryptData(password);
        // console.log(passEncrypt);
        // console.log(decryptData(passEncrypt), "decrypted data");

        const user = await RegularUser.create({
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
        const user = await GoogleUser.create({
          fname,
          lname,
          email,
          googleId,
        });
       await user.save();
        res.status(200).json({ message: "Welcome!"});
      }
    } else {
      res.statusCode = 400;
      res.json({ message: "Please enter all details" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const s = await isUserPresent(req.body.email)
    const d = await userModel.findOne({email : req.body.email})
    // const passwordEnrypt = encryptData(req.body.password)
    console.log(d.fname , d,'data',)
    // console.log((regularUser as RegularUser & Document).__t)
    if (s) {
      // if(passwordEnrypt ){

      // }
      res.json({s});
    } else {
      console.log("no email found!!");
    } 
  } catch (error) {
    console.log(error);
  }
};
