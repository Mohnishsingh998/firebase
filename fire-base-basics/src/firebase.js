// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTA10Fni4Y2HLhkI2bA8bULLsP7phqyjk",
  authDomain: "my-app-4bf3a.firebaseapp.com",
  projectId: "my-app-4bf3a",
  storageBucket: "my-app-4bf3a.firebasestorage.app",
  messagingSenderId: "1099045995878",
  appId: "1:1099045995878:web:2dd521b951a7a6407674a7",
  databaseURL: "https://my-app-4bf3a-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);