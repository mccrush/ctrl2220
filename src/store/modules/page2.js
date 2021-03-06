import { db } from '@/firebase.js'

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
      state[razdel] = pages
    },
    updateElement(state, element) {
      const elements = state[element.razdel].concat()
      const index = state[element.razdel].findIndex(elem => elem.id === element.id)
      elements[index] = element
      state[element.razdel] = elements
    },
    addElement(state, element) {
      state[element.razdel].push(element)
    },
    deleteElement(state, { razdel, id }) {
      const elements = state[razdel].concat()
      state[razdel] = elements.filter(element => element.id !== id)
    }
  },
  actions: {
    async getPages({ commit }, razdel) {
      try {
        const pages = []
        const pagesRef = db.collection(razdel)
        const snapshot = await pagesRef.get()

        if (snapshot.empty) {
          console.log('Запрос вернул пустую коллекцию ', razdel, ' из БД, actions:getPages()')
          return
        }

        snapshot.forEach(doc => {
          pages.push(doc.data())
        })

        commit('getPages', { razdel, pages })
      } catch (error) {
        console.log('Ошибка при получении коллекции из БД, actions:getPages()', error)
      }
    },
    async updateElement({ commit }, element) {
      try {
        const elementRef = db.collection(element.razdel).doc(element.id)
        const res = await elementRef.update(element)
        commit('updateElement', element)
      } catch (error) {
        console.log('Ошибка при обновлении элемента, actions:updateElement()', error)
      }
    },
    async addElement({ commit }, element) {
      try {
        await db.collection(element.razdel).doc(element.id).set(element)
        commit('addElement', element)
      } catch (error) {
        console.log('Ошибка при добавлении элемента, actions:addElement()', error)
      }
    },
    async deleteElement({ commit }, { razdel, id }) {
      try {
        const res = await db.collection(razdel).doc(id).delete()
        commit('deleteElement', { razdel, id })
      } catch (error) {
        console.log('Ошибка при удалении элемента, actions:deleteElement()', error)
      }
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