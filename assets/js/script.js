const flowers = document.querySelectorAll('.flower');

function flashFlower () {
    console.log('I was clicked');
    console.log(this);
}

flowers.forEach(flower => flower.addEventListener('click', flashFlower));