import { db } from "@/main.js";

export default {
  state: {
    naprav: [],
    reshen: [],
    vid_naprav: [],
    about: []
  },
  mutations: {
    getPages(state, razdel) {
      db.collection(razdel).get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            state[razdel].push(doc.data());
          });
        })
        .catch((err) => {
          console.log('Error getting documents page', err);
        });
    },
    createPage(state, page) {
      state[page.razdel].push(page);

      db.collection(page.razdel)
        .doc(page.id)
        .set(page)
        .then(() => { console.log("Document successfully written! page"); })
        .catch(err => { console.error("Error writing document page: ", err) });
    }
  },
  actions: {
    createPage({ commit }, page) {
      commit('createPage', page)
    },
    getPages({ commit }, razdel) {
      commit('getPages', razdel)
    }
  },
  getters: {
    napravById: state => id => state.naprav.find(naprav => naprav.id === id),
    naprav: state => state.naprav,
    reshen: state => state.reshen,
    vid_naprav: state => state.vid_naprav,
    about: state => state.about
  }
}