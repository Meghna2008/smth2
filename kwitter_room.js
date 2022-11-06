// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjyPxceUXptpgjNN4Jk0tZSgmIXE-vHYs",
  authDomain: "proj-94-65b73.firebaseapp.com",
  projectId: "proj-94-65b73",
  storageBucket: "proj-94-65b73.appspot.com",
  messagingSenderId: "497638767801",
  appId: "1:497638767801:web:0558e1aa869e2fba32af68",
  measurementId: "G-WKYXKPX46C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);