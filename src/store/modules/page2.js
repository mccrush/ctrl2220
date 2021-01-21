import { db } from "@/firebase.js";

export default {
  state: {
    napravs: [],
    reshens: [],
    vid_napravs: [],
    abouts: [],
    razdels: []
  },
  mutations: {
    getPages(state, { razdel, pages }) {
      console.log('Запущена мутация getPages. Пришел massiv: ', pages)
      state[razdel] = pages
    }
  },
  actions: {
    async getPages({ commit }, razdel) {
      console.log('Запущено действие getPages. Пришел раздел: ', razdel);
      try {
        const pages = []
        const pagesRef = db.collection(razdel)
        const snapshot = await pagesRef.get()

        if (snapshot.empty) {
          console.log('Запрос вернул пустую коллекцию из БД')
          return
        }

        snapshot.forEach(doc => {
          pages.push(doc.data())
        })

        commit('getPages', { razdel, pages })
      } catch (error) {
        throw error
      }
    },
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