//State stuff

let state = {
    currentPlayer: 1,
    howManyTurns: 0,
    gameState: true,
    boxes: [],
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
// let btnBox1 = document.createElement("button");
// btnBox1.id = "btnBox1";
// btnBox1.innerText = "Test";
// appMain.appendChild(btnBox1);
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
// div5.style = "border-left: 0; border-top: 0";
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

//  Make a function checkTurn to check for whos turn it is
// Using % (Modulas)
function getCurrentPlayer() {
if (state.howManyTurns % 2 == 0) {
    state.currentPlayer = 2;
} else {
    state.currentPlayer = 1;
}
}



for (let i = 0; i < state.boxes.length; i++) {
    console.log(state.boxes[i])
    state.boxes[i].addEventListener("click", function() {
        //Run the function getCurrentPlayer
        getCurrentPlayer(state.boxes) 
            //if statement based on getCurrentPlayer to print X or O in the box
            if (state.howManyTurns % 2 == 0) {
                state.boxes[i].innerText = "X";
                spanDiv.innerText = "Player " + state.currentPlayer + " GO!";
                state.howManyTurns++;
            } else {
                state.boxes[i].innerText = "O";
                spanDiv.innerText = "Player " + state.currentPlayer + " GO!";
                state.howManyTurns++;
            }
        
    });
}



//Make reset button to reset the state of the game to default
let btn = document.createElement("btn");
btn.innerText = "Reset Board";
btn.className = "btn btn-rounded";
btn.id = "reset";
appMain.appendChild(btn);





//Event listener to clear all the p tags on the board and change it back to Player One's turn
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
    state.howManyTurns = 0;
})