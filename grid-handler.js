let matraOn = false;
let gridN = 4;
let alphabet = [];
let selectedItem = null;
let originalSequence = []

function createGrid() {
    alphabet = getRandomWords();
    originalSequence = [...alphabet];
    const grid = document.getElementById('grid');
    document.getElementById('gridSize').innerText = gridN + 'x' + gridN;
    
    grid.innerHTML = '';

    gridCheck = gridN * (gridN -1 );

    for (let i = 0; i < gridN; i++) {
        const row = document.createElement('div');
        row.className = 'grid-row';

        for (let j = 0; j < gridN; j++) {
            const item = document.createElement('div');
            item.className = 'grid-item grid-item-' + gridN + '-' + gridN;
            item.textContent = alphabet[i * gridN + j];
            item.addEventListener('click', handleItemClick);
            item.addEventListener('touchstart', handleTouchStart, { passive: false });
            row.appendChild(item);
        }
        grid.appendChild(row);
    }

    shuffleGrid();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleGrid() {
    const items = Array.from(document.getElementsByClassName('grid-item'));
    const values = items.map(item => item.textContent);
    shuffleArray(values);
    items.forEach((item, index) => {
        item.textContent = values[index];
        item.classList.remove('correct', 'disabled');
    });
}

function handleItemClick(e) {
    if (e.target.classList.contains('disabled')) return;

    if (!selectedItem) {
        selectedItem = e.target;
        selectedItem.classList.add('selected');
    } else {
        swapItems(selectedItem, e.target);
        selectedItem.classList.remove('selected');
        selectedItem = null;
        checkRows();
    }
}

function handleTouchStart(e) {
    e.preventDefault();
    handleItemClick(e);
}

function swapItems(item1, item2) {
    const temp = item1.textContent;
    item1.textContent = item2.textContent;
    item2.textContent = temp;
}

function checkRows() {
    const rows = document.getElementsByClassName('grid-row');

    Array.from(rows).forEach(row => {
        const items = Array.from(row.getElementsByClassName('grid-item'));
        const values = items.map(item => item.textContent);

        for (let i = 0; i <= gridCheck; i += gridN) {
            const sequence = originalSequence.slice(i, i + gridN).join('');
            if (values.join('') === sequence) {
                items.forEach(item => {
                    item.classList.add('correct', 'disabled');
                });
                break;
            }
        }
    });
}



$('#resetBtn').click(function () {

    const oldGrid = document.getElementById('grid');
    const newGrid = document.createElement('div');
    newGrid.id = 'grid';
    newGrid.classList.add('grid-container');
    oldGrid.parentNode.replaceChild(newGrid, oldGrid);
    grid = newGrid;


    selectedItem = null;
    createGrid();
});

