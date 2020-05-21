import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // DB
import "firebase/storage"; // File

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

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

let app = "";
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  if (user) {
    store.dispatch("logIn");
  }
})