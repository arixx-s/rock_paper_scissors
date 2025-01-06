let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorec = document.querySelector("#you");
const compScorec = document.querySelector("#pc");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userScorec.innerText = userscore;
    }
    else{
        compscore++;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScorec.innerText = compscore;
    } 
}


const playGame = (userChoice) => {
    
    // Generate computer choice
    const compChoice = getComputerChoice();
    
    if(userChoice === compChoice){
        msg.innerText = "draw";
        msg.style.backgroundColor= "black";
        
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="rock"? true: false;
        }
        else{
            userWin = compChoice==="rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});