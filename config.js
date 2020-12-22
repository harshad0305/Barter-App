import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCL7ztz0nN2uIhwJa8jj5PuBot3BSscF40",
  authDomain: "book-santa-app-81e56.firebaseapp.com",
  databaseURL: "https://book-santa-app-81e56.firebaseio.com",
  projectId: "book-santa-app-81e56",
  storageBucket: "book-santa-app-81e56.appspot.com",
  messagingSenderId: "863866837956",
  appId: "1:863866837956:web:56c45ca4675f78624a6291",
  measurementId: "G-DWDCNGQLGZ"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
