function plotGrid(squares) {
    for (let i = 0; i < (squares ** 2); i++) {
        const div = document.createElement('div');
        div.style.width = `${(100 - (squares / 4)) / squares}%`
        div.classList.add('grid-box');
        document.querySelector('.grid-container').appendChild(div);
    }

    document.querySelectorAll('.grid-box').forEach(box => {
        box.addEventListener('mouseover', function() {
            box.style.background = 'black';
        });
    });
}

plotGrid(16);


function reset() {
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => {
        box.style.background = 'transparent';
    });
}

function createNewGrid() {  
    document.querySelectorAll('.grid-box').forEach(box => box.remove());
    
    let squares;
    do {
        squares = prompt('How many squares per side would you like? (Limit: 36)');
        if (squares < 1 || squares > 36 || isNaN(squares)) squares = undefined;
    } while (!squares)

    plotGrid(Math.floor(squares));
}