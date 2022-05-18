import React, { Component } from 'react';
import CanvasJSReact from "./canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SkillHighScore = (skillArray) => {
	skillArray = [
		{ y: 45, label: "compreh" },
		{ y: 49, label: "fluency" },
		{ y: 89, label: "monoling", indexLabel: "Highest" },
		{ y: 69, label: "pronunc" },
		{ y: 75, label: "sentence" },
	  ]
	const options = {
		animationEnabled: true,
		exportEnabled: false,
		theme: "light2", //"light1", "dark1", "dark2"
		data: [{
			type: "column", //change type to bar, line, area, pie, etc
			//indexLabel: "{y}", //Shows y value on all Data Points
			indexLabelFontColor: "#5A5757",
			indexLabelPlacement: "inside",
			fontColor: "white",
			dataPoints: [
				...skillArray
			]
		}]
	}
	
	return (
		<article className="SkillHighScore">

			<CanvasJSChart options = {options} 
			/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</article>
	);
}
 
export default SkillHighScore;