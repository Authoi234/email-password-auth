// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC57shyiaLJPqMKJlbe3Ivn_UnJAZlDm9o",
  authDomain: "email-password-auth-f4a49.firebaseapp.com",
  projectId: "email-password-auth-f4a49",
  storageBucket: "email-password-auth-f4a49.appspot.com",
  messagingSenderId: "715046484812",
  appId: "1:715046484812:web:90fba8a15a96dad0dbede9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app