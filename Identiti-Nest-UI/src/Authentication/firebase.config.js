// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMeIHKmU72ZB60nETGV1f7msl9YKuRV8U",
  authDomain: "identity-nest.firebaseapp.com",
  projectId: "identity-nest",
  storageBucket: "identity-nest.appspot.com",
  messagingSenderId: "640189625608",
  appId: "1:640189625608:web:c3cd09ad1a1aae6e49e8bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth