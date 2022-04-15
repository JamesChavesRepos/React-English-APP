import React from "react";
import { createRoot } from "react-dom/client"; //changed to client
import { CookiesProvider } from "react-cookie";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);

/*
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { intializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore';

const firebaseApp = intializeApp({
  apiKey: "AIzaSyCHXRk5YeljutAWGAgHl4BswGGiT8bvCJM",
  authDomain: "englishapp2022.firebaseapp.com",
  projectId: "englishapp2022",
  storageBucket: "englishapp2022.appspot.com",
  messagingSenderId: "901135002966",
  appId: "1:901135002966:web:7e188b7f3a280515537af7",
  measurementId: "G-3HCZVCSNJH",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('alumni').getDocs()
const alumniCollection = collection(db,'alumni');
const snapshot = await getDocs(alumniCollection);

auth
onAuthStateChanged(auth, user => {
  if(user === null){
    console.log('logged in')
  }else{
    console.log('no user logged')
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

*/
