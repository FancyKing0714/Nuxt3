import {AxiosWithAuth} from '~~/utils/Axios';

export const getDepositHistory = (pagenum, store, router) => {
    AxiosWithAuth('get',`/api/player/getDepositHistory?page=${pagenum}`,store, router)
    .then(res => {
        let result = res.data.deposits.data;
        if(pagenum>1){
            result = [...store.state.history, ...result];
        }
        store.commit('handleGetHistoryAccount', res.data.deposits.total)
        store.commit('handleGetHistory', result);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getWithdrawHistory = (pagenum, store, router) => {
    AxiosWithAuth('get',`/api/player/getWithdrawHistory?page=${pagenum}`,store, router)
    .then(res => {
        let result = res.data.withdraws.data;
        if(pagenum>1){
            result = [...store.state.history, ...result];
        }
        store.commit('handleGetHistoryAccount', res.data.withdraws.total)
        store.commit('handleGetHistory', result);
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
