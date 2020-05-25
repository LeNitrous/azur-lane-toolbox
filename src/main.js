import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
    router,
    render: function (h) { return h(App) }
}).$mount('#app')
