let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");


function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function win(userChoice, computerChoice){
   userScore++;
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = compScore;
   const smallWordUser = "You".fontsize(3).sub();
   const smallWordComp = "Sila".fontsize(3).sub();
   result_p.innerHTML = `${userChoice}${smallWordUser} beats ${computerChoice}${smallWordComp} You win!`
   document.getElementById(userChoice).classList.add("green-glow");
   setTimeout(function(){document.getElementById(userChoice).classList.remove("green-glow")}, 1000);
}

function lose(userChoice, computerChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    const smallWordUser = "You".fontsize(3).sub();
    const smallWordComp = "Sila".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallWordUser} loses to ${computerChoice}${smallWordComp} You lose...`
    document.getElementById(userChoice).classList.add("pink-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("pink-glow")}, 1000);

}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    const smallWordUser = "You".fontsize(3).sub();
    const smallWordComp = "Sila".fontsize(3).sub();
    result_p.innerHTML = `${userChoice} ${smallWordUser} is equal to ${computerChoice}${smallWordComp}  It's a draw...`
    document.getElementById(userChoice).classList.add("blue-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("blue-glow")}, 1000);

}



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock": 
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function(){ game("Rock");});
    paper_div.addEventListener('click', function(){ game("Paper");});
    scissors_div.addEventListener('click', function(){ game("Scissors");});
}

main();
