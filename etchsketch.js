let grid = document.querySelector('.container')
let gridSide = 16

createGrid()

function createGrid() {
    document.documentElement.style.setProperty('--gridLength', gridSide);
    for (let i = 0; i < (gridSide * gridSide); i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', blackBackround)
        div.classList.add(`div-${i}`);
        div.classList.add(`div`);
        grid.appendChild(div);
    }
}

function blackBackround() {
    this.classList.add('black')
}

let button = document.querySelector('.button')
button.addEventListener('click', setGridSide)
function setGridSide() {
    clearBoard();
    let request = prompt('Please type in the size of one side of your grid', 16);
    let number = parseInt(request)
    if (number > 100) number = 100;
    if (number < 10) number = 10;
    gridSide = number;
    createGrid();
}

function clearBoard(){
    let squares = document.querySelectorAll('.div');
    for (let square of squares) {
        square.classList.remove('black');
    }
}