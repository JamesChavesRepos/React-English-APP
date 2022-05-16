import React, { useState, useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../firebase";

import { useAuth } from "../../context/auth-context";
import loading from "../../imgs/loading.png";
import skillInfoGraph from "../../imgs/skillInfoGraph.svg";
import styles from "./Dashboard.module.css";

import SkillCircularBarContainer from "./SkillCircularBarContainer";
import UserBanner from "./UserBanner";
import SkillPieChart from "./SkillPieChart";
import SkillDonutChart from "./SkillDonutChart";
import SkillCompareBar from "./SkillCompareBar";
import SkillsStackedBar from "./SkillsStackedBar";
import SkillsLineChart from "./SkillsLineChart";

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
    );
  return (
    <main className={styles.dashBoardContainer}>
      <header className={styles.dashHeader}>
        <img className={styles.infoGraph} src={skillInfoGraph} />
        <UserBanner />
      </header>
      <h4>Personal Stats</h4>
      <section className={styles.personalStats}>
        <SkillPieChart />
        <SkillCircularBarContainer scores={scores} />
        <SkillDonutChart />
      </section>
      <section className={styles.personalStats2}>
        <SkillCompareBar />
        <SkillsStackedBar />
        <SkillsLineChart />
      </section>
      <h4>Company Stats</h4>
      <section className={styles.personalStats2}>
        <SkillsStackedBar />
        <SkillsLineChart />
        <SkillsStackedBar />
        <SkillsLineChart />
      </section>
    </main>
  );
}

export default Dashboard;
