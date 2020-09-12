import Vue from 'vue'



const FooterComponent = Vue.component('footer-component', {
    mounted(){
        this.frontReady()
    },
    data () {
        return {
          msg: 'Welcome footer'
        }
    },
    methods:{
        frontReady:function(){
        }
    }
});
export default FooterComponent