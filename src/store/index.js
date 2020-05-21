import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from "@/main.js";
import { db } from "@/main.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    razdel: [{ id: '123', title: 'Test Razdel', alias: "testalias", posmenu: 5 }],
    user: null
  },
  mutations: {
    createRazdel(state, razdel) {
      state.razdel.push(razdel);

      db.collection('razdel')
        .doc(razdel.id)
        .set(razdel)
        .then(() => { console.log("Document successfully written!"); })
        .catch(err => { console.error("Error writing document: ", err) });
    },
    logIn(state) {
      state.user = {
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        name: auth.currentUser.name,
      }
    },
    logOut(state) {
      state.user = null;
    },
  },
  actions: {
    createRazdel({ commit }, razdel) {
      commit('createRazdel', razdel)
    },
    logIn({ commit }) {
      commit('logIn')
    },
    logOut({ commit }) {
      commit('logOut')
    },
  },
  modules: {
  },
  getters: {
    razdelById: state => id => state.razdel.find(razdel => razdel.id === id),
    user: state => state.user
  }
})
