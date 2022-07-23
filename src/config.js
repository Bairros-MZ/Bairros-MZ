const firebase = require('firebase-admin')

const firebaseConfig = {
    apiKey: "AIzaSyCaT-L35s5FQAlmPEZyVhwgzwJ6A_srB0c",
    authDomain: "bairros-mz.firebaseapp.com",
    projectId: "bairros-mz",
    storageBucket: "bairros-mz.appspot.com",
    messagingSenderId: "741287842418",
    appId: "1:741287842418:web:a3f7afed278829e93fe8eb",
    measurementId: "G-2VVVW6E34W"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const Bairro = db.collection('bairros')
module.exports = Bairro
