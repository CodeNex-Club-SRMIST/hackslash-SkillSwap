// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqLDOrWZvD_5v4ol3PPm6xnZlYRtIRmDI",
  authDomain: "skillswap-b85a4.firebaseapp.com",
  projectId: "skillswap-b85a4",
  storageBucket: "skillswap-b85a4.firebasestorage.app",
  messagingSenderId: "921344303157",
  appId: "1:921344303157:web:75af4be2ecc9a2443e117c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // ✅ Firestore

export { auth, provider, db }; 
