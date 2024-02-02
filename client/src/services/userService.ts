import config from "../components/config/apiConfig.json";
import { appRequest, RequestMethods, BaseUrl } from "../httpClient/request";

type User = {
  fname?: string;
  lname?: string;
  mobile?: string;
  email?: string;
  password?: string;
  googleId?: string;
};

export const register = (params: User) => {
  return appRequest({
    method: RequestMethods.POST,
    url: BaseUrl + config.user.registerUser,
    data: params,
  });
};
export const login = async(params: User) => {
const user  = await appRequest({
  method: RequestMethods.POST,
  url: BaseUrl + config.user.loginUser,
  data: params,
},{
  showToast: false,
  fullResponse: true,
});
  console.log(user.headers,'headers');
  console.log(user,'user');
  
   
};
