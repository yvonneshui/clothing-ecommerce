import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAaJ8M6Tu52y5IjCLndYALnufrjmapB4g8",
  authDomain: "react-clothing-app-91c61.firebaseapp.com",
  projectId: "react-clothing-app-91c61",
  storageBucket: "react-clothing-app-91c61.appspot.com",
  messagingSenderId: "805458758017",
  appId: "1:805458758017:web:22cc158d7a09c446314080",
  measurementId: "G-DS85GCE2FH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
