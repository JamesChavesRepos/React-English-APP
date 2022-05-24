import React from "react";
import CanvasJSReact from './canvasjs.stock.react';
import styles from '../Dashboard.module.css'

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SkillDonutChart(props) {
  let scoresArr = Object.values(props.scores);
  let lastScoreEntries = Object.entries(scoresArr[scoresArr.length - 1]);
  let mappedScoresArray = Object.values(lastScoreEntries).map((skill) => {
    return { label: `${skill[0]}`, y: skill[1] };
  });

    const options = {
      animationEnabled: true,
      title: {
        text: "Customer Satisfaction",
      },
      subtitles: [
        {
          text: "71% English Level",
          verticalAlign: "center",
          fontSize: 24,
          dockInsidePlotArea: true,
        },
      ],
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###'%'",
          dataPoints: [
            ...mappedScoresArray
          ],
        },
      ],
    };

    return (

      <article className={styles.donut}>
        <CanvasJSChart options={options} />
      </article>
    );
  };

export default SkillDonutChart;
