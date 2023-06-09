import {AxiosWithAuth} from '~~/utils/Axios';

export const getDepositHistory = (store) => {
    AxiosWithAuth('get','/api/player/getDepositHistory')
    .then(res => {
        store.dispatch('handleGetBonusHistory', res.data.deposits.data);
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const getWithdrawHistory = (store) => {
    AxiosWithAuth('get','/api/player/getWithdrawHistory')
    .then(res => {
        store.dispatch('handleGetFreespinHistory', res.data.withdraws.data);
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}
