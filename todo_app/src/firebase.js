import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDb5Hx8ZgVNW1TBm5ZEqapsCJVz80yq6U0",
  authDomain: "todo-app-86aae.firebaseapp.com",
  databaseURL: "https://todo-app-86aae.firebaseio.com",
  projectId: "todo-app-86aae",
  storageBucket: "todo-app-86aae.appspot.com",
  messagingSenderId: "6851159855",
  appId: "1:6851159855:web:497e0f03f932ceaf95e3da",
  measurementId: "G-1W5Q75M3E1"
})

const db = firebaseApp.firestore();

export default db;