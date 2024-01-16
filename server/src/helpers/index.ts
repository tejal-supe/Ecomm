import crypto from "crypto";

const SERECT = "wjfwhfkwenflwefwefwfwef";
export const random = () => crypto.randomBytes(128).toString("base64");
// only for encryption cannot be decrypted
 const authentication = 
  crypto
    .createHash("sha512")
    .update(SERECT)
    .digest("hex").substring(0,32)

const ivEncrypt = crypto.createHash("sha512").update(SERECT).digest("hex").substring(0,16);

const cipher = crypto.createCipheriv("aes-256-gcm", authentication, ivEncrypt)
export function encryptData(data:string) {
  return Buffer.from(
    cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
  ).toString('base64') // Encrypts data and converts to hex and base64
}
    
export function decryptData(data:string){
  const authTag = cipher.getAuthTag().toString("hex"); 
  const buff = Buffer.from(data, 'base64')
  const decipher = crypto.createDecipheriv("aes-256-gcm", authentication, ivEncrypt)
  decipher.setAuthTag(Buffer.from(authTag, 'hex'))
  return (
    decipher.update(buff.toString('utf-8'), 'hex', 'utf-8') + decipher.final('utf-8')
  )
}
