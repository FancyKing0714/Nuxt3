import { LogTypes } from 'consola';
import {AxiosWithAuth} from '~~/utils/Axios';

export const getGames = (store) => {
    AxiosWithAuth('get','/api/getAllGames')
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
        store.dispatch('handleGetAllGames', games);
    })
    .catch(err=>{
        store.dispatch('handleNotification',{type:'Error',message:err.response.data.message});
    });
}

