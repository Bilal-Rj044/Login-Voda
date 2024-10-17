// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApx49gYBbEDxuFcr1LqK0Wj5Siv6HrYBY",
  authDomain: "vodafoneupgrade.firebaseapp.com",
  projectId: "vodafoneupgrade",
  storageBucket: "vodafoneupgrade.appspot.com",
  messagingSenderId: "352948799573",
  appId: "1:352948799573:web:1b2a649bb4f2f604d76cdc",
  measurementId: "G-Q0T8Q5FM1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);  // Export Firestore instance