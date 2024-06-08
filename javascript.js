

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

//computerSelection when called returns rock paper or scissors
console.log("computer choice : " + computerSelection());

function humanRock () {
    console.log("Human has selected rock");
    return "rock";
}

function humanPaper () {
    console.log("Human has selected Paper");
    return "paper";
}

function humanScissors () {
    console.log("Human has selected Scissors");
    return "scissors";
}


