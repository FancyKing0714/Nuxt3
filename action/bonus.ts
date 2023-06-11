import {AxiosWithAuth} from '~~/utils/Axios';

export const getBonusHistory = (store) => {
    AxiosWithAuth('get','/api/player/getBonusHistory')
    .then(res => {
        store.commit('handleGetBonusHistory', res.data.bonusHistory.data);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const getFreespinHistory = (store) => {
    AxiosWithAuth('get','/api/player/getFreeSpinsHistory')
    .then(res => {
        store.commit('handleGetFreespinHistory', res.data.freeSpins.data);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const getCashbackHistory = (store) => {
    AxiosWithAuth('get','/api/player/getCashbackHistory')
    .then(res => {
        store.commit('handleGetCashbackHistory', res.data.cashbackHistory.data);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}