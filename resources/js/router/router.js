import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Login/Login.vue'
import Signup from '../components/Login/Signup.vue'
const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router