function makeGrid () {
    for(let i=0; i<16;i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.textContent = 'o';
        container.appendChild(grid);   
    }
}

function colorChange(e) {
    // only change color if target has class "grid" in it
    // this should limit color change to only the divs
    if(e.target.classList.value == 'grid'){
        e.target.style.backgroundColor = 'black';
    }
}

function updateGrid() {
    let selection = parseInt(prompt('Enter desired grid dimensions: '));
    // run grid function with new INT input
}   

const container = document.querySelector('.container');
const gridBTN = document.querySelector('.makeG');
// Make a 16x16 grid of divs
for(let i=0; i<16;i++){
    for (let j=0; j<16;j++){
        const grid = document.createElement('div');
        // add grid class to div for CSS styling
        grid.classList.add('grid');
        // add hover effect to each div with event listener
        grid.addEventListener('mousedown', (e) => {
            // mouse down changes color
            e.target.style.backgroundColor = 'black';
            console.log(e.target);
            // mousedown and drag also changes color
            this.addEventListener('mouseover', colorChange);
        });
        grid.addEventListener('mouseup', (e) => {
            this.removeEventListener('mouseover', colorChange);
        });
        // put these divs inside container div
        container.appendChild(grid);   
    }
}

gridBTN.addEventListener('click', updateGrid);