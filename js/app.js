window.onload = () => {
  
    let left = document.getElementById(`left`);
    let right = document.getElementById(`right`);
    let original = document.getElementById(`original-image`);
    let red = document.getElementById(`red`);
    let green = document.getElementById(`green`);
    let blue = document.getElementById(`blue`);
    let black = document.getElementById(`black`);
    document.onkeydown = arrowKeys;
    let currentSlide = 0;

    left.style.display = `none`;
    right.style.display = `block`;
    red.classList.add(`default`);
    green.classList.add(`default`);
    blue.classList.add(`default`);
    black.classList.add(`default`);

    //sets boundaries for the currentSlide variable, so it cannot be clicked
    //over or below a certain limit. Code from here:
    //https://riptutorial.com/javascript/example/16997/
    //restrict-number-to-min-max-range
    function boundaries(min, max, val) {
        return Math.min(Math.max(min, +val), max);
    }

    function moveRight() {
        currentSlide = currentSlide + 1;
        if (currentSlide === 1)  {
            left.style.display = `block`;
            right.style.display = `block`;
            original.classList.remove(`slideCenter`);
            original.classList.add(`slideLeft`);
            red.classList.add(`slideCenter`);
        }
        else if (currentSlide === 2) {
            left.style.display = `block`;
            right.style.display = `block`;
            red.classList.remove(`slideCenter`);
            red.classList.add(`slideLeft`);
            green.classList.add(`slideCenter`);
        }
        else if (currentSlide === 3) {
            left.style.display = `block`;
            right.style.display = `block`;
            green.classList.remove(`slideCenter`);
            green.classList.add(`slideLeft`);
            blue.classList.add(`slideCenter`);
        }
        else if (currentSlide === 4) {
            left.style.display = `block`;
            right.style.display = `none`;
            blue.classList.remove(`slideCenter`);
            blue.classList.add(`slideLeft`);
            black.classList.add(`slideCenter`);
        }
        else if (currentSlide === 0) {
            original.classList.add(`slideCenter`);
        }
        currentSlide = boundaries(0, 4, currentSlide);
    }

    function moveLeft() {
        currentSlide = currentSlide - 1;
        if (currentSlide === 1)  {
            left.style.display = `block`;
            right.style.display = `block`;
            green.classList.remove(`slideCenter`);
            green.classList.remove(`slideLeft`);
            green.classList.add(`slideRight`);
            red.classList.add(`slideCenter`);
        }
        else if (currentSlide === 2) {
            left.style.display = `block`;
            right.style.display = `block`;
            blue.classList.remove(`slideCenter`);
            blue.classList.remove(`slideLeft`);
            blue.classList.add(`slideRight`);
            green.classList.add(`slideCenter`);
        }
        else if (currentSlide === 3) {
            left.style.display = `block`;
            right.style.display = `block`;
            black.classList.remove(`slideCenter`);
            black.classList.remove(`slideLeft`);
            black.classList.add(`slideRight`);
            blue.classList.add(`slideCenter`);
        }
        else if (currentSlide === 4) {
            left.style.display = `block`;
            right.style.display = `none`;
            black.classList.add(`slideCenter`);
        }
        else if (currentSlide === 0) {
            left.style.display = `none`;
            right.style.display = `block`;
            red.classList.remove(`slideCenter`);
            red.classList.remove(`slideLeft`);
            red.classList.add(`slideRight`);
            original.classList.add(`slideCenter`);
        }
        currentSlide = boundaries(0, 4, currentSlide);
    }

    left.addEventListener(`click`, () => {
        moveLeft();
    });

    right.addEventListener(`click`, () => {
        moveRight();
    });

    function arrowKeys() {
        if (event.keyCode == `37`) {
            moveLeft();
        }
        else if (event.keyCode == `39`) {
            moveRight();
        }
    }

};
