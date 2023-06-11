import axios from 'axios';
const baseURL = "https://beta.canada777.com";
import Cookies from 'js-cookie'
export const AxiosWithAuth = (meth :string, suburl:string, data?: object ) => {
    return axios({
        method: meth,
        url: `${baseURL+suburl}`,
        headers: {"Authorization" : "Bearer " + Cookies.get('token')},
        data: data
    });
}
export const Axios = (meth :string, suburl:string, data: object) => {
    return axios({
        method: meth,
        url: `${baseURL+suburl}`,
        data: data
    });
}