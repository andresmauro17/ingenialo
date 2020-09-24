import api from '@/api/index.js'

const ProductService = {}

ProductService.getProduct = function(produtId){
    return api.get(`/products/${produtId}`)
    .then(res=> res.data)
}

export default ProductService