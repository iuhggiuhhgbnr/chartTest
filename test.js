var abc = ["1", "ᅠᅠ", "ᅠᅠ", "ᅠᅠ", "ᅠᅠ", "ᅠᅠ", "ᅠᅠ"];
var defaultValues = ["0", "0", "0", "0", "0", "0", "0"];
var defaultValues2 = [undefined,undefined,undefined,undefined,undefined,undefined,undefined]
var defaultValues3 = new Array(7);
var defaultValues4 = [randomIntValue(), undefined, undefined, undefined, undefined, undefined, undefined];

var runtimecall = setInterval(makeChart, 1000);
function makeChart(){
  //var xValues = ["6.00","8.00","9.00","11.00","13.00","15.00","17.00","19.00","21.00","23.00"];
  //var yValues = [randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing(),randomNumberThing()];
  
      
    var makeAChart = document.getElementById('myChart').getContext('2d');
    var barchart = new Chart(makeAChart, {
        type: "line",       
        data: {
          labels: abc,
          datasets: [{
            fill : false,
            lineTension : 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: defaultValues4,
            steppedLine : true,
            
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
               
            }
          },
          responsive: true,         
          legend: {display: false},
          interaction: {
            intersect: false,
            axis: 'x'
          },
          scales: {
            yAxes: [{ticks: {min: 0, max:20,beginAtZero: true}                      
            }],
          },        
        }
          
      });    
    
      var d = new Date();
      var t = d.toLocaleTimeString();
      console.log(defaultValues4[0]);

      if(defaultValues4[7] == undefined){
        barchart.data.labels.unshift(t);  
        barchart.data.labels.splice(8, 1);
         barchart.data.labels.sort();
        barchart.data.datasets[0].data.splice(7, 1);
        barchart.data.datasets[0].data.unshift(randomIntValue());
        barchart.update();
        console.log(defaultValues4);
      }
      else{
        barchart.data.labels.push(t);
     barchart.data.labels.splice(0, 1); 
      barchart.data.datasets[0].data.splice(0, 1);
      barchart.data.datasets[0].data.push(randomIntValue());
      barchart.update();
      console.log(barchart.data.labels);
      }
      //barchart.data.labels.push(t);
     // barchart.data.labels.splice(0, 1); 
      //barchart.data.datasets[0].data.splice(0, 1);
      //barchart.data.datasets[0].data.push(randomIntValue());
      //barchart.update();
      //console.log(barchart.data.labels);
}

function randomIntValue(){
  var valueRandom = Math.floor((Math.random() * 20) + 1);
  return valueRandom
}

//
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


