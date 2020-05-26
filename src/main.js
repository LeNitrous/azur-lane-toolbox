import Vue from "vue"
import App from "./App.vue"
import Buefy from "buefy"
import router from "./router"
import "./assets/styles/main.scss"

Vue.config.productionTip = false

Vue.use(Buefy, {
    defaultIconPack: "fas"
})

new Vue({
    router,
    created: function () {
        if (sessionStorage.redirect) {
            const redirect = sessionStorage.redirect
            delete sessionStorage.redirect
            this.$router.push(redirect)
        }
        
        const now = new Date().getHours();
        if (now > 7 || now < 15)
            document.body.classList.add("day")
        else if (now > 19 || now < 5)
            document.body.classList.add("night")
        else
            document.body.classList.add("twilight");
    },
    render: function (h) { return h(App) },
}).$mount("#app")
