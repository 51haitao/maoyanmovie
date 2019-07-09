import Vue from 'vue'
import Router from 'vue-router'
import moveRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        moveRouter,
        cinemaRouter,
        mineRouter
    ]
})

// export default new Router({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes: [{
//             path: '/movie',
//             component: () =>
//                 import ('@/views/Movie')
//         },
//         {
//             path: '/cinema',
//             component: () =>
//                 import ('@/views/Cinema')
//         },
//         {
//             path: '/mine',
//             component: () =>
//                 import ('@/views/Mine')
//         }
//     ]
// })