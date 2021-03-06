import firebase from "firebase/app"
import "firebase/auth"
import loadConfig from "next/dist/next-server/server/config";


var firebaseConfig = {
    apiKey: NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: NEXT_FIREBASE_AUTH_DOMAIN,
    databaseURL: NEXT_PUBLIC_FIREBASE_DB_URL,
    projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID 
    
  };

  export default function initFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  }