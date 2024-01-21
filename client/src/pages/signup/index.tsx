import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import FormFields from "../../components/common/FormFields";
import GoogleLoginPage from "./GoogleLoginPage";
import { register } from "../../services/userService";
import ToastMessageUi from "../../components/common/ToastMessageUi";
import { showToastMessage } from "../../redux/toastMessage";
import { RootState } from "../../app/store";



const Signup = () => {
  const navigate = useNavigate();
  const count = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();
  console.log(count,'count');
  
  const dataFormFields = [
    {
      name: "fname",
      placeholder: "Tejal",
      type: "text",
      label: "First Name",
      validationRules: {
        validationRegex: "^[a-zA-Z ]{2,30}$",
        validationReq: true,
        validationMessage: "Enter a valid Name",
      },
    },
    {
      name: "lname",
      placeholder: "Supe",
      type: "text",
      label: "Last Name",
      validationRules: {
        validationRegex: "^[a-zA-Z ]{2,30}$",
        validationReq: true,
        validationMessage: "Enter a valid Name",
      },
    },
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
      name: "mobile",
      placeholder: "9876544321",
      type: "text",
      label: "Mobile Number",
      validationRules: {
        validationRegex: "^[6-9][0-9]{9}$",
        validationReq: true,
        validationMessage: "Enter a valid Mobile Number",
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

  const setTheFormData = async(data: Record<string, any>) => {
    try {
      const userRegister = await register(data)
      console.log(userRegister,'user regsister');
      
    } catch (error) {
      console.log(error,'eerr');
      // dispatch(showToastMessage({
      //   value:true,message:error 
      // }))
    }
  };
  return (
    <div className="mt-4 flex justify-center">
      <div className="sm:mx-10 md:mx-24 w-full sm:w-[55%]">
        <button onClick={() => dispatch(showToastMessage({value:true,message:"Heyy"}))}>
          CLickkkkkkkkk
        </button>
        <button onClick={() => dispatch(showToastMessage(false))}>
          CLickkkkkkkkk false
        </button>
        <div className="flex justify-center shadow-md border-blue-400 w-full bg-gradient-to-tr from-slate-100 to-green-50">
          <div className="my-5 w-full mr-10 ml-20">
            <FormFields
              data={dataFormFields}
              submitData={setTheFormData}
              from="singup"
            />
            <div className="text-center">
              <p>
                <GoogleLoginPage submitData={setTheFormData} />
              </p>
              <p
                onClick={() => navigate("/login")}
                className="hover:underline cursor-pointer hover:text-blue-700"
              >
                Already a member? Login
              </p>
            </div>
          </div>
          <ToastMessageUi />
        </div>
      </div>
    </div>
  );
};

export default Signup;
