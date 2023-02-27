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
    if(computerSelection==playerSelection) return "It's a tie!";
    if((computerSelection=='Rock' && playerSelection=='Scissors') || 
        (computerSelection=='Paper' && playerSelection=='Rock') || 
        (computerSelection=='Scissors' && playerSelection=='Paper')){
            return "You Lose! "+computerSelection+" beats "+playerSelection;
    }else{
        return "You Win! "+playerSelection+" beats "+computerSelection;
    }
}
const computerSelection = getComputerChoice();
const playerSelection = "scissors";
console.log(playRound(computerSelection,playerSelection));