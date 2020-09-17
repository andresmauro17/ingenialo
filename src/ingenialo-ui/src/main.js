require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'

import GlobalComponents from './globalComponents'
import App from './App'

import store from "./store"

Vue.use(GlobalComponents);

new Vue({
  mixins: [App],
  store
})


