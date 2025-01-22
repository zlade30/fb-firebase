// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS6H_nqtFB8vA8EXFzkyzmSzXWPmeomMo",
  authDomain: "fb-firebase-4603a.firebaseapp.com",
  projectId: "fb-firebase-4603a",
  storageBucket: "fb-firebase-4603a.firebasestorage.app",
  messagingSenderId: "258265968115",
  appId: "1:258265968115:web:70d2261863d2ddf1acf686",
  measurementId: "G-VL1FG29CDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics }