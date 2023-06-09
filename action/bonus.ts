import {AxiosWithAuth} from '~~/utils/Axios';

export const getBonusHistory = (store) => {
    AxiosWithAuth('get','/api/player/getBonusHistory')
    .then(res => {
        store.dispatch('handleGetBonusHistory', res.data.bonusHistory.data);
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const getFreespinHistory = (store) => {
    AxiosWithAuth('get','/api/player/getFreeSpinsHistory')
    .then(res => {
        store.dispatch('handleGetFreespinHistory', res.data.freeSpins.data);
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const getCashbackHistory = (store) => {
    AxiosWithAuth('get','/api/player/getCashbackHistory')
    .then(res => {
        store.dispatch('handleGetCashbackHistory', res.data.cashbackHistory.data);
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}