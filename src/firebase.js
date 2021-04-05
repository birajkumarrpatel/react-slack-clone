import firebase from 'firebase/app';

import "firebase/auth";

import "firebase/database";

import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCeo-LVX4VJ-AleJN2O3oTu1Ia22hbNlo0",
  authDomain: "react-slack-clone-by-biraj.firebaseapp.com",
  projectId: "react-slack-clone-by-biraj",
  storageBucket: "react-slack-clone-by-biraj.appspot.com",
  messagingSenderId: "877501910791",
  appId: "1:877501910791:web:f207ae35ac1965ca93ffa2",
  measurementId: "G-VS1R5591KM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
