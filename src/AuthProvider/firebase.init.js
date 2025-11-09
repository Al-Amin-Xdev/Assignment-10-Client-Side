// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC20EY__ZmwDqj-5wCnFr6Z2DRuxgPeFLk",
  authDomain: "back-end-authentication-70d55.firebaseapp.com",
  projectId: "back-end-authentication-70d55",
  storageBucket: "back-end-authentication-70d55.firebasestorage.app",
  messagingSenderId: "148860804155",
  appId: "1:148860804155:web:8dd0fbe4a3dcbf47bb501e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
