window.onload = () => {
    let left = document.getElementById(`left`);
    let right = document.getElementById(`right`);
    let original = document.getElementById(`original-image`);
    let red = document.getElementById(`red`);
    let green = document.getElementById(`green`);
    let blue = document.getElementById(`blue`);
    let black = document.getElementById(`black`);
    let currentSlide = 0;

    original.style.display = `block`;
    red.style.display = `none`;
    green.style.display = `none`;
    blue.style.display = `none`;
    black.style.display = `none`;
    left.style.display = `none`;
    right.style.display = `block`;

    //sets boundaries for the currentSlide variable, so it cannot be clicked
    //over or below a certain limit. Code from here:
    //https://riptutorial.com/javascript/example/16997/
    //restrict-number-to-min-max-range
    function boundaries(min, max, val) {
    return Math.min(Math.max(min, +val), max);
    }

    right.addEventListener(`click`, () => {
    currentSlide = currentSlide + 1;
    if (currentSlide === 1)  {
      original.style.display = `none`;
      red.style.display = `block`;
      green.style.display = `none`;
      blue.style.display = `none`;
      black.style.display = `none`;
      left.style.display = `block`;
      right.style.display = `block`;
    }
    else if (currentSlide === 2) {
      original.style.display = `none`;
      red.style.display = `none`;
      green.style.display = `block`;
      blue.style.display = `none`;
      black.style.display = `none`;
      left.style.display = `block`;
      right.style.display = `block`;
    }
    else if (currentSlide === 3) {
        original.style.display = `none`;
        red.style.display = `none`;
        green.style.display = `none`;
        blue.style.display = `block`;
        black.style.display = `none`;
        left.style.display = `block`;
        right.style.display = `block`;
    }
    else if (currentSlide === 4) {
        original.style.display = `none`;
        red.style.display = `none`;
        green.style.display = `none`;
        blue.style.display = `none`;
        black.style.display = `block`;
        left.style.display = `block`;
        right.style.display = `none`;
    }
    else if (currentSlide === 0) {
        original.style.display = `block`;
        red.style.display = `none`;
        green.style.display = `none`;
        blue.style.display = `none`;
        black.style.display = `none`;
        left.style.display = `none`;
        right.style.display = `block`;
    }
    currentSlide = boundaries(0, 4, currentSlide);
  } );

    left.addEventListener(`click`, () => {
    currentSlide = currentSlide - 1;
    if (currentSlide === 1)  {
      original.style.display = `none`;
      red.style.display = `block`;
      green.style.display = `none`;
      blue.style.display = `none`;
      black.style.display = `none`;
      left.style.display = `block`;
      right.style.display = `block`;
    }
    else if (currentSlide === 2) {
      original.style.display = `none`;
      red.style.display = `none`;
      green.style.display = `block`;
      blue.style.display = `none`;
      black.style.display = `none`;
      left.style.display = `block`;
      right.style.display = `block`;
    }
    else if (currentSlide === 3) {
        original.style.display = `none`;
        red.style.display = `none`;
        green.style.display = `none`;
        blue.style.display = `block`;
        black.style.display = `none`;
        left.style.display = `block`;
        right.style.display = `block`;
    }
    else if (currentSlide === 4) {
        original.style.display = `none`;
        red.style.display = `none`;
        green.style.display = `none`;
        blue.style.display = `none`;
        black.style.display = `block`;
        left.style.display = `block`;
        right.style.display = `none`;
    }
    else if (currentSlide === 0) {
        original.style.display = `block`;
        red.style.display = `none`;
        green.style.display = `none`;
        blue.style.display = `none`;
        black.style.display = `none`;
        left.style.display = `none`;
        right.style.display = `block`;
    }
    currentSlide = boundaries(0, 4, currentSlide);
  } );
};
//to do:
//-fix crlf error (unix fix not working?)
//-add arrow key event listener
//-css styling
