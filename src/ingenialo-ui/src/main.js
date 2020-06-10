require('./bootstrap');

import Vue from 'vue'
import GlobalComponents from './globalComponents'
import App from './App'

new Vue({
  mixins: [App],
})

Vue.use(GlobalComponents);
