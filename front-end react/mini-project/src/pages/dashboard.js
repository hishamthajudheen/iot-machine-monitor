<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

  

    window.onload = function () {

var dps = []; // dataPoints
var chart = new CanvasJS.Chart("chartContainer", {
	backgroundColor: 'light black',
  theme: "light2", 
  title :{
		text: "Dynamic Data"
	},
	data: [{
		type: "line",
		dataPoints: dps
	}]
});

var xVal = 0;
var yVal = 100; 
var updateInterval = 1000;
var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function (count) {

	count = count || 1;

	for (var j = 0; j < count; j++) {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({
			x: xVal,
			y: yVal
		});
		xVal++;
	}

	if (dps.length > dataLength) {
		dps.shift();
	}

	chart.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);

}
    var num = -180
    for (var index = 0; index < 180; ++index) {
        num++
      }
    var myGauge = Gauge(document.getElementById("gauge-demo"),{
    dialRadius: 30,
    dialStartAngle: 180,
    dialEndAngle: num,
    value: 80,
    max: 100,
    min: 0,
    valueDialClass: "value",
    valueClass: "value-text",
    dialClass: "dial",
    gaugeClass: "gauge",
    showValue: true,
    gaugeColor: null,
    label: function(val) {return Math.round(val);} // returns a string label that will be rendered in the center
});
