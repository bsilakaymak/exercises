"use strict";

//DOM variables

const billAmount=document.querySelector(".bill-amount"); 
const numOfPeople = document.querySelector(".number-of-people"); 
const qualityofService = document.querySelector(".service");
const button = document.querySelector(".calc-button");
const resultEl = document.querySelector(".result");
const eachEl = document.querySelector(".each");

let result;

// this checks number of people and removes and adds 'each' accordingly

 function checkPeople(){
     if(numOfPeople.value == 1){
         eachEl.classList.add("each-hidden")
     }
     if(numOfPeople.value >=2){
         eachEl.classList.remove("each-hidden");
     }
 }


// this function makes sure characters are valid or input field is not empty
function checkValidity(input){
   if(Number.isNaN(Number(input)) === true){
       return false;
   }
   if(input == 0 || input.trim() ===""){
       return false;
   }
}


//I added this function, because when I checked number of people and amount of bill seperately,
//in cases where I had two empty or invalid input fields, I was getting two consecutive alerts.

function checkValForBoth (callback, input1, input2, message){
    if (callback(input1) === false || callback(input2) === false){
        alert(message);
        return false;
    }
}


// I added this to avoid two much repetition inside conditionals
function showResult(ratio){
    let valid = checkValForBoth(checkValidity, billAmount.value, numOfPeople.value, "Invalid characters or empty input field!");
    if(valid !== false){
        result = (billAmount.value * ratio) / numOfPeople.value;
        resultEl.innerHTML = "$" + parseFloat(result).toFixed(2);
        checkPeople();
    }else{
        resultEl.innerHTML = " "
    }
   
}


//This is the final function attached to my button, checking every condition.

function calculateTips(){
    if(qualityofService.value === "outstanding"){
        showResult(0.3);
    }else if(qualityofService.value === "good"){
        showResult(0.2);
    }else if(qualityofService.value === "bad"){
        showResult(0.1);
    }else if(qualityofService.value === "terrible"){
        showResult(0.05);
    }

}

// calling function calculateTips when button is clicked.

button.addEventListener("click", calculateTips);

