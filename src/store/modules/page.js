import { db } from "@/main.js";

export default {
  state: {
    napravs: [],
    reshens: [],
    vid_napravs: [],
    abouts: []
  },
  mutations: {
    getPages(state, { razdel, elements }) {
      state[razdel] = elements
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
    async getPages({ commit }, razdel) {
      const elements = []
      await db.collection(razdel).get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            elements.push(doc.data());
          });
        })
        .catch((err) => {
          console.log('Error getting documents page', err);
        });

      commit('getPages', { razdel, elements })

    }
  },
  getters: {
    napravById: state => id => state.napravs.find(naprav => naprav.id === id),
    napravs: state => state.napravs,
    reshens: state => state.reshens,
    vid_napravs: state => state.vid_napravs,
    abouts: state => state.abouts
  }
}