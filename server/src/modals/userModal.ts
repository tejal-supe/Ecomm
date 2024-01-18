import mongoose from "mongoose";

const user = new mongoose.Schema({
  fname: {
    type: String,required:true
  },
  lname: {
    type: String, required:true
  },
  email: {
    type: String,
    required: true,
  },
});
// Descriminator for regular sign-in
const regularUserSchema = new mongoose.Schema({
  mobile: {
    type: String, required:true
  },
 authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

// Discriminator for Google Sign-in
const googleUserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create the base model
export const userModel = mongoose.model("User",user)
// Create the discriminators
export const RegularUser = userModel.discriminator('RegularUser', regularUserSchema);
export const GoogleUser = userModel.discriminator('GoogleUser', googleUserSchema);


