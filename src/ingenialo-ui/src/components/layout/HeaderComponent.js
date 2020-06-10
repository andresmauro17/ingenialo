import Vue from 'vue'

// <!-- JS Implementing Plugins -->
import HSHeader from '@/assets/vendor/hs-header/dist/hs-header.min.js'
import HSMegaMenu from '@/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.js'
import HSUnfold from '@/assets/vendor/hs-unfold/dist/hs-unfold.min.js'

import HSShowAnimation from '@/assets/vendor/hs-show-animation/dist/hs-show-animation.min.js'


const HeaderComponent = Vue.component('header-component', {
    mounted(){
        console.log("hello header")
        this.frontReady()
    },
    data () {
        return {
          msg: 'Welcome header'
        }
    },
    methods:{
        frontReady:function(){
            console.log("hello front")
            jQuery('#buscar').click(function(){
                alert("clickeddddddddeee!")
            });

                // initialization of header
                var header = new HSHeader($('#header')).init();
            
                // initialization of HSMegaMenu component
                var megaMenu = new HSMegaMenu($('.js-mega-menu')).init();
            
                // initialization of unfold
                var unfold = new HSUnfold('.js-hs-unfold-invoker').init();
            
                // initialization of form validation
                $('.js-validate').each(function() {
                  $.HSCore.components.HSValidation.init($(this), {
                    rules: {
                      confirmPassword: {
                        equalTo: '#signupPassword'
                      }
                    }
                  });
                });
            
                // initialization of show animations
                $('.js-animation-link').each(function () {
                  var showAnimation = new HSShowAnimation($(this)).init();
                });
           

        }
    }
});
export default HeaderComponent