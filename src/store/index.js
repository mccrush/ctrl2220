import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from "@/main.js";
import { db } from "@/main.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    razdel: [],
    page: [],
    user: null
  },
  mutations: {
    getRazdels(state) {
      db.collection('razdel').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            state.razdel.push(doc.data());
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
    },
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
    getRazdels({ commit }) {
      commit('getRazdels')
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
    razdels: state => state.razdel,
    razdelById: state => id => state.razdel.find(razdel => razdel.id === id),
    user: state => state.user
  }
})
