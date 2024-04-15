// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIk2k-38IgXj-XvRn8AtKcVJpqL4O4_Yg",
  authDomain: "real-estate-7efe6.firebaseapp.com",
  projectId: "real-estate-7efe6",
  storageBucket: "real-estate-7efe6.appspot.com",
  messagingSenderId: "837283271636",
  appId: "1:837283271636:web:356f14e1acee52c3c0fc41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
