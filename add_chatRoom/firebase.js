const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAlaRSn1Q0XjUaxXaxYJV3aOp_5OrpaGE4",
    authDomain: "addcategory.firebaseapp.com",
    databaseURL: "https://addcategory.firebaseio.com",
    projectId: "addcategory",
    storageBucket: "addcategory.appspot.com",
    messagingSenderId: "534782526050",
    appId: "1:534782526050:web:6ae11f42235a13cf44c73b"
  });
  
  var db = firebase.firestore();


  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});