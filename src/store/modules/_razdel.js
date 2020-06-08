import { db } from "@/main.js";

export default {
  state: {
    razdels: []
  },
  mutations: {
    getItem(state) {
      db.collection('razdels').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            state.razdels.push(doc.data());
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
    //razdels: state => state.razdels,
    razdelById: state => id => state.razdels.find(razdel => razdel.id === id)
  }
}