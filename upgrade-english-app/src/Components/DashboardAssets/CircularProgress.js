import { useEffect, useState } from "react";
import styles from "./CircularProgress.module.css";

export default function CircularProgress(props) {
  let {percent,color,skill,year} = props.props
  console.log(percent,color,skill,year)

  const [percentCounter, setPercentCounter] = useState(0);

  useEffect(() => {
    let num = 0;
    let run = setInterval(() => {
      num++;
      
      if (num === ({percent} + 1)) {
        clearInterval(run);
      } else {
        setPercentCounter(num);
      }
    }, 20);
  }, []);
  const skillDescriptions = {
    comprehension:
      "comprehension this skill is evaluated by how much you are abke to comprehend of what is beiung said",
  };
  return (
    <>
      <section className={styles.skillContainer}>
        <h4 className={styles.percentage} style={{ color: {color} }}>
          {" "}
          {`${percentCounter}%`}{" "}
        </h4>
        <svg style={{ width: "70px", height: "70px" }}>
          <circle
            style={{
              fill: "none",
              stroke: "rgba(221,221,221, 0.65)",
              strokeDasharray: "251",
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
              strokeDasharray: "251",
              strokeDashoffset: 250 - (250 * percentCounter) / 100,
              strokeWidth: "5",
              cx: "35",
              cy: "35",
              r: "30",
            }}
            className={styles.outterCircle}
          ></circle>
        </svg>
        <span className={styles.skill} style={{ color: color }}>{skill}</span>
          <center className={styles.moreInfo}></center>
      </section>
    </>
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
