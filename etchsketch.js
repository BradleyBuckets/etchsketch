let grid = document.querySelector('.container');
// let gridSize = 16;
let number = 16;
let cycle = 0

createGrid(blackBackround, number);

function createGrid(background, gridSide) {
    document.documentElement.style.setProperty('--gridLength', gridSide);
    for (let i = 0; i < (gridSide * gridSide); i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', background)
        div.classList.add(`div-${i}`);
        div.classList.add(`div`);
        grid.appendChild(div);
    }
}

function blackBackround() {
    this.classList.add('black')
}
function blueBackround() {
    this.classList.add('blue')
}
function redBackround() {
    this.classList.add('red')
}
function greenBackround() {
    this.classList.add('green')
}
function purpleBackround() {
    this.classList.add('purple')
}
function orangeBackround() {
    this.classList.add('orange')
}
function grayBackround() {
    this.classList.add('gray')
}
function yellowBackround() {
    this.classList.add('yellow')
}
function pinkBackround() {
    this.classList.add('pink')
}

let sizeButton = document.querySelector('#size')
let clearButton = document.querySelector('#clear')
let colorButton = document.querySelector('#color')
sizeButton.addEventListener('click', setGridSide)
clearButton.addEventListener('click', resetBoard)
colorButton.addEventListener('click', changeColor)
function setGridSide() {
    clearBoard();
    let request = prompt('Please type in the size of one side of your grid', 16);
    number = parseInt(request)
    if (number > 100) {
        number = 100;
    }  
    if (number < 10) {
        number = 10;
    }
    createGrid(blackBackround, number);
}

function clearBoard(){
    let squares = document.querySelectorAll('.div');
    for (let square of squares) {
        square.remove()
    }
}

function resetBoard() {
    clearBoard();
    createGrid(blackBackround, number)
}

function changeColor() {
    clearBoard();
    cycle += 1;
    if (cycle > 8) cycle = 0;
    if (cycle === 0) createGrid(blackBackround, number);
    else if (cycle === 1) createGrid(blueBackround, number);
    else if (cycle === 2) createGrid(redBackround, number);
    else if (cycle === 3) createGrid(greenBackround, number);
    else if (cycle === 4) createGrid(orangeBackround, number);
    else if (cycle === 5) createGrid(yellowBackround, number);
    else if (cycle === 6) createGrid(grayBackround, number);
    else if (cycle === 7) createGrid(purpleBackround, number);
    else if (cycle === 8) createGrid(pinkBackround, number);
}