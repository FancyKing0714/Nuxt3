import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            isDrawer: true,
            isWelcome: true,
            isVerifyEmail: false,
            onLogin: false,             //show/hide login diaolg
            onRegister: false,          //show/hide register dialog
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
            gameList:[],           // all game list
            providers:[],           //provider list
            balance:{},           // balance
        };
    },
    mutations: {
        handleDrawer(state, payload) {
            state.isDrawer = payload;
        },
        handleVerifyEmail(state, payload) {
            state.isVerifyEmail = payload;
        },
        handleWelcome(state, payload) {
            state.isWelcome = payload;
        },
        handleLogin(state, payload) {
            state.isLogin = payload;
            if(payload === false)
                state.User = {};
        },
        handleRegister(state, payload) {
            state.isRegister = payload;
        },
        handleOnLogin(state, payload) {
            state.onLogin = payload;
        },
        handleOnRegister(state, payload) {
            state.onRegister = payload;
        },
        handleGetUser(state, payload) {
            state.User = payload;
        },
        handleNotification(state, payload) {
            state.notification = payload;
        },
        handleGetBonusHistory(state, payload) {
            state.bonusHistory = payload;
        },
        handleGetCashbackHistory(state, payload) {
            state.cashbackHistory = payload;
        },
        handleGetFreespinHistory(state, payload) {
            state.freespinHistory = payload;
        },
        handleGetDepositHistory(state, payload) {
            state.depositHistory = payload;
        },
        handleGetWithdrawHistory(state, payload) {
            state.withdrawHistory = payload;
        },
        handleGetGameHistory(state, payload) {
            state.gameHistory = payload;
        },
        handleGetAllGames(state, payload) {
            state.gameList = payload;
        },
        handleGetProviders(state, payload) {
            state.providers = payload;
        },
        handleGetBalance(state, payload) {
            state.balance = payload;
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
