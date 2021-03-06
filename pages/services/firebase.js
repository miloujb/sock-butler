import firebase from "firebase/app"
import "firebase/auth"
import loadConfig from "next/dist/next-server/server/config";


var firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID 
    
  };

  export default function initFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  }

 
  module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    }
  }