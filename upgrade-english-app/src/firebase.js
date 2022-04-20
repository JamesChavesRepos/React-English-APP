import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDpKbZo3RQsxHyfJ7ibRNF9QVk9dzTlvXU",
  authDomain: "english-stats-2022.firebaseapp.com",
  projectId: "english-stats-2022",
  storageBucket: "english-stats-2022.appspot.com",
  messagingSenderId: "1071451304718",
  appId: "1:1071451304718:web:eeded646c931d006889d5f",
  measurementId: "G-NB9X50HLB4"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC81jrn8COanxj0jrH3TWTYnhyU3YBQkQU",
//   authDomain: "english-stats-app.firebaseapp.com",
//   projectId: "english-stats-app",
//   storageBucket: "english-stats-app.appspot.com",
//   messagingSenderId: "944483565304",
//   appId: "1:944483565304:web:bdedb8cce0118f077d850d",
//   measurementId: "G-C61XRXX4E9"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const auth = getAuth(app)