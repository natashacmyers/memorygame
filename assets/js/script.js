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

const flowers = document.querySelectorAll('.flower');
const start = document.querySelector('#startbutton');


function userFlashFlower () {
    if (this.classList.contains("flash")) {
        this.classList.remove("flash");
        this.classList.add("flashAgain");
    }
    else if (this.classList.contains("flashAgain")) {
        this.classList.remove("flashAgain");
        this.classList.add("flash");
    }
    else {
        this.classList.add("flash");
    }
    
}



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



flowers.forEach(flower => flower.addEventListener('click', userFlashFlower));
start.addEventListener('click', startButtonOn);
     


/* ---------------------- Play --------------- */

function play () {
win = false;
order = [];
playerOrder = [];
flash = 0;
intervalId = 0;
level = 1;
levelCounter.innerHTML = 1;
for (var i = 0; i < 20; i++){
    order.push(Math.floor(Math.random() * 6) + 1);
}
compTurn = true;
intervalId = setInterval(gameTurn, 800);
}


function gameTurn () {
    on = false;
 if (flash > levelCounter) {
     compTurn = false;
     on = true;
     console.log("computers done");
 }
 if (compTurn == true) {
     console.log("computer go");
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
    console.log("pink");
}
function two () {
    blueFlower.classList.add("flash");    
    console.log("blue");
}
function three () {
    greenFlower.classList.add("flash");
    console.log("green");
}
function four () {
    purpleFlower.classList.add("flash");
    console.log("purple");
}
function five () {
    redFlower.classList.add("flash");
    console.log("red");
}
function six () {
    yellowFlower.classList.add("flash");
    console.log("yellow");
}