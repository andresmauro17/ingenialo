// general scss
import './assets/scss/theme.scss'
import './assets/vendor/font-awesome/css/all.min.css'



import HeaderComponent from './components/layout/HeaderComponent'
import FooterComponent from './components/layout/FooterComponent'

const App  = {
    el: '#app',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    },
    components:{
      HeaderComponent,
      FooterComponent
    },
}

export default App

