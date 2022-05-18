import CanvasJSReact from "./canvasjs.stock.react";
import styles from "../Dashboard.module.css";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SkillPieChart = (skillArray) => {
  skillArray = [
    { y: 45, label: "comprehension" },
    { y: 49, label: "fluency" },
    { y: 69, label: "pronunciation" },
    { y: 75, label: "sentence structure" },
    { y: 89, label: "monolingualism" },
  ];
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
        dataPoints: [...skillArray],
        // fontSize: 24
      },
    ],
  };

  return (
    <article className={styles.pie}>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </article>
  );
};

export default SkillPieChart;
