import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Passthrough from "./views/Passthrough.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/ships",
            name: "ships",
            component: Passthrough,
            children: [
                {
                    path: "search",
                    component: () => import("./views/Ships/Search.vue"),
                    meta: { title: "Search Ships" }
                }
            ]
        },
        {
            path: "*",
            name: "404",
            component: NotFound,
            meta: { title: "Not Found" }
        }
    ]
});

const MAIN_TITLE = "Azur Lane Command Room";

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = (to.meta.title) ? MAIN_TITLE + ` | ${to.meta.title}` : MAIN_TITLE;
    });
});

export default router;
