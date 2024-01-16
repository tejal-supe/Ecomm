import mongoose from "mongoose";

const user = new mongoose.Schema({
  fname: {
    type: String,required:true
  },
  lname: {
    type: String, required:true
  },
  email: {
    type: String, required:true
  },
  mobile: {
    type: String,required:true
  },
  // password: { type: String, required: true, select: false },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const userModel = mongoose.model("User",user)