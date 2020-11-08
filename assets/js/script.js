/* ----------------- Declared Variables ------------------ */
let order = [];
let playOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let startGame = false;
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

function resetButtonClick () {
    if (this.classList.contains("resetButtonPressed")) {
        this.classList.remove("resetButtonPressed");
        this.classList.add("resetButtonPressedAgain");
    }
    else if (this.classList.contains("resetButtonPressedAgain")) {
        this.classList.remove("resetButtonPressedAgain");
        this.classList.add("resetButtonPressed");
    }
    else {
        this.classList.add("resetButtonPressed");
    }
    
}


function startButtonOn () {
   if (this.classList.contains("startButtonPressed")) {
        this.classList.remove("startButtonPressed");
        this.classList.add("startButtonPressedAgain");
        play();
    }
    else if (this.classList.contains("startButtonPressedAgain")) {
        this.classList.remove("startButtonPressedAgain");
        this.classList.add("startButtonPressed");
        play();
    }
    else {
        this.classList.add("startButtonPressed");
        play();
    }
}



flowers.forEach(flower => flower.addEventListener('click', userFlashFlower));
start.addEventListener('click', startButtonOn);
reset.addEventListener('click', resetButtonClick);      


/* ---------------------- Play --------------- */

