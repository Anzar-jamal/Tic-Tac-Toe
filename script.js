const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");



let currentPlayer;
let gameGrid;


const winningPositions = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];


function initGame () {

    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    newGameBtn.classList.remove("active");

    // UI update of init game
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents="all";
    })
    gameInfo.innerText = `Current Player - ${currentPlayer}`;


}



initGame();



function swapTurn() {
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }

    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}


function handleClick(index) {

    if(gameGrid[index] === ""){

        // change on UI
        boxes[index].innerHTML = currentPlayer;


        // change on logic code grid to count and manage
        gameGrid[index] = currentPlayer;


        boxes[index].style.pointerEvents="none";


        // swap turn for 2nd player
        swapTurn();
    }
}



boxes.forEach( (box, index) => {
    box.addEventListener('click', ()=>{

        handleClick(index);
    })
});


newGameBtn.addEventListener("click",initGame);