import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD8P7dkTg5ja1sN_kUxo5T0N77ULLDt6jE",
  authDomain: "upgrade-app-48395.firebaseapp.com",
  databaseURL: "https://upgrade-app-48395-default-rtdb.firebaseio.com",
  projectId: "upgrade-app-48395",
  storageBucket: "upgrade-app-48395.appspot.com",
  messagingSenderId: "903084646963",
  appId: "1:903084646963:web:3ea88841f968f547583946",
  measurementId: "G-7GNFMLLCDP"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

// setter functionality below

export const db = getDatabase();
console.log(db)
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
