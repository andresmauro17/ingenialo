<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
        <!-- Title Section -->
        <div class="bg-light">
            <div class="container py-5">
                <div class="row align-items-sm-center">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <h1 class="h4 mb-0">Tienda</h1>
                </div>

                <div class="col-sm-6">
                    <!-- Breadcrumb -->
                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">tienda</li>
                    </ol>
                    </nav>
                    <!-- End Breadcrumb -->
                </div>
                </div>
            </div>
        </div>
        <!-- End Title Section -->
        <!-- Hero Section -->
        <div class="container space-top-2 space-bottom-1 space-bottom-sm-2">
        <div class="w-lg-75">
            <h1 class="display-3 mb-5">
            Activa tú
            <span class="text-primary">
                <span class="js-text-animation"></span>
            </span>
            <br>
            En la ingeniería
            </h1>
            <p class="lead">En ingenialo.com encontraras todo lo que necesitas para tus proyectos :)</p>
        </div>
        </div>
        <!-- End Hero Section -->
        <!-- Portfolio Section -->
        <div class="container space-1">

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
                // initialization of text animation (typing)
                var typed = new Typed(".js-text-animation", {
                    strings: ["creatividad", "ingenio", "pasión"],
                    typeSpeed: 70,
                    loop: true,
                    backSpeed: 40,
                    backDelay: 2000
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