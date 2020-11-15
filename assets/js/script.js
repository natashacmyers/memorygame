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

/* ----------------- Start Button ------------------ */


const start = document.querySelector('#startbutton');



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

/* this function is used to clear the inverted colours of the flowers after they have been flashed */
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

/* ---------------------- Computer's Play --------------- */

/* play function, sets the order for the computer to play the 20 rounds, then sets an interval to play the function 
every 800 milliseconds */
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

/* Game turn function, firstly checks if the computer is still playing, if the computer is still playing
then should flash the nth number in the order, going up from 1 until the first if statement is true */
function gameTurn () {
    on = false;
 if (flash == level) {
     compTurn = false;
     on = true;
     clearInterval(intervalId);
     console.log("computer is done");

     
 }
 if (compTurn) {
   
     clearInvertColour();
     setTimeout(() => {
        if (order[flash] === 1) {
            one();
        }
        if (order[flash] === 2) {
            two();
        }
        if (order[flash] === 3) {
            three();
        }
        if (order[flash] === 4) {
            four();
        }
        if (order[flash] === 5) {
            five();
        }
        if (order[flash] === 6) {
            six();
        }
         if (order[flash] === 7) {
            seven();
        }
         if (order[flash] === 8) {
            eight();
        }
         if (order[flash] === 9) {
            nine();
        }
        flash++;
        
     }, 200);
    

 }
}

/* the following functions describe what each flower should do when caled upon */

function one () {
    pinkFlower.classList.add("flash");
    setTimeout(() => {
        clearInvertColour();
    }, 200);
  
}

function two () {
    blueFlower.classList.add("flash");    
    setTimeout(() => {
        clearInvertColour();
    }, 200);
  
    
}
function three () {
    greenFlower.classList.add("flash");
    setTimeout(() => {
        clearInvertColour();
    }, 200);
  
   
}
function four () {
    purpleFlower.classList.add("flash");
    setTimeout(() => {
        clearInvertColour();
    }, 200);
  
   
}
function five () {
    redFlower.classList.add("flash");
    setTimeout(() => {
        clearInvertColour();
    }, 200);
  
    
}
function six () {
    yellowFlower.classList.add("flash");
   setTimeout(() => {
        clearInvertColour();
    }, 200);
  
 
}

function seven () {
    blackFlower.classList.add("flash");
   setTimeout(() => {
        clearInvertColour();
    }, 200);
  
 
}

function eight () {
    tropicalFlower.classList.add("flash");
   setTimeout(() => {
        clearInvertColour();
    }, 200);
  
 
}

function nine () {
    whiteFlower.classList.add("flash");
   setTimeout(() => {
        clearInvertColour();
    }, 200);
  
 
}

/* ---------------------- User's Play --------------- */

/* once the computer has played, the user is allowed to play, the following functions show what 
happens when the user pressed a flower. The users choices are added to an array called 'playerOrder', and
the check() function is used to check if the user was correct */

function pinkFlowerPressed () {
    if (on) {
        playerOrder.push(1);
        if (playerOrder.length == level) {
            check();
        }
        one();
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
        two();
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
        three();
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
        four();
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
        five();
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
        six();
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
        seven();
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
        eight();
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
        nine();
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
function checkArrays () {
    for (let i = 0; i < playerOrder.length; i++) {
    if (playerOrder[i] === order[i]) {
        console.log("playerOrder[i] = " + playerOrder[i]);
        console.log("order[i] = " + order[i]);
        checkArray.push(playerOrder[i]);
        console.log("checkArray = " + checkArray);
    }
}
}


function check () {
    checkArrays ();
if (checkArray.length != level) {
    console.log("the player has chosen an incorrect flower");
    good = false;
} 


if (playerOrder.length == 20 && good) {
    console.log("player won the game");
    winGame();
}


if (good === false) {
    console.log("player did not answer correctly and a sting has been added");
    alert("Ouch! You took Bumble to a poisonous flower, so she stung you!");
    stings++;
    console.log("stings = " + stings);
    stingsFunction();
        if (stings > 2) {
            console.log("player has lost the game");
        loseGame();
        }

        else {
            console.log("player has been stung but has not lost yet");
        setTimeout (() => {
        
        flash = 0;
        compTurn = true;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 1000);
        } ,800)
}

}


if (level === playerOrder.length && good && !win) {
    console.log("player has chosen correctly");
    level++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    levelCounter.innerHTML = level;
    intervalId = setInterval(gameTurn, 1000);
    
}
checkArray = [];
}



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

function winGame () {
    alert("Well done! Bumble has enough honey for winter now! You WIN :) ");
    if (levelCounter > document.getElementById("topscorecount").innerHTML){
        document.getElementById("topscorecount").innerHTML = levelCounter;
        } 
    clearInterval(intervalId);
    levelCounter.innerHTML = 0;
    stings = 0;
    stingsFunction();
    on = false;
}

function stingsFunction () {
    document.getElementById("stingscount").innerHTML = stings;
}