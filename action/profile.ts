import {AxiosWithAuth} from '~~/utils/Axios';

export const getProfile = (store) => {
    AxiosWithAuth('get','/api/player/getProfile')
    .then(res => {
        store.commit('handleGetUser', res.data.Player);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

export const getGameHistory = (store) => {
    AxiosWithAuth('get','/api/player/getGamePlayHistory')
    .then(res => {
        store.commit('handleGetGameHistory', res.data.gamePlayHistory.data);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}