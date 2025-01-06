const resetKey = "abcd";
let today = getToday();
let mindCheckMode = false;
let playCount = 0;
let winCount = 0
let sreakCount = 0;
let streakMax = 0;
let matraOn = false;
let gridN = 4;
let selectedItem = null;
let originalSequence = [];
let gridSequence = []
let idxSequence = [];
let solveSequence = [];
let movesCounter = 0;
let swapMove = false;
let orgGrid = '';
let userGrid = '';
let solveGrid = '';
let currRow = 0;
function setValue(key, value) {
    window.localStorage.setItem(key, value);
}

function getToday() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}


function getValue(key, defVal = null) {
    let val = window.localStorage.getItem(key);

    if (val == null && defVal != null) {
        val = defVal;
    }
    return val;
}

function initializePuzzle() {

    movesCounter = getValue('movesCounter' + gridN, 0);
    let userGrid = '';
    let solveGrid = '';
    //let orgGrid = ''
    // let originalArray = '';

    document.getElementById('movesCounter').innerText = movesCounter;
    document.getElementById('gridHindi').innerText = gridN == 3 ? 'तीन' : 'चार';
    document.getElementById('gridEng').innerText = gridN == 3 ? 'three' : 'four';

    try {
        //orgGrid = getValue('orgGrid' + gridN, '');
        userGrid = getValue('userGrid' + gridN, '');
        solveGrid = getValue('solveGrid' + gridN, '');
        // originalArray = getValue('orgArray' + gridN, '');
    } catch (exceptionVar) {
        //document.getElementById('movesCounter').innerText = 'Array load error';
    }

    gridSequence = [];
    solveSequence = [];

    if (solveGrid) solveSequence = [...solveGrid.split('$')];

    originalSequence = getWordOfTheDay(gridN);
    let orgShuffle = getGridSequence(gridN);

    if (userGrid.length > 5) {
        try {
            idxSequence = [...userGrid.split('$')];
        } catch (exceptionVar) {
            //document.getElementById('movesCounter').innerText = 'Reload error';
        }

        /*
        console.log('Loaded from store:', {
            gridSequence: gridSequence,
            originalSequence: originalSequence,
            movesCounter: movesCounter
        }); */
    } else {
        idxSequence = [...orgShuffle];
    }

    for (let i = 0; i < idxSequence.length; i++) {
        gridSequence.push(originalSequence[idxSequence[i]]);
    }

    createGrid();
}

