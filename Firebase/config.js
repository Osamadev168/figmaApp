// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8u-hL4SUuRlo7uR2pw3m0mo9u5F0YZEI",
  authDomain: "escape-72fd3.firebaseapp.com",
  projectId: "escape-72fd3",
  storageBucket: "escape-72fd3.appspot.com",
  messagingSenderId: "394800784047",
  appId: "1:394800784047:web:f9b00716512375d0d66a5a",
  measurementId: "G-2NGK0VW7LK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
