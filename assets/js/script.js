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

const levelCounter = document.querySelector(".levelcount");
const yellowFlower = document.querySelector(".yellow-flower");
const blueFlower = document.querySelector(".blue-flower");
const greenFlower = document.querySelector(".green-flower");
const pinkFlower = document.querySelector(".pink-flower");
const purpleFlower = document.querySelector(".purple-flower");
const redFlower = document.querySelector(".red-flower");

/* ----------------- User Buttons ------------------ */


const start = document.querySelector('#startbutton');



function startButtonOn () {
   if (this.classList.contains("startButtonPressed")) {
        this.classList.remove("startButtonPressed");
        clearInterval(intervalId);
        clearInvertColour();
        levelCounter.innerHTML = 0;
        document.getElementById("startbutton").innerHTML = "Start";
        
    }
   
    else {
        this.classList.add("startButtonPressed");
        document.getElementById("startbutton").innerHTML = "Stop";
        play();
        
    }
}



start.addEventListener('click', startButtonOn);
     


/* ---------------------- Computer's Play --------------- */


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

}


function gameTurn () {
    on = false;
 if (flash > levelCounter) {
     compTurn = false;
     on = true;
     
 }
 if (compTurn == true) {
   
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

function clearInvertColour() {
      pinkFlower.classList.remove("flash");
      blueFlower.classList.remove("flash");
      greenFlower.classList.remove("flash");
      purpleFlower.classList.remove("flash");
      redFlower.classList.remove("flash");
      yellowFlower.classList.remove("flash");
};

function one () {
    pinkFlower.classList.add("flash");
    
}
function two () {
    blueFlower.classList.add("flash");    
    
}
function three () {
    greenFlower.classList.add("flash");
   
}
function four () {
    purpleFlower.classList.add("flash");
   
}
function five () {
    redFlower.classList.add("flash");
    
}
function six () {
    yellowFlower.classList.add("flash");
 
}

/* ---------------------- User's Play --------------- */

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
if (playerOrder[playerOrder.length -1] != order[order.length - 1]) {
    good = false;
}
if (playerOrder.length == 20 && good) {
    winGame();
}
if (good = false) {
    alert("Ouch! You took Bumble to a poisonous flower, so she stung you!");
    stings++;
    stingsFunction ();
}
if (stings < 19) {
    loseGame();
}

else {
    setTimeout (() => {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
    } ,800)
}

if (level = playerOrder.length && good && !win) {
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