import { createStore } from 'vuex'
import page from './modules/page2'
import user from './modules/user'

export default createStore({
  modules: {
    page,
    user
  }
})
