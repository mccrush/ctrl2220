import { db } from "@/main.js";

export default {
  state: {
    naprav: [],
    reshen: [],
    vid_naprav: [],
    about: []
  },
  mutations: {
    getItem(state) {
      db.collection('naprav').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            state.naprav.push(doc.data());
          });
        })
        .catch((err) => {
          console.log('Error getting documents naprav', err);
        });
    },
    createPage(state, page) {
      state[page.razdel].push(page);

      db.collection(page.razdel)
        .doc(page.id)
        .set(page)
        .then(() => { console.log("Document successfully written! naprav"); })
        .catch(err => { console.error("Error writing document naprav: ", err) });
    }
  },
  actions: {
    createPage({ commit }, page) {
      commit('createPage', page)
    },
    getPage({ commit }) {
      commit('getItem')
    }
  },
  getters: {
    napravs: state => state.naprav,
    napravById: state => id => state.naprav.find(naprav => naprav.id === id)
  }
}