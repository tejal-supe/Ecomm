import React, { useState } from "react";
import FormFields from "../../components/common/FormFields";

const emailField = [
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
];

const passwordFields = [
  {
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    label: "Password",
    validationRules: {
      validationRegex: "^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{7,15}$",
      validationReq: true,
      validationMessage: "Enter a valid Password",
    },
  },
  {
    name: "cpassword",
    placeholder: "Re-enter password",
    type: "password",
    label: "Confirm Password",
    validationRules: {
      validationRegex: "^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{7,15}$",
      validationReq: true,
      validationMessage: "Enter a valid Password",
    },
  },
];

const ForgotPassword = () => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const setTheFormData = async (data: Record<string, any>) => {
    try {
      alert("In email");
      setIsEmailVerified(true);
    } catch (error: any) {
      console.log(error, "eerr");
      // dispatch(showToastMessage({
      //   value:true,message:error.message
      // }))
    }
  };
  const setPasswordData = async (data: Record<string, any>) => {
    alert("In password");
  };

  return (
    <div className="mt-4 flex justify-center">
      <div className="sm:mx-10 md:mx-24 w-full sm:w-[55%]">
        <div className="flex justify-center shadow-md border-blue-400 w-full bg-gradient-to-tr from-slate-100 to-green-50">
          <div className="my-5 w-full mr-10 ml-20">
            {isEmailVerified ? (
              <FormFields data={passwordFields} submitData={setPasswordData} />
            ) : (
              <FormFields data={emailField} submitData={setTheFormData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
