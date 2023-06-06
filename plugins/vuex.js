import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            isDrawer: true,
            isLogin: false,
            User: {},
        };
    },
    mutations: {
        handleDrawer(state, payload) {
            state.isDrawer = payload;
        },
        handleLogin(state, payload) {
            state.isLogin = payload;
        },
        handleGetUser(state, payload) {
            state.User = payload;
        },
    },
    actions: {
        handleDrawer({ commit }, payload) {
            commit('handleDrawer', payload);
        },
        handleLogin({ commit }, payload) {
            commit('handleLogin', payload);
        },
        handleGetUser({ commit }, payload) {
            commit('handleGetUser', payload);
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
