// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAL_TtEXLfcfHuJA_jxfJEzZjcg_6Srcws",
    authDomain: "foodbridge-fca1c.firebaseapp.com",
    projectId: "foodbridge-fca1c",
    storageBucket: "foodbridge-fca1c.appspot.com",
    messagingSenderId: "304312694227",
    appId: "1:304312694227:web:7276229ca5e8f379baab26",
    measurementId: "G-DYN7GL65MH"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})
firebase.analytics();

export default firebaseApp.firestore()