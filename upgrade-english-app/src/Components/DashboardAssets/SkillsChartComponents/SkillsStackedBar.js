import React from "react";
import CanvasJSReact from "./canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CorrectInCorrectStackBar = (props) => {
  let scoresArr = Object.values(props.scores);
  let lastScoreEntries = Object.entries(scoresArr[scoresArr.length - 1]);
  let mappedScoresArray = Object.values(lastScoreEntries).map((skill) => {
    return { label: `${skill[0]}`, y: parseInt(skill[1]) };
  });
  let mappedErrorsArray = Object.values(lastScoreEntries).map((skill) => {
	let inverse = (100-parseInt(skill[1]))
  return { label: `${skill[0]}`, y: inverse  };
});
  console.log(mappedScoresArray)
  const options = {
    title: {
      text: "Correct VS Incorrect",
    },

    legend: {
      verticalAlign: "bottom",
    },
    axisY: {
      suffix: "%",
    },
    data: [
      {
        type: "stackedBar100",
        color: "#9bbb59",
        name: "Correct Answer",
        showInLegend: true,
        indexLabel: "{y}",
        indexLabelFontColor: "white",
        yValueFormatString: "#,###'%'",
        dataPoints: mappedScoresArray
      },
      {
        type: "stackedBar100",
        color: "#7f7f7f",
        name: "Wrong Answers",
        showInLegend: true,
        indexLabel: "{y}",
        indexLabelFontColor: "white",
        yValueFormatString: "#,###'%'",
        dataPoints: mappedErrorsArray,
      },
    ],
  };

  return (
    <article>
      <CanvasJSChart options={options} />
    </article>
  );
};

export default CorrectInCorrectStackBar;
