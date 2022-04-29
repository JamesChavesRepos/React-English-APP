import React from "react";
import {useAuth} from "../context/auth-context";
import { getDatabase, onValue, ref, set } from "firebase/database";


function Dashboard() {
  const {user} = useAuth()
  console.log(user)
  const data = {}
  const db = getDatabase();
  const scores = ref(db, "users/" + user.displayName + "/scores");
  console.log(scores)

  onValue(scores, (snapshot) => {
    data = snapshot.val();
    console.log(data);
  });

  return <>
  <div>{user.displayName}</div>
 
  </>
}

export default Dashboard;
