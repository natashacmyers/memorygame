/* ----------------- Declared Variables ------------------ */
let order = [];
let playerOrder = [];
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

/* ----------------- Start Button ------------------ */


const start = document.querySelector('#startbutton');



function startButtonOn () {
    if (this.classList.contains("startButtonPressed")){
        this.classList.remove("startButtonPressed");
        document.getElementById("startbutton").innerHTML = "Start";
        clearInterval(intervalId);
        
    }
    else {
        this.classList.add("startButtonPressed");
         document.getElementById("startbutton").innerHTML = "Stop";
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
for (var i = 0; i < 20; i++){
   order.push(Math.floor(Math.random() * 6) + 1);
   
}

compTurn = true;
intervalId = setInterval (gameTurn, 800);
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
     console.log("flash is " + flash);
     console.log("level is " + level);
     
 }
 if (compTurn) {
    console.log ("flash is now: " + flash);
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


/* ---------------------- User's Play --------------- */

/* once the computer has played, the user is allowed to play, the following functions show what 
happens when the user pressed a flower. The users choices are added to an array called 'playerOrder', and
the check() function is used to check if the user was correct */

function pinkFlowerPressed () {
    if (on) {
        playerOrder.push(1);
        check();
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
        check();
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
        check();
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
        check();
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
        check();
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
        check();
        six();
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


/* ---------------------- Checking the User's Choice --------------- */

function check () {
    
if (playerOrder[flash-1] != order[flash-1]) {
    console.log("the player has chosen an incorrect flower");
    good = false;
}
console.log(good);
if (playerOrder.length == 20 && good) {
    console.log("player won the game");
    winGame();
}
console.log(good);

if (good === false) {
    console.log("player did not answer correctly and a sting has been added");
    alert("Ouch! You took Bumble to a poisonous flower, so she stung you!");
    stings++;
    stingsFunction ();
        if (stings < 19) {
            console.log("player has lost the game");
        loseGame();
        }

        else {
            console.log("player has been stung but has not lost yet");
        setTimeout (() => {
        level++;
        compTurn = true;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
        } ,800)
}

}
console.log(good);
console.log(level);
console.log(playerOrder.length);

console.log(win);
if (level === playerOrder.length && good && !win) {
    console.log("player has chosen correctly");
    level++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    levelCounter.innerHTML = level;
    intervalId = setInterval(gameTurn, 800);
    
}
}

function stingsFunction () {
    document.getElementById(stingscount) == stings;
}

function loseGame () {
    alert("You got stung too many times! You need to go to hospital! To play again press start.");
    document.getElementById("topscorecount") = levelCounter;
    clearInterval(intervalId);
    levelCounter.innerHTML = 0;
    stings = 0;
    stingsFunction();
    on = false;
}

function winGame () {
    alert("Well done! Bumble has enough honey for winter now! You WIN :) ");
    clearInterval(intervalId);
    levelCounter.innerHTML = 0;
    stings = 0;
    stingsFunction();
    on = false;
}