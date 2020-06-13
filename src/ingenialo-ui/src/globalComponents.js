/**
 * Global Components
 */

import HomeComponent from './components/home/HomeComponent.vue'
//  import myComponent from "./myComponent";

const GlobalComponents = {
   install(Vue) {
      Vue.component('home-component', HomeComponent);
   }
}

export default GlobalComponents
