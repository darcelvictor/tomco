Chart.pluginService.register({
	afterUpdate: function (chart) {
		if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
			var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
			arc.round = {
				x: (chart.chartArea.left + chart.chartArea.right) / 2,
				y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
				radius: (chart.outerRadius + chart.innerRadius) / 2,
				thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
				backgroundColor: arc._model.backgroundColor
			}
		}
	},

	afterDraw: function (chart) {
		if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
			var ctx = chart.chart.ctx;
			var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
			var startAngle = Math.PI / 2 - arc._view.startAngle;
			var endAngle = Math.PI / 2 - arc._view.endAngle;

			ctx.save();
			ctx.translate(arc.round.x, arc.round.y);
			console.log(arc.round.startAngle)
			ctx.fillStyle = arc.round.backgroundColor;
			ctx.beginPath();
			ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
			ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
			ctx.closePath();
			ctx.fill();
			ctx.restore();
		}
	},
});

// write text plugin
Chart.pluginService.register({
	afterUpdate(chart) {
		let helpers;
		let centerConfig;
		let globalConfig;
		let ctx;
		let fontStyle;
		let fontFamily;
		let fontSize;
		if (chart.config.options.elements.center) {
		helpers = Chart.helpers;
		centerConfig = chart.config.options.elements.center;
		globalConfig = Chart.defaults.global;
		ctx = chart.chart.ctx;
	
		fontStyle = helpers.getValueOrDefault(
			centerConfig.fontStyle, globalConfig.defaultFontStyle
		);
		fontFamily = helpers.getValueOrDefault(
			centerConfig.fontFamily, globalConfig.defaultFontFamily
		);
	
		if (centerConfig.fontSize) {
			fontSize = centerConfig.fontSize;
		} else {
			ctx.save();
			fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
	
			ctx.restore();
		}
		const newChart = chart;
		newChart.center = {
			font: helpers.fontString(fontSize, fontStyle, fontFamily),
			fillStyle: helpers.getValueOrDefault(
				centerConfig.fontColor, globalConfig.defaultFontColor
			)
		};
		}
	},
	afterDraw(chart) {
		if (chart.center) {
		const centerConfig = chart.config.options.elements.center;
		const ctx = chart.chart.ctx;
	
		ctx.save();
		ctx.font = chart.center.font;
		ctx.fillStyle = chart.center.fillStyle;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
		const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
		let helpers = Chart.helpers;
		let fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
		let text = centerConfig.text1.split('<br>');
		ctx.fillText(text[0], centerX, centerY - fontSize / 2);
		ctx.fillText(text[1], centerX, centerY + fontSize / 2);
		ctx.fillText(centerConfig.text, centerX, centerY);
		ctx.restore();
		}
	},
	});


function config(myValues,myTxt) {
	this.type= 'doughnut',
	this.data= {
		datasets: [{
			data: myValues,
			backgroundColor: [
				"#5DC976",
				"#232741"
			],
		}]
	},
	this.options= {
maintainAspectRatio: false,
cutoutPercentage: 80,
title: 
{
display: false,
},
legend: {
		display: false
		},
		tooltips: {
		enabled: false
		},
		elements: {
			arc: {
				roundedCornersFor: 0
			},
			center: {
				// the longest text that could appear in the center
				maxText: '50%',
				text:'',
				text1: myTxt,
				fontColor: '#000000',
				fontFamily: "'muli', sans-serif",
				fontStyle: 'normal',
				//fontSize: 12,
				// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
				// if these are not specified either, we default to 1 and 256
				minFontSize: 23,
				maxFontSize: 23,
			}
		}
	}
};

function drawMyChart (myId)
{
	var ctx1 = document.getElementById(myId).getContext("2d");
	var myValues1 =  document.getElementById(myId).dataset.values;
	var myTxt1 = document.getElementById(myId).dataset.text;
	myValues1 = myValues1.split(",");
	myTxt1=String(myTxt1);
	var config1= new config(myValues1,myTxt1);
	var myChart = new Chart(ctx1, config1);
};

drawMyChart("myChart1");
drawMyChart("myChart2");
drawMyChart("myChart3");
