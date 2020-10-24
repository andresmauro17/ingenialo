/**
 * Global Components
 */

import HomeComponent from './components/home/HomeComponent.vue'
import ProductDetailComponent from './components/products/ProductDetailComponent.vue'
import CategoriesComponent from './components/categories/CategoriesComponent.vue'
import CategoryComponent from './components/categories/CategoryComponent.vue'
import CartComponent from './components/carts/CartComponent.vue'



//  import myComponent from "./myComponent";

const GlobalComponents = {
   install(Vue) {
      Vue.component('home-component', HomeComponent);
      Vue.component('product-detail-component', ProductDetailComponent);
      Vue.component('categories-component', CategoriesComponent);
      Vue.component('category-component', CategoryComponent);
      Vue.component('cart-component', CartComponent);
   }
}

export default GlobalComponents
