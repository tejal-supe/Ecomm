import crypto from "crypto";
import bcrypt from "bcrypt"

const SERECT = "wjfwhfkwenflwefwefwfwef";
export const random = () => crypto.randomBytes(128).toString("base64");
const saltRounds = 10;

export const encryptData = (password:string)=>{
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  // Store hash in your password DB.
  console.log(hash,'hash');
  return hash
  
  
}

export const decryptData = (hash:string,password:string) =>{
  console.log('in',hash,password);
  
  return bcrypt.compareSync(hash, password); // true

}