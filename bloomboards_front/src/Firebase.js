// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwiYrHkuPi45a7er0FsY2HA_Npl4jXtpo",
  authDomain: "bloomboards-10f1a.firebaseapp.com",
  projectId: "bloomboards-10f1a",
  storageBucket: "bloomboards-10f1a.appspot.com",
  messagingSenderId: "529660089698",
  appId: "1:529660089698:web:88df9c5b9c2f014fbf083b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//instantiate providers
const provider = new GoogleAuthProvider();

// get current auth instance
export const auth = getAuth(app);

// set up auth functions

export function logIn(e) {
  e.preventDefault()
	return signInWithPopup(auth, provider);
}

export function logOut() {
	return signOut(auth);
}