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
    if(computerSelection==playerSelection) return "It's a tie! You both chose "+playerSelection;
    if((computerSelection=='Rock' && playerSelection=='Scissors') || 
        (computerSelection=='Paper' && playerSelection=='Rock') || 
        (computerSelection=='Scissors' && playerSelection=='Paper')){
            return "You Lose! "+computerSelection+" beats "+playerSelection;
    }else{
        return "You Win! "+playerSelection+" beats "+computerSelection;
    }
}

function game(e){
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;
    console.log(playRound(computerSelection,playerSelection));
}

const buttons = document.querySelectorAll('.selection');
buttons.forEach((button)=>{
    button.addEventListener('click',game)
});