function createGrid() {
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

function shuffleArray() {
    idxSequence = [...Array(gridN * gridN).keys()];

    for (let i = gridSequence.length - 1; i > 0; i--) {
        let j = i;

        while (j == i) {
            j = Math.floor(Math.random() * (i + 1));
        }

        [gridSequence[i], gridSequence[j]] = [gridSequence[j], gridSequence[i]];
        [idxSequence[i], idxSequence[j]] = [idxSequence[j], idxSequence[i]];
    }
}

function handleItemClick(e) {
    if (e.target.classList.contains('disabled')) return;

    if (mindCheckMode) {

        selectedItem = e.target;

        if (selectedItem.classList.contains('selected2')) {
            selectedItem.classList.remove('selected2');
        } else {
            selectedItem.classList.add('selected2');
        }

    } else {

        if (!selectedItem) {
            selectedItem = e.target;
            selectedItem.classList.add('selected');
        } else if (selectedItem.tag != e.target.tag) {
            swapItems(selectedItem, e.target);
            selectedItem.classList.remove('selected');
            selectedItem = null;
            swapMove = true;
            currRow = Math.floor(Number(e.target.tag) / gridN);
            checkRows();
            storeGridData();
            swapMove = false;
        } else {
            selectedItem.classList.remove('selected');
            selectedItem = null;
        }
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

    const idx1 = idxSequence[item1.tag];
    idxSequence[item1.tag] = idxSequence[item2.tag];
    idxSequence[item2.tag] = idx1;

    item1.textContent = item2.textContent;
    item2.textContent = temp;

    movesCounter++;
    document.getElementById('movesCounter').innerText = movesCounter;

}

function resetAllData() {
    window.localStorage.clear();
}

function resetLocalStorage() {
    setValue('userGrid' + gridN, '');
    setValue('movesCounter' + gridN, 0);
    setValue('lastPlayed' + gridN, '');
    setValue('lastWin' + gridN, '');
    setValue('playCount' + gridN, 0);
    setValue('winCount' + gridN, 0);
    setValue('playStreak' + gridN, 0);
    setValue('maxStreak' + gridN, 0);
}

function storeGridData() {
    //setValue('orgGrid' + gridN, originalSequence.join('$'));
    setValue('userGrid' + gridN, idxSequence.join('$'));
    setValue('movesCounter' + gridN, movesCounter);
    setValue('solveGrid' + gridN, solveSequence.join('$'));
}

function checkRows() {
    const rows = document.getElementsByClassName('grid-row');
    let matchCount = 0;
    gridCheck = gridN * (gridN - 1);

    for (let idxRow = 0; idxRow < rows.length; idxRow++) {

        const items = Array.from(rows[idxRow].getElementsByClassName('grid-item'));
        const values = items.map(item => item.textContent);

        for (let i = 0; i <= gridCheck; i += gridN) {
            const sequence = originalSequence.slice(i, i + gridN).join('');
            if (values.join('') === sequence) {
                items.forEach(item => {
                    item.classList.add('correct', 'disabled');
                });

                if (swapMove && idxRow == currRow) {
                    solveSequence.push(movesCounter);
                }
                matchCount++;
                break;
            }
        }
    };

    // Check if all rows match
    if (matchCount === gridN) {

        document.getElementById('divMindCheck').style.display = "none";
        document.getElementById('rowShare').style.display = "block";
        document.getElementById('pWin').style.display = "block";
        document.getElementById('pPlay').style.display = "none";

        if (swapMove) {

            if (solveSequence.length < gridN) {
                solveSequence.push(movesCounter);
            }

            winCount++;
            const lastWin = getValue('lastWin' + gridN, today);
            dayDiff = getIndex(lastWin);
            if (dayDiff <= 1) {
                streakCount++;
            } else if (dayDiff > 1) {
                streakCount = 1;
            }

            if (streakCount > streakMax) {
                streakMax++;
            }

            setValue('streakCount' + gridN, streakCount);
            setValue('streakMax' + gridN, streakMax);
            setValue('lastWin' + gridN, today);
            setValue('winCount' + gridN, winCount);

            updateStats();
            showWinModal();
        }
        //console.log('You won!');
    } else {
        document.getElementById('pWin').style.display = "none";
        document.getElementById('pPlay').style.display = "block";
        document.getElementById('rowShare').style.display = "none";
        document.getElementById('divMindCheck').style.display = "block";
    }

    if (matchCount > 0 && solveSequence.length > 0) {
        let winSteps = document.getElementById('winSteps');
        winSteps.innerHTML = '<ul>';
        let tempCount = 0;
        for (let i = 0; i < solveSequence.length; i++) {
            const winStep = document.createElement('li');
            const currCount = solveSequence[i] - tempCount;
            winStep.className = 'win-step';
            winStep.textContent = `${wordCounter[i]} शब्द ${currCount} चाल में`;
            winSteps.appendChild(winStep);
            tempCount = solveSequence[i];
        }
        winSteps.innerHTML += '</ul>';
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

function resetGrid() {
    const oldGrid = document.getElementById('grid');
    const newGrid = document.createElement('div');
    newGrid.id = 'grid';
    newGrid.classList.add('grid-container');
    oldGrid.parentNode.replaceChild(newGrid, oldGrid);
    grid = newGrid;

    selectedItem = null;

    userGrid = '';
    movesCounter = 0;
    shuffleArray();
    initializePuzzle();
}