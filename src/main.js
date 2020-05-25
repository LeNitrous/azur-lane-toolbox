import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
import 'buefy/dist/buefy.css'
import './assets/styles/main.scss'

Vue.config.productionTip = false

Vue.use(Buefy, {
    defaultIconPack: 'fas'
})

new Vue({
    router,
    render: function (h) { return h(App) }
}).$mount('#app')
