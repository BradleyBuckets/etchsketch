let grid = document.querySelector('.container')
let gridSize = 16

createGrid(blackBackround, gridSize)

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

let button = document.querySelector('.button')
button.addEventListener('click', setGridSide)
function setGridSide() {
    clearBoard();
    let request = prompt('Please type in the size of one side of your grid', 16);
    let number = parseInt(request)
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
        square.classList.remove('black');
    }
}