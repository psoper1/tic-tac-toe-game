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
spanDiv.innerText = "Player " + state.currentPlayer;
// let playerOne = spanDiv.includes("One");
// let playerTwo = spanDiv.includes("Two");
spanDiv.id = "turn";
mainDiv.appendChild(spanDiv);

let div1 = document.createElement("div");
div1.className = "box";
div1.style = "border-left: 0; border-top: 0";
div1.id = "box1";
mainDiv.appendChild(div1);
let btnBox1 = document.createElement("button");
btnBox1.id = "btnBox1";
btnBox1.innerText = "Test";
appMain.appendChild(btnBox1);
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

state.boxes = document.querySelectorAll(".box"), potato = 0;


// Make the button

// let btn = document.createElement("btn");
// btn.innerText = "Reset Board";
// btn.className = "btn btn-rounded";
// btn.id = "reset";
// appMain.appendChild(btn);


// Get the ID of the turn div where who's turn will be displayed as well as who the winner is

let currentPlayer = document.getElementById("turn");

//  Make a function checkTurn to check for whos turn it is
// Using % (Modulas)
function getCurrentPlayer () {

}



for (let i = 0; i < state.boxes.length; i++) {
    console.log(state.boxes[i])
    state.boxes[i].addEventListener("click", function() {
        //Run the function checkTurn
            //if statement based on checkTurn to print X or O in the box
        state.boxes[i].innerText = "X";
        state.howManyTurns++;
    })
}


let btn = document.createElement("btn");
btn.innerText = "Reset Board";
btn.className = "btn btn-rounded";
btn.id = "reset";
appMain.appendChild(btn);





//Event listener to clear all the p tags on the board and change it back to Player One's turn
btn.addEventListener("click", () => {
    document.getElementById("turn").innerText = "Player One's Turn";
    p1.innerText = "";
    p2.innerText = "";
    p3.innerText = "";
    p4.innerText = "";
    p5.innerText = "";
    p6.innerText = "";
    p7.innerText = "";
    p8.innerText = "";
    p9.innerText = "";
})


    // button.addEventListener('click', ()=>{
    //     msg.classList.toggle('reveal');
    //   })

    // var currentPlayer = "Player One's turn";
// let potato = 0;

// function printTurn() {
//     if (currentPlayer = playerOne) {
//         document.getElementById("p1").innerHTML = "X";
//         document.getElementById("turn").innerText = "Player Two" + "'s turn";
//     } else if (currentPlayer = playerTwo) {
//         document.getElementById("p1").innerHTML = "O";
//         document.getElementById("turn").innerText = "Player One" + "'s turn";
//     }
// }


//For some reason the === is not working, clicking the div box 1 will skip and print O
// div1.addEventListener("click", () => {
//     if (currentPlayer = "Player One's turn") {
//         document.getElementById("p1").innerText = "X";
//         document.getElementById("turn").innerText = "Player Two's turn";
//         currentPlayer = "Player Two's turn";
//         console.log("test1")
//     } else {
//         document.getElementById("p1").innerText = "O";
//         document.getElementById("turn").innerText = "Player One's turn";
//         currentPlayer = "Player One's turn";
//         console.log("test2")
//     }
    

// });


// div2.addEventListener("click", () => {
//     console.log(currentPlayer)
//     if (currentPlayer = "Player One's turn") {
//         document.getElementById("p2").innerHTML = "X";
//         document.getElementById("turn").innerText = "Player Two's turn";
//         currentPlayer = "Player Two's turn";
//         potato = 1;
//         console.log("test3")
//     }
//     if (currentPlayer = "Player Two's turn" && potato != 1) {
//         document.getElementById("p2").innerText = "O";
//         document.getElementById("turn").innerText = "Player One's turn";
//         currentPlayer = "Player One's turn";
//         console.log("test4")
//     }
// console.log(currentPlayer)
//     potato = 0;

// });

// div3.addEventListener("click", () => {
//     console.log(currentPlayer)
//     console.log(potato)
//     if (currentPlayer = "Player One's turn") {
//         document.getElementById("p3").innerHTML = "X";
//         document.getElementById("turn").innerText = "Player Two's turn";
//         currentPlayer = "Player Two's turn";
//         potato = 1;
//         console.log("test3")
//     }
//     if (currentPlayer = "Player Two's turn"  && potato != 1) {
//         document.getElementById("p3").innerText = "O";
//         document.getElementById("turn").innerText = "Player One's turn";
//         currentPlayer = "Player One's turn";
//         potato = 0;
//         console.log("test4")
//     }

//     potato = 0;
// });