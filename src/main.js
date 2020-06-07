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

import apiKey from '../apiKey'
const firebaseConfig = {
  apiKey,
  authDomain: "site-237c4.firebaseapp.com",
  databaseURL: "https://site-237c4.firebaseio.com",
  projectId: "site-237c4",
  storageBucket: "site-237c4.appspot.com",
  messagingSenderId: "813961811635",
  appId: "1:813961811635:web:2703ce4e3b51bf3a3302c6",
  measurementId: "G-PVQWWMTEZL"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

store.dispatch("getRazdels");
store.dispatch("getPages", 'napravs');
// store.dispatch("getPages", 'reshen');
// store.dispatch("getPages", 'vid_naprav');
// store.dispatch("getPages", 'about');

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