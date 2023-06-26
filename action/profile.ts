import {AxiosWithAuth} from '~~/utils/Axios';

export const getProfile = (store) => {
    AxiosWithAuth('get','/api/player/getProfile',store)
    .then(res => {
        store.commit('handleGetUser', res.data.Player);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getGameHistory = (store, router) => {
    AxiosWithAuth('get','/api/player/getGamePlayHistory',store, router)
    .then(res => {
        store.commit('handleGetGameHistory', res.data.gamePlayHistory.data);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}
