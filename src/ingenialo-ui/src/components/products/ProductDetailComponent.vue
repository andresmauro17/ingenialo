<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Hero Section -->
    <div class="container space-top-1 space-top-sm-2">
      <div class="row">
        <div class="col-lg-7 mb-7 mb-lg-0">
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
                <div class="js-slide">
                  <img class="img-fluid w-100 rounded" src="/static/img/600x600/img1.jpg" alt="Image Description">
                </div>
                <div class="js-slide">
                  <img class="img-fluid w-100 rounded" src="/static/img/600x600/img2.jpg" alt="Image Description">
                </div>
                <div class="js-slide">
                  <img class="img-fluid w-100 rounded" src="/static/img/600x600/img3.jpg" alt="Image Description">
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
                  <div class="js-slide p-1">
                    <a class="js-slick-thumb-progress d-block avatar avatar-circle border p-1" href="javascript:;">
                      <img class="avatar-img" src="../../assets/img/100x100/img16.jpg" alt="Image Description">
                    </a>
                  </div>
                  <div class="js-slide p-1">
                    <a class="js-slick-thumb-progress d-block avatar avatar-circle border p-1" href="javascript:;">
                      <img class="avatar-img" src="../../assets/img/100x100/img17.jpg" alt="Image Description">
                    </a>
                  </div>
                  <div class="js-slide p-1">
                    <a class="js-slick-thumb-progress d-block avatar avatar-circle border p-1" href="javascript:;">
                      <img class="avatar-img" src="../../assets/img/100x100/img18.jpg" alt="Image Description">
                    </a>
                  </div>
                </div>
              </div>
              <!-- End Slider Nav -->
            </div>
          </div>
        </div>

        <!-- Product Description -->
        <div class="col-lg-5">
          <!-- Rating -->
          <div class="d-flex align-items-center small mb-2">
            <div class="text-warning mr-2">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <a class="link-underline" href="#reviewSection">Read all 287 reviews</a>
          </div>
          <!-- End Rating -->

          <!-- Title -->
          <div class="mb-5">
            <h1 class="h2">New Era 9Forty LA Dodgers adjustable cap in black</h1>
            <p>American label New Era manufacturing baseball hats for teams since the 1930s.</p>
          </div>
          <!-- End Title -->

          <!-- Price -->
          <div class="mb-5">
            <h2 class="font-size-1 text-body mb-0">Total price:</h2>
            <span class="text-dark font-size-2 font-weight-bold">$159.99</span>
            <span class="text-body ml-2"><del>$179.99</del></span>
          </div>
          <!-- End Price -->

          <!-- Quantity -->
          <div class="border rounded py-2 px-3 mb-3">
            <div class="js-quantity-counter row align-items-center">
              <div class="col-7">
                <small class="d-block text-body font-weight-bold">Select quantity</small>
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

          <!-- Accordion -->
          <div id="shopCartAccordion" class="accordion mb-5">
            <!-- Card -->
            <div class="card border shadow-none">
              <div class="card-body card-collapse" id="shopCardHeadingOne">
                <a class="btn btn-link btn-block card-btn collapsed" href="javascript:;" role="button"
                        data-toggle="collapse"
                        data-target="#shopCardOne"
                        aria-expanded="false"
                        aria-controls="shopCardOne">
                  <span class="row align-items-center">
                    <span class="col-9">
                      <span class="media align-items-center">
                        <span class="w-100 max-w-6rem mr-3">
                          <img class="img-fluid" :src="appSettings.STATIC_URL+'svg/icons/icon-65.svg'" alt="SVG">
                        </span>
                        <span class="media-body">
                          <span class="d-block font-size-1 font-weight-bold">Free shipping</span>
                        </span>
                      </span>
                    </span>
                    <span class="col-3 text-right">
                      <span class="card-btn-toggle">
                        <span class="card-btn-toggle-default">&plus;</span>
                        <span class="card-btn-toggle-active">&minus;</span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div id="shopCardOne" class="collapse" aria-labelledby="shopCardHeadingOne" data-parent="#shopCartAccordion">
                <div class="card-body">
                  <p class="small mb-0">We offer free shipping anywhere in the U.S. A skilled delivery team will bring the boxes into your office.</p>
                </div>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div class="card border shadow-none">
              <div class="card-body card-collapse" id="shopCardHeadingTwo">
                <a class="btn btn-link btn-block card-btn collapsed" href="javascript:;" role="button"
                        data-toggle="collapse"
                        data-target="#shopCardTwo"
                        aria-expanded="false"
                        aria-controls="shopCardTwo">
                  <span class="row align-items-center">
                    <span class="col-9">
                      <span class="media align-items-center">
                        <span class="w-100 max-w-6rem mr-3">
                          <img class="img-fluid" :src="appSettings.STATIC_URL+'svg/icons/icon-64.svg'" alt="SVG">
                        </span>
                        <span class="media-body">
                          <span class="d-block font-size-1 font-weight-bold">30 Days return</span>
                        </span>
                      </span>
                    </span>
                    <span class="col-3 text-right">
                      <span class="card-btn-toggle">
                        <span class="card-btn-toggle-default">&plus;</span>
                        <span class="card-btn-toggle-active">&minus;</span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div id="shopCardTwo" class="collapse" aria-labelledby="shopCardHeadingTwo" data-parent="#shopCartAccordion">
                <div class="card-body">
                  <p class="small mb-0">If you're not satisfied, return it for a full refund. We'll take care of disassembly and return shipping.</p>
                </div>
              </div>
            </div>
            <!-- End Card -->
          </div>
          <!-- End Accordion -->

          <div class="mb-4">
            <button  type="button" class="btn btn-block btn-primary btn-pill transition-3d-hover">Add to Cart</button>
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
  </main>
  <!-- ========== END MAIN CONTENT ========== --> 
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        data () {
            return {
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
          $('.js-slick-carousel').each(function() {
            var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
          });
        },
        components:{
           
        },
        methods:{
            getData(){
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>