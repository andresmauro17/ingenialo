// general scss
import './assets/scss/theme.scss'
import './assets/vendor/font-awesome/css/all.min.css'


import HeaderComponent from './components/layout/HeaderComponent'
import FooterComponent from './components/layout/FooterComponent'

import homeService from '@/services/homeService.js'

import { mapState } from 'vuex'

const App  = {
    el: '#app',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    },
    computed:{
      ...mapState(['appSettings'])
    },
    mounted(){
      this.getAppSettings()
    },
    methods:{
      getAppSettings(){
        homeService.getAppSettings()
                .then(res=>{
                    this.$store.commit('setAppSettings',res)
                })
      }
    },
    components:{
      HeaderComponent,
      FooterComponent
    },
}

export default App

