import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';
// import {GoogleAuthProvider, getAuth} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDh4V2AGPzTOfAmK1ohE67or3jQ975DvQU',
  authDomain: 'portfolio-clones.firebaseapp.com',
  databaseURL: 'https://portfolio-clones.firebaseio.com',
  projectId: 'portfolio-clones',
  storageBucket: 'portfolio-clones.appspot.com',
  messagingSenderId: '1080338138283',
  appId: '1:1080338138283:web:21c52e2de7a95c5300a3ee',
  measurementId: 'G-9GY8W9B5Q7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const auth = firebaseApp.auth();
// const db = getFirestore(firebaseApp);
// const auth = getAuth();
// const provider = new GoogleAuthProvider();

export {db, auth, provider};
