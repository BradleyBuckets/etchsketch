let grid = document.querySelector('.container')

for (let i = 0; i < 64; i++) {
    let div = document.createElement('div');
    div.classList.add(`div-${i}`);
    grid.appendChild(div);
}