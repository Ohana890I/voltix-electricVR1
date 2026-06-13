import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeZ-d_xvcw_nZTaa4CER0m3TjYwoE3VW0",
  authDomain: "voltix-electric.firebaseapp.com",
  projectId: "voltix-electric",
  storageBucket: "voltix-electric.firebasestorage.app",
  messagingSenderId: "241517280804",
  appId: "1:241517280804:web:cef05ac5a84364118262b1",
  measurementId: "G-BV8K3CZ95Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);