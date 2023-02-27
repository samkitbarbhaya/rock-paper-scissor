function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getComputerChoice(){
    const rps = ['Rock','Paper','Scissors'];
    let ind = getRandomInt(3);
    return rps[ind];
}