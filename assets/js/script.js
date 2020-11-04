const flowers = document.querySelectorAll('.flower');

function rotateFlower () {
    if (this.classList.contains("rotate")) {
        this.classList.remove("rotate");
        this.classList.add("rotateAgain");
    }
    else if (this.classList.contains("rotateAgain")) {
        this.classList.remove("rotateAgain");
        this.classList.add("rotate");
    }
    else {
        this.classList.add("rotate");
    }
    
}

flowers.forEach(flower => flower.addEventListener('click', rotateFlower));