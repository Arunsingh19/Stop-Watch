var seconds = 00; 
var tens = 00;

var sec = document.getElementById("seconds")
var tenz = document.getElementById("tens")

var start_btn = document.getElementById("start_btn")
var stop_btn = document.getElementById("stop_btn")
var reset_btn = document.getElementById("reset_btn")

var Interval ;

start_btn.addEventListener("click",function(){    
    clearInterval(Interval);
    Interval = setInterval(startTimer,10)
})

stop_btn.addEventListener("click",function(){
    clearInterval(Interval);
})

reset_btn.addEventListener("click",function(){
    clearInterval(Interval);
    sec.innerHTML = "00";
    tenz.innerHTML = "00";
})

function startTimer() {
    tens++;
    
    if(tens <= 9){
      tenz.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      tenz.innerHTML = tens;          
    } 
    
    if (tens > 99) {
      seconds++;
      sec.innerHTML = "0" + seconds;
      tens = 0;
      tenz.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      sec.innerHTML = seconds;
    }
}