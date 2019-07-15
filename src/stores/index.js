import Vue from 'vue'
import Vuex from 'vuex'
// 引入city状态管理
import City from './city'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        // 由于有多个状态管理,所以,需要有这个模块,将其它的状态管理以模块的方式引入进来
        City
    }
})