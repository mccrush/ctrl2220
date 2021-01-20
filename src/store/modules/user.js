import { auth } from "@/firebase.js";

export default {
  state: {
    user: null
  },
  mutations: {
    logIn(state) {
      state.user = {
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        name: auth.currentUser.name,
      }
    },
    logOut(state) {
      state.user = null;
    }
  },
  actions: {
    logIn({ commit }) {
      commit('logIn')
    },
    logOut({ commit }) {
      commit('logOut')
    }
  },
  getters: {
    user: state => state.user
  }
}