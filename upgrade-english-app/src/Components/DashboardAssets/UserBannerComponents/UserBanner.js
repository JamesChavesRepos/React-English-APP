import React from "react";

import advanced from "../../../imgs/advancedBadge.svg";
import highLevel from "../../../imgs/highLevelBadge.svg";
import intermediate from "../../../imgs/intermediateBadge.svg";
import beginner from "../../../imgs/beginnerBadge.svg";
import rookie from "../../../imgs/rookieBadge.svg";
import calendar from "../../../imgs/calendar.svg";
import styles from "../Dashboard.module.css";

function UserBanner() {
  const levelBadges = {
    advanced: advanced,
    highLevel: highLevel,
    intermediate: intermediate,
    beginner: beginner,
    rookie: rookie,
  };
  return (
    <>
      <section className={styles.container}>
        <aside className={styles.left}>
          <h1 className={styles.userName}> Good Morning user.display name</h1>
          <h2 className={styles.timeNdate}>Sun,  April 3rd 2021 - 3:02 pm </h2>
          <span className={styles.group}>Group : user.group</span>
          <span className={styles.groupRank}>Group Rank : user.groupRank</span>
          <span className={styles.strength}>strength : user.strength </span>
          <span className={styles.weakness}>weakness : user.weakness </span>
          <span className={styles.highestScore}>highestScore : user.highestScore </span>
          <div>
            <small>See Feedback</small>
            <center></center>
          </div>
        </aside>
      <img className={styles.badge} src={levelBadges.advanced} />
        <aside className={styles.right}>
          <img className={styles.calendar} src={calendar} />
          <h5>Next Session : May 5th 2022 10:30 a.m</h5>
        </aside>
      </section>
    </>
  );
}

export default UserBanner;
