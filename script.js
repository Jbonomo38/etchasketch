// Button functionality
const gridSizeButton = document.querySelector('button');
gridSizeButton.addEventListener('click', createNewGrid);

// gridSizeButton functionality (prompt user for input, create new Grid)
function createNewGrid() {
    const maxGridSize = 735;

    let newGridSize = 0; // Initialize grid size to 0

    // Loop until the user enters a valid value
    while (newGridSize < 1 || newGridSize > 100) {
        newGridSize = prompt('Grid Size (1-100):'); // Ask the user for input

        // Convert the input to a number
        newGridSize = parseInt(newGridSize, 10);

        // Check if the input is not a number or is out of bounds
        if (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
            alert("Please enter a number between 1 and 100."); // Inform the user
            newGridSize = 0; // Reset the grid size to ensure the loop continues
        }
    }

    let gridArray = document.querySelector('.grid');
    
    // Remove existing grid
    Array.from(document.querySelectorAll('.gridbox-row')).forEach((gridBoxRow) => {
        console.log(gridBoxRow);
        gridBoxRow.remove();
    })

    console.log(gridArray);
    const boxSize = Math.floor((maxGridSize / newGridSize) - 4);

    // Add new Grid
    for(let i = 0; i < newGridSize; i++) {
        let newGridBoxRow = document.createElement('div');
        // console.log(newGridBoxRow);
        newGridBoxRow.className = 'gridbox-row';
        // console.log(newGridBoxRow.class);
        gridArray.appendChild(newGridBoxRow);

        for(let x = 0; x < newGridSize; x++) {
            let newGridBoxColumn = document.createElement('div');
            newGridBoxColumn.className = 'gridbox-column';
            newGridBoxColumn.style.width = `${boxSize}px`;
            newGridBoxColumn.style.height = `${boxSize}px`;
            newGridBoxRow.appendChild(newGridBoxColumn);
        }
    }
}

// add EventListeners to all gridboxes
document.querySelector('.grid').addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('gridbox-column')) {
        changeColor(event.target, 'grey');
    }
});

function changeColor(div, color) {
    div.style.backgroundColor = color;
    // console.log(`Changed ${div} to ${color}`);
}

createNewGrid();