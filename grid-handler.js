let matraOn = false;
let gridN = 4;
let selectedItem = null;
let originalSequence = [];
let gridSequence = []
let movesCounter = 0;

function initializePuzzle() {

    movesCounter = getCookie('movesCounter' + gridN, 0);
    let gridArray = '';
    let originalArray = '';

    document.getElementById('movesCounter').innerText = movesCounter;

    try {
        gridArray = getCookie('gridArray' + gridN, '');
        originalArray = getCookie('orgArray' + gridN, '');
    } catch (exceptionVar) {
        document.getElementById('movesCounter').innerText = 'Array load error';
    }


    if (gridArray.length > 0) {
        try {
            gridSequence = [...gridArray.split('$')];
            originalSequence = [...originalArray.split('$')];
        } catch (exceptionVar) {
            document.getElementById('movesCounter').innerText = 'JSON Load error';
        }


        /*
        console.log('Loaded from store:', {
            gridSequence: gridSequence,
            originalSequence: originalSequence,
            movesCounter: movesCounter
        }); */
    } else {
        originalSequence = getRandomWords(gridN);
        gridSequence = [...originalSequence];
        shuffleArray(gridSequence);
    }

    //Create grid
    const grid = document.getElementById('grid');
    document.getElementById('gridSize').innerText = gridN + 'x' + gridN;

    grid.innerHTML = '';

    gridCheck = gridN * (gridN - 1);

    for (let i = 0; i < gridN; i++) {
        const row = document.createElement('div');
        row.className = 'grid-row';

        for (let j = 0; j < gridN; j++) {
            const item = document.createElement('div');
            item.className = 'grid-item grid-item-' + gridN + '-' + gridN;
            item.textContent = gridSequence[i * gridN + j];
            item.tag = (i * gridN + j);
            item.addEventListener('click', handleItemClick);
            item.addEventListener('touchstart', handleTouchStart, { passive: false });
            row.appendChild(item);
        }
        grid.appendChild(row);
    }

    storeGridData();
    checkRows();

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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
    gridSequence[item1.tag] = item2.textContent;
    gridSequence[item2.tag] = temp;

    item1.textContent = item2.textContent;
    item2.textContent = temp;

    movesCounter++;
    document.getElementById('movesCounter').innerText = movesCounter;
    storeGridData();


}

function clearAllCookies() {
    setCookie('gridArray' + gridN, '', 0);
    setCookie('orgArray' + gridN, '', 0);
    setCookie('movesCounter' + gridN, 0, 0);
}

function storeGridData() {
    setCookie('gridArray' + gridN, gridSequence.join('$'), 0);
    setCookie('orgArray' + gridN, originalSequence.join('$'), 0);
    setCookie('movesCounter' + gridN, movesCounter, 0);
}

function checkRows() {
    const rows = document.getElementsByClassName('grid-row');
    let matchCount = 0;

    gridCheck = gridN * (gridN - 1);

    Array.from(rows).forEach(row => {
        const items = Array.from(row.getElementsByClassName('grid-item'));
        const values = items.map(item => item.textContent);

        for (let i = 0; i <= gridCheck; i += gridN) {
            const sequence = originalSequence.slice(i, i + gridN).join('');
            if (values.join('') === sequence) {
                items.forEach(item => {
                    item.classList.add('correct', 'disabled');
                });

                matchCount++;
                break;
            }
        }
    });

    // Check if all rows match
    if (matchCount === gridN) {
        showWinModal();
        //console.log('You won!');
    }
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

