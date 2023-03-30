// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABC1ALhgzEBaZanOjUfLG6Ztlt2y1cqDw",
  authDomain: "bloomboards-b22a1.firebaseapp.com",
  projectId: "bloomboards-b22a1",
  storageBucket: "bloomboards-b22a1.appspot.com",
  messagingSenderId: "78574041317",
  appId: "1:78574041317:web:5bd08dbdf948f4b2c03c0c",
  measurementId: "G-NHM7W1BLS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//instantiate providers
const provider = new GoogleAuthProvider();

// get current auth instance
export const auth = getAuth(app);

// set up auth functions

export function logIn() {
	return signInWithPopup(auth, provider);
}

export function logOut() {
	return signOut(auth);
}