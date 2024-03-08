// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "lamanext-4de6c.firebaseapp.com",
  projectId: "lamanext-4de6c",
  storageBucket: "lamanext-4de6c.appspot.com",
  messagingSenderId: "118151911680",
  appId: "1:118151911680:web:9072871e04b592a8d1fbe5",
  measurementId: "G-LJJPS1LK6F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
