var msec = 0
var sec = 0
var min = 0
var hr = 0


var msecHeading  = 0
var secHeading  = 0
var minHeading  = 0
var hrHeading  = 0
var interval;
var status = "Stopped"

function stopwatch(){
    msec++
    
        if(msec/ 100 === 1){
        sec++
        msec =0
        }
        else if(sec/60 === 1){
        min++
        sec = 0
        }
    msecHeading = msec.toString().fontsize(3.5)

    if (sec < 10){
        secHeading = "0" + sec.toString()
    }
    else{
        secHeading = sec
    }
    if(min < 10){
        minHeading = "0" + min.toString()
    }
    else{
        minHeading = min
    }
    if(hr < 10){
        hrHeading = "0" + hr.toString()
    }
    else{
        hrHeading = hr
    }
    document.getElementById("display").innerHTML = hrHeading + ":"+ minHeading + ":"+ secHeading + " " + msecHeading.sup()
}
function startStop(){
    if(status === "Stopped"){

    interval = setInterval(stopwatch, 10)
    document.getElementById("startStop").innerHTML = "Stop"
    status = "Started"
    }
    else{
        clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start"
        status = "Stopped"
    }
}

function reset(){
    hrHeading = 0;
    minHeading = 0;
    secHeading = 0;
    msecHeading = 0;

    
    document.getElementById("display").innerHTML = "00:00:00"
    clearInterval(interval)
}