import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
Vue.use(VueRouter);

const routes = [
    /* ====================== Public Router ====================== */
    {
        path: "/admin/login",
        component: () =>
            import(
                /* webpackChunkName: "admin/admin_login" */ "../pages/Login.vue"
            ),
        name: "admin_login",
        meta: {
            title: "Admin | Login",
            isGuest: true,
        },
    },

    /* ====================== Protected Router ====================== */
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        component: () => import("../components/DefaultMaster.vue"),
        // meta: { requiresAuth: true },
        children: [
            /* ====================== Start Admin Dashboard Routing ====================== */
            {
                path: "/admin/dashboard",
                component: () =>
                    import(
                        /* webpackChunkName: "admin/admin_dashboard" */ "../pages/Dashboard.vue"
                    ),
                name: "admin_dashboard",
                meta: {
                    title: "Dashboard",
                },
            },
            /* ____________________ End Router __________________ */
        ],
    },

    /* ====================== Protected Router ====================== */
];

const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 });
            }, 500);
        });
    },
});

/* ================= Admin Middleware router =================== */
router.beforeEach((to, from, next) => {
    if (
        to.matched.some((record) => record.meta.requiresAuth) &&
        !store.state.user.token
    ) {
        next({
            // name: "admin_login",
        });
    } else if (
        to.matched.some((record) => record.meta.isGuest) &&
        store.state.user.token
    ) {
        next({
            // name: "admin_dashboard",
        });
    } else {
        next(); // make sure to always call next()!
    }
});
/* ================= Protected router =================== */

export default router;
