import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9

const app = firebase.initializeApp({
    apiKey: "AIzaSyBO7eOEVfSIonK3WoZo_Z6sqaldiMy3ARE",
    authDomain: "healthandfitnesswebapp.firebaseapp.com",
    projectId: "healthandfitnesswebapp",
    storageBucket: "healthandfitnesswebapp.appspot.com",
    messagingSenderId: "972562111972",
    appId: "1:972562111972:web:4d1a713d50671804fe3bf1"
})

export const auth = app.auth()
export default app

