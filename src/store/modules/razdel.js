import { db } from "@/main.js";

export default {
  state: {
    razdel: []
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
    }
  },
  actions: {
    createRazdel({ commit }, razdel) {
      commit('createRazdel', razdel)
    },
    getRazdels({ commit }) {
      commit('getRazdels')
    }
  },
  getters: {
    razdels: state => state.razdel,
    razdelById: state => id => state.razdel.find(razdel => razdel.id === id)
  }
}