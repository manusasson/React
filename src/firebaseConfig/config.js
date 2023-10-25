import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// base de datos de produccion
const firebaseConfig = {
  apiKey: "AIzaSyBz1QEA-pDJbhzqWPn41qISBSuIUDe6iaA",
  authDomain: "cursoreactcoder-8e2fd.firebaseapp.com",
  projectId: "cursoreactcoder-8e2fd",
  storageBucket: "cursoreactcoder-8e2fd.appspot.com",
  messagingSenderId: "916704211717",
  appId: "1:916704211717:web:24389007b2c90c9698fd6c",
  measurementId: "G-JE0J68GGN2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
