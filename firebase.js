import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCTw8WFGONpznvfhhd-Di2rREFWlFZ4wi8",
  authDomain: "googdoc-3a298.firebaseapp.com",
  projectId: "googdoc-3a298",
  storageBucket: "googdoc-3a298.appspot.com",
  messagingSenderId: "943894319691",
  appId: "1:943894319691:web:4da9646fbbda1d9a62f3ce",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
