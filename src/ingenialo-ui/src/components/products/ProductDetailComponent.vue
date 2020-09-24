<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Hero Section -->
    <div class="container space-top-1 space-top-sm-2">
      <div class="row">
        <div class="col-lg-8 mb-8 mb-lg-0">
          <div class="pr-lg-4">
            <div class="position-relative">
              <!-- Main Slider -->
              <div id="heroSlider" class="js-slick-carousel slick border rounded"
                   data-hs-slick-carousel-options='{
                     "prevArrow": "<span class=\"fas fa-arrow-left slick-arrow slick-arrow-primary-white slick-arrow-left slick-arrow-centered-y shadow-soft rounded-circle ml-n3 ml-sm-2 ml-xl-4\"></span>",
                     "nextArrow": "<span class=\"fas fa-arrow-right slick-arrow slick-arrow-primary-white slick-arrow-right slick-arrow-centered-y shadow-soft rounded-circle mr-n3 mr-sm-2 mr-xl-4\"></span>",
                     "fade": true,
                     "infinite": true,
                     "autoplay": true,
                     "autoplaySpeed": 7000,
                     "asNavFor": "#heroSliderNav"
                   }'>
                <div class="js-slide"  v-for="image in product.images" >
                  <img class="img-fluid w-100 rounded" :src="image.image" :alt="image.image">
                </div>
                
              </div>
              <!-- End Main Slider -->

              <!-- Slider Nav -->
              <div class="position-absolute bottom-0 right-0 left-0 px-4 py-3">
                <div id="heroSliderNav" class="js-slick-carousel slick slick-gutters-1 slick-transform-off max-w-27rem mx-auto"
                     data-hs-slick-carousel-options='{
                       "infinite": true,
                       "autoplaySpeed": 7000,
                       "slidesToShow": 3,
                       "isThumbs": true,
                       "isThumbsProgress": true,
                       "thumbsProgressOptions": {
                         "color": "#377dff",
                         "width": 8
                       },
                       "thumbsProgressContainer": ".js-slick-thumb-progress",
                       "asNavFor": "#heroSlider"
                     }'>
                  <div class="js-slide p-1" v-for="image in product.images">
                    <a class="js-slick-thumb-progress d-block avatar avatar-circle border p-1" href="javascript:;">
                      <img class="avatar-img" :src="image.image" :alt="image.image" alt="Image Description">
                    </a>
                  </div>
                </div>
              </div>
              <!-- End Slider Nav -->
            </div>
          </div>
        </div>

        <!-- Product Description -->
        <div class="col-lg-4">
          <!-- Title -->
          <div class="mb-5">
            <h1 class="h2">{{product.title}}</h1>
            <p>{{ product.description | globalTruncate(60) }}</p>
          </div>
          <!-- End Title -->

          <!-- Price -->
          <div class="mb-5">
            <h2 class="font-size-1 text-body mb-0">Precio:</h2>
            <span class="text-dark font-size-2 font-weight-bold">COP ${{ parseFloat(product.price) | globalFormatNumber}}</span>
            <span class="d-block text-muted mb-0"> 1 en stock</span>
            <!-- <span class="text-body ml-2"><del>$179.99</del></span> -->
          </div>
          <!-- End Price -->

          <!-- Quantity -->
          <div class="border rounded py-2 px-3 mb-3">
            <div class="js-quantity-counter row align-items-center">
              <div class="col-7">
                <small class="d-block text-body font-weight-bold">seleccione la cantidad</small>
                <input class="js-result form-control h-auto border-0 rounded p-0" type="text" value="1">
              </div>
              <div class="col-5 text-right">
                <a class="js-minus btn btn-xs btn-icon btn-outline-secondary rounded-circle" href="javascript:;">
                  <i class="fas fa-minus"></i>
                </a>
                <a class="js-plus btn btn-xs btn-icon btn-outline-secondary rounded-circle" href="javascript:;">
                  <i class="fas fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <!-- End Quantity -->

          <div class="mb-4">
            <button  type="button" class="btn btn-block btn-primary btn-pill transition-3d-hover">Añadir al carro</button>
          </div>

          <!-- Help Link -->
          <div class="media align-items-center">
            <span class="w-100 max-w-6rem mr-2">
              <img class="img-fluid" :src="appSettings.STATIC_URL+'svg/icons/icon-4.svg'" alt="SVG">
            </span>
            <div class="media-body text-body small">
              <span class="font-weight-bold mr-1">Necesitas ayuda?</span>
              <a class="link-underline" href="#">Chatea ahora</a>
            </div>
          </div>
          <!-- End Help Link -->
        </div>
        <!-- End Product Description -->
      </div>
    </div>
    <!-- End Hero Section -->

    <!-- Product Description Section -->
    <div class="container space-top-2 space-lg-3">
      <div class="row">
        <div class="col-md-12 mb-5 mb-md-0">
          <div class="pr-lg-12">
            <h2>Descripcion</h2>
            <p class="text-justify">{{product.description}}</p>
          </div>
        </div>
      </div>
      <hr class="my-0 mb-3">
      <div class="row">
        <div class="col-md-12 mb-5 mb-md-0">
          <div class="pr-lg-12">
            <h2>detalles tecnicos</h2>
            <p class="text-justify">{{product.tecnical_detail}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Product Description Section -->

  
  </main>
  <!-- ========== END MAIN CONTENT ========== --> 
</template>

<script>
    import {mapState} from 'vuex'

    import productService from '@/services/productService.js'

    export default {
        props:[
          'productId'
        ],
        data () {
            return {
              product:{}
            }
        },
        computed:{
          ...mapState(['appSettings'])
        }
        ,
        mounted:function(){
            this.getData()
        },
        updated() {
          // initialization of slick carousel
          if('images' in this.product){
            $('.js-slick-carousel').each(function() {
              var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
            });
          }
        },
        components:{
           
        },
        methods:{
            getData(){
              productService.getProduct(parseInt(this.productId))
              .then(res=>this.product=res)
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>