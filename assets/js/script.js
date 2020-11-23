/* ----------------- Declared Variables ------------------ */
let order = [];
let playerOrder = [];
let checkArray = [];
let flash;
let level;
let good;
let compTurn;
let intervalId;
let startGame = false;
let win;
let stings;
let on;
let colour;

// connecting each animated element to a constant variable, so they can be called throughout the script 

const levelCounter = document.querySelector(".levelcount");
const yellowFlower = document.querySelector(".yellow-flower");
const blueFlower = document.querySelector(".blue-flower");
const greenFlower = document.querySelector(".green-flower");
const pinkFlower = document.querySelector(".pink-flower");
const purpleFlower = document.querySelector(".purple-flower");
const redFlower = document.querySelector(".red-flower");
const blackFlower = document.querySelector(".black-flower");
const tropicalFlower = document.querySelector(".tropical-flower");
const whiteFlower = document.querySelector(".white-flower");
const start = document.querySelector('#startbutton');

/* ----------------- Start Button ------------------ */

// This function toggles a class to the start button when pressed, which turns the button red and changes the 
// words to 'stop' instead of 'start'.
// When the class is present, the game will be stopped and reset, and when the class is absent, the game will start.

function startButtonOn () {
    if (this.classList.contains("startButtonPressed")){
        this.classList.remove("startButtonPressed");
        document.getElementById("startbutton").innerHTML = "Start";
        levelCounter.innerHTML = 0;
        clearInterval(intervalId);
        stings = 0;
        stingsFunction();

        
    }
    else {
        this.classList.add("startButtonPressed");
         document.getElementById("startbutton").innerHTML = "Stop";
         compTurn = true;
        play();
    }
}

start.addEventListener('click', startButtonOn);
     
/* ---------------------- Repeatedly called functions  --------------- */

// this function is used to clear the inverted colours of the flowers after they have been flashed 

function clearInvertColour() {
      pinkFlower.classList.remove("flash");
      blueFlower.classList.remove("flash");
      greenFlower.classList.remove("flash");
      purpleFlower.classList.remove("flash");
      redFlower.classList.remove("flash");
      yellowFlower.classList.remove("flash");
      blackFlower.classList.remove("flash");
      tropicalFlower.classList.remove("flash");
      whiteFlower.classList.remove("flash");
}

// This function is used to show what should happen to each flower if it is called upon to 'flash' either by the 
// computer or by the user. In each case, the 'flash' class is added to the element for 0.5s and then removed. 

function flashFlower (colour) {

switch (colour) {
    case "pink":
        pinkFlower.classList.add("flash");
        setTimeout(() => {
        clearInvertColour();
        }, 200);
        break;
    case "blue":
        blueFlower.classList.add("flash");
        setTimeout(() => {
        clearInvertColour();
        }, 200);
        break;
    case "green":
        greenFlower.classList.add("flash");
        setTimeout(() => {
        clearInvertColour();
        }, 200);    
        break;
    case "purple":
        purpleFlower.classList.add("flash");
        setTimeout(() => {
        clearInvertColour();
        }, 200);    
        break;
    case "red":
        redFlower.classList.add("flash");
        setTimeout(() => {
        clearInvertColour();
        }, 200); 
        break;
    case "yellow":
        yellowFlower.classList.add("flash");
        setTimeout(() => {
        clearInvertColour();
        }, 200); 
        break;      
    case "black":
        blackFlower.classList.add("flash");
        setTimeout(() => {
        clearInvertColour();
        }, 200);  
        break;    
    case "tropical":
        tropicalFlower.classList.add("flash");
        setTimeout(() => {
        clearInvertColour();
        }, 200); 
        break;   
    case "white":
        whiteFlower.classList.add("flash");
        setTimeout(() => {
        clearInvertColour();
        }, 200); 
        break;       
}
}

// The stings function will change the innerHTML of the Stings element to equal whatever the stings variable is

function stingsFunction () {
    document.getElementById("stingscount").innerHTML = stings;
}

/* ---------------------- Computer's Play --------------- */

