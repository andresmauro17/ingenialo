<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
      <!-- Title Section -->
        <div class="bg-light">
            <div class="container py-5">
                <div class="row align-items-sm-center">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <h1 class="h4 mb-0">{{category.name}}</h1>
                </div>

                <div class="col-sm-6">
                    <!-- Breadcrumb -->
                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="/categories">Tienda</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{category.name}}</li>
                    </ol>
                    </nav>
                    <!-- End Breadcrumb -->
                </div>
                </div>
            </div>
        </div>
        <!-- End Title Section -->
        <!-- Products List Section -->
        <div class="container">
            <ul class="list-unstyled">
                <!-- Products -->
                <li v-for="product in category.products" :key="product.id" class="card border shadow-none mb-3 mb-md-5">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <a :href="`/products/${product.id}`">
                            <img class="card-img" :src="product.images[0].image" alt="Image Description">
                        </a>
                    </div>

                    <div class="col-md-8">
                    <div class="card-body">
                        <div class="mb-2">
                            <!-- <a class="d-inline-block text-body small font-weight-bold mb-1" href="#">Accessories</a> -->
                            <span class="d-block font-size-1">
                                <a class="h2" :href="`/products/${product.id}`">{{product.title}}</a>
                                <span v-if="product.featured" class="badge badge-success badge-pill ml-1">destacado</span>
                            </span>
                            <div  mt-2 v-html="compileProductDescriptiondMarkdown(product.description)"></div>
                            <div class="d-block">
                                <span class="h3">COP ${{ parseFloat(product.price) | globalFormatNumber}}</span>
                            </div>
                        </div>

                        <button type="button" class="btn btn-sm btn-outline-primary btn-pill transition-3d-hover mr-1">Añadir al carro</button>
                        <button type="button" class="btn btn-sm btn-soft-secondary btn-pill transition-3d-hover">
                            <i class="far fa-heart mr-1"></i>lista de deseo
                        </button>
                    </div>
                    </div>
                </div>
                </li>
                <!-- End Products -->
            </ul>
        </div>
        <!-- End Products List Section -->
  </main>
  <!-- ========== END MAIN CONTENT ========== --> 
</template>

<script>
    import {mapState} from 'vuex'
    
    import categoryService from '@/services/categoryService.js'

    export default {
        props:[
          'categoryId'
        ],
        data () {
            return {
              category:{}
            }
        },
        computed:{
          ...mapState(['appSettings']),
        }
        ,
        mounted:function(){
            this.getData()
            
        },
        updated() {
            this.initfrontAssets()
        },
        components:{
           
        },
        methods:{
            initfrontAssets(){
               
            },
            compileProductDescriptiondMarkdown: function(description) {
                if(description!=undefined){
                    let parragraph = marked(description, { sanitize: true });
                    return this.$options.filters.globalTruncate(parragraph, 400);
                }
                return ''
            },
            getData(){
             console.log("getting data from category")
             
            categoryService.getCategory(this.categoryId)
            .then(
                res=>this.category=res
                )
             
             


            },
        }
    }
</script>

<style lang="scss" scoped>
</style>