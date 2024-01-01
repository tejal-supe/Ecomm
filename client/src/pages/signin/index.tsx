import React from 'react'
import { useNavigate } from 'react-router-dom';
import FormFields from '../../components/common/FormFields';

const SignIn = () => {
    const navigate = useNavigate()
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
            validationRegex:
              "^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{7,15}$",
            validationReq: true,
            validationMessage: "Enter a valid Password",
          },
        },
    ];
    
    const loginFormData = (data:Record<string,string>) => {
        console.log(data,'in login');
        
    }
  return (
    <div className="flex justify-center">
      <div className="w-1/2 border  text-center">
        <FormFields data={dataFormFields} submitData={loginFormData} />
        <div>
          login with google/social media
          <pre
            onClick={() => navigate("/signup")}
            className="hover:underline cursor-pointer hover:text-blue-700"
          >
            New to website?Click to Create an account
          </pre>
        </div>
      </div>
    </div>
  );
}

export default SignIn