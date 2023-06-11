import {AxiosWithAuth} from '~~/utils/Axios';

export const getDepositHistory = (store) => {
    AxiosWithAuth('get','/api/player/getDepositHistory')
    .then(res => {
        store.commit('handleGetBonusHistory', res.data.deposits.data);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const getWithdrawHistory = (store) => {
    AxiosWithAuth('get','/api/player/getWithdrawHistory')
    .then(res => {
        store.commit('handleGetFreespinHistory', res.data.withdraws.data);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}
