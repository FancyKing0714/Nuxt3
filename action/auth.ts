import {Axios} from '~~/utils/Axios';
import {getProfile} from './profile';
import {getGames} from './game';

export const logIn = (data: object, store: any) => {
    Axios('post','/api/login',data)
    .then(res=>{
        const tokenStr=res.data["token"];
        localStorage.setItem("token",tokenStr.split("|")[1]);  
        getProfile(store);
        store.dispatch('handleNotification',{type:'Success',message:'Login Successed!'});
        getGames(store);
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const SignUp = (data: object, store: any) => {
    Axios('post','/api/register',data)
    .then(res=>{  
        store.dispatch('handleRegister',true);
        store.dispatch('handleNotification',{type:'Success',message: 'Register Suxxessed!'});
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const ResetPassword = (data: object, store: any) => {
    Axios('post','/api/player/updatePassword',data)
    .then(res=>{  
        store.dispatch('handleNotification',{type:'Success',message: 'Password Updated Successfully!'});
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}