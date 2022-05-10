import React, { useState } from "react";

import CircularProgress from "./CircularProgress";
import { useAuth } from "../../context/auth-context";
import styles from './CircularProgress.module.css'

function CircularBarContainer(props) {
  const { user } = useAuth();
  let scoresArr = Object.values(props.scores);
  let lastScores = scoresArr[scoresArr.length - 1]
  console.log(lastScores)

  return (
    <>
    { Object.entries(lastScores).map(([key, value], index) => <CircularProgress key={index} percent={value} skill={key}/>) }
    </>
  );
}

export default CircularBarContainer;
