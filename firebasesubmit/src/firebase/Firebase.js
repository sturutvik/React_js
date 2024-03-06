
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import{getStorage}from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCaCWuHuEEU3NmZ3dpQp3FmVPTK4bVkcac",
    authDomain: "reactfirebase-a7e85.firebaseapp.com",
    projectId: "reactfirebase-a7e85",
    storageBucket: "reactfirebase-a7e85.appspot.com",
    messagingSenderId: "608235519414",
    appId: "1:608235519414:web:ddae73c688133ce66d5517",
    measurementId: "G-8CL1YXSW41"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
export const images= getStorage(app)

