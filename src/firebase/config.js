import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9T3qqEPVj23-fbMznohgqas96GYI0oLE",
  authDomain: "react-firebase-github-au-d7d62.firebaseapp.com",
  projectId: "react-firebase-github-au-d7d62",
  storageBucket: "react-firebase-github-au-d7d62.appspot.com",
  messagingSenderId: "611610448303",
  appId: "1:611610448303:web:0db713342daa4ec30c9f5a"
};
initializeApp(firebaseConfig);
// Initialize Firebase Auth
const auth = getAuth();
// Initialize Firebase Firestore
const db = getFirestore();
export { auth, db };