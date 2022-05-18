import React from "react";
import CanvasJSReact from './canvasjs.stock.react';
import styles from '../Dashboard.module.css'

let CanvasJSChart = CanvasJSReact.CanvasJSChart;
function SkillDonutChart() {
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
            { name: "Comprehesion", y: 5 },
            { name: "Fluency", y: 31 },
            { name: "Sentence Structure", y: 40 },
            { name: "Pronunciation", y: 17 },
            { name: "mono-lingualism", y: 7 },
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
