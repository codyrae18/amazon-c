// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtjP683QKRwE8jz-6Epx-NpPd3w_iNLYs",
  authDomain: "clone-ca6d5.firebaseapp.com",
  projectId: "clone-ca6d5",
  storageBucket: "clone-ca6d5.appspot.com",
  messagingSenderId: "663426459303",
  appId: "1:663426459303:web:7a3dee42aa95dc5aad1d82",
  measurementId: "G-K612LHGP2S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
