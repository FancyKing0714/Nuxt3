import {AxiosWithAuth} from '~~/utils/Axios';

export const getBonusHistory = (store, router) => {
    AxiosWithAuth('get','/api/player/getBonusHistory',store, router)
    .then(res => {
        store.commit('handleGetBonusHistory', res.data.bonusHistory.data);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getFreespinHistory = (store, router) => {
    AxiosWithAuth('get','/api/player/getFreeSpinsHistory',store, router)
    .then(res => {
        store.commit('handleGetFreespinHistory', res.data.freeSpins.data);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getCashbackHistory = (store, router) => {
    AxiosWithAuth('get','/api/player/getCashbackHistory',store, router)
    .then(res => {
        store.commit('handleGetCashbackHistory', res.data.cashbackHistory.data);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}