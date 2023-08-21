// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG9bbmzDxiTXACrnGAo8zOdbneOCaqBj8",
  authDomain: "remind-me-47169.firebaseapp.com",
  projectId: "remind-me-47169",
  storageBucket: "remind-me-47169.appspot.com",
  messagingSenderId: "937101783745",
  appId: "1:937101783745:web:2d273dba96ba52f4115a40",
  measurementId: "G-MJE6RN9727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
