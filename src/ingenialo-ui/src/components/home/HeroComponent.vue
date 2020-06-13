<template>
    <!-- Images Carousel Section -->
    <div class="container-fluid">
      <div 
          class="js-slick-carousel slick"
          data-hs-slick-carousel-options='{
             "autoplay": true,
             "autoplaySpeed": 5000,
             "dots": true,
             "dotsClass": "slick-pagination slick-pagination-white position-absolute bottom-0 right-0 left-0 mb-3"
           }'
      >
            <div 
                v-for="hero in heros"
                :key="hero.id"
                class="js-slide rounded bg-img-hero-center space-3 space-md-3" 
                :style="`background-image: url(${hero.image.url});`"
            >
                <!-- News Block -->
                <div class="container-fluid">
                    <div class="w-lg-30 text-center mx-lg-auto">
                    <div class="mb-5">
                        <h4 
                          class="display-4 text-white font-weight-bold mb-3"
                          data-hs-slick-carousel-animation="fadeInUp"
                          data-hs-slick-carousel-animation-delay="150"
                        >
                          {{ hero.tittle }}
                        </h4>
                        <p 
                          class="text-white"
                          data-hs-slick-carousel-animation="fadeInUp"
                          data-hs-slick-carousel-animation-delay="150"
                        >
                          {{ hero.legend }}
                        </p>
                    </div>
                    <a class="btn btn-light transition-3d-hover px-4" href="#"
                        data-hs-slick-carousel-animation="fadeInUp"
                        data-hs-slick-carousel-animation-delay="300">Leer mas <i class="fas fa-angle-right fa-sm ml-1"></i></a>
                    </div>
                </div>
                <!-- End News Block -->
            </div>
      </div>
    </div>
    <!-- End Images Carousel Section -->
</template>

<script>
    // css
    import '@/assets/vendor/slick-carousel/slick/slick.css'
    // <!-- JS Implementing Plugins -->
    import '@/assets/vendor/slick-carousel/slick/slick.js'

    // <!-- JS Front -->
    import '@/assets/js/hs.slick-carousel.js'

    export default {
        data(){
            return{
                heros:[
                    {
                        'id':1,
                        'tittle':'microbit',
                        'legend':'es es un gran microbit!',
                        'image':{'url':'http://localhost:8000/media/hero/adafruit_microbit_hero_nCEdlQv.jpg'},
                    },
                    {   
                        'id':2,
                        'tittle':'Feather',
                        'legend':'este es un gran feather',
                        'image':{'url':'http://localhost:8000/media/hero/feathernest_XBc2nX1.jpg'},
                    }
                ]
            }
        },
        mounted(){
            console.log("hero")
            this.frontReady()
        },
        methods:{
            frontReady:function(){
                $('.js-slick-carousel').each(function() {
                    var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>