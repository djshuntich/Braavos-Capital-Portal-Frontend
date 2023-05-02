import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAce0n5G4yv3rVmdMJcmbuBqtvmkNQhmOA",
  authDomain: "test-4b114.firebaseapp.com",
  projectId: "test-4b114",
  storageBucket: "test-4b114.appspot.com",
  messagingSenderId: "826009764801",
  appId: "1:826009764801:web:b98a6175c81837f632e540",
  measurementId: "G-63DK26CZW6",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
