function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    const rps = ['Rock','Paper','Scissors'];
    let ind = getRandomInt(3);
    return rps[ind];
}
function playRound(computerSelection, playerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if(computerSelection==playerSelection) return 0;
    if((computerSelection=='Rock' && playerSelection=='Scissors') || 
        (computerSelection=='Paper' && playerSelection=='Rock') || 
        (computerSelection=='Scissors' && playerSelection=='Paper')){
            return 1;
    }else{
        return 2;
    }
}
const playerSelectionDiv = document.querySelector('.player-selection');
const computerSelectionDiv = document.querySelector('.computer-selection');
const resultDiv = document.querySelector('.result');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');
let playerScore = 0;
let computerScore = 0;
function game(e){
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;
    const result = playRound(computerSelection,playerSelection);
    if(result==0){
        resultDiv.textContent = "It's a tie! You both chose "+playerSelection;
    }else if(result==1){
        playerScore++;
        resultDiv.textContent = "You Win! You chose "+playerSelection+" and  The Computer chose"+computerSelection;
    }else{
        computerScore++;
        resultDiv.textContent = "You Lose! You chose "+playerSelection+" and the The Computer chose "+computerSelection;
    }
    playerSelectionDiv.textContent = playerSelection;
    computerSelectionDiv.textContent = computerSelection;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    if(playerScore==5 || computerScore==5){
        
    }
}

const buttons = document.querySelectorAll('.selection');
buttons.forEach((button)=>{
    button.addEventListener('click',game)
});