import { decryptData, encryptData, random } from "../helpers/index";
import { GoogleUser, RegularUser, userModel } from "../modals/userModal";
import express from "express";

export const signup = async (req: express.Request, res: express.Response) => {
  try {
    let { fname, lname, email, mobile, password, googleId } = req.body;
    if (fname && lname && mobile) {
      if (email && password) {
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
          mobile,
          googleId,
        });
       await user.save();
        res.status(200).json({ message: "Welcome!"});
      }
    } else {
      res.status(403).json({ message: "Please enter all details" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const data = await userModel.find({ email: req.body.email });
    if (data) {
      res.send(data);
    } else {
      console.log("no email found!!");
    }
  } catch (error) {
    console.log(error);
  }
};
