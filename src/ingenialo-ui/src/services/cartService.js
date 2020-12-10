import api from '@/api/index.js'

const CartService = {}

CartService.getCurrentCart = function(){
    return api.get(`/cart`)
    .then(res=> res.data)
}

CartService.removeProduct = function(id){
    return api.delete(`/cart/product/${id}`)
    .then(res=> res.data)
}

export default CartService