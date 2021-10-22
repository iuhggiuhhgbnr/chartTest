var d = new Date();
var t = d.toLocaleTimeString();

var valueAxisX = ["0", "ᅠᅠ", "ᅠᅠ", "ᅠᅠ", "ᅠᅠ", "ᅠᅠ", "ᅠᅠ"];
//var valueY = [randomIntValue(), undefined, undefined, undefined, undefined, undefined, undefined];
var valueY = [0, undefined, undefined, undefined, undefined,undefined,undefined];

var typeofChart = "line";
var isChartStep = true;

var totalDuration = 10000;
var delayBetweenPoints = totalDuration / valueY.length;

let a =1;

var runtimecall = setInterval(makeChart, 1000);
function makeChart(){ 
    var makeAChart = document.getElementById('myChart').getContext('2d');
    globalThis.barchart;
    barchart = new Chart(makeAChart, {
        type: typeofChart,       
        data: {
          labels: valueAxisX,
          datasets: [{
            fill : false,
            lineTension : 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: valueY,
            steppedLine : isChartStep,
            
          }]
        },
        options: {
          animation: {
            type: 'number',
            easing: 'linear',
            duration: 0,
        },  
          plugins: {
            title: {
              display: true,
               
            }
          },
          responsive: true,         
          legend: {display: false},
          interaction: {
          intersect: false,
          },
          scales: {
            yAxes: [{ticks: {min: 0, max:20,beginAtZero: true},                      
            }],
            
          },        
        }
          
      });    
    
      barchart.update();
      //console.log(valueY);


      //barchart.data.labels.push(t);
     // barchart.data.labels.splice(0, 1); 
      //barchart.data.datasets[0].data.splice(0, 1);
      //barchart.data.datasets[0].data.push(randomIntValue());
      //barchart.update();
      //console.log(barchart.data.labels);
}

function changechartType(){
  
  //let a = 0;
  if(a == 1){
    typeofChart = "bar";
    isChartStep = false;

  }
  else if(a == 2){
    typeofChart = "line"
    isChartStep = false;
 
  } 
  else if(a == 3){
    typeofChart = "line"
    isChartStep = true;

  }
  else if(a == 4){
    typeofChart = "bar";
    isChartStep = false;

    a = 1;
  }

  a++
  //console.log(typeofChart);
  //console.log(a);
}

var callagain = setInterval(addDataTest,1000)
function addDataTest(){
  var d = new Date();
  var t = d.toLocaleTimeString();
  if(valueY[6] == undefined){
    barchart.data.labels.unshift(t);  
    barchart.data.labels.splice(7, 1);
    barchart.data.labels.sort();

    if(valueY[1] ==undefined)
    {
    barchart.data.datasets[0].data.splice(6, 1);
    valueY[1] = randomIntValue();
  
    barchart.update();
    //console.log(valueY);
  }
  else if(valueY[2] ==undefined)
    {
    barchart.data.datasets[0].data.splice(6, 1);
    valueY[2] = randomIntValue();
 
    barchart.update();
    //console.log(valueY);
  }
  else if(valueY[3] ==undefined)
    {
    barchart.data.datasets[0].data.splice(6, 1);
    valueY[3] = randomIntValue();
 
    barchart.update();
    //console.log(valueY);
  }
  else if(valueY[4] ==undefined)
    {
    barchart.data.datasets[0].data.splice(6, 1);
    valueY[4] = randomIntValue();
 
    barchart.update();
    //console.log(valueY);
  }
  else if(valueY[5] ==undefined)
    {
    barchart.data.datasets[0].data.splice(6, 1);
    valueY[5] = randomIntValue();
 
    barchart.update();
    //console.log(valueY);
  }
  else if(valueY[6] ==undefined)
    {
    barchart.data.datasets[0].data.splice(6, 1);
    valueY[6] = randomIntValue();
 
    barchart.update();
    //console.log(valueY);
  }

  }
  else{
    barchart.data.labels.push(t);
    barchart.data.labels.splice(0, 1); 
    barchart.data.datasets[0].data.splice(0, 1);
    barchart.data.datasets[0].data.push(randomIntValue());
    barchart.update();
    //console.log(valueY);
    //console.log("switch to else");
    //console.log(barchart.data.labels);
  }
}

function randomIntValue(){
  var valueRandom = Math.floor((Math.random() * 20) + 1);
  return valueRandom
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
function randomNumberThing(){
  var testValue = Math.floor((Math.random() * 19) + 1);
  return testValue;
}

function buttonFunction(){
  var changeChartType = document.getElementById('button_chart');
  changeChartType.onclick = changechartType;

}

window.onload = buttonFunction;


