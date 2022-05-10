import React, { useState, useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../firebase";

import { useAuth } from "../../context/auth-context";
import loading from "../../imgs/loading.png";
import skillInfoGraph from "../../imgs/skillInfoGraph.svg";
import styles from "./Dashboard.module.css";
import CircularBarContainer from "./CircularBarContainer";
import UserBanner from "./UserBanner";

function Dashboard() {
  const { user } = useAuth();
  const [scores, setScores] = useState({});
  const [level, setLevel] = useState();
  let userData = {};

  useEffect(() => {
    const allData = ref(db, "users/" + user.displayName);
    onValue(allData, (snapshot) => {
      setScores(() => {
        userData = snapshot.val();
        // console.log("USER SCORES: ", userData["scores"]);
        return userData["scores"];
      });
      setLevel(() => {
        userData = snapshot.val();
        // console.log("USER LEVEL : ", userData["level"]);
        return userData["level"];
      });
    });
  }, []);

  if (level === undefined)
    return (
      <h1 className={styles.flex}>
        <img src={loading} />
      </h1>
      // console.log("internet error")
      // error boundary alternative
    );
  return (
    <main className={styles.dashBoardContainer}>
      <header className={styles.dashHeader}>
        <img className={styles.infoGraph} src={skillInfoGraph} />
        <UserBanner/>
      </header>
        <h4>Personal Stats</h4>
      <section className={styles.personalStats}>
        <CircularBarContainer scores={scores}/>
      </section>
        <h4>Company Stats</h4>
      <section className={styles.companyStats}>
      </section>
    </main>
  );
}

export default Dashboard;
