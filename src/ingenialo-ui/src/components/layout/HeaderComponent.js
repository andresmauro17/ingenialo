import Vue from 'vue'

const HeaderComponent = Vue.component('header-component', {
    mounted(){
        console.log("hello header")
    },
    data () {
        return {
          msg: 'Welcome header'
        }
    },
});
export default HeaderComponent