import axios from 'axios';
const baseURL = "https://beta.canada777.com";
import Cookies from 'js-cookie'

export const AxiosWithAuth = (meth :string, suburl:string, store: any, router?: any, data?: object ) => {
    const instance = axios.create();
    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error){
            if(error.response.status === 401) {
                Cookies.remove("token");
                store.commit('handleLogin', false);
                router?.push("/");
            }
            return Promise.reject(error);
        }
    );
    return instance({
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