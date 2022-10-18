import { createRouter, createWebHashHistory } from 'vue-router'

import Login from './components/MyLogin.vue'
import Home from './components/MyHome.vue'

import Datas from './components/menus/MyDatas.vue'
import Rights from './components/menus/MyRights.vue'
import Goods from './components/menus/MyGoods.vue'
import Maps from './components/menus/MyMap.vue'
import Settings from './components/menus/MySettings.vue'
import DataDetail from './components/data/MyDataDetail.vue'

// 创建路由实例对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login, name: 'login' },
        {
            path: '/home',
            redirect: '/home/maps',
            component: Home,
            name: 'home',
            children: [
                { path: 'data', component: Datas },
                { path: 'rights', component: Rights },
                { path: 'goods', component: Goods },
                { path: 'maps', component: Maps },
                { path: 'settings', component: Settings },
                { path: 'data/:id', component: DataDetail, props: true },
            ],
        },
    ],
})

// 全局路由导航守卫
router.beforeEach((to, from, next) => {
    // 判断用户访问的是否为登录页
    if (to.path === '/login') return next()
        // 获取 token 值
    const tokenStr = localStorage.getItem('token')
    if (!tokenStr) {
        next('/login')
    } else {
        next()
    }
})

export default router