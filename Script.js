const choice = ['rock','paper','sicssors']
function getComputerChoice(){
    
    const random = choice[(Math.floor(Math.random()*choice.length))]
    const computerSelection = random
    return computerSelection
}
getComputerChoice()

function playRound(playerSelection, computerSelection) {
    if(choice.includes(playerSelection)){

        console.log(`you selected: `+playerSelection + ` computer selected: `+computerSelection)

        if(playerSelection==computerSelection){
            alert("Draw")
        }if(playerSelection=='rock'){
            if(computerSelection=='paper'){
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
            }
        }
        if(playerSelection=='sicssors'){
            if(computerSelection=='rock'){
                console.log("You Lose")
            }if(computerSelection=='paper'){
                console.log("You Win")
            }
        }
    }else{
        alert("Wrong input!")
    }
  }
  const input = prompt()
  const playerSelection = input.toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  