// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYG4zdSWN8yfXrLVu7U5_ygMGTHeyOAIo",
  authDomain: "netflix-clone-cac0c.firebaseapp.com",
  projectId: "netflix-clone-cac0c",
  storageBucket: "netflix-clone-cac0c.appspot.com",
  messagingSenderId: "983755740673",
  appId: "1:983755740673:web:f9e3acd54fa48a06361200",
  measurementId: "G-EWB2RQSMXL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
console.log(analytics);
