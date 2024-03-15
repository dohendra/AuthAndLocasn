// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authandlocasn.firebaseapp.com",
  projectId: "authandlocasn",
  storageBucket: "authandlocasn.appspot.com",
  messagingSenderId: "275658125119",
  appId: "1:275658125119:web:464ca28c224672c0396d8a",
  measurementId: "G-JKG0H0JP4L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);