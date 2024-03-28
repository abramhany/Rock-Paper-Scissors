const choice = ['rock','paper','sicssors']
let score = 0

while(score != 5){
function getComputerChoice(){
    
    const random = choice[(Math.floor(Math.random()*choice.length))]
    const computerSelection = random
    return computerSelection
}

 
function playRound(playerSelection, computerSelection) {
    
    getComputerChoice()
    
    if(choice.includes(playerSelection)){

        console.log(`you selected: `+playerSelection + ` computer selected: `+computerSelection)

        if(playerSelection==computerSelection){
            alert("Draw")
        }if(playerSelection=='rock'){
            if(computerSelection=='paper'){
                alert("You Lose")
                score--
            }if(computerSelection=='sicssors'){
                alert("You Win")
                score++
            }
        }
        if(playerSelection=='paper'){
            if(computerSelection=='sicssors'){
                alert("You Lose")
                score--
            }if(computerSelection=='rock'){
                alert("You Win")
                score++
            }
        }
        if(playerSelection=='sicssors'){
            if(computerSelection=='rock'){
                alert("You Lose")
                score--
            }if(computerSelection=='paper'){
                alert("You Win")
                score++
            }
        }
    }else{
        alert("Wrong input!")
    }
    if(score < 0 ){
        score = 0
    }
    alert("your score is: "+ score)
    
  }

  const input = prompt()
  const playerSelection = input.toLowerCase();
  const computerSelection = getComputerChoice();
  
    console.log(playRound(playerSelection, computerSelection));
  
}
  