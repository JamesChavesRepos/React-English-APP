import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDpKbZo3RQsxHyfJ7ibRNF9QVk9dzTlvXU",
  authDomain: "english-stats-2022.firebaseapp.com",
  projectId: "english-stats-2022",
  storageBucket: "english-stats-2022.appspot.com",
  messagingSenderId: "1071451304718",
  appId: "1:1071451304718:web:eeded646c931d006889d5f",
  measurementId: "G-NB9X50HLB4",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

// setter functionality below

export const db = getDatabase();
export function writeUserData(name, email, level, scores, imgUrl) {
  const reference = ref(db, "users/" + name);
  set(reference, {
    userName: name,
    email: email,
    level: level,
    scores: scores,
    profilePic: imgUrl,
  });
  console.log("write data function executed");
}
