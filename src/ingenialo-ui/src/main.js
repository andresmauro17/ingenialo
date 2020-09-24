require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'

import numeral from 'numeral'

import GlobalComponents from './globalComponents'
import App from './App'

import store from "./store"

Vue.use(GlobalComponents);

Vue.filter( 'globalTruncate',function (string, length){
    if(string!=undefined && string.length >= length){
        let dots = (string.length >= length) ? '...' : '';
        return string.substring(0, length) + dots
    } else {
        return string
    }
});

Vue.filter("globalFormatNumber", function (value) {
  return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
});

new Vue({
  mixins: [App],
  store
})


