import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import config from "../components/config/apiConfig.json";

export enum RequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
interface error {
  title: string;
  message: string;
  status: boolean;
  httpStatusCode: number;
}

export enum Headers {
  AUTHORIZATION = "Authorizarion",
  USERID = "user-id",
  CONTENTTYPE = "Content-Type",
  // REFRESH_TOKEN = "refresh-token",
}
export interface RequestHeaders {
  "user-id": string;
  Authorization: string;
}

export const BaseUrl = config.baseUrl;

const appClient = axios.create({
  baseURL: BaseUrl,
  headers: {
    Accept: "application/json",
  },
});

appClient.interceptors.request.use(
  function (config: any) {
    if (window.localStorage.getItem("token")) {
      config.headers.common.Authorization =
        window.localStorage.getItem("token");
    }
    if (window.localStorage.getItem("userId")) {
      config.headers["user-id"] = window.localStorage.getItem("userId");
    }
    config.headers["Cache-Control"] = "no-cache";
    config.headers["Pragma"] = "no-cache";
    config.headers["Expires"] = "0";
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

appClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        originalConfig._refresh = false;
        try {
          // const refreshTokenResponse = await refreshToken();
          // const updatedAccessToken =
          //   refreshTokenResponse.headers["access-token"];
          // window.localStorage.setItem("arumpt_token", updatedAccessToken);
          // originalConfig.headers.Authorization = updatedAccessToken;
          return appClient(originalConfig);
        } catch (err) {
          //Clear all stuff which are stored.
          // store.dispatch(clear());
          // clearStorage("firstName");
          // clearStorage("lastName");
          // clearStorage("emailVerified");
          // clearStorage("leadId");
          // clearStorage("arumpt_token");
          // clearStorage("arumpt_refresh_token");
          // clearStorage("arumpt_code");
          // clearStorage("arumpt_userId");
          // clearStorage("arumpt_mobile");
          // clearStorage("email");
          return Promise.reject(err);
        }
      }
      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }
    return Promise.reject(err);
  }
);

export const appRequest = (
  options: AxiosRequestConfig,
  {
    showToast = true,
    fullResponse = false,
    afterSuccess = (response?: any) => {},
  } = {}
) => {
  //   showLoadingIndicator();
  //   requestCount++;
  const onSuccess = function (response: AxiosResponse) {
    afterSuccess && afterSuccess(response);
    // hideLoader();
    if (response && response.data) {
      return fullResponse ? response : response.data;
    } else {
      return false;
    }
  };

  const onError = (error: AxiosError) => {
    let errorMessage: error = {
      title: "Error",
      message: error.message || "Something went wrong, please try again later.",
      status: false,
      httpStatusCode: error.status || 500,
    };
    console.error(error);

    // hideLoader();
    if (showToast) {
      //   store.dispatch(
      //     showError({
      //       message: errorMessage.message,
      //       errorStatus: errorMessage.httpStatusCode,
      //     })
      //   );
    }
    if (errorMessage.httpStatusCode == 401) {
      // clear storage and redux
      //   store.dispatch(clear());
      //   clearStorage("firstName");
      //   clearStorage("lastName");
      //   clearStorage("emailVerified");
      //   clearStorage("leadId");
      //   clearStorage("arumpt_token");
      //   clearStorage("arumpt_refresh_token");
      //   clearStorage("arumpt_code");
      //   clearStorage("arumpt_userId");
      //   clearStorage("arumpt_mobile");
      //   clearStorage("email");
      //   clearStorage("recentlyViewedProperty");
      //   clearStorage("recentlyViewedLiked");
      //   clearStorage("addToFavList");
    }
    return Promise.reject(errorMessage);
  };

  return appClient(options).then(onSuccess).catch(onError);
};
