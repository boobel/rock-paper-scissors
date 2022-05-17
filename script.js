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
    playerInput = console.log("Choose 1 - rock 2 - paper or 3 - scissors")
    switch(playerInput){
        
    }
    

}

function playRound(playerSelection, computerSelection) {

    playerSelection = 'rock'
    computerSelection = computerPlay().toLowerCase()

    if()

}