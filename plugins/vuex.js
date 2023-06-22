import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            onLogin: false,             //show/hide login diaolg
            onRegister: false,          //show/hide register dialog
            onMoblieProfile: false,
            isDrawer: true,
            isWelcome: true,
            isVerifyEmail: false,
            isLogin: false,             //login value
            isregister: false,          //register value(when user register swap to login)
            User: {},                   //user profile
            notification: {},           //notification(type,message)

            bonusHistory:[],           //bonus history
            cashbackHistory:[],           //cashback history
            freespinHistory:[],           //freespin history
            depositHistory:[],           //deposit history
            withdrawHistory:[],           //withdraw history
            gameHistory:[],           //player game history

            gameListByType:[],           // current game list
            allGameList:[],           // current game list
            pageNumber: 1,             //game list page number when press "Read More" button 
            providers:[],           //provider list
            balance:{},           // balance
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

        handleGetBonusHistory(state, payload) { state.bonusHistory = payload; },
        handleGetCashbackHistory(state, payload) { state.cashbackHistory = payload; },
        handleGetFreespinHistory(state, payload) { state.freespinHistory = payload; },
        handleGetDepositHistory(state, payload) { state.depositHistory = payload; },
        handleGetWithdrawHistory(state, payload) { state.withdrawHistory = payload; },
        handleGetGameHistory(state, payload) { state.gameHistory = payload; },

        handleGetGamesByType(state, payload) { state.gameListByType = payload; },
        handleGetAllGames(state, payload) { state.allGameList = payload; },
        handleReadMore(state, payload) { state.pageNumber = payload; },
        
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
