<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
        <!-- Portfolio Section -->
        <div class="container space-2">

            <template v-for="category in categories" v-if="category.products.length">
                <!-- Title -->
                <div class="row justify-content-md-between align-items-md-center mb-2">
                    <div class="col-lg-5">
                        <h2>{{category.name}}</h2>
                    </div>

                    <div class="col-lg-6 text-lg-right mt-lg-auto">
                    <a class="font-weight-bold" :href="`/categories/${category.id}`">
                        Ver mas
                        <i class="fas fa-angle-right fa-sm ml-1"></i>
                    </a>
                    </div>
                </div>
                <!-- End Title -->
                <div class="cbp" :key="category.id"
                    data-hs-cbp-options='{
                        "animationType": "fadeOut",
                        "caption": "zoom",
                        "gapHorizontal": 40,
                        "gapVertical": 40,
                        "mediaQueries": [
                        {"width": 1500, "cols": 4},
                        {"width": 1100, "cols": 4},
                        {"width": 800, "cols": 2},
                        {"width": 480, "cols": 2},
                        {"width": 380, "cols": 2}
                        ]
                    }'
                >
                    <!-- Item -->
                    <template v-if="categories.length">


                        <!-- <div  v-for="product in category.products.slice(0,4)" class="cbp-item product">
                            <a class="cbp-caption" :href="`/products/${product.id}`">
                                <div class="overflow-hidden rounded">
                                <div class="cbp-caption-defaultWrap">
                                    <img class="rounded" :src="product.images[0].image" alt="Image Description">
                                </div>
                                </div>
                                <div class="p-4">
                                <span class="d-block small text-body font-weight-bold text-cap">{{product.slug}}</span>
                                <span class="d-block h3 mb-0">{{product.title}}</span>
                                </div>
                            </a>
                        </div> -->

                        <!-- Item -->
                        <div v-for="product in category.products.slice(0,4)" class="cbp-item rounded graphic">
                            <a class="cbp-caption" :href="`/products/${product.id}`">
                                <div class="cbp-caption-defaultWrap">
                                <img :src="product.images[0].image" alt="Image Description">
                                </div>
                                <div class="cbp-caption-activeWrap bg-primary">
                                <div class="cbp-l-caption-alignCenter">
                                    <div class="cbp-l-caption-body">
                                    <h4 class="text-white mb-0">{{product.title}}</h4>
                                    <p class="small text-white-70 mb-0">
                                        {{product.slug}}
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </a>
                        </div>
                        <!-- End Item -->

                    </template>
                    <!-- End Item -->

                    
                </div>
                <br>
            </template>


        </div>
  </main>
  <!-- ========== END MAIN CONTENT ========== --> 
</template>

<script>
    import {mapState} from 'vuex'

    import categoriesArray from "./categories"

    import categoryService from '@/services/categoryService.js'
    
    
    export default {
        props:[
          
        ],
        data () {
            return {
              categories:{}
            }
        },
        computed:{
          ...mapState(['appSettings']),
        }
        ,
        mounted:function(){
            this.getData()
            // this.initfrontAssets()
            
        },
        updated() {
            this.initfrontAssets()
        },
        components:{
           
        },
        methods:{
            initfrontAssets(){
                // initialization of cubeportfolio
                $('.cbp').each(function () {
                    var cbp = $.HSCore.components.HSCubeportfolio.init($(this), {
                    layoutMode: 'grid',
                    displayTypeSpeed: 0
                    });
                });
                $('.cbp').on('initComplete.cbp', function() {
                    // initialization of sticky blocks
                    $('.js-sticky-block').each(function () {
                    var stickyBlock = new HSStickyBlock($(this)).init();
                    });
                });
            },
            getData(){
             console.log("getting data from categories")
             console.log(categoriesArray)
            //  this.categories = categoriesArray
            categoryService.getCategories()
              .then(
                  res=>this.categories=res
                  )
             
             
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>