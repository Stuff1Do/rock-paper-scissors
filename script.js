const startGame = document.querySelector('.start');
const announcer = document.querySelector('.announcer');
const header = document.querySelector('.header');


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 2);
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
        validInput = true;
        return "Rock";    
    }else if(actualUserChoice == "paper"){
        validInput= true;
        return "Paper";
        
    }else if(actualUserChoice == "scissors"){
        validInput = true;
        return "Scissors";
        
    }else{
        console.log("Not a valid input!");
    }
}
}
announcer.textContent = '';
startGame.addEventListener('click', playGame);
function playRound(humanChoice, computerChoice){
    let draw = 1;
    let lose = 2;
    let win = 3;
    if(humanChoice == computerChoice){
        return draw;
    }else if(humanChoice == "Rock" && computerChoice == "Paper" || 
            humanChoice == "Paper" && computerChoice =="Scissors" || 
            humanChoice == "Scissors" && computerChoice=="Rock"){
        return lose;
    }else{
        return win;
    }
}

let humanWins = 0;
let computerWins = 0;
const humanP = document.createElement('p');
const comP = document.createElement('p');

humanP.innerHTML =  `Human: ${humanWins}`;
comP.innerHTML = `Computer: ${computerWins}`;
humanP.setAttribute('class', 'displayblock');
comP.setAttribute('class', 'displayblock');

let humanScore = 0;
let computerScore = 0;
function playGame(){    
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    if(result == 1){
        announcer.textContent = `It's a draw, Current score: (${humanScore}:${computerScore})`;
        console.log('HELLO');
    }else if(result == 2){
        computerScore++;
        announcer.textContent = `You lose, Current score: (${humanScore}:${computerScore})`;
        console.log('im here');
    }else{
        humanScore++;
        announcer.textContent = `You win!, Current score: (${humanScore}:${computerScore})`;
        console.log('im here!!!');
    }

    if(humanScore == 5 || computerScore == 5){
        if(humanScore > computerScore){
            announcer.textContent= "You win! Score: (" + humanScore + ":"+ computerScore+").";
            humanScore = 0;
            humanWins++;
            humanP.innerHTML = `Human: ${humanWins}`;
        }else{
            announcer.textContent = "You lose! Score: (" + humanScore + ":"+ computerScore+").";
            computerScore = 0;
            humanWins++;
            comP.innerHTML = `Computer: ${computerWins}`;
        }
    }

    header.appendChild(humanP);
    header.appendChild(comP);
    humanP.setAttribute('class', 'displayblock');
    comP.setAttribute('class', 'displayblock');
   


}