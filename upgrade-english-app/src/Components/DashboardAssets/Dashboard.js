import React, { useState, useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../firebase";

import { useAuth } from "../../context/auth-context";
import loading from "../../imgs/loading.png";
import skillInfoGraph from "../../imgs/skillInfoGraph.svg";
import styles from "./Dashboard.module.css";

import SkillCircularBarContainer from "./SkillsChartComponents/SkillCircularBarContainer";
import UserBanner from "./UserBannerComponents/UserBanner";
import SkillPieChart from "./SkillsChartComponents/SkillPieChart";
import SkillDonutChart from "./SkillsChartComponents/SkillDonutChart";
import SkillCompareBar from "./SkillsChartComponents/SkillCompareBar";
import SkillsStackedBar from "./SkillsChartComponents/SkillsStackedBar";
import SkillYearLineChart from "./SkillsChartComponents/SkillYearLineChart";
import SkillHighScore from "./SkillsChartComponents/SkillHighScore";
import SkillsPyramidChart from "./SkillsChartComponents/SkillsPyramidChart";
import SkillsBubbleChart from "./SkillsChartComponents/SkillsBubbleChart";
import SkillCommonErrors from "./SkillsChartComponents/SkillCommonErrors";

function Dashboard() {
  const { user } = useAuth();
  const [scores, setScores] = useState({});
  const [level, setLevel] = useState();
  let userData = {};
  console.log(db)
  const refs = ref(db, "userssss/Carlos Diaz/scores/2020" )
  console.log(refs)

  useEffect(() => {
    onValue(ref(db, "users/" + "Carlos Diaz"), (snapshot) => {
      console.log(db, snapshot, userData);
      userData = snapshot.val();
      if (userData != null) {
        setScores(() => {
          console.log("USER SCORES: ", userData["scores"]);
          return userData["scores"];
        });
        setLevel(() => {
          console.log("USER LEVEL : ", userData["level"]);
          return userData["level"];
        });
      }
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
        <SkillPieChart scores={scores} />
        <SkillCircularBarContainer scores={scores} />
        <SkillDonutChart scores={scores} />
      </section>
      <section className={styles.personalStats2}>
        <SkillCompareBar scores={scores} />
        <SkillsStackedBar scores={scores} />
        <SkillYearLineChart scores={scores} />
      </section>
      <h4>Company Stats</h4>
      <section className={styles.personalStats2}>
        <SkillHighScore scores={scores} />
        <SkillCommonErrors scores={scores} />
        <SkillsPyramidChart scores={scores} />
        <SkillsBubbleChart scores={scores} />
      </section>
    </main>
  );
}

export default Dashboard;
