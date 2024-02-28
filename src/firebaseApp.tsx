// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmE5Z0UIp6k4qZvKhXayRJf-JHL4pIEEs",
  authDomain: "utv-cnannel-app.firebaseapp.com",
  projectId: "utv-cnannel-app",
  storageBucket: "utv-cnannel-app.appspot.com",
  messagingSenderId: "61462748636",
  appId: "1:61462748636:web:625bc19140c5f119be0319",
  measurementId: "G-RQESMXS1FY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);