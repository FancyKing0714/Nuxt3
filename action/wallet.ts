import {AxiosWithAuth} from '~~/utils/Axios';

export const getDepositHistory = (store, router) => {
    AxiosWithAuth('get','/api/player/getDepositHistory',store, router)
    .then(res => {
        store.commit('handleGetBonusHistory', res.data.deposits.data);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const getWithdrawHistory = (store, router) => {
    AxiosWithAuth('get','/api/player/getWithdrawHistory',store, router)
    .then(res => {
        store.commit('handleGetFreespinHistory', res.data.withdraws.data);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const getBalances = (store, router) => {
    AxiosWithAuth('get','/api/player/getBalance',store, router)
    .then(res => {
        store.commit('handleGetBalance', res.data.gamePlayHistory.data);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}
