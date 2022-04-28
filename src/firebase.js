// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx1W4a6IgGcWT8j0yZur84-jlkSIFj_Wk",
  authDomain: "fir-practice-c292d.firebaseapp.com",
  databaseURL: "https://fir-practice-c292d-default-rtdb.firebaseio.com",
  projectId: "fir-practice-c292d",
  storageBucket: "fir-practice-c292d.appspot.com",
  messagingSenderId: "658290737824",
  appId: "1:658290737824:web:056538ed2839197b5c7fc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};