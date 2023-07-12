// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLhXk8wRQ8Q3N1Okwdd3hakI5sac26fr8",
  authDomain: "aplicaciones-3c.firebaseapp.com",
  projectId: "aplicaciones-3c",
  storageBucket: "aplicaciones-3c.appspot.com",
  messagingSenderId: "570539153980",
  appId: "1:570539153980:web:3ba3f2acba211f3078c139",
  measurementId: "G-ZJVED20V8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);