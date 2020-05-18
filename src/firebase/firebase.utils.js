
/** FIREBASE AUTH  */
import firebase from 'firebase/app';
/*  ACCESS TO FIRESTORE */ 
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB4iLdBeEAr0EBW02ZznDvkLwcVsbIAWXo",
  authDomain: "fashiondb-12258.firebaseapp.com",
  databaseURL: "https://fashiondb-12258.firebaseio.com",
  projectId: "fashiondb-12258",
  storageBucket: "fashiondb-12258.appspot.com",
  messagingSenderId: "200159082648",
  appId: "1:200159082648:web:75388515421aa5044778ed",
  measurementId: "G-HYP8NYVNC4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/** */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


