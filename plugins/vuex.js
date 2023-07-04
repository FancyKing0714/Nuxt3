import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            onLogin: false,             // show/hide login diaolg
            onRegister: false,          // show/hide register dialog
            onMoblieProfile: false, 
            isDrawer: false, 
            isWelcome: true, 
            isVerifyEmail: false, 
            isLogin: false,             // login value
            isregister: false,          // register value(when user register swap to login)
 
            User: {},                   // user profile
            notification: {},           // notification(type,message)
            promotions: [],             // promotions
            
            bonusHistory:[],            // bonus history
            cashbackHistory:[],         // cashback history
            freespinHistory:[],         // freespin history
            depositHistory:[],          // deposit history
            withdrawHistory:[],         // withdraw history
            gameHistory:[],             // player game history
            historyAmount: 0,             // player game history count

            providers:[],               // provider list
            balance:{},                 // balance

            gameListByType:[],          // current game list(type)
            favoriteGameList:[],        // favorite game list
            favoriteGameIDList:[],        // favorite game list
            recentGameList:[],          // recent played game list
            gameAmountByType:0,         // game amount of type
            currentLoaded:0,            // current loaded game amount
            allGameList:[],             // current game list
            gamePlayMode:2,             // game play mode(fun/play/none)
            gameData:"",                // game data (html/dov)
            pageNumber: 1,              // game list page number when press "Read More" button 
            remainingTime:20,           // remaining time
        };
    },
    mutations: {
        handleDrawer(state, payload) { state.isDrawer = payload; },
        handleVerifyEmail(state, payload) { state.isVerifyEmail = payload; },
        handleWelcome(state, payload) { state.isWelcome = payload; },
        handleMobileProfile(state, payload) { state.onMoblieProfile = payload; },
        handleLogin(state, payload) { state.isLogin = payload; if(payload === false) state.User = {}; },
        handleRegister(state, payload) { state.isRegister = payload; },
        handleOnLogin(state, payload) { state.onLogin = payload; },
        handleOnRegister(state, payload) { state.onRegister = payload; },

        handleGetUser(state, payload) { state.User = payload; },
        handleNotification(state, payload) { state.notification = payload; },
        handleGetBalance(state, payload) { state.balance = payload; },

        handleGetProviders(state, payload) { state.providers = payload; },
        handleGetPromotion(state, payload) { state.promotions = payload; },

        handleGetBonusHistory(state, payload) { state.bonusHistory = payload; },
        handleGetCashbackHistory(state, payload) { state.cashbackHistory = payload; },
        handleGetFreespinHistory(state, payload) { state.freespinHistory = payload; },
        handleGetDepositHistory(state, payload) { state.depositHistory = payload; },
        handleGetWithdrawHistory(state, payload) { state.withdrawHistory = payload; },
        handleGetGameHistory(state, payload) { state.gameHistory = payload; },
        handleGetHistoryAccount(state, payload) { state.historyAmount = payload; },

        handleGetGamesByType(state, payload) { state.gameListByType = payload; },
        handleFavoriteGameList(state, payload) { state.favoriteGameList = payload; },
        handleFavoriteGameIDList(state, payload) { state.favoriteGameIDList = payload; },
        handleRecentGameList(state, payload) { state.recentGameList = payload; },
        handleGetGamesAmount(state, payload) { state.gameAmountByType = payload; },
        handleCurrentLoaded(state, payload) { state.currentLoaded = payload; },
        handleGetAllGames(state, payload) { state.allGameList = payload; },
        handleGetGameData(state, payload) { state.gameData = payload; },
        handleGamePlayMode(state, payload) { state.gamePlayMode = payload; },
        handleReadMore(state, payload) { state.pageNumber = payload; },
        
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
