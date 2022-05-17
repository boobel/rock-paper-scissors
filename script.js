//variable declarations

let choicesArray = ['rock', 'paper', 'scissors']
let computerSelection
let playerSelection
let playerInput
let scorestring
let computerScore
let playerScore



function computerPlay() {
    random_int = Math.floor(Math.random()*choicesArray.length) 
    return choicesArray[random_int]
}

function displayScore(scorestring) {

}

function rockChoice() {
    playerSelection = 'rock'
    computerSelection = computerPlay()
}

function scissorsChoice() {
    playerSelection = 'scissors'
    computerSelection = computerPlay()
}

function paperChoice() {
    playerSelection = 'paper'
    computerSelection = computerPlay()
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection){
        //tie
    }    
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        //computer wins
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        //player wins
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        //player wins
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        //computer wins
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        //player wins
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        //computer wins
    }
}