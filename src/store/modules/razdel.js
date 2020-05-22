import { db } from "@/main.js";

export default {
  state: {
    razdel: []
  },
  mutations: {
    getItem(state) {
      db.collection('razdel').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            state.razdel.push(doc.data());
          });
        })
        .catch((err) => {
          console.log('Error getting documents razdel', err);
        });
    },
    createItem(state, razdel) {
      state.razdel.push(razdel);

      db.collection('razdel')
        .doc(razdel.id)
        .set(razdel)
        .then(() => { console.log("Document successfully written! razdel"); })
        .catch(err => { console.error("Error writing document razdel: ", err) });
    }
  },
  actions: {
    createItem({ commit }, razdel) {
      commit('createItem', razdel)
    },
    getRazdels({ commit }) {
      commit('getItem')
    }
  },
  getters: {
    razdels: state => state.razdel,
    razdelById: state => id => state.razdel.find(razdel => razdel.id === id)
  }
}