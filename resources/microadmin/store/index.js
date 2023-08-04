import Vue from "vue";
import Vuex from "vuex";
import router from "../router"; // Vue router instance
Vue.use(Vuex);

/* ========================== State ========================== */
const state = {
    user: {
        data: {},
        // token: sessionStorage.getItem("TOKEN"),
        token: localStorage.getItem("ADMIN_TOKEN"),
    },

    account_purpose: [],
    balances: [],

    /* Per Page Data */
    perPageData: [
        { id: 10, name: 10 },
        { id: 20, name: 20 },
        { id: 30, name: 30 },
        { id: 50, name: 50 },
        { id: 100, name: 100 },
    ],

    /* ========================== global ========================== */
    // image_base_link: '/../public/storage/',
    // static_image_link: "/../public/storage/static/admin/",

    /* ========================== local ========================== */
    image_base_link: "/../storage/",
    static_image_link: "/../storage/static/",
};

/* ========================== Getters ========================== */
const getters = {
    admin(state) {
        return state.user;
    },
    account_purpose(state) {
        return state.account_purpose;
    },
    balances(state) {
        return state.balances;
    },
};

/* ========================== Actions ========================== */
const actions = {
    //every time this session check, for user session running or expired
    admin(context) {
        axios
            .get("/api/admin/auth/check")
            //if session status ruining
            .then((resp) => {
                if (resp.data.status == "AUTHORIZED") {
                    context.commit("setUser", resp.data.admin);
                    context.commit("setToken", resp.data.token);

                    router.push({ name: "admin_dashboard" });
                    return;
                }
                if (resp.data.status == "UNAUTHORIZED") {
                    context.commit("logout");
                    router.push({
                        name: "admin_login",
                    });
                    return;
                }
            })
            //error handling
            .catch(() => {
                router.push({
                    name: "admin_login",
                });
            });
    },

    authenticate_check(context) {
        axios
            .get("/api/admin/authenticate/check")
            //if session status ruining
            .then((resp) => {
                if (resp.data.status == "UNAUTHORIZED") {
                    context.commit("logout");
                    router.push({
                        name: "admin_login",
                    });
                    return;
                }
            })
            //error handling
            .catch(() => {
                router.push({
                    name: "admin_login",
                });
            });
    },

    getBalances(context) {
        axios.get("/api/admin/balances").then((resp) => {
            console.log(resp);
            context.commit("balances", resp.data.balance_list);
        });
    },

    getAccountPurpose(context) {
        axios.get("/api/admin/account-purpose").then((resp) => {
            console.log(resp);
            context.commit("account_purpose", resp.data.purpose_list);
        });
    },
};

/* ========================== Mutations ========================== */
const mutations = {
    balances(state, payload) {
        return (state.balances = payload);
    },

    account_purpose(state, payload) {
        return (state.account_purpose = payload);
    },

    setUser: (state, user) => {
        state.user.data = user;
    },

    setToken: (state, token) => {
        state.user.token = token;
        localStorage.setItem("ADMIN_TOKEN", token);
    },

    logout: (state) => {
        state.user.token = null;
        state.user.data = {};
        localStorage.removeItem("ADMIN_TOKEN");
    },
};

/* ========================== Store ========================== */
const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
});

global.store = store;
export default store;
