// entry for scss assets
import './assets/scss/theme.scss'

import Vue from 'vue'
import App from './App.vue'

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and django.
 */

require('./bootstrap');

new Vue({
  el: '#app',
  // render: h => h(App)
})
