import {AxiosWithAuth} from '~~/utils/Axios';

export const getDepositHistory = (store, router) => {
    AxiosWithAuth('get','/api/player/getDepositHistory',store, router)
    .then(res => {
        store.commit('handleGetBonusHistory', res.data.deposits.data);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getWithdrawHistory = (store, router) => {
    AxiosWithAuth('get','/api/player/getWithdrawHistory',store, router)
    .then(res => {
        store.commit('handleGetFreespinHistory', res.data.withdraws.data);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getBalances = (store) => {
    AxiosWithAuth('get','/api/player/getBalance',store)
    .then(res => {
        store.commit('handleGetBalance', res.data.balance);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}
