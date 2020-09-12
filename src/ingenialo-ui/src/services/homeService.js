import api from '@/api/index.js'

const homeService = {}

homeService.getHeroData = function(){
    return api.get('/home/hero')
    .then(res=> res.data)
}

export default homeService