// The play function does the following:
// Sets win to false because the player hasn't won yet
// Sets good to true because the player hasn't lost yet
// Sets the order array to blank to clear any previous arrays from other games
// Sets the playerOrder array to blank for the same reason
// Sets flash to zero, to ensure the game will start from the beginning (i.e. only one flower will flash)
// Sets level to 1, to start at the beginning
// Sets levelCounter to equal the same as the level we are on (1)
// Stings is set to zero as the player has not made any wrong moves yet
// The function then creates a randomly generated series of numbers from 1 to 9, 20 numbers in total which are pushed
// into the 'order' array. These are the answers to the game that the computer will flash
// Then finally, the play function will call the gameTurn() function to play every second using setInterval

function play () {
win = false;
good = true;
order = [];
playerOrder = [];
flash = 0;
level = 1;
levelCounter.innerHTML = 1;
stings = 0;
for (var i = 0; i < 20; i++){
   order.push(Math.floor(Math.random() * 9) + 1);
   
}
intervalId = setInterval (gameTurn, 1000);
}


// gameTurn() function will do the following:
// sets on to false, on will be used as a check to see if the player can go yet, this stops the player choosing for now

// Then the function checks if the flash (which is incremented with each gameTurn() is equal to the level then the computer's
// turn is over. For example, if the user is on level 3 then there should only be 3 flashes. 
// CompTurn is then changed to false and on is changed to true so the user can play.

// If compTurn is true however the function will go through 'order' array one at a time, checking the assigned case, and
// flashing the appropriate colour using the flashFlower() function, until flash == level.

// Each round flash will be incremented by 1.

function gameTurn () {
    on = false;
 if (flash == level) {
     compTurn = false;
     on = true;
     clearInterval(intervalId);
 }
 if (compTurn) {
   
     clearInvertColour();
     setTimeout(() => {
        switch (order[flash]) {
        case 1 :
            colour = "pink";
            flashFlower(colour);
            break;
        case 2:
            colour = "blue";
            flashFlower(colour);
            break;
        
        case 3:
            colour = "green";
            flashFlower(colour);
            break;
        case 4:
            colour = "purple";
            flashFlower(colour);
            break;
        case 5:
            colour = "red";
            flashFlower(colour);
            break;
        case 6:
            colour = "yellow";
            flashFlower(colour);
            break;
         case 7:
             colour = "black";
            flashFlower(colour);
            break;
         case 8:
             colour = "tropical";
            flashFlower(colour);
            break;
         case 9:
             colour = "white";
            flashFlower(colour);
            break;
        }
        flash++;
        
     }, 200);  
    
 }
}



/* ---------------------- User's Play --------------- */

// Once the computer has played, the user is allowed to play.
// The following functions will action by a click from the user and will add the 'flash' class to the 
// element in the same way as when the computer plays. The users choices are added to an array called 
//'playerOrder', and the check() function is used to check if the user was correct.  

function pinkFlowerPressed () {
    if (on) {
        playerOrder.push(1);
        if (playerOrder.length == level) {
            check();
        }
        colour = "pink";
        flashFlower(colour);
        if (!win){
            setTimeout(() => {
                clearInvertColour;
            }, 300)
        }
    }
}

function blueFlowerPressed () {
    if (on) {
        playerOrder.push(2);
       if (playerOrder.length == level) {
            check();
        }
        colour = "blue";
        flashFlower(colour);
        if (!win){
            setTimeout(() => {
                clearInvertColour;
            }, 300)
        }
    }
}
function greenFlowerPressed () {
    if (on) {
        playerOrder.push(3);
         if (playerOrder.length == level) {
            check();
        }
        colour = "green";
        flashFlower(colour);
        if (!win){
            setTimeout(() => {
                clearInvertColour;
            }, 300)
        }
    }
}
function purpleFlowerPressed () {
    if (on) {
        playerOrder.push(4);
         if (playerOrder.length == level) {
            check();
        }
        colour = "purple";
        flashFlower(colour);
        if (!win){
            setTimeout(() => {
                clearInvertColour;
            }, 300)
        }
    }
}
function redFlowerPressed () {
    if (on) {
        playerOrder.push(5);
         if (playerOrder.length == level) {
            check();
        }
        colour = "red";
        flashFlower(colour);
        if (!win){
            setTimeout(() => {
                clearInvertColour;
            }, 300)
        }
    }
}
function yellowFlowerPressed () {
    if (on) {
        playerOrder.push(6);
         if (playerOrder.length == level) {
            check();
        }
        colour = "yellow";
        flashFlower(colour);
        if (!win){
            setTimeout(() => {
                clearInvertColour;
            }, 300)
        }
    }
}

