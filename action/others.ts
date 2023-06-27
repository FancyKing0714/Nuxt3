import {Axios} from '~~/utils/Axios';
import Cookies from 'js-cookie';

//get promotion
export const getPromotion = (store: any) => {
    Axios('get','/api/getPromotions')
    .then(res=>{
        store.commit('handleGetPromotion',res.data.promotions);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}