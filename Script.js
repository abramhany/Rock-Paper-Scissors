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
  paper.textContent = "Paper"
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
function getComputerChoice(){
    
    const random = choice[(Math.floor(Math.random()*choice.length))]
    const computerSelection = random
    return computerSelection
}


 
function playRound(playerSelection, computerSelection) {
    getComputerChoice()
    
    head.textContent = "Computer: " +computerSelection
        console.log(`You selected: `+playerSelection + ` computer selected: `+computerSelection)

        if(playerSelection==computerSelection){
            result.textContent = "Draw!"
        }if(playerSelection=='rock'){
            if(computerSelection=='paper'){
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
            }
        }
        if(playerSelection=='scissors'){
            if(computerSelection=='rock'){
                result.textContent = "You Lose!"
                score--
            }if(computerSelection=='paper'){
                result.textContent = "You Win!"
                score++
            }
        }
        if(score < 0 ){
            score = 0
        }
        scoreDisplay.textContent = "your score is: "+score
    }
   

  


 
