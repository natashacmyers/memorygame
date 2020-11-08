/* ----------------- Declared Variables ------------------ */
let order = [];
let playOrder = [];
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
const reset = document.querySelector('#resetbutton');

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
playOrder = [];
flash = 0;
intervalId = 0;
level = 1;
levelCounter.innerHTML = 1;
for (var i = 0; i <20; i++){
    order.push(Math.floor(Math.random() * 4) + 1);
}
compTurn = true;
intervalId = setInterval(gameTurn, 800);
}