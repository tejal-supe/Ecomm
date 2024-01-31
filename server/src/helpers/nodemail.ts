import { addData } from "../modals/userModal";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tejal123supe@gmail.com",
    pass: "owpf sijm kpqd essh",
  },
});
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
const storeOtp =(email:string) => {
  let otp = generateOtp();
   addData(email,otp)
  return otp

};

// console.log(generateOtp())
export const sendTheMail = (email: string) => {
  const mailOptions = {
    from: "tejal123supe@gmail.com",
    to: email,
    subject: "Testing",
    text: "Test test ",
    html: `
        <h1>The otp is ${storeOtp(email)}</h1>
        `,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent to " + info.response);
    }
  });
};
