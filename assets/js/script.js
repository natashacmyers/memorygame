const flowers = document.querySelectorAll('.flower');

function flashFlower () {
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

flowers.forEach(flower => flower.addEventListener('click', rotateFlower));