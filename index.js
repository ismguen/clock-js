
function TimeOnClock(){

    date = new Date();

    // Variablen für die Zeit

    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()
    let ampm = "";

    // Zweistellige Zahlen
    console.log(hours);
    if((hours/12) < 1){
        ampm = " AM"
    }else{
        ampm = " PM"
    }
    
    hours %= 12;

    if(seconds <= 9){
        seconds = "0" + seconds;
    }
    if(minutes <= 9){
        minutes = "0" + minutes;
    }
    if(hours <= 9){
        hours = "0" + hours;
    }
    


    // Zeit als Stringverkettung


    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + ampm;

}


function showTime(){
    setInterval(TimeOnClock,1000)
}

showTime();

