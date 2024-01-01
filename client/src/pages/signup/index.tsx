import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormFields from '../../components/common/FormFields';

const Signup = () => {
  const navigate = useNavigate()
  
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

  const setTheFormData = (data:Record<string,any>) => {
    console.log(typeof data)
  }
  return (
    <div className="flex justify-center">
      <div className="w-1/2 border  text-center">
        <FormFields data={dataFormFields} submitData={setTheFormData} />
        <div>
          login with google/social media
          <pre onClick={()=>navigate('/login')} className='hover:underline cursor-pointer hover:text-blue-700'>Already a meneber? login</pre>
        </div>
      </div>
    </div>
  );
}

export default Signup