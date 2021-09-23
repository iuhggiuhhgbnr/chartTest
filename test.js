var makeitrun = setInterval(makeChart,1000);
function makeChart(){
  var xValue = Math.floor(Math.random() * 150);
  var yValue = Math.floor(Math.random() * 15);
    var xyValues = [
        {x:xValue, y:yValue},
        {x:xValue, y:8},
        {x:70, y:8},
        {x:80, y:9},
        {x:90, y:9},
        {x:100, y:9},
        {x:110, y:10},
        {x:120, y:11},
        {x:130, y:14},
        {x:140, y:14},
        {x:150, y:15}
      ];
      
    var makeAChart = document.getElementById('myChart').getContext('2d');
    var barchart = new Chart(makeAChart, {
        type: "scatter",
        data: {
          datasets: [{
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValues
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            xAxes: [{ticks: {min: 0, max:160}}],
            yAxes: [{ticks: {min: 0, max:16}}],
          }
        }
      });     
}

var callDataTime = setInterval(DataTime , 1000);
function DataTime(){
  var d = new Date();
  var t = d.toLocaleTimeString();

  var worldTimeValue = document.getElementById('currentTime');
  worldTimeValue.innerHTML = t;
}

var callScreenResolution = setInterval(ScreenResolution , 1000);
function ScreenResolution(){
  var w = window.innerWidth;
  var h = window.innerHeight;   
  var resolutionValue = document.getElementById('currentResolution1');
  resolutionValue.innerHTML = "Current Resolution is " + w +" x "+ h;
}