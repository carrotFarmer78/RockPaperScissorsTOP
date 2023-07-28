function getComputerChoice(){
    let choice = Math.random()
    if(choice <= 0.33){
        return "Rock"
    }
    else if(choice >= 0.66){
        return "Sci"
    }
    else{
        return "Paper"
    }
}

let playerPoints = 0;
let computerPoints = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const sci = document.querySelector("#scissors");
rock.addEventListener("click", () => {
    round("Rock")
});
paper.addEventListener("click", () => {
    round("Paper")
})
sci.addEventListener("click", () => {
    round("Sci")
})

function round(playerChoice){
    const compChoice = getComputerChoice();
    const container = document.querySelector(".results");
    const content = document.createElement("div")
    content.classList.add("content");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    

    if(playerChoice == "Sci" && compChoice == "Paper"
    || playerChoice == "Rock" && compChoice == "Sci"
    || playerChoice == "Paper" && compChoice == "Rock"){
    playerPoints += 1;
    content.textContent = "You´ve won"
    }
    else{
    computerPoints += 1;
    content.textContent = "You´ve lost"
    }
    container.appendChild(content);
    refreshScore()
}

function refreshScore(){
    const yourCont = document.querySelector("#yourPoints")
    const compCont = document.querySelector("#pcPoints")

    yourCont.innerHTML = "Your points: " + playerPoints
    compCont.innerHTML = "Computer points: " + computerPoints
}