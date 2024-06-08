let computerChoice = "NULL";
let playerChoice = "";
let humanScore = 0;
let computerScore = 0;
let iterations = 5;
let z = 0;


function computerSelection () {

//computer randomisation number between 0 - 2
//0 - rock 
// 1 - paqper 
//2 - scissors

//store in var = compChoice


    let randomNumber = Math.floor(Math.random() * 3);  
    let compChoice = '';

    //get a randnom number bertween 0 - 2
    switch (randomNumber) {
        case 0: 
            randomNumber == 0;
            compChoice = "rock"
        break;
        case 1:
            randomNumber == 1;
            compChoice="paper";
        break;
        case 2:
            randomNumber == 2;
            compChoice = "scissors";     
        break;       
    }

    return (compChoice);
}






/*function logic (humanChoice, computerChoice) {

    

    console.log("computer score for the round : " + computerScore);
    console.log("your score : for the round" + humanScore);

}

*/

//computerSelection when called returns rock paper or scissors
//console.log("computer select : " + computerSelection());

//human rock


function humanRock () {
    console.log("rock was chosen");
    playerChoice = "rock";
    playRound();
}

function humanPaper () {
    console.log ("paper was chosen");
    playerChoice = "paper";
    playRound();
   
}

function humanScissors () {
    console.log ("scissors was chosen");
    playerChoice = "scissors";
    playRound();
    }

function playRound () { 


    console.log("playerChoice var is = " + playerChoice);
    computerChoice = computerSelection();
    console.log("computerChoice var is " + computerChoice);


    if(playerChoice === "rock" && computerChoice == "rock") {
        console.log("Draw");
        window.alert("you chose rock, computer chose rock, draw.");
    }

    else if(playerChoice === "rock" && computerChoice === "paper"){
        console.log("Computer wins");
        window.alert("you chose rock, computer chose paper, computer wins.");
        computerScore++;
        
    }

    else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("Human Wins!");
        window.alert("you chose rock, computer chose scissors, you win..");
        humanScore++;
        
    }

    else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("Human Wins");
        window.alert("you chose paper, computer chose rock, you win..");
        humanScore++;
    }

    else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer Wins");
        window.alert("you chose paper, computer chose scissors, computer wins..");
        computerScore++;
    }

    else if (playerChoice === "paper" && computerChoice === "paper") {
        console.log("Draw");
        window.alert("you chose paper, computer chose paper, draw");
    }

    else if (playerChoice === "scissors" && computerChoice === "scissors") {
        console.log("draw");
        window.alert("you chose scissors, computer chose scissors, draw..");
    }

    else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("computer wins!")
        window.alert("you chose scissors, computer chose rock, computer wins..");
        computerScore++;
    }

    else if (playerChoice == "scissiors" && computerChoice === "paper") {
        console.log("Human Wins!");
        window.alert("you chose scissors, computer chose paper, you win..");
        humanScore++;
    }

    console.log("HUMAN TOTAL SCORE : " + humanScore.toString());
    console.log("COMPUTER TOTAL SCORE : " + computerScore);

    //running total

    updateScores();
    z++;
}


function updateScores () {


    document.getElementById(runningCompscore.innerHTML = "COMPUTER SCORE : " + computerScore);
    document.getElementById(runningPlayerscore.innerHTML = "PLAYER SCORE : " + humanScore);
    console.log("reading...");
    console.log("VALUE OF Z : " + z);
    
    if (z == 4) {
        console.log("game over");
        calculateWinner();

    }
   
}

function resetGame () {
    computerScore = 0;
    humanScore = 0;
    document.getElementById(runningCompscore.innerHTML = "COMPUTER SCORE : 0");
    document.getElementById(runningPlayerscore.innerHTML = "PLAYER SCORE : 0");

}

function calculateWinner () {

    if (computerScore < humanScore) {
        window.alert("HUMAN WINS");
    }
    else if (computerScore == humanScore) {
        window.alert("draw");
    }
    else {
        window.alert("PLAYER WINS!");
    }

    resetGame();

}
