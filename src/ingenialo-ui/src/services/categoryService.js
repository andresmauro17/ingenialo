import api from '@/api/index.js'

const CategoryService = {}

CategoryService.getCategories = function(){
    return api.get(`/categories`)
    .then(res=> res.data)
}

export default CategoryService