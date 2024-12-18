
let playGame = () => {
    let getComputerChoice = () => {
        if(Math.random() < 1 / 3)
            return "rock"
        else if(Math.random() < 2 / 3)
            return "paper"
        else(Math.random() < 1)
            return "scissors"
    }
    
    let getHumanChoice = () => prompt("Enter your choice (rock/paper/scissors) - ")
    
    let humanScore = computerScore = 0
    
    let playRound = (humanChoice, computerChoice) => {
        if(humanChoice.toLowerCase() === "rock")
        {
            if(computerChoice.toLowerCase() === "paper")
            {
                computerScore++
                return "You lose! Paper beats Rock"
            }
            else if(computerChoice.toLowerCase() === "scissors")
            {
                humanScore++
                return "You win! Rock beats Scissors"
            }
            else{
                return "Draw!"
            }
        }
        else if(humanChoice.toLowerCase() === "paper")
        {
            if(computerChoice.toLowerCase() === "scissors")
            {
                computerScore++
                return "You lose! Scissors beat Paper"
            }
            else if(computerChoice.toLowerCase() === "rock")
            {
                humanScore++
                return "You win! Paper beats Rock"
            }
            else{
                return "Draw!"
            }
        }
        else if(humanChoice.toLowerCase() === "scissors")
        {
            if(computerChoice.toLowerCase() === "rock")
            {
                computerScore++
                return "You lose! Rock beats Scissors"
            }
            else if(computerChoice.toLowerCase() === "rock")
            {
                humanScore++
                return "You win! Scissors beat Rock"
            }
            else{
                return "Draw!"
            }
        }
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()))
    console.log(playRound(getHumanChoice(), getComputerChoice()))
    console.log(playRound(getHumanChoice(), getComputerChoice()))
    console.log(playRound(getHumanChoice(), getComputerChoice()))
    console.log(playRound(getHumanChoice(), getComputerChoice()))

    return((humanScore > computerScore) ? "You win!" : (humanScore === computerScore ? "Game Draw!" : "You lose!"))
}

console.log(playGame())
