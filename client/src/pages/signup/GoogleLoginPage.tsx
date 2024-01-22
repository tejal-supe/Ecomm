import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
interface FormData {
  submitData: (data: Record<string, any>) => any;
}
const GoogleLoginPage = (props: FormData) => {
  const handleLogin = async (credentialResponse: any) => {
    try {
      let obj: any = jwtDecode(credentialResponse.credential);
      console.log(obj.email, obj.given_name, obj.family_name, obj.jti, obj.sub);
      let userData = {
        fname: obj.given_name,
        lname: obj.family_name,
        email: obj.email,
        googleId: obj.sub,
      };
      if (userData) {
        props.submitData(userData);
      }
    } catch (error) {
      console.log(error);
      
    }
   
  };
  return (
    <div className="text-center flex justify-center">
      <GoogleOAuthProvider clientId="1080860225659-bft2cjol3b9uhjf2too4b07njkqr0tjr.apps.googleusercontent.com">
        <GoogleLogin
        size="large"
        shape="circle"
        type="icon"
        width={1200}
          onSuccess={handleLogin}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginPage;
