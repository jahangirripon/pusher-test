require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'

import Vuetify from 'vuetify'
Vue.use(Vuetify)


import AppHome from './components/AppHome.vue'
import router from './router/router.js'

const app = new Vue({
    el: '#app',
    components: { AppHome },
    vuetify : new Vuetify(),
    router
});