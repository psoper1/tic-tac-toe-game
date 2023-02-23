//State objects

let state = {
    currentPlayer: 1,
    howManyTurns: 0,
    gameState: true,
    boxes: []
}

// ALL THE DIVS, or Div Wars, Return of the Divs

let appMain = document.getElementById("app");



let mainDiv = document.createElement("div");
mainDiv.className = "container";
mainDiv.id = "main";
appMain.appendChild(mainDiv);

let spanDiv = document.createElement("span");
spanDiv.innerText = "Player " + state.currentPlayer + " GO!";
spanDiv.id = "turn";
mainDiv.appendChild(spanDiv);

let div1 = document.createElement("div");
div1.className = "box";
div1.style = "border-left: 0; border-top: 0";
div1.id = "box1";
mainDiv.appendChild(div1);
let p1 = document.createElement("p");
p1.id = "p1";
div1.appendChild(p1);

let div2 = document.createElement("div");
div2.className = "box";
div2.style = "border-top: 0";
div2.id = "box2";
mainDiv.appendChild(div2);
let p2 = document.createElement("p");
p2.id = "p2";
div2.appendChild(p2);

let div3 = document.createElement("div");
div3.className = "box";
div3.style = "border-top: 0; border-right: 0";
div3.id = "box3";
mainDiv.appendChild(div3);
let p3 = document.createElement("p");
p3.id = "p3";
div3.appendChild(p3);

let div4 = document.createElement("div");
div4.className = "box";
div4.style = "border-left: 0";
div4.id = "box4";
mainDiv.appendChild(div4);

let div5 = document.createElement("div");
div5.className = "box";
div5.id = "box5";
mainDiv.appendChild(div5);

let div6 = document.createElement("div");
div6.className = "box";
div6.style = "border-right: 0";
div6.id = "box6";
mainDiv.appendChild(div6);

let div7 = document.createElement("div");
div7.className = "box";
div7.style = "border-left: 0; border-bottom: 0";
div7.id = "box7";
mainDiv.appendChild(div7);

let div8 = document.createElement("div");
div8.className = "box";
div8.style = "border-bottom: 0";
div8.id = "box8";
mainDiv.appendChild(div8);

let div9 = document.createElement("div");
div9.className = "box";
div9.style = "border-right: 0; border-bottom: 0";
div9.id = "box9";
mainDiv.appendChild(div9);

state.boxes = document.querySelectorAll(".box");

// Get the ID of the turn div where who's turn will be displayed as well as who the winner is

let currentPlayer = document.getElementById("turn");

//Declare winning conditions
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Write a function that checks for a winner


//Compare the divs in a way that matches the array of winningConditions
//if div1.innerHTML (What is inside that div, should be X or O) is not equal to an empty string
//  && div1 is equal to div2 and div1 is equal to div3 then it's a win
//then else if statements for each posible outcome
//Will likely be a ton of code, but works logically how I am thinking

function checkWin() {
    if (
        (div1.innerHTML !== "" && div1.innerHTML === div2.innerHTML && div1.innerHTML === div3.innerHTML) ||
        (div4.innerHTML !== "" && div4.innerHTML === div5.innerHTML && div4.innerHTML === div6.innerHTML) ||
        (div7.innerHTML !== "" && div7.innerHTML === div8.innerHTML && div7.innerHTML === div9.innerHTML) ||
        (div1.innerHTML !== "" && div1.innerHTML === div4.innerHTML && div1.innerHTML === div7.innerHTML) ||
        (div2.innerHTML !== "" && div2.innerHTML === div5.innerHTML && div2.innerHTML === div8.innerHTML) ||
        (div3.innerHTML !== "" && div3.innerHTML === div6.innerHTML && div3.innerHTML === div9.innerHTML) ||
        (div1.innerHTML !== "" && div1.innerHTML === div5.innerHTML && div1.innerHTML === div9.innerHTML) ||
        (div3.innerHTML !== "" && div3.innerHTML === div5.innerHTML && div3.innerHTML === div7.innerHTML)
    ) {
        spanDiv.innerText = "Player " + (state.currentPlayer % 2 + 1) + " won!";
        state.gameState = false;
        noMoreClick();
    }
};

