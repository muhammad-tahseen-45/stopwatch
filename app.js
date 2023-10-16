var hours =0;
var min = 0;
var sec = 0;
var count = 0;

var i;
 var hoursheading = document.getElementById("hour");
  var minheading = document.getElementById("min")
 var secheading = document.getElementById("sec");
 var countheading = document.getElementById("count");

function stopwatch (){
     count++
countheading.innerHTML = ":" + " " + count ;
if(count >= 100){
    sec ++
    count = 0
    secheading.innerHTML = ":" + " " + sec
}
if(sec >= 60){
    min ++
    sec = 0
    minheading.innerHTML = ":" + " " +  min;

}
else if( min >=60 ){
    hours ++ 
    min = 0
hoursheading.innerHTML =  hours;
}


}




function start(){
 
    if(i){
        clearInterval(i)
    }
     i = setInterval(stopwatch,10);
     
}


function reset (){
    clearInterval(i)
    min = 0;
    hours= 0 ;
    sec = 0;
    count = 0;
    minheading.innerHTML = 0;
    hoursheading.innerHTML = 0;
    secheading.innerHTML = 0;
    countheading.innerHTML = 0;
  


}

function stop(){
    clearInterval(i)
}



