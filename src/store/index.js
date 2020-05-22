import Vue from 'vue'
import Vuex from 'vuex'
import razdel from './modules/razdel'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    razdel,
    user
  }
})
