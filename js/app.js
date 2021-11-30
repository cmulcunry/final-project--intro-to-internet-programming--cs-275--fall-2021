window.onload = () => {
    let left = document.getElementById(`left`);
    let right = document.getElementById(`right`);
    let slides = document.querySelectorAll(`main p`);
    let currentSlide = 0;

    right.addEventListener(`click`, () => {
    currentSlide = currentSlide + 1;
    if (currentSlide === 1)  {
        slides[0].style.display = `none`;
        slides[1].style.display = `block`;
        slides[2].style.display = `none`;
        slides[3].style.display = `none`;
    }
    else if (currentSlide === 2) {
        slides[0].style.display = `none`;
        slides[1].style.display = `none`;
        slides[2].style.display = `block`;
        slides[3].style.display = `none`;
    }
    else if (currentSlide === 3) {
        slides[0].style.display = `none`;
        slides[1].style.display = `none`;
        slides[2].style.display = `none`;
        slides[3].style.display = `block`;
    }
    else if (currenSlide === 0) {
        slides[0].style.display = `block`;
        slides[1].style.display = `none`;
        slides[2].style.display = `none`;
        slides[3].style.display = `none`;
    }
    } )
}
