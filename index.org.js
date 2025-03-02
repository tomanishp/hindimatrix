let adminFlag = false;
let darkMode = false;
const BOX = '█'
const boxes = {
    yellow: '🟨',
    green: '🟩',
    blue: '🟦',
    red: '🟥',
    orange: '🟧',
    purple: '🟪',
    brown: '🟫',
    white: '⬜',
    black: '⬛'
};

function toggleMenu(side) {
    const sidebar = document.querySelector(`.${side}-sidebar`);
    const overlay = document.querySelector('.overlay');

    // Close other menus if open
    const sidebars = document.querySelectorAll('.sidebar');
    sidebars.forEach(sb => {
        if (sb !== sidebar) {
            sb.classList.remove('active');
        }
    });

    // Toggle current menu
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeAllMenus() {
    const sidebars = document.querySelectorAll('.sidebar');
    const overlay = document.querySelector('.overlay');

    sidebars.forEach(sidebar => {
        sidebar.classList.remove('active');
    });
    overlay.classList.remove('active');
}

function toggleDarkMode() {
    darkMode = document.getElementById('darkModeToggle').checked;
    document.body.classList.toggle('dark-mode', darkMode);
    setValue('darkMode', darkMode);
    //console.log('Dark Mode:', darkMode);
}

function toggleThreeMode() {
    const threeModeEnabled = document.getElementById('threeModeToggle').checked;
    setValue('threeMode', threeModeEnabled);
    //console.log('three Mode:', threeModeEnabled);

    gridN = threeModeEnabled ? 3 : 4;
    updateStats();
    initializePuzzle();
}

function toggleMindCheck() {
    mindCheckMode = document.getElementById('mindCheckToggle').checked;


    Array.from(document.getElementsByClassName("grid-item")).forEach(function (item) {
        item.classList.remove('selected');
        item.classList.remove('selected2');
    });

    selectedItem = null;

}

// Initialize toggles from cookies
window.onload = function () {
    initializeFromCookies();
}

function readGridParam() {

    let paramVal = 0;
    try {
        const params = window.location.search.split('&');
        params.forEach(element => {
            if (element.endsWith('q=3')) {
                paramVal = 3;
            } else if (element.endsWith('q=4')) {
                paramVal = 4;
            }
        });
    } catch (error) {
        // do nothing 
    }

    return paramVal;
}

function initializeFromCookies() {

    if (!(getValue('resetKey', '') == resetKey)) {
        resetAllData();
        setValue('resetKey', resetKey);
    }

    // Read cookie values
    darkMode = getValue('darkMode', 'false') === 'true';
    let threeMode = getValue('threeMode', 'false') === 'true';
    adminFlag = getValue('adminFlag', '0') === '1';
    // Set toggle switches
    const darkModeToggle = document.getElementById('darkModeToggle');
    const threeModeToggle = document.getElementById('threeModeToggle');

    if (darkModeToggle) {
        darkModeToggle.checked = darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
    }

    // check query parameter for short link 
    const gridParam = readGridParam();
    if (gridParam > 0) {
        threeMode = gridParam == 3 ? true : false;
    }

    if (threeModeToggle) {
        threeModeToggle.checked = threeMode;
    }


    gridN = threeMode ? 3 : 4;

    updateStats()

    // Apply dark mode if enabled
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    initializePuzzle();

    /*
    // Log the initial states (for debugging)
    console.log('Initial Settings:', {
        darkMode: darkMode,
        threeMode: threeMode
    });

    */
}

function updateStats() {
    const lastPlayed = getValue('lastPlayed' + gridN, '');
    playCount = getValue('playCount' + gridN, 0);
    winCount = getValue('winCount' + gridN, 0);
    streakCount = getValue('streakCount' + gridN, 0);
    streakMax = getValue('streakMax' + gridN, 0);
    solveGrid = getValue('solveGrid' + gridN, '');

    document.getElementById('playCount').textContent = playCount;
    if (winCount == 0) {
        document.getElementById('winCount').textContent = '0%';
    }
    else {
        document.getElementById('winCount').textContent = `${(Math.round(winCount * 100 / playCount))}%`;
    }
    document.getElementById('playStreak').textContent = streakCount;
    document.getElementById('maxStreak').textContent = streakMax;

    if (lastPlayed != today || today == '') {
        playCount++;
        setValue('lastPlayed' + gridN, today);
        setValue('playCount' + gridN, playCount);
        setValue('userGrid' + gridN, '');
        setValue('solveGrid' + gridN, '');
        setValue('movesCounter' + gridN, 0);

        //Reset params
        solveGrid = '';
        gridSequence = []
        idxSequence = [];
        solveSequence = [];
        swapMove = false;
    }

}

function showWinModal() {
    const modal = document.getElementById('winModal');
    document.getElementById('moveCount1').textContent = movesCounter;
    document.getElementById('gridSizeDisplay').textContent = `${gridN}x${gridN}`;
    document.getElementById('moveCount2').textContent = movesCounter;
    modal.style.display = 'block';
    updateCountdown();
    // Start countdown update interval
    setInterval(updateCountdown, 1000);
}

function closeWinModal() {
    document.getElementById('winModal').style.display = 'none';
}

function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const diff = midnight - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('countdownTimer').textContent = timeString;
}

async function shareResult() {
    //const dateString = new Date().toLocaleDateString();
    const dateString = (new Date()).toString().substring(4, 15)
    let shareText = `🧩 ${gridN}x${gridN} हिन्दी शब्द रचना ${totalDays}\n\n` +
        `कुल चालें: ${movesCounter}\n\n`;
    const barText = createBarChart(false);
    shareText += barText;

    shareText += `\nbit.ly/hindi${gridN}x${gridN}`
        ;

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Hindi Matrix Puzzle',
                text: shareText
            });
        } catch (err) {
            fallbackShare(shareText);
        }
    } else {
        fallbackShare(shareText);
    }
}

function createBarChart(htmlMode = true) {

    let tempCount = 0;
    let responseVal = ''; //movesCounter > 0 ? `शब्द: चाल\n` : '';

    const solveArr = solveSequence.slice(Math.max(solveSequence.length - gridN, 0));
    // Create bars
    solveArr.forEach((value, index) => {

        const upperVal = 10;
        const currCount = Number(value) - tempCount;
        const tempVal = currCount > upperVal ? upperVal : currCount;

        // Create bar line
        let boxChar = '';

        if (currCount >= upperVal) {
            boxChar = boxes.red;
        } else if (currCount > (gridN == 3 ? 3 : 5)) {
            boxChar = boxes.yellow;
        } else {
            boxChar = boxes.green;
        }

        const bar = tempVal <= 0 ? '' : boxChar.repeat(tempVal);

        // Add label and padding
        const label = `${index + 1}: `;
        const paddedLabel = label.padEnd(2);
        //responseVal += `${paddedLabel}${bar}`;
        responseVal += `${bar}`;
        if (currCount > 10) {
            responseVal += ` (${currCount})\n`
        } else {
            responseVal += `\n`;
        }
        // responseVal += `${paddedLabel}${bar}\n`;
        tempCount += currCount;

    });

    return responseVal;
}

function fallbackShare(text) {
    // Create temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select and copy text
    textarea.select();
    document.execCommand('copy');

    // Remove temporary textarea
    document.body.removeChild(textarea);

    // Show feedback
    alert('Result copied to clipboard!');
}