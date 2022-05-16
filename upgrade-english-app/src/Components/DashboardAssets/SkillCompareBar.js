import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = (skillArray2020,skillArray2021) => {
 
  skillArray2020 = [
    { y: 45, label: "comprehension" },
    { y: 49, label: "fluency" },
    { y: 69, label: "pronunciation" },
    { y: 75, label: "sentence structure" },
    { y: 89, label: "monolingualism" },
  ];
  skillArray2021 = [
    { y: 25, label: "comprehension" },
    { y: 39, label: "fluency" },
    { y: 59, label: "pronunciation" },
    { y: 45, label: "sentence structure" },
    { y: 49, label: "monolingualism" },
  ];

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "2020 vs 2021",
    },
    axisX: {
      title: "skills",
      reversed: true,
    },
    axisY: {
      title: "scores",
      //   labelFormatter: this.addSymbols,
    },
    data: [
      {
        type: "bar",
        showInLegend: true,
        name: "2021",
        color: "gold",
        dataPoints: [...skillArray2020],
      },
      {
        type: "bar",
        showInLegend: true,
        name: "2020",
        color: "silver",
        dataPoints: [...skillArray2021],
      },
    ],
  };

  return (
    <article >
      <CanvasJSChart options={options} /> 
    </article>
  );
};

export default BarChart;