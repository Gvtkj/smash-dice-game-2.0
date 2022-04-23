// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbgn3KTsAoiNCecrWeIxJyA9nG5uH8v5k",
  authDomain: "smash-dice-game.firebaseapp.com",
  databaseURL: "https://smash-dice-game-default-rtdb.firebaseio.com",
  projectId: "smash-dice-game",
  storageBucket: "smash-dice-game.appspot.com",
  messagingSenderId: "762148609845",
  appId: "1:762148609845:web:f04769df28e099a0ea767c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};