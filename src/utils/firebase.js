// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZu3MjcFOMHLf2pxgvjNFVAJrqoyO_Kyw",
  authDomain: "netflix-5f4b8.firebaseapp.com",
  projectId: "netflix-5f4b8",
  storageBucket: "netflix-5f4b8.appspot.com",
  messagingSenderId: "705207465649",
  appId: "1:705207465649:web:6e75f2b4ac5a9bcef7d490",
  measurementId: "G-5PF4SW8C4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
