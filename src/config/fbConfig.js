import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJYNOga3_iL8psBTy2UOVLw3ZxGd9QJUk",
    authDomain: "net-ninja-marioplan-35a81.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-35a81.firebaseio.com",
    projectId: "net-ninja-marioplan-35a81",
    storageBucket: "net-ninja-marioplan-35a81.appspot.com",
    messagingSenderId: "770637497091",
    appId: "1:770637497091:web:3058a9f705ebd047af9f36",
    measurementId: "G-14X3CBMQJ0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({})

export default firebase;