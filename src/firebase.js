import firebase from "firebase";
import "firebase/database";
var firebaseConfig = {
    apiKey: "AIzaSyD8hQO3_XDc7Oo06SkmGSPQUUJDhDqwBB0",
    authDomain: "twitter-clone-dd0ac.firebaseapp.com",
    projectId: "twitter-clone-dd0ac",
    storageBucket: "twitter-clone-dd0ac.appspot.com",
    messagingSenderId: "576624471270",
    appId: "1:576624471270:web:3276a7e7e6dc04e3ff1f27",
    measurementId: "G-LMPE9YDBEJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  export default db;