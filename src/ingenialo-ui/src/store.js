import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    state:{
        appSettings:{}
    },

    mutations:{
        setAppSettings(state, payload = {}){
            state.appSettings = payload
        }
    }
  
})

export default store