import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    razdel: [{ id: '123', title: 'Test Razdel', alias: "testalias", posmenu: 5 }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    razdelById: state => id => state.razdel.find(razdel => razdel.id === id)
  }
})
