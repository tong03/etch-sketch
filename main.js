function makeGrid (dim) {
    for(let i=0; i<dim;i++){
        for (let j=0; j<dim;j++){
            const grid = document.createElement('div');
            // add grid class to div for CSS styling
            grid.classList.add('grid');
            grid.style.width = `${500/dim}px`;
            grid.style.height = `${500/dim}px`;
            // put these divs inside container div
            container.appendChild(grid);   
        }
    }
}
/*
function colorChange(e) {
    // only change color if target has class "grid" in it
    // this should limit color change to only the divs
    if(e.target.classList.value == 'grid'){
        e.target.style.backgroundColor = 'black';
    }
}

function randomMode() {
    let grids = document.getElementsByClassName('grid');
    console.log(grids);
    Array.from(grids).forEach((grid) => {
        grid.addEventListener('mousedown', (e) => {
            // mouse down changes color
            e.target.style.backgroundColor = randomColor;
            // mousedown and drag also changes color
            this.addEventListener('mouseover', randomColor);
        });
        grid.addEventListener('mouseup', (e) => {
            this.removeEventListener('mouseover', randomColor);
        });
    });
}
*/

function updateGrid() {
    let selection = parseInt(prompt('Enter desired grid dimensions: '));
    if(selection > 100) {
        selection = 100;
    }
    // clear previous grid before initializing new one
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    // run grid function with new INT input
    makeGrid(selection);
}   

let defaultC = true;
let rainbow = false;
const container = document.querySelector('.container');
const gridBTN = document.querySelector('.makeG');
const rColorBTN = document.querySelector('.rand');

// Default Grid Layout
makeGrid(16);
// Change grid to specified dimensions each time
gridBTN.addEventListener('click', updateGrid);
rColorBTN.addEventListener('click', () => {
    defaultC = false;
    rainbow = true;
})
// rColorBTN.addEventListener('click', randomMode);

/*
    Select collection of grids with 'grid' class

    Loop through the grid collection and add event listener for each
    that would run colorFill() with mousedown/mouseover/mouseup

 */
let grids = document.getElementsByClassName('grid');
Array.from(grids).forEach((grid) => {
    grid.addEventListener('mousedown', (e) => {
        // mouse down changes color
        colorFill(e);
        // mousedown and drag also changes color
        this.addEventListener('mouseover', colorFill);
    });
    grid.addEventListener('mouseup', () => {
        this.removeEventListener('mouseover', colorFill);
    });
});

// This function should only check for the correct active tags and react
// correspondingly to fill in color
function colorFill(e) {
    if(defaultC){
        if(e.target.classList.value == 'grid'){
            e.target.style.backgroundColor = 'black';
        }
    }
    else if (rainbow){
        if(e.target.classList.value == 'grid'){
            e.target.style.backgroundColor = randomColor();
        }
    }
}

function randomColor() {
    let val1 = Math.round(Math.random() * 255);
    let val2 = Math.round(Math.random() * 255);
    let val3 = Math.round(Math.random() * 255);

    let rColor = `rgb(${val1}, ${val2}, ${val3})`;
    return rColor; 
}