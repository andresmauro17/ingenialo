<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Title Section -->
    <div class="bg-light">
        <div class="container py-5">
            <div class="row align-items-sm-center">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <h1 class="h4 mb-0">Detalle del Producto</h1>
            </div>

            <div class="col-sm-6">
                <!-- Breadcrumb -->
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/categories">Tienda</a></li>
                    <li class="breadcrumb-item"><a href="/categories">Tienda</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{product.title | globalTruncate(20)}}</li>
                </ol>
                </nav>
                <!-- End Breadcrumb -->
            </div>
            </div>
        </div>
    </div>
    <!-- End Title Section -->
    <!-- Hero Section -->
    <div class="container space-top-1 space-top-sm-1">
      <div class="row">
        <div class="col-lg-8 mb-8 mb-lg-0">
          
          <!-- Product image -->
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
          <!-- End product image -->

          <!-- Product Description Section -->
          <div class="row space-top-1">

            <!-- description -->
            <div class="col-md-12 mb-5 mb-md-0">
              <div class="pr-lg-12">
                <h2>Descripcion</h2>
                <div v-html="compileProductDescriptiondMarkdown"></div>
              </div>
            </div>

            <hr class="my-0 mb-3">
            
            <!-- Technical details -->
            <div class="row">
              <div class="col-md-12 mb-5 mb-md-0">
                <div class="pr-lg-12">
                  <h2>detalles tecnicos</h2>
                  <div v-html="compileProductTecnicalDetailMarkdown"></div>
                </div>
              </div>
            </div>

          </div>
          <!-- End Product Description Section -->

        </div>

        <!-- Product pricing -->
        <div class="col-lg-4" id="stickyBlockStartPoint">
          <div class="js-sticky-block pl-lg-4"
               data-hs-sticky-block-options='{
                 "parentSelector": "#stickyBlockStartPoint",
                 "targetSelector": "#logoAndNav",
                 "startPoint": "#stickyBlockStartPoint",
                 "endPoint": "#stickyBlockEndPoint",
                 "stickyOffsetTop": 24,
                 "stickyOffsetBottom": 130
               }'>
          
          
                <!-- Title -->
                <div class="mb-5">
                  <h1 class="h2">{{product.title}}</h1>
                  <!-- <p>{{ product.description | globalTruncate(60) }}</p> -->
                </div>
                <!-- End Title -->

                <!-- Price -->
                <div class="mb-5">
                  <h2 class="font-size-1 text-body mb-0">Precio:</h2>
                  <span class="text-dark font-size-2 font-weight-bold">COP ${{ parseFloat(product.price) | globalFormatNumber}}</span>
                  <span class="d-block text-muted mb-0"> {{product.quantity}} en stock</span>
                  <!-- <span class="text-body ml-2"><del>$179.99</del></span> -->
                </div>
                <!-- End Price -->

                <!-- Quantity -->
                <div class="border rounded py-2 px-3 mb-3">
                  <div class="js-quantity-counter row align-items-center">
                    <div class="col-7">
                      <small class="d-block text-body font-weight-bold">seleccione la cantidad</small>
                      <input v-model="form.quantity" class="js-result form-control h-auto border-0 rounded p-0" type="text" value="1">
                    </div>
                    <div class="col-5 text-right">
                      <a class="js-minus btn btn-xs btn-icon btn-outline-secondary rounded-circle" href="#" @click.prevent="decrementQuantity">
                        <i class="fas fa-minus"></i>
                      </a>
                      <a class="js-plus btn btn-xs btn-icon btn-outline-secondary rounded-circle" href="#" @click.prevent="incrementQuantity">
                        <i class="fas fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- End Quantity -->

                <div class="mb-4">
                  <button  @click="addToCart" type="button" class="btn btn-block btn-primary btn-pill transition-3d-hover">Añadir al carro</button>
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
        </div>
        <!-- End Product pricing -->
      </div>
    </div>
    <!-- End Hero Section -->

    <!-- Sticky Block End Point -->
    <div id="stickyBlockEndPoint"></div>


  
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
              product:{},
              isFrontImagesInitialized:false,
              form:{
                product:this.productId,
                quantity:1,
              }
            }
        },
        computed:{
          ...mapState(['appSettings']),
          compileProductDescriptiondMarkdown: function() {
            if(this.product.description!=undefined){
              return marked(this.product.description, { sanitize: true });
            }
            return ''

          },
          compileProductTecnicalDetailMarkdown: function() {
            if(this.product.tecnical_detail!=undefined){
              return marked(this.product.tecnical_detail, { sanitize: true });
            }
            return ''

          },
          
        },
        watch:{
          'form.quantity':function(newVal,oldVal){
            if(newVal > this.product.quantity){
              this.form.quantity = this.product.quantity
            }
            if(newVal < 0){
              this.form.quantity = 1
            }
          }
        },
        mounted:function(){
            this.getData()
            
        },
        updated() {
          // initialization of slick carousel
          if('images' in this.product && !this.isFrontImagesInitialized){
            $('.js-slick-carousel').each(function() {
              var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
            });
            this.isFrontImagesInitialized=true
          }
          $('.js-sticky-block').each(function () {
              var stickyBlock = new HSStickyBlock($(this)).init();
            });
        },
        components:{
           
        },
        methods:{
            getData(){
              productService.getProduct(parseInt(this.productId))
              .then(res=>this.product=res)
            },
            decrementQuantity(){
              let value = value = parseInt(this.form.quantity)

              if(value != 1){
                  value = value -1
              }

              this.form.quantity = value
            },
            incrementQuantity(){
              this.form.quantity = parseInt(this.form.quantity)+1
            },
            addToCart(){

              if(this.form.quantity <= 0){this.form.quantity=1}

              productService.addToCart(this.form)
              .then(
                res=>{
                  console.log(res)
                  localStorage.setItem('producAdded', this.product.title);
                  window.location.href = "/cart";
                }
              )
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>