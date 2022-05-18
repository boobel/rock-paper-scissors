//variable declarations

let choicesArray = ["rock", "paper", "scissors"]
let computerSelection
let playerSelection
let playerInput
let scorestring
let computerScore = 0
document.getElementById("compScore").innerHTML = computerScore
let playerScore = 0
document.getElementById("plrScore").innerHTML = playerScore



function updateDisplay(label,val) {
    document.getElementById(label).innerHTML = val
}

function computerPlay() {
    random_int = Math.floor(Math.random()*choicesArray.length) 
    return choicesArray[random_int]
}

function rockChoice() {
    playerSelection = "rock"
    computerSelection = computerPlay()
    playRound()
    updateDisplay("compScore",computerScore)
    updateDisplay("plrScore",playerScore)
    
}

function scissorsChoice() {
    playerSelection = "scissors"
    computerSelection = computerPlay()
    playRound()
    updateDisplay("compScore",computerScore)
    updateDisplay("plrScore",playerScore)


}

function paperChoice() {
    playerSelection = "paper"
    computerSelection = computerPlay()
    playRound()
    updateDisplay("compScore",computerScore)
    updateDisplay("plrScore",playerScore)
}

function playRound() {


    if(playerSelection === computerSelection){
        //tie
        alert("Tie!")
    }    
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        //computer wins
        alert("Computer wins!")
        computerScore += 1
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        //player wins
        alert("Player wins")
        playerScore += 1
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        //player wins
        alert("Player wins")
        playerScore += 1


    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        //computer wins
        alert("Computer wins!")
        computerScore += 1


    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        //player wins
        alert("Player wins")
        playerScore += 1


    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        //computer wins
        alert("Computer wins!")
        computerScore += 1
    }
}