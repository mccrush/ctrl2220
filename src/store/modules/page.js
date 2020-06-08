import { db } from "@/main.js";

export default {
  state: {
    napravs: [],
    reshens: [],
    vid_napravs: [],
    abouts: [],
    razdels: []
  },
  mutations: {
    updateElement(state, element) {
      const elements = state[element.razdel].concat()
      const index = state[element.razdel].findIndex(elem => elem.id === element.id)
      elements[index] = element
      state[element.razdel] = elements
    },
    getPages(state, { razdel, elements }) {
      state[razdel] = elements
    },
    createPage(state, page) {
      state[page.razdel].push(page);
    }
  },
  actions: {
    updateElement({ commit, dispatch }, element) {
      db.collection(element.razdel).doc(element.id).update(element)
        .then(function () {
          console.log("Document successfully updated! From Element");
        })
        .catch(function (error) {
          console.error("Error updating document From Element: ", error);
        });

      commit('updateElement', element)
      //dispatch('getPages', element.razdel)
    },
    createPage({ commit }, page) {
      db.collection(page.razdel)
        .doc(page.id)
        .set(page)
        .then(() => { console.log("Document successfully written! page"); })
        .catch(err => { console.error("Error writing document page: ", err) });

      commit('createPage', page)
    },
    getPages({ commit }, razdel) {
      const elements = []
      db.collection(razdel).get()
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
    abouts: state => state.abouts,
    razdels: state => state.razdels,
  }
}