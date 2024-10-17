// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDnYA_3dx_BRz-4INPL3I4s1NzUonclTxM",
  authDomain: "vodafone-f3364.firebaseapp.com",
  projectId: "vodafone-f3364",
  storageBucket: "vodafone-f3364.appspot.com",
  messagingSenderId: "604698894010",
  appId: "1:604698894010:web:ab79ef72bb53d0fe922c83",
  measurementId: "G-K2TTLV1CBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);