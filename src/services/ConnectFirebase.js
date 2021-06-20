import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDOpWBk6wVN0IkAwomZ3DfckEyp5kEtzEk",
    authDomain: "mypetsreactnative.firebaseapp.com",
    projectId: "mypetsreactnative",
    storageBucket: "mypetsreactnative.appspot.com",
    messagingSenderId: "676586992093",
    appId: "1:676586992093:web:d1855f7080e21cddb9c634"
};

const firebaseApp =
    !firebase.apps.length ?
        firebase.initializeApp(firebaseConfig) :
        firebase.app();

const db = firebaseApp.firestore()
export default db;
