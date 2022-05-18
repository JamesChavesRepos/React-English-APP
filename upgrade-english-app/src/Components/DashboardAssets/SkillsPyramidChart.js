import CanvasJSReact from "./canvasjs.stock.react";
import styles from "./Dashboard.module.css";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SkillsPyramidChart = ()=> {
		var dataPoint;
		var total;
		const options = {
			animationEnabled: true,
			title: {
				text: "Sales via Advertisement"
			},
			legend: {
				horizontalAlign: "right",
				verticalAlign: "center",
				reversed: true
			},
			data: [{
				type: "pyramid",
				showInLegend: true,
				legendText: "{label}",
				indexLabel: "{y}",
				toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
				dataPoints: [
					{ label: "Rookie", y: 21,},
					{ label: "Beginners", y: 17},
					{ label: "Intermeadiate", y: 20, },
					{ label: "High Level", y: 15},
					{ label: "Advanced", y: 8}
				]
			}]
		}
		//calculate percentage
		dataPoint = options.data[0].dataPoints;
		total = dataPoint[0].y;
		for(var i = 0; i < dataPoint.length; i++) {
			if(i === 0) {
				options.data[0].dataPoints[i].percentage = 100;
			} else {
				options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
			}
		}
		
		return (
		<article>
			<CanvasJSChart options = {options}/>
		</article>
		);
	}


export default SkillsPyramidChart;