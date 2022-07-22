import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

let firebaseConfig = {
    apiKey: "AIzaSyBwy7wyoXgYTf0bjMSDCglIQZQr5e4nCrs",
    authDomain: "sistema-de-chamados-369bc.firebaseapp.com",
    projectId: "sistema-de-chamados-369bc",
    storageBucket: "sistema-de-chamados-369bc.appspot.com",
    messagingSenderId: "1059673279133",
    appId: "1:1059673279133:web:5548c43127721b9e1de274",
    measurementId: "G-9ZDM7WEGR8"
  };
  
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;