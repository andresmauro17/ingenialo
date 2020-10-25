import api from '@/api/index.js'

const ProductService = {}

ProductService.getProduct = function(produtId){
    return api.get(`/products/${produtId}`)
    .then(res=> res.data)
}

ProductService.addToCart = function(form){
    console.log("adding cart")
    return api.post(`/cart/add`,form)
    .then(res=>res)
}

export default ProductService