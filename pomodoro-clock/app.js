"use strict";
const arrowUpEl = document.querySelector("#arrow-up");
const arrowDownEl = document.querySelector("#arrow-down");
const minutesEl = document.querySelector("#minutes");
const screenMinutesEl = document.querySelector(".screen-minutes");
const playEl = document.querySelector("#play");
const pauseEl = document.querySelector("#pause");

let sessionSeconds = 1500;
let defaultSeconds = 1500;
let countingDown = false;
let timer;
function format(x){
    if(x < 10){
       return x = "0" + x;
    }else 
       return x
}
function showMins(){
    minutesEl.innerHTML = Math.floor(defaultSeconds / 60);
    let seconds = sessionSeconds % 60 ;
    screenMinutesEl.innerHTML = format(Math.floor(sessionSeconds / 60)) + ":"+ format(seconds);
}
showMins();
function increaseMinutes(){
    if(countingDown !== true){
        defaultSeconds += 60;
        sessionSeconds = defaultSeconds;
        showMins()
    }else{
        return sessionSeconds;
    }
    if(defaultSeconds >= 3540){
        defaultSeconds = 3540;
        sessionSeconds = 3600;
    }
    
}
function decreaseMinutes(){
    if(countingDown !== true){
    defaultSeconds -= 60;
    sessionSeconds = defaultSeconds
    }else{
        return sessionSeconds;
    }
    if(sessionSeconds <= 0){
        sessionSeconds = 0;
        defaultSeconds = 0;
        countingDown = false;
    }
    showMins();
}
function startCountDown(){
    timer = setInterval(() => {
            sessionSeconds--
            showMins();
            // minutesEl.innerHTML = 0;
            if(sessionSeconds <= 0){
               screenMinutesEl.innerHTML = "Time's up!"
               clearInterval(timer);
               countingDown = false;
            }
    }, 1000);
}
function countDown(){
    if (countingDown === false){
        startCountDown();
        countingDown = true;
    }
    defaultSeconds = 1500;
}

function stopCountDown(){
    clearInterval(timer);
    countingDown = false;
}

arrowUpEl.addEventListener("click", increaseMinutes);
arrowDownEl.addEventListener("click", decreaseMinutes);
playEl.addEventListener("click", countDown);
pauseEl.addEventListener("click", stopCountDown)
