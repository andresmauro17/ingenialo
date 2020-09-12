/**
 * Global Components
 */

import HomeComponent from './components/home/HomeComponent.vue'
import ProductDetailComponent from './components/products/ProductDetailComponent.vue'
//  import myComponent from "./myComponent";

const GlobalComponents = {
   install(Vue) {
      Vue.component('home-component', HomeComponent);
      Vue.component('product-detail-component', ProductDetailComponent);
   }
}

export default GlobalComponents
