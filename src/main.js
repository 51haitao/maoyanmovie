import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

// 将 axios 添加到 Vue的prototype
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')