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
    console.log(params,'params');
  return appRequest({
    method: RequestMethods.POST,
    url: BaseUrl + config.user.registerUser,
    data: params,
  });
};
