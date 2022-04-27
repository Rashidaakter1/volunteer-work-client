// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPRHfPBEIKfgI9bgs05_oWmRQhJ6DX2AA",
  authDomain: "volunteer-work-ec843.firebaseapp.com",
  projectId: "volunteer-work-ec843",
  storageBucket: "volunteer-work-ec843.appspot.com",
  messagingSenderId: "467280437196",
  appId: "1:467280437196:web:083e9442c1968227794769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;