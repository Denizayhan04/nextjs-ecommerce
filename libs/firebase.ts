// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAolXQaN2JSlZXESM2WOxFHD81JJH8xqGQ",
  authDomain: "ticaret-6d9f2.firebaseapp.com",
  projectId: "ticaret-6d9f2",
  storageBucket: "ticaret-6d9f2.appspot.com",
  messagingSenderId: "876282304425",
  appId: "1:876282304425:web:81c001c6308cb6d56f56b8",
  measurementId: "G-7FWNEQPLVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app