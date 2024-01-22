import React from "react";
import { useNavigate } from "react-router-dom";
import FormFields from "../../components/common/FormFields";
import GoogleLoginPage from "../signup/GoogleLoginPage";

const dataFormFields = [
  {
    name: "email",
    placeholder: "abc@gmail.com",
    type: "text",
    label: "Email",
    validationRules: {
      validationRegex:
        "^([a-zA-Z0-9_.-])+@([a-zA-Z0-9-]+.)+([a-zA-Z0-9]{2,4})+$",
      validationReq: true,
      validationMessage: "Enter a valid Email",
    },
  },
  {
    name: "password",
    placeholder: "********",
    type: "password",
    label: "Password",
    validationRules: {
      validationRegex: "^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{7,15}$",
      validationReq: true,
      validationMessage: "Enter a valid Password",
    },
  },
];

const SignIn = () => {
  const navigate = useNavigate();

  const loginFormData = (data: Record<string, string>) => {
    console.log(data, "in login");
  };
  return (
    <div className="flex justify-center">
      <div className="w-1/2 border p-9 mt-7 shadow-md bg-gradient-to-bl from-zinc-50 to-red-50">
        <FormFields data={dataFormFields} submitData={loginFormData} />
        <div>
          <p onClick={()=>navigate("/forgotpassword")} className="hover:underline cursor-pointer hover:text-blue-700 text-center mt-3">Forgot Password</p>
          <p className="text-center font-semibold mb-2">OR</p>
          <GoogleLoginPage submitData={loginFormData} />
          <pre
            onClick={() => navigate("/signup")}
            className="hover:underline cursor-pointer hover:text-blue-700 text-center mt-3"
          >
            New to website?Click to Create an account
          </pre>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
