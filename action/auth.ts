import {Axios} from '~~/utils/Axios';
import {getProfile} from './profile';
import Cookies from 'js-cookie';


//login
export const logIn = (data: object, store: any) => {
    Axios('post','/api/login',data)
    .then(res=>{
        const tokenStr=res.data["token"];
        Cookies.set('token', tokenStr.split("|")[1] );
        store.commit('handleLogin',true);
        getProfile(store);
        store.commit('handleNotification',{type:'Success',message:'Login Successed!'});
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}
//logout
export const logOut = (store: any, router: any) => {
    Cookies.remove('token');
    store.commit('handleLogin', false);
    router.push("/");
}
//register
export const SignUp = (data: object, store: any) => {
    Axios('post','/api/register',data)
    .then(res=>{  
        Cookies.remove('click_id');
        Cookies.remove('promo');
        store.commit('handleRegister',true);
        store.commit('handleNotification',{type:'Success',message: 'Register Suxxessed!'});
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}
//reset password
export const ResetPassword = (data: object, store: any) => {
    Axios('post','/api/player/updatePassword',data)
    .then(res=>{  
        store.commit('handleNotification',{type:'Success',message: 'Password Updated Successfully!'});
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}