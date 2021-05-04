import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCIE9m0h9bkJJtsDXWPPdvON7LdzrHuFdw',
    authDomain: 'poll-app-p21.firebaseapp.com',
    projectId: 'poll-app-p21',
    storageBucket: 'poll-app-p21.appspot.com',
    messagingSenderId: '621439018053',
    appId: '1:621439018053:web:30d3adb6117c38e9726f2c',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();