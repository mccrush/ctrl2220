import Vue from 'vue'
import Vuex from 'vuex'
import razdel from './modules/razdel'
import page from './modules/page'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    razdel,
    page,
    user
  }
})
