import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBIHYjFNhJmhfhRCQ494POPJ540VpKu_1E",
  authDomain: "triyadi-4b2a6.firebaseapp.com",
  databaseURL: "https://triyadi-4b2a6.firebaseio.com",
  projectId: "triyadi-4b2a6",
  storageBucket: "triyadi-4b2a6.appspot.com",
  messagingSenderId: "165302797273",
  appId: "1:165302797273:web:ad3b8c7c79b6a5da1fcfc8",
  measurementId: "G-78E00SNX6R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
