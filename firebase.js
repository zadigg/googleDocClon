import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "googdoc-3a298.firebaseapp.com",
  projectId: "googdoc-3a298",
  storageBucket: "googdoc-3a298.appspot.com",
  messagingSenderId: "943894319691",
  appId: process.env.APP_ID,
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
