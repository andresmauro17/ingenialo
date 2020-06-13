require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'

import GlobalComponents from './globalComponents'
import App from './App'


Vue.use(GlobalComponents);

new Vue({
  mixins: [App],
})


