import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state: {
        user: null,
        token: null,
        isUserLoggedIn: false
    },
    getters: {
        user(state) {
            return state.user;
        },
        token(state) {
            return state.token;
        },
        isUserLoggedIn(state) {
            return state.isUserLoggedIn;
        }
    },
    actions: {
        login(context, payload) {
            context.commit('login', payload);
        },
        logout(context) {
            context.commit('logout');
        }
    },
    mutations: {
        login(state, payload) {
            state.user = payload.user;
            state.token = payload.token;
            state.isUserLoggedIn = true;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.isUserLoggedIn = false;
        }
    },
    plugins: [createPersistedState()]
})

export default store;