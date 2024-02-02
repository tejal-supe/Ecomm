import config from "../components/config/apiConfig.json"
import { appRequest, RequestMethods, BaseUrl } from "../httpClient/request";


export const homeProducts = async() =>{
    return appRequest({
        method:RequestMethods.GET,
        url: BaseUrl + config.product.homeProducts,
    })
}