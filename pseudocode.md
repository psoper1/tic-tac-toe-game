Questions
How do we only allow one button click per tile? 
HTML/CSS
Conditional rendering
Is it an X in the square or a O
Who wins? X or O or also if the Cat

Atoms
Tiles
Using bootstrap on a div to make it .col-4

Div.container
	Div.row
		div.col-4

Organism
Tiles - click events
Board as whole
Buttons (restart)


Objectives
The game should let the players know who's turn it is.
Player x or player O
Remove EventListeners
Game tiles should only be clickable once
if the game is over they should not be clickable at all.
The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
There should be a Restart Game button that does not refresh the page (set state).
On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
Only have a single <div id="app"></div> in your index.HTML (try to code golf the HTML file)


Variables
STATE 
	currentPlayer
	boardState = [] (NINE SPOTS)
	winConditions
		[0,1,2]
		[3,4,5]
		[6,7,8]
	[0,3,6]
		1,4,7
		2,5,8
		0,4,8
		2,4,6

Functions
init()
checkWin()
switchPlayer()
If currentPlayer == ‘X’
currentPlayer = ‘O’
Else
currentPlayer = ‘X’
makeMove()
Adds the current player to the tile clicked
checkWin()
If win do endGame()
else
Switches the currentPlayer in state
Removes the eventListener
endGame()
Display the winner of the game
Remove all event listeners
Show reset game button

resetGame()
Drawboard
Resets state to initial values
Procedures

INIT
	Draw the board
	For each tile drawn, add a click listener to it


START

----------------------------------------------------------------------------------------------------------------------------


My Pseudocode

My questions
    -When the game is over, how do you have only the winning spaces highlighted?
    -Do I really need 9 different event listeners, or can I start on the 5th turn?
    -How to I simulate turns?
    -How to make the eventListeners check the whoWon function to see if there is a winner yet?

Initial screen will have the board, the initial layout
    -Use bootstrap classes and CSS styles to make each box (the board / playing area)
    -Make reset button under the board
    -Do this all in Javascript using .createElement for each HTML element
    -At the top, display who's turn it is. The initial value will be Player 1 as they will start the game
    -Have the game state set at default (blank board)

Create a state for each element of the game
    -currentPlayer = player1 && player2
		-Initial player is player1, everytime a box is clicked, if the state of the currentPlayer is player1, change to player2
			if player2 change to player 1
				//Run this in the eventListener for everytime a box is clicked
				-IF (currentPlayer === "Player One") {
					currentPlayer.innerTEXT = "Player Two";
				} ELSE IF (currentPlayer === "Player Two"){
					currentPlayer.innerTEXT = "Player One";
				}
	-boardState = [] (NINE SPOTS) ID's = box1, box2, box3, box4, box5, box6, box7, box8, box9
	-winConditions
		[
		[0,1,2] - box1, box2, box3
		[3,4,5] - box4, box5, box6
		[6,7,8] - box7, box8, box9
	    [0,3,6] - box1, box4, box7
		[1,4,7] - box2, box5, box8
		[2,5,8] - box3, box6, box9
		[0,4,8] - box1, box5, box9
		[2,4,6] - box3, box5, box7
		]
        Function to get who the winner is
            -function whoWon
                -ID each box ID in HTML to look at the contents
                -Loop through each array to check if each box is === X or === O
                -If one of the arrays === X or === O, stop the game and display the winner
		
		Onclick listener for when a box is clicked run function to print either X or O depending on whos turn it is
			function printResult(){
				if (currentPlayer === "Player One"){
					
				}
			}

Reset button function
    -calls back to the inital function where the board is blank