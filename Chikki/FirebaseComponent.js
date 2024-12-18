// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAAjso818l6pkaLyVy33ih27QqsRdzccm0",
  authDomain: "maganlal-auth.firebaseapp.com",
  projectId: "maganlal-auth",
  storageBucket: "maganlal-auth.appspot.com",
  messagingSenderId: "723977854823",
  appId: "1:723977854823:web:9bf8e19942c2f162d899c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);