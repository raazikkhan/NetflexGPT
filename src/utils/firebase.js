// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// ✅ Correct Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk7htuvAhsobIpTlPicPsJ5O_S2kYB66Y",
  authDomain: "netflixgpt-6929b.firebaseapp.com",
  projectId: "netflixgpt-6929b",
  storageBucket: "netflixgpt-6929b.appspot.com", // ✅ fixed here
  messagingSenderId: "429280480023",
  appId: "1:429280480023:web:3efbad5e7924b962df4552",
  measurementId: "G-VSZPR83GT0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Optional: Analytics (only works in browser + https)
const analytics = getAnalytics(app);
console.log(analytics, "analytics");

// ✅ Export auth so you can use in login/signup
export const auth = getAuth(app);
