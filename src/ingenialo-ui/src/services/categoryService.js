import api from '@/api/index.js'

const CategoryService = {}

CategoryService.getCategories = function(){
    return api.get(`/categories`)
    .then(res=> res.data)
}

CategoryService.getCategory = function(categoryId){
    return api.get(`/categories/${categoryId}`)
    .then(res=> res.data)
}

export default CategoryService