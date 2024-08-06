import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQvbOdtXUBNZzxYg1Em4JtPWGod7GKiTM",
    authDomain: "fir-levan.firebaseapp.com",
    projectId: "fir-levan",
    storageBucket: "fir-levan.appspot.com",
    messagingSenderId: "195395237643",
    appId: "1:195395237643:web:66980a6ff1a77d1184d40e",
    measurementId: "G-PNRZSK9TF7"
  };

  const app = initializeApp(firebaseConfig);    

  export const db = getFirestore(app);