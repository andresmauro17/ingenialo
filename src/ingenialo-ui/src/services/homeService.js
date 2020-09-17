import api from '@/api/index.js'

const homeService = {}

homeService.getHeroData = function(){
    return api.get('/home/hero')
    .then(res=> res.data)
}

homeService.getAppSettings = function(){
    return api.get('/home/app-settings')
    .then(res=> res.data)
}

export default homeService