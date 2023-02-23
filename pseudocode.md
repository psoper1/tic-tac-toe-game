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
` let state = {
    currentPlayer: 1, // Based on current turn, odd number then print X and increment howManyTurns by 1
    howManyTurns: 0, // Starts at 0, increments by 1 after each turn
    gameState: true, // Will use to disable the eventListener after the game is over
    boxes: [] // Empty array, the state of the box divs for which ones have X and which have O in them
} `
    
	-winningConditions
		[
		[0,1,2] - div1, div2, div3
		[3,4,5] - div4, div5, div6
		[6,7,8] - div7, div8, div9
	    [0,3,6] - div1, div4, div7
		[1,4,7] - div2, div5, div8
		[2,5,8] - div3, div6, div9
		[0,4,8] - div1, div5, div9
		[2,4,6] - div3, div5, div7
		]
        Function to get who the winner is
            -function whoWon
                -compare divs to see if they match the winningConditions
				  -if div1 is not equal to an empty string (meaning it has an X or an O in it) and div1 === div2 and div1 === div3
				  display winner
                
		
		Onclick listener for when a box is clicked run function to print either X or O depending on whos turn it is then changing the players turn
			-make a for loop to loop through all of the divs with the class box
			-inside call the getCurrentPlayer function to see who's turn it is
			-IF currentPlayer = Odd number then print X and increment howManyTurns by 1
				-ELSE print O and increment howManyTurns by 1

Reset button function
    -clears all divs and sets state of currentPlayer and howManyTurns back to default
	-figure out how to switch the gameState to false and disable the divs from being clicked