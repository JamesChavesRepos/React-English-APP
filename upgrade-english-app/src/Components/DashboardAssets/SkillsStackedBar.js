import React from 'react';
import CanvasJSReact from "./canvasjs.stock.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const CorrectInCorrectStackBar = ()=> {

		const options = {
			title: {
				text: "Correct VS Incorrect"
			},

			legend: {
				verticalAlign: "bottom"
			},
			axisY: {
				suffix: "%"
			},
			data: [{
				type: "stackedBar100",
				color: "#9bbb59",
				name: "Correct Answer",
				showInLegend: true,
				indexLabel: "{y}",
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ label: "comprehension",   y: 85 },
					{ label: "fluency",   y: 79 },
					{ label: "pronunciation",   y: 77 },
					{ label: "sentence structure",   y: 68 },
					{ label: "monoling",   y: 61 },
					{ label: "over all english",   y: 63 },
				]
			},{
				type: "stackedBar100",
				color: "#7f7f7f",
				name: "Wrong Answers",
				showInLegend: true,
				indexLabel: "{y}",
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ label: "comprehension",   y: 15 },
					{ label: "fluency",   y: 21 },
					{ label: "pronunciation",   y: 23 },
					{ label: "sentence structure",   y: 32 },
					{ label: "monoling",   y: 39 },
					{ label: "over all english",   y: 37 },
				]
			}]
		}
		
		return (
			<article >
			<CanvasJSChart options = {options} />
			</article>
		);
	}

export default CorrectInCorrectStackBar;