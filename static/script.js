// let chart;
//
// // Function to send toggle state to the server
//
// console.log("hi");
// // WebSocket event listener
// const socket = new WebSocket("ws://localhost:8000/ws?client=viewer");
//
// function sendToggleState(){
//     var switch1 = document.getElementById("switch1").checked;
//     var switch2 = document.getElementById("switch2").checked;
//     var data = JSON.stringify({"switch1": switch1, "switch2": switch2});
//     socket.send(data);
//
// }
//
// window.addEventListener("load", function () {
//     // Create the initial chart
//
//     const chartCanvas = document.getElementById("chart");
//     chart = new Chart(chartCanvas, {
//         type: "line",
//         data: {
//             labels: [], // Set initial labels
//             datasets: [{
//                 label: "POWER CONSUMPTION",
//                 data: [], // Set initial data
//                 backgroundColor: "rgba(75, 19, 19, 0.2)",
//                 borderColor: "rgba(75, 92, 92, 1)",
//                 borderWidth: 3,
//                 fill: true
//             }]
//         },
//         options: {
//             responsive: true,
//             scales: {
//                 x: {
//                     display: true,
//                     title: {
//                         display: true,
//                         text: "Time"
//                     },
//
//                 },
//                 y: {
//                     display: true,
//                     title: {
//                         display: true,
//                         text: "Value"
//                     }
//                 }
//             }
//         }
//     });
//
//
//     socket.addEventListener("message", function (event) {
//         console.log("Message from server: " + event.data);
//         var val = parseFloat(event.data);
//         // Process the received data and update the chart
//         updateChart(val);
//     });
//
//     socket.addEventListener("connect", function (event) {
//         console.log("connected");
//         socket.send("20")
//     })
//     // Retrieve initial data from the server using AJAX or WebSocket
//     // Update the chart with the received data
// });
//
// function updateChart(data) {
//     // Parse the received data
//     // const { labels, values } = JSON.parse(data);
//     var time = new Date().toLocaleTimeString();
//     // Update the chart data
//     chart.data.labels.push(time);
//
//     chart.data.datasets[0].data.push(data);
//     // chart.data.datasets[0].data.shift(data);
//     // chart.data.datasets[0].data.pop(data);
//
//
//
//     // Update the chart
//     chart.update();
// }
// let chart;
//
// // Function to send toggle state to the server
// function sendToggleState() {
//   var switch1 = document.getElementById("switch1").checked;
//   var switch2 = document.getElementById("switch2").checked;
//   var data = JSON.stringify({ "switch1": switch1, "switch2": switch2 });
//   socket.send(data);
// }
//
// // WebSocket event listener
// const socket = new WebSocket("ws://localhost:8000/ws?client=viewer");
//
// window.addEventListener("load", function () {
//   // Create the initial chart
//   const chartCanvas = document.getElementById("chart");
//   chart = new Chart(chartCanvas, {
//     type: "line",
//     data: {
//       labels: [], // Set initial labels
//       datasets: [
//         {
//           label: "Dynamic Chart",
//           data: [], // Set initial data
//           backgroundColor: "rgba(75, 192, 192, 0.2)",
//           borderColor: "rgba(75, 192, 192, 1)",
//           borderWidth: 1,
//           fill: false,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       scales: {
//         x: {
//           display: true,
//           title: {
//             display: true,
//             text: "Time",
//             color: "white",
//           },
//           ticks: {
//             color: "white",
//           },
//         },
//         y: {
//           display: true,
//           title: {
//             display: true,
//             text: "Value",
//             color: "white",
//           },
//           ticks: {
//             color: "white",
//           },
//         },
//       },
//     },
//   });
//
//   socket.addEventListener("message", function (event) {
//     console.log("Message from server: " + event.data);
//     var str = JSON.parse(event.data);
//     if (str.type == 'data')
//       var val = parseFloat(str.data);
//     updateChart(val);
//
//
//     // Process the received data and update the chart
//
//   });
//
//   socket.addEventListener("connect", function (event) {
//     console.log("connected");
//     socket.send("20");
//   });
// });
//
// function updateChart(data) {
//   var time = new Date().toLocaleTimeString();
//   // Update the chart data
//   chart.data.labels.push(time);
//   chart.data.datasets[0].data.push(data);
//
//   // Limit the number of displayed data points
//   const MAX_DATA_POINTS = 10;
//   if (chart.data.labels.length > MAX_DATA_POINTS) {
//     chart.data.labels.shift();
//     chart.data.datasets[0].data.shift();
//   }
//
//   // Update the chart
//   chart.update();
//
//   // Increment and display the value
// //   const randomValue = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
// //   data += randomValue;
//   document.getElementById("counting").innerText = Math.floor(data);
// }

