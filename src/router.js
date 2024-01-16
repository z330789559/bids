import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import Home from './pages/home.vue'
import HelloWorld from './pages/HelloWorld.vue'

const routerHistory = createWebHistory()

const routes = [
    { path: '/', component: Home },
    { path: '/hello', component: HelloWorld },
]


const router = createRouter({
    // 指定模式
    /**
     * createWebHashHistory 带 # 号
     * createWebHistory 不带 # 号
     */
    history: createWebHistory(),
    // 下面这个 可以写成ES6的简写 routers
    routes:routes
})

export default router