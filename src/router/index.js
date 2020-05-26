import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import NotFound from "../views/NotFound.vue"

Vue.use(VueRouter)
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "*",
            name: "404",
            component: NotFound
        }
    ]
})

export default router
