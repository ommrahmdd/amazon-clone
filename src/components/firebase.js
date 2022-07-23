import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCpz7N83mSb4Rop6a6WvgVb3DZo8bCcZ8E",
    authDomain: "fir-92dfa.firebaseapp.com",
    projectId: "fir-92dfa",
    storageBucket: "fir-92dfa.appspot.com",
    messagingSenderId: "943817146627",
    appId: "1:943817146627:web:810503725eb277d60aa936",
    measurementId: "G-4VFHKVQL68"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}