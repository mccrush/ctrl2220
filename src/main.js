import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { apiKey } from '../apiKey'
const firebaseConfig = {
  apiKey,
  authDomain: "ctrl2220.firebaseapp.com",
  databaseURL: "https://ctrl2220.firebaseio.com",
  projectId: "ctrl2220",
  storageBucket: "ctrl2220.appspot.com",
  messagingSenderId: "31311777944",
  appId: "1:31311777944:web:09ea4ea8bdb2ae3a2d80ed",
  measurementId: "G-3566KJWVFP"
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
