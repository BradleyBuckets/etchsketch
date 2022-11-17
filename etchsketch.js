let grid = document.querySelector('.container')

let gridSide = 16
document.documentElement.style.setProperty('--gridLength', gridSide);

for (let i = 0; i < (gridSide * gridSide); i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', backgroundToggle)
    div.classList.add(`div-${i}`);
    grid.appendChild(div);
}

function backgroundToggle() {
    this.classList.add('black')
}
