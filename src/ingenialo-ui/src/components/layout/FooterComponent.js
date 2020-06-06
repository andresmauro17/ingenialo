import Vue from 'vue'

const FooterComponent = Vue.component('footer-component', {
    mounted(){
        console.log("hello footer")
    },
    data () {
        return {
          msg: 'Welcome footer'
        }
    },
});
export default FooterComponent