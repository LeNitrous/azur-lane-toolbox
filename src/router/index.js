import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import NotFound from "../views/NotFound.vue"

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "*",
            name: "e404",
            component: NotFound
        }
    ]
})

export default router
