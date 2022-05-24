import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SkillYearLineChart = (props) => {
  const defaultData = [
    { Comprehension: 0 },
    { Fluency: 0 },
    { Monolingualism: 0 },
    { OverAllEnglish: 0 },
    { Pronunciation: 0 },
    { SentenceStructure: 0 },
    { Spelling: 0 },
  ];

  let scoresArr = Object.values(props.scores);
  let scoreEntries1 = Object.entries(scoresArr[0]);
  let scoreEntries2;
  let year1 = Object.entries(props.scores)[0][0];
  let year2;
  
  scoresArr[1] != null
  ? (scoreEntries2 = Object.entries(scoresArr[1]))
  : (scoreEntries2 = defaultData);
  scoresArr[1] != null
  ? (year2 = Object.entries(props.scores)[1][0])
  : (scoreEntries2 = defaultData);
  
  let scoresArrayYear1 = Object.values(scoreEntries1).map((skill) => {
    return { label: `${skill[0]}`, y: parseInt(skill[1]) };
  });
  let scoresArrayYear2 = Object.values(scoreEntries2).map((skill) => {
    return { label: `${skill[0]}`, y: parseInt(skill[1]) };
  });
  

  const options = {
    animationEnabled: true,
    title: {
      text: `${year1} vs ${year2}`,
    },
    axisY: {
      title: "S C O R E",
      includeZero: false,
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "line",
        name: `${year1}`,
        color: "blue",
        showInLegend: true,
        dataPoints: scoresArrayYear1,
      },
      {
        type: "line",
        name: `${year2}`,
        color: "gold",
        showInLegend: true,
        dataPoints: scoresArrayYear2,
      },
    ],
  };

  return (
    <article>
      <CanvasJSChart options={options} />
    </article>
  );
};

export default SkillYearLineChart;
