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
export const login = (params: User) => {
  return appRequest({
    method: RequestMethods.POST,
    url: BaseUrl + config.user.loginUser,
    data: params,
  });
};
