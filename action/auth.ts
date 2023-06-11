import {Axios} from '~~/utils/Axios';
import {getProfile} from './profile';
import Cookies from 'js-cookie';

export const logIn = (data: object, store: any) => {
    Axios('post','/api/login',data)
    .then(res=>{
        const tokenStr=res.data["token"];
        // localStorage.setItem("token",tokenStr.split("|")[1]);  
        Cookies.set('token', tokenStr.split("|")[1] );
        getProfile(store);
        store.commit('handleNotification',{type:'Success',message:'Login Successed!'});
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const SignUp = (data: object, store: any) => {
    console.log(data);
    
    Axios('post','/api/register',data)
    .then(res=>{  
        store.commit('handleRegister',true);
        store.commit('handleNotification',{type:'Success',message: 'Register Suxxessed!'});
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const ResetPassword = (data: object, store: any) => {
    Axios('post','/api/player/updatePassword',data)
    .then(res=>{  
        store.commit('handleNotification',{type:'Success',message: 'Password Updated Successfully!'});
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}