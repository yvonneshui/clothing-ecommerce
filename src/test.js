import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("V9XfGe1GT50ZyvYKEH40")
  .collection("cartItems")
  .doc("MFJ3RhLkd8Xw8OE6ohWU");

firestore.doc("/users/V9XfGe1GT50ZyvYKEH40/cartItems/MFJ3RhLkd8Xw8OE6ohWU");
