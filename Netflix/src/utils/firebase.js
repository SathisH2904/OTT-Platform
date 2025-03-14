// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Ic06dQfFSasuf92n9U1RuWDr3NhScTU",
  authDomain: "netflix-clone-f0521.firebaseapp.com",
  projectId: "netflix-clone-f0521",
  storageBucket: "netflix-clone-f0521.firebasestorage.app",
  messagingSenderId: "1038724912154",
  appId: "1:1038724912154:web:d0209500f26182a7bd2da3" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
