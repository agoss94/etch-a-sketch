
/*
 * The number of square for the Etch a Sketch game
 */
const SQUARE_NUMBER = 256;
let page = document.querySelector('.board');

for(i=0; i<SQUARE_NUMBER; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    page.appendChild(square);
}
