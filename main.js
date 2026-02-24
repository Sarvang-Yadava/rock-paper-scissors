let roundCount = 1;
let playerWinCount = 0;
let computerWinCount = 0;

function computerChoice(){
    let number = Math.floor(Math.random()*10);
    console.log(number);
    if(number>=1 && number<=3){
        return "rock";
    }
    if(number>=4 && number<=6){
        return "paper";
    }
    if(number>=7 && number<=9){
        return "scissors";
    }
}

function humanChoice(){
    let number = prompt("Enter rock,paper or scissors");
    console.log("Human chose: "+number);
    return number;
}

function playRound(){
    roundCount+=1;
    let choice = humanChoice().toLowerCase();
    let otherChoice = computerChoice();
    if(choice === otherChoice){console.log("Draw");}
    else{
        if((choice==="rock"&&otherChoice==="paper") || (choice==="paper" && otherChoice==="rock") || (choice==="scissors" && otherChoice==="paper")){
            console.log("You Win");
            playerWinCount+=1;
        }
        else{
            console.log("You Lost");
            computerWinCount+=1;
        }
    }
    playGame();
}

function playGame(){
    let choice = prompt("Do u wanna play?(Y/N)");
    if(choice===null){
        console.log("Prompt was cancelled.");
    }
    choice=choice.toUpperCase();
    if(choice==="Y"){
        console.log("Round "+parseInt(roundCount));
        playRound();
    }
    else{
        console.log("PlayerScore: "+playerWinCount);
        console.log("Computer Score: "+computerWinCount);
        console.log("Thank You for playing. Made by Paradox.");
    }
}