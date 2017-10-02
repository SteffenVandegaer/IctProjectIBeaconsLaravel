import Vue from 'vue';
import axios from 'axios';
//import VueRouter from 'vue-router';
import 'bulma/css/bulma.css';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'



window.Vue = Vue;
window.axios = axios;
window.axios = require('axios');
Vue.use(Vuetify)
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
