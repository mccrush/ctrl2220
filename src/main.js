import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { auth } from './firebase'


//store.dispatch("getPages", 'razdels');
//store.dispatch("getPages", 'napravs');
// store.dispatch("getPages", 'reshens');
//store.dispatch("getPages", 'vid_napravs');
//store.dispatch("getPages", 'abouts');

let app

auth.onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
  if (user) {
    store.dispatch("logIn");
  }
})