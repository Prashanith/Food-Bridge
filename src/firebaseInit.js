import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAL_TtEXLfcfHuJA_jxfJEzZjcg_6Srcws",
    authDomain: "foodbridge-fca1c.firebaseapp.com",
    projectId: "foodbridge-fca1c",
    storageBucket: "foodbridge-fca1c.appspot.com",
    messagingSenderId: "304312694227",
    appId: "1:304312694227:web:7276229ca5e8f379baab26",
    measurementId: "G-DYN7GL65MH"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth=firebase.auth();

export {
    db,
    auth,
    firebase
};