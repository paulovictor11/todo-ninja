import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBgBN3ZBhsbK6doKmmfUiVfX-irzhReiOY",
    authDomain: "todo-ninja-cafac.firebaseapp.com",
    databaseURL: "https://todo-ninja-cafac.firebaseio.com",
    projectId: "todo-ninja-cafac",
    storageBucket: "todo-ninja-cafac.appspot.com",
    messagingSenderId: "216696850960",
    appId: "1:216696850960:web:0ab16ed14602e1a7335895",
    measurementId: "G-Z8135H1X7Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });

export default db;
