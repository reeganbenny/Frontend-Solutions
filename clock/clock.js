let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let hourAngle = 0, minuteAngle = 0, secondAngle = 0;


const clock = function(){
    secondAngle += 6;
    if(secondAngle === 360){
        minuteAngle += 6;
        secondAngle = 0;
    }
    if(minuteAngle === 360){
        hourAngle += 6;
        minuteAngle = 0;
    }

    if(hourAngle === 360){
        hourAngle = 0;
    }
    document.documentElement.style.setProperty('--hour', `${hourAngle}deg`);
    document.documentElement.style.setProperty('--minute', `${minuteAngle}deg`);
    document.documentElement.style.setProperty('--second', `${secondAngle}deg`);
    setTimeout(clock,1000);    
}

clock();