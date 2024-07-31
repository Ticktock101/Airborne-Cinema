// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi9XIkbScievJdt8kByfAUGwD3PArroFw",
  authDomain: "airborne-cinema.firebaseapp.com",
  projectId: "airborne-cinema",
  storageBucket: "airborne-cinema.appspot.com",
  messagingSenderId: "991046045645",
  appId: "1:991046045645:web:59289a1cfcb8f735333e84",
  measurementId: "G-GF6C4VDRTS",
  storageBucket: "gs://airborne-cinema.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {storage};