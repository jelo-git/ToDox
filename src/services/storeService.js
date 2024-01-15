import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state: {
        user: null,
        roles: null,
        id: null,
        isUserLoggedIn: false
    },
    getters: {
        user(state) {
            return state.user;
        },
        roles(state) {
            return state.roles;
        },
        id(state) {
            return state.id;
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
            state.roles = payload.roles;
            state.id = payload.id;
            state.isUserLoggedIn = !!payload.user;
        },
        logout(state) {
            state.user = null;
            state.roles = null;
            state.id = null;
            state.isUserLoggedIn = false;
            if (document.cookie.includes('bezkoder')) {
                document.cookie = "bezkoder=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        }
    },
    plugins: [createPersistedState()]
})

export default store;