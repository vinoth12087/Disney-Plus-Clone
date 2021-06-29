import firebase from 'firebase'; 

/* var firebaseConfig = {
     apiKey: "AIzaSyCk8Y3rpO6mz2SYs97Lr1BZLZ_8oq68bYU",
     authDomain: "disney-plus-clone-a5407.firebaseapp.com",
     projectId: "disney-plus-clone-a5407",
     storageBucket: "disney-plus-clone-a5407.appspot.com",
     messagingSenderId: "516925676661",
     appId: "1:516925676661:web:42f55442eae04c5e1fec3c",
     measurementId: "G-S0MLZR447X"
   }; */

var firebaseConfig = {
    apiKey: "AIzaSyCjNTlv6ZzkcimctPnzDfKm6uikZS1tCTI",
    authDomain: "disney-plus-78fd1.firebaseapp.com",
    projectId: "disney-plus-78fd1",
    storageBucket: "disney-plus-78fd1.appspot.com",
    messagingSenderId: "189394788589",
    appId: "1:189394788589:web:f5a605f059e52870a26ce4",
    measurementId: "G-CGGRZKRJ6V"
  }; 


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
 