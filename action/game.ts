import { LogTypes } from 'consola';
import {AxiosWithAuth} from '~~/utils/Axios';

export const getAllGames = (store) => {
    AxiosWithAuth('get','/api/getAllGames',store)
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
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}
export const getProviders = (store) => {
    AxiosWithAuth('get','/api/getAllGameProviders',store)
    .then(res => {
        store.commit('handleGetProviders', res.data.gameProviders);
    })
    .catch(err=>{
        store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

