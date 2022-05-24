import CanvasJSReact from "./canvasjs.stock.react";
import styles from "../Dashboard.module.css";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SkillPieChart = (props) => {
  let scoresArr = Object.values(props.scores);
  let lastScoreEntries = Object.entries(scoresArr[scoresArr.length - 1]);
  let mappedScoresArray = Object.values(lastScoreEntries).map((skill) => {
    return { label: `${skill[0]}`, y: skill[1] };
  });

  const options = {
    responsive: false,
    animationEnabled: true,
    zoomEnabled: "false",
    title: {
      text: "Skill Comparison",
    },
    colorSet: "colorSet1",
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [
          ...mappedScoresArray
        ],
        // fontSize: 24
      },
    ],
  };

  return (
    <article className={styles.pie}>
      <CanvasJSChart options={options} />
    </article>
  );
};

export default SkillPieChart;
