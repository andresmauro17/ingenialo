<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Images Carousel Section -->
    <div class="container-fluid">
        <hero-component :heros="heros">
        </hero-component>
    </div>
    <div class="container space-2"></div>
  </main>
  <!-- ========== END MAIN CONTENT ========== --> 
</template>

<script>
    import homeService from '@/services/homeService.js'
    import HeroComponent from './HeroComponent.vue'
    export default {
        data () {
            return {
                heros:[]
            }
        },
        mounted:function(){
            this.getData()
        },
        components:{
            HeroComponent
        },
        methods:{
            getData(){
                console.log("getting data")
                homeService.getHeroData()
                .then(res=>{
                    this.heros = res
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>