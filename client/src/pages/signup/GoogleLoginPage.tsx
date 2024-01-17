import React from 'react'
import { GoogleLogin , GoogleOAuthProvider, } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';

const GoogleLoginPage = () => {
  const handleLogin = async (credentialResponse:any) => {
    var obj = jwtDecode(credentialResponse.credential);
    var data = JSON.stringify(obj);
    console.log(data);

    // const data = {your data to send to server};

    // const config = {
    //   method: 'POST',
    //   url: 'your backend server or endpoint',
    //   headers: {},
    //   data: data
    // }

  // await axios(config)
}
  return (
    
    <div>
<GoogleOAuthProvider clientId="1080860225659-bft2cjol3b9uhjf2too4b07njkqr0tjr.apps.googleusercontent.com">
  <GoogleLogin 
  onSuccess={handleLogin}
  onError={() => {
    console.log('Login Failed');
  }}/>
  </GoogleOAuthProvider>

    </div>
  )
}

export default GoogleLoginPage