import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseeApp = firebase.initializeApp({
    apiKey: "AIzaSyCFovD8dWqhX9vfQeC6xNbDY8Dgb7rBmog",
    authDomain: "line-clone-c7c44.firebaseapp.com",
    projectId: "line-clone-c7c44",
    storageBucket: "line-clone-c7c44.firebasestorage.app",
    messagingSenderId: "248015583636",
    appId: "1:248015583636:web:4f56cd29d3bed03b6ab781",
    measurementId: "G-MGTNG8LVGW"
});

const db = firebaseeApp.firestore();
const auth = firebaseeApp.auth();

export { db, auth };