// Function to disable the click events if the game is over (state.gameStatus = false)

function noMoreClick() {
    if (state.gameState === false) {
        div1.style.pointerEvents = "none";
        div2.style.pointerEvents = "none";
        div3.style.pointerEvents = "none";
        div4.style.pointerEvents = "none";
        div5.style.pointerEvents = "none";
        div6.style.pointerEvents = "none";
        div7.style.pointerEvents = "none";
        div8.style.pointerEvents = "none";
        div9.style.pointerEvents = "none";
    }
};


//  Make a function checkTurn to check for whos turn it is
// Using % (Modulas)
function getCurrentPlayer() {
    if (state.howManyTurns % 2 == 0) {
        state.currentPlayer = 2;
    } else {
        state.currentPlayer = 1;
    }
}


//For loop with an eventListener to check whos turn it is, print X or O accordingly and check for who won after each turn
for (let i = 0; i < state.boxes.length; i++) {
    // console.log(state.boxes[i])
    state.boxes[i].addEventListener("click", async function () {
        //Run the function getCurrentPlayer
        getCurrentPlayer(state.boxes)
        //if statement based on getCurrentPlayer to print X or O in the box
        if (state.howManyTurns % 2 == 0) {
            //print the X to the screen
            state.boxes[i].innerText = "X";
            spanDiv.innerText = "Player " + state.currentPlayer + " GO!";
            //increment hoManyTurns by 1 each time
            state.howManyTurns++;
        } else {
            //print the O to the screen
            state.boxes[i].innerText = "O";
            spanDiv.innerText = "Player " + state.currentPlayer + " GO!";
            //increment hoManyTurns by 1 each time
            state.howManyTurns++;
        }
        //Call checkWin function after each turn

        checkWin();



    });
}



//Make reset button to reset the state of the game to default
let btn = document.createElement("btn");
btn.innerText = "Reset Board";
btn.className = "btn btn-rounded";
btn.id = "reset";
appMain.appendChild(btn);





//Event listener to clear all the divs on the board and change it back to Player One's turn
btn.addEventListener("click", () => {
    document.getElementById("turn").innerText = "Player 1 GO!";
    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";
    div1.style.pointerEvents = "auto";
    div2.style.pointerEvents = "auto";
    div3.style.pointerEvents = "auto";
    div4.style.pointerEvents = "auto";
    div5.style.pointerEvents = "auto";
    div6.style.pointerEvents = "auto";
    div7.style.pointerEvents = "auto";
    div8.style.pointerEvents = "auto";
    div9.style.pointerEvents = "auto";
    state.howManyTurns = 0;
    state.gameState = true;
    
    
    
})



//In the checkWin function, didn't work but lead me to think about it more and come up with my final solution

// if (state.boxes[0], [1], [2] === winningConditions[0]) {
    //     spanDiv.innerText = "You won!"
    // } else if (state.boxes[3], [4], [5] === winningConditions[1]) {
    //     spanDiv.innerText = "You won!"
    // }
    // else if (state.boxes[6], [7], [8] === winningConditions[2]) {
    //     spanDiv.innerText = "You won!"
    // }
    // else if (state.boxes[0], [3], [6] === winningConditions[3]) {
    //     spanDiv.innerText = "You won!"
    // }
    // else if (state.boxes[1], [4], [7] === winningConditions[4]) {
    //     spanDiv.innerText = "You won!"
    // }
    // else if (state.boxes[2], [5], [8] === winningConditions[5]) {
    //     spanDiv.innerText = "You won!"
    // }
    // else if (state.boxes[0], [4], [8] === winningConditions[6]) {
    //     spanDiv.innerText = "You won!"
    // }
    // else if (state.boxes[2], [4], [6] === winningConditions[7]) {
    //     spanDiv.innerText = "You won!"
    // }

    //for loop I might use later to disable the board after the win

    // for (let i = 0; i < state.boxes.length; i++) {
    //     state.boxes[i].className = "taco";
    //     }