import { log } from 'console';
import {Axios, AxiosWithAuth} from '~~/utils/Axios';

export const getAllGames = (store) => {
    Axios('get','/api/getAllGames',store)
    .then(res => {
        const result = res.data.games;
        interface game {
            id: Number,
            name: string,
            provider: string,
            image: string,
        };
        let games: object[] =  [];
        Object.keys(result).map(type => {
            let typeItems:game[] = [];
            Object.keys(result[type]).map(item => {
                typeItems = [...typeItems, result[type][item]] ;
            });
            games = [...games, {"title":type, "list": typeItems}];
        });
        store.commit('handleGetAllGames', games);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}
export const getAllGamesByType = (store, pagenumber) => {
    Axios('get',`/api/getGamesByType?page=${pagenumber}`,store)
    .then(res => {
        let games = res.data.games.data;
        if(pagenumber>1) {
            games = [...store.state.gameListByType,...games]
        }
        store.commit('handleGetGamesByType', games);
        store.commit('handleGetGamesAmount',res.data.games.total);
        store.commit('handleCurrentLoaded',store.state.currentLoaded + res.data.games.per_page);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getSlotsGames = (store, pagenumber) => {
    Axios('get',`/api/getGamesByType/slots?page=${pagenumber}`,store)
    .then(res => {
        let games = res.data.games.data;
        if(pagenumber>1) {
            games = [...store.state.gameListByType,...games]
        }
        store.commit('handleGetGamesByType', games);
        store.commit('handleGetGamesAmount',res.data.games.total);
        store.commit('handleCurrentLoaded',store.state.currentLoaded + res.data.games.per_page);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getTableGames = (store, pagenumber) => {
    Axios('get',`/api/getGamesByType/table-games?page=${pagenumber}`,store)
    .then(res => {
        let games = res.data.games.data;
        if(pagenumber>1) {
            games = [...store.state.gameListByType,...games]
        }
        store.commit('handleGetGamesByType', games);
        store.commit('handleGetGamesAmount',res.data.games.total);
        store.commit('handleCurrentLoaded',store.state.currentLoaded + res.data.games.per_page);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getLiveGames = (store, pagenumber) => {
    Axios('get',`/api/getGamesByType/live-casino?page=${pagenumber}`,store)
    .then(res => {
        let games = res.data.games.data;
        if(pagenumber>1) {
            games = [...store.state.gameListByType,...games]
        }
        store.commit('handleGetGamesByType', games);
        store.commit('handleGetGamesAmount',res.data.games.total);
        store.commit('handleCurrentLoaded',store.state.currentLoaded + res.data.games.per_page);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getRouletteGames = (store, pagenumber) => {
    Axios('get',`/api/getGamesByType/roulette?page=${pagenumber}`,store)
    .then(res => {
        let games = res.data.games.data;
        if(pagenumber>1) {
            games = [...store.state.gameListByType,...games]
        }
        store.commit('handleGetGamesByType', games);
        store.commit('handleGetGamesAmount',res.data.games.total);
        store.commit('handleCurrentLoaded',store.state.currentLoaded + res.data.games.per_page);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getRecentPlayedGames = (store, pagenumber) => {
    AxiosWithAuth('get',`/api/player/getRecentGameHistory?page=${pagenumber}`,store)
    .then(res => {
        let games = res.data.data.data;
        if(pagenumber>1) {
            games = [...store.state.gameListByType,...games]
        }
        store.commit('handleGetGamesByType', games);
        store.commit('handleGetGamesAmount',res.data.data.total);
        store.commit('handleCurrentLoaded',store.state.currentLoaded + res.data.data.per_page);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getFavoriteGames = (store, pagenumber) => {
    AxiosWithAuth('get',`/api/player/getFavoriteGames?page=${pagenumber}`,store)
    .then(res => {
        let games = res.data.games.data;
        let IDlist = games.map(item=>{return item.id});
        if(pagenumber>1) {
            games = [...store.state.gameListByType, ...games];
            IDlist = [...store.state.favoriteGameIDList, ...IDlist];
        }
        store.commit('handleFavoriteGameIDList', IDlist);
        store.commit('handleGetGamesByType', games);
        store.commit('handleGetGamesAmount',res.data.games.total);
        store.commit('handleCurrentLoaded',store.state.currentLoaded + res.data.games.per_page);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}
export const addFavoriteGame = (store, id) => {
    AxiosWithAuth('post',`/api/player/addFavorite/${id}`,store)
    .then(res => {
        let IDlist = store.state.favoriteGameIDList.map(item=>{return item});
        IDlist.push(id);
        store.commit('handleFavoriteGameIDList', IDlist);
        store.commit('handleNotification',{type:'Success', message: res.data.message});
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const removeFavoriteGame = (store, id) => {
    AxiosWithAuth('post',`/api/player/removeFavorite/${id}`,store)
    .then(res => {
        let IDlist = store.state.favoriteGameIDList.filter(item=>item!=id).map(item=>{return item});
        store.commit('handleFavoriteGameIDList', IDlist);
        store.commit('handleNotification',{type:'Success',message: res.data.message});
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getProviders = (store) => {
    Axios('get','/api/getAllGameProviders',store)
    .then(res => {
        store.commit('handleGetProviders', res.data.gameProviders);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const gamePlay = (demo, slug, store, router) => {
    AxiosWithAuth('post',`/api/player/play/${slug}/?demo=${demo}`,store, router)
    .then(res => {
        store.commit('handleGetGameData', res.data.data);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

