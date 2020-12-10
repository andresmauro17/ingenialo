<template>
   <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Cart Section -->
    <div v-if="cart.products && cart.products.length>0" class="container space-1 space-md-2">
      <!-- product added alert -->
      <div v-if="productAdded" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{{productAdded}}.</strong> fue añadido al carrito!.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <svg aria-hidden="true" class="mb-0" width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
          </svg>
        </button>
      </div>

      <div class="row">
        <div class="col-lg-8 mb-7 mb-lg-0">
          <!-- Title -->
          <div class="d-flex justify-content-between align-items-end border-bottom pb-3 mb-7">
            <h1 class="h3 mb-0">Carrito de compras</h1>
            <span v-if="cart.products">{{cart.products.length}} items</span>
          </div>
          <!-- End Title -->

          <form>
            <!-- Product Content -->
            <div v-for="(product, index) in cart.products" :key="product.id" class="border-bottom pb-5 mb-5">
              <div class="media">
                <div class="max-w-15rem w-100 mr-3">
                  <img class="img-fluid" :src="product.product.images[0].image" alt="Image Description">
                </div>
                <div class="media-body">
                  <div class="row">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <a class="h5 d-block" :href="`products/${product.product.id}`">{{product.product.title | globalTruncate(30)}}</a>

                      <!-- <div class="text-body font-size-1 mb-1">
                        <span>Gender:</span>
                        <span>Men</span>
                      </div>
                      <div class="text-body font-size-1 mb-1">
                        <span>Color:</span>
                        <span>Grey</span>
                      </div> -->

                      <div class="text-body font-size-1 mb-1">
                        <span class="d-block text-muted mb-0"> {{product.product.quantity}} en stock</span>
                      </div>

                    </div>

                    <!-- Quantity -->
                    <div class="col-md-3">
                      <div class="row">
                        <div class="col-auto">
                            <input type="number" id="exampleFormControlInput1" class="form-control" @change="changeQuantity(index)" v-model="product.quantity">
                          <!-- <select class="custom-select custom-select-sm w-auto mb-3">
                            <option value="quantity1">1</option>
                            <option value="quantity2">2</option>
                            <option value="quantity3">3</option>
                            <option value="quantity4">4</option>
                            <option value="quantity5">5</option>
                            <option value="quantity6">6</option>
                            <option value="quantity7">7</option>
                            <option value="quantity8">8</option>
                            <option value="quantity9">9</option>
                            <option value="quantity10">10</option>
                          </select> -->
                        </div>

                        <div class="col-auto">
                          <a class="d-block text-body font-size-1 mb-1" @click.prevent="remove(index)" href="javascript:;">
                            <i class="far fa-trash-alt text-hover-primary mr-1"></i>
                            <span class="font-size-1 text-hover-primary">Remove</span>
                          </a>

                          <!-- <a class="d-block text-body font-size-1" href="javascript:;">
                            <i class="far fa-heart text-hover-primary mr-1"></i>
                            <span class="font-size-1 text-hover-primary">Save for later</span>
                          </a> -->
                        </div>
                      </div>
                    </div>

                    <div class="col-4 col-md-2 d-none d-md-inline-block text-right">
                      <span class="h5 d-block mb-1">${{ product.product.price }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Product Content -->


            <div class="d-sm-flex justify-content-end">
              <a class="font-weight-bold" href="/categories">
                <i class="fas fa-angle-left fa-xs mr-1"></i>
                Seguir comprando
              </a>
            </div>
          </form>
        </div>

        <div class="col-lg-4">
          <div class="pl-lg-4">
            <!-- Order Summary -->
            <div class="card shadow-soft p-4 mb-4">
              <!-- Title -->
              <div class="border-bottom pb-4 mb-4">
                <h2 class="h3 mb-0">Resumen de la orden</h2>
              </div>
              <!-- End Title -->

              <div class="border-bottom pb-4 mb-4">
                <div class="media align-items-center mb-3">
                  <span v-if="cart.products" class="d-block font-size-1 mr-3">Subtotal ({{cart.products.length}})</span>
                  <div class="media-body text-right">
                    <span class="text-dark font-weight-bold">${{cart.subtotal}}</span>
                  </div>
                </div>

                <div class="media align-items-center mb-3">
                  <span class="d-block font-size-1 mr-3">Envio</span>
                  <div class="media-body text-right">
                    <span class="text-dark font-weight-bold">Gratis</span>
                  </div>
                </div>

                <!-- Checkbox -->
                <div class="card shadow-none mb-3">
                  <div class="card-body p-0">
                    <div class="custom-control custom-radio d-flex align-items-center small">
                      <input type="radio" class="custom-control-input" id="deliveryRadio1" name="deliveryRadio" checked>
                      <label class="custom-control-label ml-1" for="deliveryRadio1">
                        <span class="d-block font-size-1 font-weight-bold mb-1">Gratis - Envio Estandar</span>
                        <span class="d-block text-muted">El envio llegara entre 5-6 dias habiles.</span>
                      </label>
                    </div>
                  </div>
                </div>
                <!-- End Checkbox -->

                <!-- Checkbox -->
                <div class="card shadow-none">
                  <div class="card-body p-0">
                    <div class="custom-control custom-radio d-flex align-items-center small">
                      <input type="radio" class="custom-control-input" id="deliveryRadio2" name="deliveryRadio">
                      <label class="custom-control-label ml-1" for="deliveryRadio2">
                        <span class="d-block font-size-1 font-weight-bold mb-1">$7.99 - Envio Express</span>
                        <span class="d-block text-muted">El envio puede llegar entre 2-3 dias habiles.</span>
                      </label>
                    </div>
                  </div>
                </div>
                <!-- End Checkbox -->
              </div>

              <div class="media align-items-center mb-3">
                <span class="d-block font-size-1 mr-3">Impuesto extimado</span>
                <div class="media-body text-right">
                  <span class="text-dark font-weight-bold">${{cart.total - cart.subtotal }}</span>
                </div>
              </div>

              <div class="media align-items-center mb-3">
                <span class="d-block font-size-1 mr-3">Total</span>
                <div class="media-body text-right">
                  <span class="text-dark font-weight-bold">${{ cart.total }}</span>
                </div>
              </div>

              <div class="row mx-1">
                <div class="col px-1 my-1">
                  <a class="btn btn-primary btn-block btn-pill transition-3d-hover" href="#">Pagar</a>
                </div>
              </div>
              <div class="row mx-1">
                <div class="col px-1 my-1">
                  <button type="submit" class="btn btn-soft-warning btn-block btn-pill transition-3d-hover">
                    <img :src="appSettings.STATIC_URL+'img/logos/paypal.png'" width="70" alt="PayPal logo">
                  </button>
                </div>
              </div>
            </div>
            <!-- End Order Summary -->

            <!-- Accordion -->
            <div id="shopCartAccordion" class="accordion card shadow-soft mb-4">
              <!-- Card -->
              <div class="card rounded">
                <div class="card-header card-collapse" id="shopCartHeadingOne">
                  <h3 class="mb-0">
                    <a class="btn btn-link btn-block card-btn font-weight-bold collapsed" href="javascript:;" role="button"
                            data-toggle="collapse"
                            data-target="#shopCartOne"
                            aria-expanded="false"
                            aria-controls="shopCartOne">
                      Codigo de promocion?
                      <i class="far fa-question-circle text-body ml-1" data-container="body" data-toggle="popover" data-placement="top" data-trigger="hover" title="Promo code" data-content="Valido en el precio del producto. Algunos productos podrian estar excluidos."></i>
                    </a>
                  </h3>
                </div>
                <div id="shopCartOne" class="collapse" aria-labelledby="shopCartHeadingOne" data-parent="#shopCartAccordion">
                  <form class="js-validate p-4">
                    <div class="input-group input-group-pill mb-3">
                      <input type="text" class="form-control" name="name" placeholder="Codigo de promo" aria-label="Promo code">
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-block btn-primary btn-pill">Aplicar</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- End Card -->
            </div>
            <!-- End Accordion -->

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
      </div>
    </div>
    <!-- End Cart Section -->

    <!-- Empty Cart Section -->
    <div v-else class="container space-2 space-lg-3">
      <div class="w-md-80 w-lg-50 text-center mx-md-auto">
        <figure class="max-w-10rem max-w-sm-15rem mx-auto mb-3">
          <img class="img-fluid" :src="appSettings.STATIC_URL+'svg/illustrations/empty-cart.svg'" alt="SVG">
        </figure>
        <div class="mb-5">
          <h1 class="h2">Tu carrito esta vacio</h1>
          <p>Antes de proceder a comprar debes agregar algun producto a tu carrito de compras. Podras estar interezado en algun producto de nuestro catalogo.</p>
        </div>
        <a class="btn btn-primary btn-pill transition-3d-hover px-5" href="/categories">Ir a Comprar</a>
      </div>
    </div>
    <!-- Empty Cart Section -->
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
</template>

<script>
    import {mapState} from 'vuex'
    import CartService from '@/services/cartService'
    import Swal from 'sweetalert2'

    

    export default {
        props:[
        ],
        data () {
            return {
              cart:{},
              productAdded:null
            }
        },
        computed:{
          ...mapState(['appSettings']),
        }
        ,
        mounted:function(){
            this.getData()
            // 
            this.productAdded =  localStorage.getItem('producAdded')?localStorage.getItem('producAdded'):null;
            localStorage.removeItem('producAdded');

        },
        updated() {
          
        },
        components:{
           
        },
        methods:{
            remove(index){
              let product = this.cart.products[index]

              Swal.fire({
                title: 'Estas seguro?',
                text: "No podras revertirlo!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, borralo!'
              }).then((result) => {
                if (result.isConfirmed) {

                   CartService.removeProduct(product.product.id)
                  .then(
                    res => {
                      Swal.fire(
                        'Eliminado!',
                        'El producto salio del carrito',
                        'success'
                      )
                      this.getData()
                    }
                  )
                  
                }
              })

             
            },
            getData(){
              CartService.getCurrentCart()
              .then(
                res => this.cart = res
              )

            },
            changeQuantity(productIndex){

              //if is minor than 1 set to 1
              if(this.cart.products[productIndex].quantity <= 0){
                this.cart.products[productIndex].quantity = 1
              }

              // if is major than stock set to stock
              if(this.cart.products[productIndex].quantity > this.cart.products[productIndex].product.quantity ){
                this.cart.products[productIndex].quantity = this.cart.products[productIndex].product.quantity
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
</style>