import {initializeApp} from 'firebase/app';
import {getFirestore, collection, addDoc, getDocs} from 'firebase/firestore/lite';

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

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export {db, collection, addDoc, getDocs};