function blackFlowerPressed () {
    if (on) {
        playerOrder.push(7);
         if (playerOrder.length == level) {
            check();
        }
        colour = "black";
        flashFlower(colour);
        if (!win){
            setTimeout(() => {
                clearInvertColour;
            }, 300)
        }
    }
}

function tropicalFlowerPressed () {
    if (on) {
        playerOrder.push(8);
         if (playerOrder.length == level) {
            check();
        }
        colour = "tropical";
        flashFlower(colour);
        if (!win){
            setTimeout(() => {
                clearInvertColour;
            }, 300)
        }
    }
}

function whiteFlowerPressed () {
    if (on) {
        playerOrder.push(9);
         if (playerOrder.length == level) {
            check();
        }
        colour = "white";
        flashFlower(colour);
        if (!win){
            setTimeout(() => {
                clearInvertColour;
            }, 300)
        }
    }
}

pinkFlower.addEventListener('click', pinkFlowerPressed);
blueFlower.addEventListener('click', blueFlowerPressed);
greenFlower.addEventListener('click', greenFlowerPressed);
purpleFlower.addEventListener('click', purpleFlowerPressed);
redFlower.addEventListener('click', redFlowerPressed);
yellowFlower.addEventListener('click', yellowFlowerPressed);
blackFlower.addEventListener('click', blackFlowerPressed);
tropicalFlower.addEventListener('click', tropicalFlowerPressed);
whiteFlower.addEventListener('click', whiteFlowerPressed);


/* ---------------------- Checking the User's Choice --------------- */

// This function just checks the playerOrder array against the order array. If they are the same then they are added to
// a checkArray array. 
function checkArrays () {
    for (let i = 0; i < playerOrder.length; i++) {
    if (playerOrder[i] === order[i]) {
        checkArray.push(playerOrder[i]);
    }
}
}

// The check function does the following:
// It calls the checkArrays() function which creates the checkArray array. If the player has answered correctly the 
// length of this array should be equal to the level the player is on. If not then the good will change to false.
function check () {
    checkArrays ();
if (checkArray.length != level) {
    good = false;
} 

// If the player has successfully passed level 20 then the winGame() function will be called 

if (level > 19 && good) {
    winGame();
}

// If the user has answered incorrectly then good will be changed to false. If good is false then the player is informed
// they have answered incorrectly, and a sting is added to their tally. 
 
if (good === false) {
    alert("Ouch! You took Bumble to a poisonous flower, so she stung you!");
    stings++;
    stingsFunction();
    
    // If the total number of stings is 3 then the loseGame() function is called.
        if (stings > 2) {
        loseGame();
        }
    // If the user does get a sting, this else function will restart the intervalId and continue the game play
    // The level will not increment as the user did not successfully pass the level
        else {
        setTimeout (() => {
        
        flash = 0;
        compTurn = true;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 1000);
        } ,800)
        }

}

// If the user has successfully passed the level, then level will increment, and the intervalId will play again

if (level === playerOrder.length && good && !win) {
    level++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    levelCounter.innerHTML = level;
    intervalId = setInterval(gameTurn, 1000);
    
}
checkArray = [];
}


/* ---------------------- End of Game Functions --------------- */

// The loseGame() function will alert the user that they have lost the game and reset the game.
// The game does not autorestart, the user will need to press Start to begin again.
// The topscore element will be updated if the current topscore is less than the one from the game just played.

function loseGame () {
    alert("You got stung too many times! You need to go to hospital! To play again press start.");
    if (level > document.getElementById("topscorecount").innerHTML){
        document.getElementById("topscorecount").innerHTML = level;
        } 
    clearInterval(intervalId);
    levelCounter.innerHTML = 0;
    stings = 0;
    stingsFunction();
    on = false;
    
}

// The winGame() function will alert the user that they have won the game and reset the game.
// The game does not autorestart, the user will need to press Start to begin again.
// The topscore element will be updated if the current topscore is less than the one from the game just played.

function winGame () {
    alert("Well done! Bumble has enough honey for winter now! You WIN :) ");
    clearInterval(intervalId);
    stings = 0;
    stingsFunction();
    on = false;
    if (level > document.getElementById("topscorecount").innerHTML){
        document.getElementById("topscorecount").innerHTML = level;
        } 
    level = 0;
    levelCounter.innerHTML = 0;
}

