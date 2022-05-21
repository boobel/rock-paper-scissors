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
let playerIcon = ' '
document.getElementById("plrchsn").innerHTML = playerIcon
let computerIcon = ' '
document.getElementById("compchsn").innerHTML = computerIcon
let winner = ' '
document.getElementById("roundwinner").innerHTML = winner
let gamewinner = ' '
document.getElementById("gamewinner").innerHTML = gamewinner
document.getElementById("replaybutton").style.visibility = "hidden"
let gameOver = false



function updateDisplay(label, val) {
    document.getElementById(label).innerHTML = val
}

function computerPlay() {
    random_int = Math.floor(Math.random() * choicesArray.length)
    return choicesArray[random_int]
}

function rockChoice() {
    playerSelection = "rock"
    computerSelection = computerPlay()
    playRound()
    updateDisplay("compScore", computerScore)
    updateDisplay("plrScore", playerScore)
    updateDisplay("roundwinner", winner)
    updateDisplay("plrchsn", playerIcon)
    updateDisplay("compchsn", computerIcon)
    updateDisplay("gamewinner", gamewinner)

}

function scissorsChoice() {
    playerSelection = "scissors"
    computerSelection = computerPlay()
    playRound()
    updateDisplay("compScore", computerScore)
    updateDisplay("plrScore", playerScore)
    updateDisplay("roundwinner", winner)
    updateDisplay("plrchsn", playerIcon)
    updateDisplay("compchsn", computerIcon)
    updateDisplay("gamewinner", gamewinner)

}

function paperChoice() {
    playerSelection = "paper"
    computerSelection = computerPlay()
    playRound()
    updateDisplay("compScore", computerScore)
    updateDisplay("plrScore", playerScore)
    updateDisplay("roundwinner", winner)
    updateDisplay("plrchsn", playerIcon)
    updateDisplay("compchsn", computerIcon)
    updateDisplay("gamewinner", gamewinner)
    updateDisplay("gamewinner", gamewinner)

}

function playRound() {


    if (playerSelection === 'rock') {
        playerIcon = '✊'
    } else if (playerSelection === 'paper') {
        playerIcon = '✋'
    } else {
        playerIcon = '✌'
    }

    if (computerSelection === 'rock') {
        computerIcon = '✊'
    } else if (computerSelection === 'paper') {
        computerIcon = '✋'
    } else {
        computerIcon = '✌'
    }

    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection === computerSelection) {
            //tie
            winner = 'Tie'
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            //computer wins
            winner = 'Computer wins!'
            computerScore += 1
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            //player wins
            winner = 'Player wins!'

            playerScore += 1
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            //player wins
            winner = 'Player wins!'

            playerScore += 1


        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            //computer wins
            winner = 'Computer wins!'
            computerScore += 1


        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            //player wins
            winner = 'Player wins!'
            playerScore += 1


        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            //computer wins
            winner = 'Computer wins!'
            computerScore += 1
        }
    }


    if (playerScore >= 5 && gameOver == false) {
        playerScore = 5
        
        gamewinner = "Player won the game!"
        document.getElementById("replaybutton").style.visibility = "visible"
        gameOver = true


    } else if (computerScore >= 5 && gameOver == false) {
        computerScore = 5
        
        gamewinner = "Computer won the game!"
        document.getElementById("replaybutton").style.visibility = "visible"
        gameOver = true

    }


}