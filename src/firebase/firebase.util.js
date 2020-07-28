import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAb2WVNyMqI4GVPeYVw9FTddmyjU8on-rc",
    authDomain: "tapas-shop.firebaseapp.com",
    databaseURL: "https://tapas-shop.firebaseio.com",
    projectId: "tapas-shop",
    storageBucket: "tapas-shop.appspot.com",
    messagingSenderId: "1074321968467",
    appId: "1:1074321968467:web:b1af7e33445ac4240ca5a6",
    measurementId: "G-DYR0EPR4LV"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;