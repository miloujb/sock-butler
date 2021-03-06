import admin from "firebase-admin"
const serviceAccount = require("./secrets.json")

export const VerifyIdToken = (token) => {
    if(!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://sock-butler-6e8d7-default-rtdb.europe-west1.firebasedatabase.app/"
        })
    }
    return admin.auth().verifyIdToken(token).catch((error) => {
        throw error;
    })
}