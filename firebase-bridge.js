import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot, setDoc, collection, query, where } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-functions.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZyzV1FfeV_5V6VIaeFDluPOSpKjVMsJE",
  authDomain: "mensa-mittelbergschule.firebaseapp.com",
  projectId: "mensa-mittelbergschule",
  storageBucket: "mensa-mittelbergschule.firebasestorage.app",
  messagingSenderId: "66867389897",
  appId: "1:66867389897:web:5d6730d8e24ce3a2293418"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

const functions = getFunctions(app, "europe-west1");

const createPayPalOrder = httpsCallable(functions, "createPayPalOrder");
const capturePayPalOrder = httpsCallable(functions, "capturePayPalOrder");

window.mensaFirebase = { setDoc, 
  createPayPalOrder,
  capturePayPalOrder,
  auth,
  signInWithEmailAndPassword,
  signOut,
  db,
  doc,
  getDoc,
  onSnapshot,
  collection,
  query,
  where
};

console.log("MensaConnect: Firebase vorbereitet.");
