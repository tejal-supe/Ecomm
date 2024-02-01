import mongoose from "mongoose";

const user = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
  },
  authentication: {
    password: { type: String, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
  googleId: {
    type: String,
  },
  otp: {
    type: Number,
  },
  address: { type: Array },
});

// Create the base model
export const userModel = mongoose.model("User", user);

export const addData = async (email: string, otp: number) => {
  try {
    let updatedData = await userModel.updateOne(
      { email: email },
      { $set: { otp: otp } },
      { upsert: true }
    );
    return updatedData;
  } catch (err) {
    console.log(err);
  }
};
