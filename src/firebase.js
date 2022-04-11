import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBQbuLMwxUfvojJeHu3gU7R2whqXWTmmw",
  authDomain: "codecapi-polls.firebaseapp.com",
  projectId: "codecapi-polls",
  storageBucket: "codecapi-polls.appspot.com",
  messagingSenderId: "1044582332499",
  appId: "1:1044582332499:web:c91b1114174d1425592ea6",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
