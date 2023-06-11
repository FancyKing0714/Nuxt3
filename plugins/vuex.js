import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            isDrawer: true,
            isLogin: false,
            isregister: false,
            User: {},
            notification: {},
            bonusHistory:[],
            cashbackHistory:[],
            freespinHistory:[],
            depositHistory:[],
            withdrawHistory:[],
            gameHistory:[],
            gameList:[],
            providers:[],
        };
    },
    mutations: {
        handleDrawer(state, payload) {
            state.isDrawer = payload;
        },
        handleLogin(state, payload) {
            state.isLogin = payload;
        },
        handleRegister(state, payload) {
            state.isRegister = payload;
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
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
