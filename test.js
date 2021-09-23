var makeitrun = setInterval(makeChart,3000);
function makeChart(){

    //var yValueRandomArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
   // var yValueRandomArrayRandom = Math.floor(Math.random() * yValueRandomArray.length);
    //console.log(yValueRandomArray[yValueRandomArrayRandom]);

    //var yValueRandom = Math.floor((Math.random() * 19) + 1);

    var xValues = ["6.00","8.00","9.00","11.00","13.00","15.00","17.00","19.00","21.00","23.00"];
    var yValues = [randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing()];
      
    var makeAChart = document.getElementById('myChart').getContext('2d');
    var barchart = new Chart(makeAChart, {
        type: "line",
        data: {
          labels: xValues,
          datasets: [{
            fill : false,
            lineTension : 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            yAxes: [{ticks: {min: 0, max:20}}],
          }
        }
      });     
}
//----------------------------------
var makeitrun2 = setInterval(makeChart2,1000);
function makeChart2(){
  var xValue = Math.floor(Math.random() * 150);
  var yValue = Math.floor(Math.random() * 15);
    var xyValues = [
        {x:7, y:8},
        {x:8, y:9},
        {x:9, y:9},
        {x:10, y:9},
        {x:11, y:10},
        {x:12, y:11},
        {x:13, y:14},
        {x:14, y:14},
        {x:15, y:15},
        {x:15, y:15}
      ];
      
    var makeAChart = document.getElementById('myChart2').getContext('2d');
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
            xAxes: [{ticks: {min: 7 , max:24}}],
            yAxes: [{ticks: {min: 0, max:30}}],
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

var callrandomNumberThing = setInterval(randomNumberThing , 100);
function randomNumberThing(testValue){
  var testValue = Math.floor((Math.random() * 19) + 1);
  //console.log(testValue);
  return testValue;
}
