import api from '@/api/index.js'

const CartService = {}

CartService.getCurrentCart = function(){
    return api.get(`/cart`)
    .then(res=> res.data)
}

export default CartService