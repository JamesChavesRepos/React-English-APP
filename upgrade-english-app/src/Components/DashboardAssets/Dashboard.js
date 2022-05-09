import React, { useState, useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../firebase";

import { useAuth } from "../../context/auth-context";
import loading from "../../imgs/loading.png";
import graph from "../../imgs/graph.png";
import skillInfoGraph from "../../imgs/skillInfoGraph.svg";
import styles from "./Dashboard.module.css";
import CircularProgress from "./CircularProgress";
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

  function createScoreCard() {
    if (level === undefined)
      return (
        // <h1 className={styles.flex}>
        //   <img src={loading} />
        // </h1>
        console.log("internet error")
      ); // error boundary alternative

    const skillScoreBoard = document.createElement("section");
    skillScoreBoard.classList.add("scoresContainer");
    let scoresArr = Object.values(scores);
    let testProps = {
      percent: 20,
      color: "green",
      skill: "fluency",
      year: 2020,
    };
    console.log(scores);
    console.log(scoresArr);
    for(let i = 1; i === 5; i++){
      skillScoreBoard.append(<CircularProgress props={testProps} />) 
    }
    console.log(skillScoreBoard)
    return <section>
    <CircularProgress props={testProps} />
    <CircularProgress props={{
      percent: 80,
      color: "red",
      skill: "pronunciation",
      year: 2020,
    }} />
    <CircularProgress props={testProps} />
    <CircularProgress props={testProps} />
    <CircularProgress props={testProps} />;
    </section>
  }

  return (
    <main className={styles.dashBoardContainer}>
      <header className={styles.dashHeader}>
          <img className={styles.infoGraph} src={skillInfoGraph} />
          <UserBanner />
      </header>
      <section className={styles.personalStats}>
        <h4>Personal Stats</h4>
        <div>{scores && createScoreCard()}</div>
      </section>
      <section className={styles.companyStats}>
        <h4>Company Stats</h4>
        <img src={graph}/>
      </section>
    </main>
  );
}

export default Dashboard;
