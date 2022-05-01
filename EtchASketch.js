
/*
 * The number of square for the Etch a Sketch game
 */
const SQUARE_NUMBER = 256;
let page = document.querySelector('.board');
let clearButton = document.querySelector('button');

clearButton.addEventListener('click', clearBoard);

for(i=0; i<SQUARE_NUMBER; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => paintBlack(square), false);
    page.appendChild(square);
}

function paintBlack(square) {
    square.setAttribute('style', 'background-color:black;');
}

function clearBoard() {
    let allSquares= page.querySelectorAll('.square');
    allSquares.forEach(s => s.setAttribute('style', 'background-color:white;'));
}


