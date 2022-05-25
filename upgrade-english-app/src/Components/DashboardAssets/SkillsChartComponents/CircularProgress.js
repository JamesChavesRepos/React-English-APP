import { useEffect, useState } from "react";
import styles from "./CircularProgress.module.css";

export default function CircularProgress(props) {
  const [percentCounter, setPercentCounter] = useState(0);

  let { percent, skill } = props;

  let color = 0;
  // console.log(percent,percent > 80)

  if (percent < 0 && percent > 20) {
    color = "#83CC01";
  } else if (percent < 20 && percent > 40) {
    color = "#CCFF00";
  } else if (percent < 40 && percent > 60) {
    color = "#FAFF00";
    console.log(percent, color, percent < 40 && percent > 60);
  } else if (percent < 60 && percent > 80) {
    color = "#FFB800";
  } else {
    color = "#FFB800";
  }

  useEffect(() => {
    let num = 0;
    let run = setInterval(() => {
      num++;
      if (num === percent + 1) {
        clearInterval(run);
      } else {
        setPercentCounter(num);
      }
    }, 20);
  }, []);

  const skillDescriptions = {
    Comprehension:
      "This skill is evaluated by how much you are able to comprehend of what is being said and in what context",
    Fluency:
      "This skill is evaluated by how much you are able to communicate and be understood in your own words",
    Pronunciation:
      "This skill is evaluated by how well you are pronouncing the words and using them correctly",
    Monolingualism:
      "This skill is evaluated by your ability to not mix spanish into what you say in English",
    "Sentence Structure":
      "This skill is evaluated by the way you are structuring a sentence and how well-spoken and clear you sound regardless of accent",
    overAllEnglish:
      "This is your General English Level ,this takes into account all the categories",
  };
  let desc = skillDescriptions[skill];
  return (
    <div styles={{ display: "flex", flexDirection: "column" }}>
      <section className={styles.skillContainer}>
        <h4 className={styles.percentage} style={{ color: color }}>
          {`${percentCounter}%`}
        </h4>
        <svg style={{ width: "70px", height: "70px" }}>
          <circle
            style={{
              fill: "none",
              stroke: "rgba(221,221,221, 0.65)",
              strokeDasharray: "201",
              strokeWidth: "5",
              cx: "35",
              cy: "35",
              r: "30",
            }}
            className={styles.innerCircle}
          ></circle>
          <circle
            style={{
              fill: "none",
              stroke: color,
              strokeDasharray: "201",
              strokeDashoffset: 200 - (200 * percentCounter) / 100,
              strokeWidth: "5",
              cx: "35",
              cy: "35",
              r: "30",
            }}
            className={styles.outterCircle}
          ></circle>
        </svg>
        <span className={styles.skill} style={{ color: color }}>
          {skill}
        </span>
        <center
          className={styles.moreInfo}
          style={{ backgroundColor: color }}
        ></center>
      </section>
      <h6 className={styles.skillDescription}>{desc}</h6>
    </div>
  );
}

// const setColor = (colorNum) =>{
//   console.log(colorNum)
//   return (colorNum < 0 && colorNum < 21) ? colorNum = "#83CC01" :
//   (colorNum > 20 && colorNum < 41) ? colorNum = "#DBFF00" :
//   (colorNum > 40 && colorNum < 61) ? colorNum = "#CCFF00" :
//   (colorNum > 60 && colorNum < 81) ? colorNum = "#FFB800" :
//   (colorNum > 80) ? colorNum = "#EB3124" :  colorNum = color
// }
// let color = setColor(colorNum)
// console.log(color)
