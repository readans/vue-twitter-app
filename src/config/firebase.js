// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBEOUFcjgd3v9ZCgaHqRyx62r__MNFd3E",
  authDomain: "twitter-5d0ef.firebaseapp.com",
  projectId: "twitter-5d0ef",
  storageBucket: "twitter-5d0ef.firebasestorage.app",
  messagingSenderId: "1081599690041",
  appId: "1:1081599690041:web:246944b648c2d12ee494e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
