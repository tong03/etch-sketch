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

    /*
    Select collection of grids with 'grid' class.
    Loop through the grid collection and add event listener for each
    that would run colorFill() with mousedown/mouseover/mouseup.
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
    // if fill values already exists, retain them
    if(!defaultC && rainbow){
        defaultC = false;
        rainbpw = true;
    }
    // else reset to default fill values
    else {
        defaultC = true;
        rainbow = false;
    }
}

function updateGrid(selection) {
    // clear previous grid before initializing new one
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    // run grid function with new INT input
    makeGrid(selection);
}

// return a random color
function randomColor() {
    let val1 = Math.round(Math.random() * 255);
    let val2 = Math.round(Math.random() * 255);
    let val3 = Math.round(Math.random() * 255);

    let rColor = `rgb(${val1}, ${val2}, ${val3})`;
    return rColor; 
}

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



/*********** Runtime Events ***********/

const container = document.querySelector('.container');
const rColorBTN = document.querySelector('.rand');
const clearBTN = document.querySelector('.clear');
const slideGrid = document.querySelector('.slider');
let defaultC = true;
let rainbow = false;
// Change grid to specified dimensions each time
slideGrid.addEventListener('input', () => {
    let dim = document.getElementById('iPut').value;
    updateGrid(dim);
})
clearBTN.addEventListener('click', () => {
    let firstChild = container.firstChild;
    let counter = 0;
    // first delete all current grid divs and tally total
    while(firstChild){
        container.removeChild(firstChild);
        firstChild = container.firstChild;
        counter += 1;
    }
    counter = Math.sqrt(counter);
    console.log(counter);
    // remake new grid based on number of grid divs
    makeGrid(counter);
})
rColorBTN.addEventListener('click', () => {
    // if rainbow is not true, turn rainbow on and darken button
    if(!rainbow){
        defaultC = false;
        rainbow = true;
        document.querySelector('.rand').style.filter = 'brightness(40%)';
    }
    // if already true, turn rainbow off and un-darken button
    else{
        defaultC = true;
        rainbow = false;
        document.querySelector('.rand').style.filter = 'brightness(100%)';
    }
})

// Run Default Grid Layout
makeGrid(16);