require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'

import Vuetify from 'vuetify'
Vue.use(Vuetify)

import User from './helpers/User'
window.User = User

window.EventBus = new Vue();

console.log(User.loggedIn());

import AppHome from './components/AppHome.vue'
import router from './router/router.js'

const app = new Vue({
    el: '#app',
    components: { AppHome },
    vuetify : new Vuetify(),
    router
});