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
    },
    actions: {
        handleDrawer({ commit }, payload) {
            commit('handleDrawer', payload);
        },
        handleLogin({ commit }, payload) {
            commit('handleLogin', payload);
        },
        handleRegister({ commit }, payload) {
            commit('handleRegister', payload);
        },
        handleGetUser({ commit }, payload) {
            commit('handleGetUser', payload);
        },
        handleNotification({ commit }, payload) {
            commit('handleNotification', payload);
        },
        handleGetBonusHistory({ commit }, payload) {
            commit('handleGetBonusHistory', payload);
        },
        handleGetCashbackHistory({ commit }, payload) {
            commit('handleGetCashbackHistory', payload);
        },
        handleGetFreespinHistory({ commit }, payload) {
            commit('handleGetFreespinHistory', payload);
        },
        handleGetDepositHistory({ commit }, payload) {
            commit('handleGetDepositHistory', payload);
        },
        handleGetWithdrawHistory({ commit }, payload) {
            commit('handleGetWithdrawHistory', payload);
        },
        handleGetGameHistory({ commit }, payload) {
            commit('handleGetGameHistory', payload);
        },
        handleGetAllGames({ commit }, payload) {
            commit('handleGetAllGames', payload);
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
