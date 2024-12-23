let getComputerChoice = () => {
    if(Math.random() < 1 / 3)
        return "rock";
    else if(Math.random() < 2 / 3)
        return "paper";
    else(Math.random() < 1)
        return "scissors";
}
    
let getHumanChoice = () => prompt("Enter your choice (rock/paper/scissors) - ");
    
let humanScore = computerScore = 0;
    
let playRound = (humanChoice, computerChoice) => {
    if(humanChoice.toLowerCase() === "rock")
    {
        if(computerChoice.toLowerCase() === "paper")
        {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        }
        else if(computerChoice.toLowerCase() === "scissors")
        {
            humanScore++;
            console.log("You win! Rock beats Scissors");
        }
        else{
            console.log("Draw!");
        }
    }
    else if(humanChoice.toLowerCase() === "paper")
    {
        if(computerChoice.toLowerCase() === "scissors")
        {
            computerScore++;
            console.log("You lose! Scissors beat Paper");
        }
        else if(computerChoice.toLowerCase() === "rock")
        {
            humanScore++;
            console.log("You win! Paper beats Rock");
        }
        else{
            console.log("Draw!");
        }
    }
    else if(humanChoice.toLowerCase() === "scissors")
    {
        if(computerChoice.toLowerCase() === "rock")
        {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        }
        else if(computerChoice.toLowerCase() === "rock")
        {
            humanScore++;
            console.log("You win! Scissors beat Rock");
        }
        else{
            console.log("Draw!");
        }
    }
}

let body = document.querySelector("body");

let btn_rock = document.createElement("button");
btn_rock.classList.add("rock");
btn_rock.textContent = "Rock";
body.appendChild(btn_rock);

let btn_paper = document.createElement("button");
btn_paper.classList.add("paper");
btn_paper.textContent = "Paper";
body.appendChild(btn_paper);

let btn_scissors = document.createElement("button");
btn_scissors.classList.add("scissors");
btn_scissors.textContent = "Scissors";
body.appendChild(btn_scissors);

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.getAttribute("class"), getComputerChoice());
    });
})