// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtlBQUk-mXuVTt5Q_VUWOaULVZXD6gkdE",
    authDomain: "react-cursos-97d54.firebaseapp.com",
    projectId: "react-cursos-97d54",
    storageBucket: "react-cursos-97d54.appspot.com",
    messagingSenderId: "1003013015101",
    appId: "1:1003013015101:web:7a4e916742dde6d1f5cc54"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
