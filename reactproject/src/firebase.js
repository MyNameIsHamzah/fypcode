import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import {getDatabase} from "firebase/database";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBO7eOEVfSIonK3WoZo_Z6sqaldiMy3ARE",
    authDomain: "healthandfitnesswebapp.firebaseapp.com",
    projectId: "healthandfitnesswebapp",
    databaseURL: "https://healthandfitnesswebapp-default-rtdb.firebaseio.com",
    storageBucket: "healthandfitnesswebapp.appspot.com",
    messagingSenderId: "972562111972",
    appId: "1:972562111972:web:4d1a713d50671804fe3bf1"
})

export const auth = app.auth()
export const database = getDatabase(app);
export default app

  