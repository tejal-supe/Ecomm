import mongoose from "mongoose";

const user = new mongoose.Schema({
  fname: {
    type: String,
    },
    lname: {
        type:String
    },
    email: {
        type:String,
    },
    mobile: {
        type:String,
    },
    password: {
        type:String,
    }
});

export const userModel = mongoose.model("User",user)