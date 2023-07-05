import {Axios, AxiosWithAuth} from '~~/utils/Axios';
import {getProfile} from './profile';
import {getBalances} from './wallet';
import Cookies from 'js-cookie';

//login
export const logIn = (data: object, store: any, router: any) => {
    Axios('post','/api/login',data)
    .then(res=>{
        const tokenStr=res.data["token"];
        Cookies.set('token', tokenStr.split("|")[1] );
        store.commit('handleLogin',true);
        getBalances(store);
        getProfile(store, router);
        store.commit('handleNotification',{type:'Success',message:'Login Successed!'});
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}
//logout
export const logOut = (store: any, router: any) => {
    store.commit('handleLogin', false);
    Cookies.remove('token');
    router.push("/");
}
//register
export const SignUp = (data: object, store: any) => {    
    Axios('post','/api/register',data)
    .then(res=>{  
        Cookies.remove('click_id');
        Cookies.remove('promo');
        store.commit('handleRegister',true);
        store.commit('handleNotification',{type:'Success',message: 'Register Successed!'});
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}
//reset password
export const ResetPassword = (data: object, store: any) => {
    AxiosWithAuth('post','/api/player/updatePassword', store, null, data)
    .then(res=>{  
        store.commit('handleNotification',{type:'Success',message: 'Password Updated Successfully!'});
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}