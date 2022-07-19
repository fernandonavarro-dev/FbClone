// import { initializeApp } from "firebase/app"
import firebase from "firebase"
import 'firebase/storage'
// import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCScO422BXeAe4xViH6nYyIleToNO8gtwU",
    authDomain: "fb-clone-7f813.firebaseapp.com",
    projectId: "fb-clone-7f813",
    storageBucket: "fb-clone-7f813.appspot.com",
    messagingSenderId: "725614364649",
    appId: "1:725614364649:web:fac53481a5c317202aad78"
  }

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app()
// const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()
const storage = firebase.storage()

export {db, storage}