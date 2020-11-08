/* ----------------- Declared Variables ------------------ */
let order = [];
let playOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let on = false;
let win;

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
        document.getElementById("startbutton").innerHTML = "Start";
    }
    else {
        this.classList.add("startButtonPressed");
        document.getElementById("startbutton").innerHTML = "Pause";
    }
}

flowers.forEach(flower => flower.addEventListener('click', userFlashFlower));
start.addEventListener('click', startButtonOn);


/* ---------------------- Computer's Turn --------------- */



/* ----------------------- User's Turn --------------------- */