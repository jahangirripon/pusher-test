import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Login/Login.vue'
import Logout from '../components/Login/Logout.vue'
import Signup from '../components/Login/Signup.vue'
import Forum from '../components/forum/forum.vue'
const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/forum', component: Forum, name: 'forum' },
]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router