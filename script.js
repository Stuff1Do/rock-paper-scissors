


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "Rock";
    }else if(choice == 1){
        return "Paper";
    }else{
        return "Scissors";
    }
    
}

function getHumanChoice(){
    let validInput = false;
    while(!validInput){
    let userChoice = prompt("Rock, Paper, Scissors?: ");
    let actualUserChoice = userChoice.toLowerCase();
    if(actualUserChoice == "rock"){
        return "Rock";
        validInput = true;
    }else if(actualUserChoice == "paper"){
        return "Paper";
        validInput= true;
    }else if(actualUserChoice == "scissors"){
        return "Scissors";
        validInput = true;
    }else{
        console.log("Not a valid input!");
    }
}
}

function playRound(humanChoice, computerChoice){
    let draw = 1;
    let lose = 2;
    let win = 3;
    if(humanChoice == computerChoice){
        return draw;
    }else if(humanChoice == "Rock" && computerChoice == "Paper" || humanChoice == "Paper" && computerChoice =="Scissors" || humanChoice == "Scissors" && computerChoice=="Rock"){
        return lose;
    }else{
        return win;
    }
}


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if(result == 1){
            console.log("It's a draw!");
        }else if(result == 2){
            console.log("You lose");
            computerScore++;
        }else{
            console.log("You win!");
            humanScore++;
        }
    }

    if(humanScore > computerScore){
        console.log("You win! Score: (" + humanScore + ":"+ computerScore+").");
    }else{
        console.log("You lose! Score: (" + humanScore + ":"+ computerScore+").");
    }


}