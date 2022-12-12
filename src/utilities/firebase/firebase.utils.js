import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnWqAGiAHOBMM6Tmebnfjv75mQmek0R8o",
  authDomain: "akarz-clothing-db.firebaseapp.com",
  projectId: "akarz-clothing-db",
  storageBucket: "akarz-clothing-db.appspot.com",
  messagingSenderId: "300043527412",
  appId: "1:300043527412:web:97962b1c275f17ecdaaaa1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
