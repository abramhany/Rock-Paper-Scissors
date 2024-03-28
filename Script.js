<<<<<<< Updated upstream
const choice = ['rock','paper','sicssors']
=======
const choice = ['rock','paper','scissors']
let score = 0
let playerSelection = ""
  // GUI
  const body = document.querySelector('body')
  const buttonHolder = document.createElement('div')
  const head = document.createElement('h1')
  const rock = document.createElement('button')
  const paper = document.createElement('button')
  const scissors = document.createElement('button')
  const scoreDisplay = document.createElement('h3')
  const result = document.createElement('h2')

  head.textContent = "Rock Paper Scissors"
  rock.textContent = "Rock"
  paper.textContent = "paper"
  scissors.textContent = "Scissors"
  

  body.appendChild(head)
  body.appendChild(result)
  body.appendChild(scoreDisplay)
  body.appendChild(buttonHolder)

  buttonHolder.appendChild(rock)
  buttonHolder.appendChild(paper)
  buttonHolder.appendChild(scissors)

  // button logic
    rock.addEventListener("click",() => {
        playerSelection = "rock"
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        
    })
    paper.addEventListener("click",() => {
        playerSelection = "paper"
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        
    })
    paper.addEventListener("click",() => {
        playerSelection = "paper"
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        
    }) 
    scissors.addEventListener("click",() => {
        playerSelection = "scissors"
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        
    })

// get a random selection from the computer
>>>>>>> Stashed changes
function getComputerChoice(){
    
    const random = choice[(Math.floor(Math.random()*choice.length))]
    const computerSelection = random
    return computerSelection
}
getComputerChoice()

<<<<<<< Updated upstream
function playRound(playerSelection, computerSelection) {
    if(choice.includes(playerSelection)){
=======

 
function playRound(playerSelection, computerSelection) {
    getComputerChoice()
    
>>>>>>> Stashed changes

        console.log(`You selected: `+playerSelection + ` computer selected: `+computerSelection)

        if(playerSelection==computerSelection){
            result.textContent = "Draw!"
        }if(playerSelection=='rock'){
            if(computerSelection=='paper'){
<<<<<<< Updated upstream
                console.log("You Lose")
            }if(computerSelection=='sicssors'){
                console.log("You Win")
            }
        }
        if(playerSelection=='paper'){
            if(computerSelection=='sicssors'){
                console.log("You Lose")
            }if(computerSelection=='rock'){
                console.log("You Win")
=======
                result.textContent = "You Lose!"
                score--
            }if(computerSelection=='scissors'){
                result.textContent = "You Win!"
                score++
            }
        }
        if(playerSelection=='paper'){
            if(computerSelection=='scissors'){
                result.textContent = "You Lose!"
                score--
            }if(computerSelection=='rock'){
                result.textContent = "You Win!"
                score++
>>>>>>> Stashed changes
            }
        }
        if(playerSelection=='scissors'){
            if(computerSelection=='rock'){
<<<<<<< Updated upstream
                console.log("You Lose")
            }if(computerSelection=='paper'){
                console.log("You Win")
=======
                result.textContent = "You Lose!"
                score--
            }if(computerSelection=='paper'){
                result.textContent = "You Win!"
                score++
>>>>>>> Stashed changes
            }
        }
        if(score < 0 ){
            score = 0
        }
        scoreDisplay.textContent = "your score is: "+score
    }
<<<<<<< Updated upstream
  }
  const input = prompt()
  const playerSelection = input.toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
=======
   

  


 
>>>>>>> Stashed changes
