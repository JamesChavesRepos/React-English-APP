import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { DataSnapshot, getDatabase, onValue, ref, set } from "firebase/database";

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

const db = getDatabase();;
let userId = 57
// setter functionality below

function writeUserData(userId, name, email, level, scores, imgUrl) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);
  set(reference, {
    userName: name,
    email: email,
    level: level,
    scores: scores,
    profilePic: imgUrl,
  });
  console.log("write data function executed");
}

//getter functionality below 

const scores = ref(db, 'users/'+ userId +'/scores' )
console.log(scores)

onValue(scores,(snapshot)=>{
  const data = snapshot.val();
  console.log(data)
})

writeUserData(
  57,
  "james A chaves",
  "757575757@gmail.com",
  "advanced",
  {
    2020: {
      comprehension: 60,
      fluency: 20,
      sentenceStructure: 40,
      pronunciation: 80,
      monoLing: 30,
    },
    2021: {
      comprehension: 55,
      fluency: 30,
      sentenceStructure: 50,
      pronunciation: 85,
      monoLing: 50,
    },
  },
  "../src/imgs/profilePic.png"
);
