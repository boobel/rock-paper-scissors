//variable declarations

let choicesArray = ['rock', 'paper', 'scissors']
let computerSelection
let playerSelection
let playerInput

function computerPlay() {
    random_int = Math.floor(Math.random()*choicesArray.length) 
    return choicesArray[random_int]
}

function playerPlay() {
    playerInput = window.prompt("Choose 1 - rock 2 - paper or 3 - scissors")
    if(playerInput == 1){
        return choicesArray[0]
    }
    else if(playerInput == 2){
        return choicesArray[1]
    }
    else if(playerInput == 3){
        return choicesArray[2]
    }
        
    

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerPlay.toLowerCase()
    computerSelection = computerPlay().toLowerCase()

    if(playerSelection == computerPlay){
        
    }    

}