// Simulate receiving new data from the server
// setInterval(() => {
//   // Simulate receiving new data from the server
//   var newData = Math.random() * 100;
//   updateChart(newData);
//
// }, 1000);
let chart;
let gauges = [];
let thermometerChart;

// Function to send toggle state to the server
function sendToggleState() {
    const switch1 = document.getElementById("switch1").checked;
    const switch2 = document.getElementById("switch2").checked;
    const data = JSON.stringify({"switch1": switch1, "switch2": switch2});
    socket.send(data);
}

// WebSocket event listener
const socket = new WebSocket("ws://localhost:8000/ws?client=viewer");

window.addEventListener("load", function () {
    // Create the initial chart
    const chartCanvas = document.getElementById("chart");
    chart = new Chart(chartCanvas, {
        type: "line",
        data: {
            labels: [], // Set initial labels
            datasets: [
                {
                    label: "Dynamic Chart",
                    data: [], // Set initial data
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                    fill: true,
                },
            ],
        },
        options: {
            responsive: false,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: "Time",
                        color: "white",
                    },
                    ticks: {
                        color: "white",
                    },
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: "Value",
                        color: "white",
                    },
                    ticks: {
                        color: "white",
                    },
                },
            },
        },
    });

    // Create the gauges
    const gaugeContainers = document.getElementsByClassName("gauge-container");
    for (let i = 0; i < gaugeContainers.length; i++) {
        const gaugeContainer = gaugeContainers[i];
        const gaugeId = "gauge" + i;
        gaugeContainer.setAttribute("id", gaugeId);
        const gauge = Gauge(document.getElementById(gaugeId));
        gauges.push(gauge);
    }

    // Create the thermometer gauge
    FusionCharts.ready(function () {
        thermometerChart = new FusionCharts({
            type: "thermometer",
            renderAt: "thermometer-container",
            width: "300",
            height: "500",
            dataFormat: "json",
            dataSource: {
                chart: {
                    caption: "Temperature Monitor",
                    lowerLimit: "0",
                    upperLimit: "50",
                    decimals: "1",
                    numberSuffix: "°C",
                    showhovereffect: "1",
                    thmFillColor: "#FF0000",
                    showGaugeBorder: "1",
                    gaugeBorderColor: "#ffffff",
                    gaugeBorderThickness: "2",
                    gaugeBorderAlpha: "30",
                    thmOriginX: "100",
                    chartBottomMargin: "20",
                    valueFontColor: "#ffffff",
                    bgColor: "#000000",
                    theme: "fusion",
                },
                value: "-6",
            },
        });
        thermometerChart.render();
    });

    // WebSocket message event listener
    socket.addEventListener("message", function (event) {
        console.log("Message from server: " + event.data);
        var str = JSON.parse(event.data);
        if (str.type == 'data')
            var val = parseFloat(str.data1);
            var cnt = parseFloat(str.data3);
        updateChart(val,cnt);
        if (str.type == 'data')
            var val2 = parseFloat(str.data2);
        updateThermometer(val2);
        const gd=
        {
            gauges: [
               val+ Math.random() * 30, // Random gauge value 1
                val + Math.random() * 12, // Random gauge value 2
                val +Math.random() * 9, // Random gauge value 3
            ]
        }


        updateGauges(gd.gauges);

    });

    // WebSocket connection event listener
    socket.addEventListener("connect", function (event) {
        console.log("Connected");
        socket.send("20");
    });
});

function updateChart(data,count) {
    const time = new Date().toLocaleTimeString();
    // Update the chart data
    chart.data.labels.push(time);
    chart.data.datasets[0].data.push(data);

    // Limit the number of displayed data points
    const MAX_DATA_POINTS = 100;
    if (chart.data.labels.length > MAX_DATA_POINTS) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    // Update the chart
    chart.update();

    // Increment and display the value
    // const randomValue = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    // data ;
    document.getElementById("counting").innerText = Math.floor(count);
}

function updateGauges(values) {
    // Update the gauges
    for (let i = 0; i < gauges.length; i++) {
        const gauge = gauges[i];
        gauge.setValue(values[i]);
    }
}

function updateThermometer(data) {
    // Update the thermometer value
    thermometerChart.feedData("&value=" + data);
}

// Simulate receiving new data from the server
// setInterval(() => {
//   // Simulate receiving new data from the server
//   const newData = {
//     chartValue: Math.random() * 100, // Random chart value
//     gauges: [
//       Math.random() * 100, // Random gauge value 1
//       Math.random() * 100, // Random gauge value 2
//       Math.random() * 100, // Random gauge value 3
//     ],
//     thermometerValue: Math.random() * 100, // Random thermometer value
//   };
//   updateChart(newData.chartValue);
//   updateGauges(newData.gauges);
//   updateThermometer(newData.thermometerValue);
// }, 1000);
