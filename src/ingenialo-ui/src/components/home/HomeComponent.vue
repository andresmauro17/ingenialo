<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Images Carousel Section -->
    <div class="container-fluid">
        <hero-component>
        </hero-component>
    </div>
    <div class="container space-2"></div>
  </main>
  <!-- ========== END MAIN CONTENT ========== --> 
</template>

<script>
    import HeroComponent from './HeroComponent.vue'
    export default {
        data () {
            return {
            }
        },
        mounted:function(){
        },
        components:{
            HeroComponent
        }
    }
</script>

<style lang="scss" scoped>
</style>