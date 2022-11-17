let grid = document.querySelector('.container')

for (let i = 0; i < (16 * 16); i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', backgroundToggle)
    div.classList.add(`div-${i}`);
    grid.appendChild(div);
}

function backgroundToggle() {
    this.classList.add('black')
}