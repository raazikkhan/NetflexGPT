// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk7htuvAhsobIpTlPicPsJ5O_S2kYB66Y",
  authDomain: "netflixgpt-6929b.firebaseapp.com",
  projectId: "netflixgpt-6929b",
  storageBucket: "netflixgpt-6929b.firebasestorage.app",
  messagingSenderId: "429280480023",
  appId: "1:429280480023:web:3efbad5e7924b962df4552",
  measurementId: "G-VSZPR83GT0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
console.log(analytics);
