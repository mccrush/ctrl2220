import { createStore } from 'vuex'
import page from './modules/page'
import user from './modules/user'

Vue.use(Vuex)

export default createStore({
  modules: {
    page,
    user
  }
})
