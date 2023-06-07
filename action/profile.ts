import {AxiosWithAuth} from '~~/utils/Axios';

export const getProfile = (store) => {
    AxiosWithAuth('get','/api/player/getProfile')
    .then(res => {
        store.dispatch('handleGetUser', res.data.Player);
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const getGameHistory = (store) => {
    AxiosWithAuth('get','/api/player/getGamePlayHistory')
    .then(res => {
        store.dispatch('handleGetGameHistory', res.data.gamePlayHistory.data);
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}