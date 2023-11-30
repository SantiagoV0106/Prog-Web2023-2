// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBK1PA3jFTTCXsXM7x0lI108Xwx7bRDTZY",
  authDomain: "pixel-perfect-db.firebaseapp.com",
  projectId: "pixel-perfect-db",
  storageBucket: "pixel-perfect-db.appspot.com",
  messagingSenderId: "1076138686174",
  appId: "1:1076138686174:web:8cc0528d14b7eec90af44f",
  measurementId: "G-ML3E4PHSQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)