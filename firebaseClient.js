import firebase from "firebase"

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDEkkEXdbdG9zUvGTVK896_UyTkGK_FnEU",
    authDomain: "sock-butler-6e8d7.firebaseapp.com",
    projectId: "sock-butler-6e8d7",
    storageBucket: "sock-butler-6e8d7.appspot.com",
    messagingSenderId: "137984050380",
    appId: "1:137984050380:web:6f136d2f27bc1658d16e69",
    measurementId: "G-HR0GY7GSGL"
  };

  export default function firebaseClient() {
      if(!firebase.apps.length) {
          firebase.initializeApp(FIREBASE_CONFIG)
      }
  }