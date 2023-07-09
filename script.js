function getComputerChoice(){
    let choice = Math.random()
    if(choice <= 0.33){
        return "Rock"
    }
    else if(choice >= 0.66){
        return "Scissors"
    }
    else{
        return "Paper"
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return ("Its a draw, you both chose " + playerSelection)
    }
    if(playerSelection == "Rock" && computerSelection == "Scissors" || 
       playerSelection == "Paper" && computerSelection == "Rock" ||
       playerSelection == "Scissors" && computerSelection == "Paper"){

        return ("You won, the computer chose " + computerSelection)
       }
    else{
        return ("You lost, the computer chose " + computerSelection)
    }
}

function game(){
    let compCount = 0
    let playerCount = 0
    let round = 1


    while(playerCount <= 3 || compCount <= 3){
        let str = playRound("Rock", getComputerChoice())
        if(str.charAt(4) == 'w'){
            playerCount += 1
        }
        else if(str.charAt(4) == 'l'){
            compCount += 1
        }
        console.log("Round " +round+ " " +str)
        round += 1

        if(compCount == 3){
            return "Computer won"
        }
        if(playerCount == 3){
            return "You won"
        }

    }
    return compCount
}

console.log(game())