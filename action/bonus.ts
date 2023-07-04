import {AxiosWithAuth} from '~~/utils/Axios';

export const getBonusHistory = (pagenum, store, router) => {
    AxiosWithAuth('get',`/api/player/getBonusHistory?page=${pagenum}`,store, router)
    .then(res => {
        let result = res.data.bonusHistory.data;
        if(pagenum>1){
            result = [...store.state.history, ...result];
        }
        store.commit('handleGetHistoryAccount', res.data.bonusHistory.total)
        store.commit('handleGetHistory', result);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getFreespinHistory = (pagenum, store, router) => {
    AxiosWithAuth('get',`/api/player/getFreeSpinsHistory?page=${pagenum}`,store, router)
    .then(res => {
        let result = res.data.freeSpins.data;
        if(pagenum>1){
            result = [...store.state.history, ...result];
        }
        store.commit('handleGetHistoryAccount', res.data.freeSpins.total)
        store.commit('handleGetHistory', result);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getCashbackHistory = (pagenum, store, router) => {
    AxiosWithAuth('get',`/api/player/getCashbackHistory?page=${pagenum}`,store, router)
    .then(res => {
        let result = res.data.cashbackHistory.data;
        if(pagenum>1){
            result = [...store.state.history, ...result];
        }
        store.commit('handleGetHistoryAccount', res.data.cashbackHistory.total)
        store.commit('handleGetHistory', result);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}