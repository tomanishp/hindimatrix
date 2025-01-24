const _0x14d4b1 = _0x1c98;
(function(_0x42018c, _0x231d9d) {
    const _0x51b599 = _0x1c98
      , _0x47b1ea = _0x42018c();
    while (!![]) {
        try {
            const _0x4c7c06 = parseInt(_0x51b599(0xb2)) / 0x1 + parseInt(_0x51b599(0xbe)) / 0x2 + -parseInt(_0x51b599(0x85)) / 0x3 * (-parseInt(_0x51b599(0x7f)) / 0x4) + parseInt(_0x51b599(0xae)) / 0x5 + -parseInt(_0x51b599(0x8f)) / 0x6 * (parseInt(_0x51b599(0xab)) / 0x7) + -parseInt(_0x51b599(0xa3)) / 0x8 * (parseInt(_0x51b599(0xb7)) / 0x9) + parseInt(_0x51b599(0x75)) / 0xa * (-parseInt(_0x51b599(0x92)) / 0xb);
            if (_0x4c7c06 === _0x231d9d)
                break;
            else
                _0x47b1ea['push'](_0x47b1ea['shift']());
        } catch (_0x58134e) {
            _0x47b1ea['push'](_0x47b1ea['shift']());
        }
    }
}(_0x1dbb, 0xbfd90));
function _0x1dbb() {
    const _0x29b143 = ['winCount', 'pWin', 'winSteps', 'getDate', 'getFullYear', 'push', 'parentNode', '152740pXKhFp', 'length', 'tag', 'streakCount', 'getElementsByClassName', 'innerHTML', 'adminText', 'floor', 'click', 'slice', '668MBUZZQ', 'four', 'display', 'innerText', 'touchstart', 'तीन', '2325oYqUda', 'solveGrid', 'createElement', 'target', 'replaceChild', 'style', 'join', 'getItem', 'चार', 'three', '723084XKSopT', 'getMonth', 'preventDefault', '407cojuvP', 'pPlay', 'localStorage', 'div', 'disabled', 'getElementById', 'forEach', 'selected2', 'appendChild', 'contains', 'none', 'playStreak', 'random', 'movesCounter', 'maxStreak', 'divMindCheck', 'userGrid', '1097504ctOHPd', 'gridEng', 'split', 'correct', 'from', 'max', 'grid-row', 'remove', '77WXnTqi', 'keys', 'textContent', '5295060wKbZIB', 'streakMax', 'classList', 'lastWin', '1047464AhFnvs', 'abcd', 'selected', 'setItem', 'grid-item\x20grid-item-', '36MbHiYy', 'block', 'className', 'grid-item', 'addEventListener', 'gridSize', 'add', '1978902ptohDi', 'grid', 'padStart'];
    _0x1dbb = function() {
        return _0x29b143;
    }
    ;
    return _0x1dbb();
}
const resetKey = _0x14d4b1(0xb3);
let today = getToday()
  , mindCheckMode = ![]
  , playCount = 0x0
  , winCount = 0x0
  , sreakCount = 0x0
  , streakMax = 0x0
  , matraOn = ![]
  , gridN = 0x4
  , selectedItem = null
  , originalSequence = []
  , gridSequence = []
  , idxSequence = []
  , solveSequence = []
  , movesCounter = 0x0
  , swapMove = ![]
  , userGrid = ''
  , solveGrid = ''
  , targetRow = 0x0;
function setValue(_0x354a6a, _0x31ee71) {
    const _0x556b55 = _0x14d4b1;
    window[_0x556b55(0x94)][_0x556b55(0xb5)](_0x354a6a, _0x31ee71);
}
function getToday() {
    const _0x57a017 = _0x14d4b1
      , _0x5bb891 = new Date()
      , _0x1ac6e5 = _0x5bb891[_0x57a017(0x72)]()
      , _0x6b5b57 = String(_0x5bb891[_0x57a017(0x90)]() + 0x1)[_0x57a017(0x6d)](0x2, '0')
      , _0x15eff8 = String(_0x5bb891[_0x57a017(0x71)]())[_0x57a017(0x6d)](0x2, '0');
    return _0x1ac6e5 + '-' + _0x6b5b57 + '-' + _0x15eff8;
}
function _0x1c98(_0x1f76e5, _0x399f1a) {
    const _0x1dbbe3 = _0x1dbb();
    return _0x1c98 = function(_0x1c988d, _0x475bd8) {
        _0x1c988d = _0x1c988d - 0x6d;
        let _0x51c6d3 = _0x1dbbe3[_0x1c988d];
        return _0x51c6d3;
    }
    ,
    _0x1c98(_0x1f76e5, _0x399f1a);
}
function getValue(_0x523c5d, _0x1a2d33=null) {
    const _0x2d5607 = _0x14d4b1;
    let _0x1b7841 = window['localStorage'][_0x2d5607(0x8c)](_0x523c5d);
    return _0x1b7841 == null && _0x1a2d33 != null && (_0x1b7841 = _0x1a2d33),
    _0x1b7841;
}
function initializePuzzle() {
    const _0x73d563 = _0x14d4b1;
    movesCounter = getValue(_0x73d563(0x9f) + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document[_0x73d563(0x97)]('movesCounter')['innerText'] = movesCounter,
    document['getElementById']('gridHindi')[_0x73d563(0x82)] = gridN == 0x3 ? _0x73d563(0x84) : _0x73d563(0x8d),
    document[_0x73d563(0x97)](_0x73d563(0xa4))[_0x73d563(0x82)] = gridN == 0x3 ? _0x73d563(0x8e) : _0x73d563(0x80),
    userGrid = getValue(_0x73d563(0xa2) + gridN, ''),
    solveGrid = getValue(_0x73d563(0x86) + gridN, '');
    if (solveGrid['length'] > 0x0)
        solveSequence = [...solveGrid[_0x73d563(0xa5)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x120954 = getGridSequence(gridN);
    if (userGrid[_0x73d563(0x76)] > 0x5)
        try {
            idxSequence = [...userGrid[_0x73d563(0xa5)]('$')];
        } catch (_0x2e0fe2) {
            idxSequence = [..._0x120954];
        }
    else
        idxSequence = [..._0x120954];
    for (let _0x439e32 = 0x0; _0x439e32 < idxSequence[_0x73d563(0x76)]; _0x439e32++) {
        gridSequence[_0x73d563(0x73)](originalSequence[idxSequence[_0x439e32]]);
    }
    createGrid();
}
function createGrid() {
    const _0x190d61 = _0x14d4b1
      , _0x3c3433 = document[_0x190d61(0x97)](_0x190d61(0xbf));
    document['getElementById'](_0x190d61(0xbc))[_0x190d61(0x82)] = gridN + 'x' + gridN,
    _0x3c3433[_0x190d61(0x7a)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x30ea11 = 0x0; _0x30ea11 < gridN; _0x30ea11++) {
        const _0x48f966 = document['createElement'](_0x190d61(0x95));
        _0x48f966[_0x190d61(0xb9)] = _0x190d61(0xa9);
        for (let _0x475999 = 0x0; _0x475999 < gridN; _0x475999++) {
            const _0x25358b = document[_0x190d61(0x87)]('div');
            _0x25358b[_0x190d61(0xb9)] = _0x190d61(0xb6) + gridN + '-' + gridN,
            _0x25358b[_0x190d61(0xad)] = gridSequence[_0x30ea11 * gridN + _0x475999],
            _0x25358b[_0x190d61(0x77)] = _0x30ea11 * gridN + _0x475999,
            _0x25358b[_0x190d61(0xbb)](_0x190d61(0x7d), handleItemClick),
            _0x25358b[_0x190d61(0xbb)](_0x190d61(0x83), handleTouchStart, {
                'passive': ![]
            }),
            _0x48f966[_0x190d61(0x9a)](_0x25358b);
        }
        _0x3c3433[_0x190d61(0x9a)](_0x48f966);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x44fa8c = _0x14d4b1;
    idxSequence = [...Array(gridN * gridN)[_0x44fa8c(0xac)]()];
    for (let _0x50e9ef = gridSequence[_0x44fa8c(0x76)] - 0x1; _0x50e9ef > 0x0; _0x50e9ef--) {
        let _0x195127 = _0x50e9ef;
        while (_0x195127 == _0x50e9ef) {
            _0x195127 = Math['floor'](Math[_0x44fa8c(0x9e)]() * (_0x50e9ef + 0x1));
        }
        [gridSequence[_0x50e9ef],gridSequence[_0x195127]] = [gridSequence[_0x195127], gridSequence[_0x50e9ef]],
        [idxSequence[_0x50e9ef],idxSequence[_0x195127]] = [idxSequence[_0x195127], idxSequence[_0x50e9ef]];
    }
}
function handleItemClick(_0x4a5723) {
    const _0x52f2df = _0x14d4b1;
    if (_0x4a5723[_0x52f2df(0x88)]['classList'][_0x52f2df(0x9b)](_0x52f2df(0x96)))
        return;
    if (mindCheckMode)
        selectedItem = _0x4a5723[_0x52f2df(0x88)],
        selectedItem[_0x52f2df(0xb0)][_0x52f2df(0x9b)]('selected2') ? selectedItem[_0x52f2df(0xb0)][_0x52f2df(0xaa)](_0x52f2df(0x99)) : selectedItem[_0x52f2df(0xb0)][_0x52f2df(0xbd)]('selected2');
    else {
        if (!selectedItem)
            selectedItem = _0x4a5723[_0x52f2df(0x88)],
            selectedItem[_0x52f2df(0xb0)]['add'](_0x52f2df(0xb4));
        else
            selectedItem[_0x52f2df(0x77)] != _0x4a5723['target'][_0x52f2df(0x77)] ? (swapItems(selectedItem, _0x4a5723[_0x52f2df(0x88)]),
            selectedItem['classList'][_0x52f2df(0xaa)](_0x52f2df(0xb4)),
            selectedItem = null,
            swapMove = !![],
            targetRow = Math[_0x52f2df(0x7c)](Number(_0x4a5723['target'][_0x52f2df(0x77)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x52f2df(0xb0)][_0x52f2df(0xaa)](_0x52f2df(0xb4)),
            selectedItem = null);
    }
}
function handleTouchStart(_0x5e615f) {
    const _0x582b41 = _0x14d4b1;
    _0x5e615f[_0x582b41(0x91)](),
    handleItemClick(_0x5e615f);
}
function swapItems(_0x406e50, _0x23b54c) {
    const _0x3d26ec = _0x14d4b1
      , _0x1f8e6b = _0x406e50[_0x3d26ec(0xad)];
    gridSequence[_0x406e50[_0x3d26ec(0x77)]] = _0x23b54c['textContent'],
    gridSequence[_0x23b54c[_0x3d26ec(0x77)]] = _0x1f8e6b;
    const _0x28223f = idxSequence[_0x406e50['tag']];
    idxSequence[_0x406e50[_0x3d26ec(0x77)]] = idxSequence[_0x23b54c['tag']],
    idxSequence[_0x23b54c[_0x3d26ec(0x77)]] = _0x28223f,
    _0x406e50[_0x3d26ec(0xad)] = _0x23b54c['textContent'],
    _0x23b54c['textContent'] = _0x1f8e6b,
    movesCounter++,
    document[_0x3d26ec(0x97)](_0x3d26ec(0x9f))['innerText'] = movesCounter;
}
function resetAllData() {
    const _0x11d7eb = _0x14d4b1;
    window[_0x11d7eb(0x94)]['clear']();
}
function resetLocalStorage() {
    const _0x4c8162 = _0x14d4b1;
    setValue(_0x4c8162(0xa2) + gridN, ''),
    setValue('movesCounter' + gridN, 0x0),
    setValue('lastPlayed' + gridN, ''),
    setValue(_0x4c8162(0xb1) + gridN, ''),
    setValue('playCount' + gridN, 0x0),
    setValue('winCount' + gridN, 0x0),
    setValue(_0x4c8162(0x9d) + gridN, 0x0),
    setValue(_0x4c8162(0xa0) + gridN, 0x0);
}
function storeGridData() {
    const _0x499f64 = _0x14d4b1;
    setValue(_0x499f64(0xa2) + gridN, idxSequence[_0x499f64(0x8b)]('$')),
    setValue('movesCounter' + gridN, movesCounter),
    setValue(_0x499f64(0x86) + gridN, solveSequence['join']('$'));
}
function checkRows() {
    const _0x208941 = _0x14d4b1
      , _0x12d2b3 = document[_0x208941(0x79)](_0x208941(0xa9));
    let _0x5a3dd4 = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0xf3eab8 = 0x0; _0xf3eab8 < _0x12d2b3['length']; _0xf3eab8++) {
        const _0xdd93eb = Array[_0x208941(0xa7)](_0x12d2b3[_0xf3eab8][_0x208941(0x79)](_0x208941(0xba)))
          , _0xcb6c23 = _0xdd93eb['map'](_0x1ecf33 => _0x1ecf33[_0x208941(0xad)]);
        for (let _0x901e86 = 0x0; _0x901e86 <= gridCheck; _0x901e86 += gridN) {
            const _0x531899 = originalSequence[_0x208941(0x7e)](_0x901e86, _0x901e86 + gridN)[_0x208941(0x8b)]('');
            if (_0xcb6c23[_0x208941(0x8b)]('') === _0x531899) {
                _0xdd93eb[_0x208941(0x98)](_0x36d3e5 => {
                    const _0x324904 = _0x208941;
                    _0x36d3e5[_0x324904(0xb0)]['add'](_0x324904(0xa6), 'disabled');
                }
                );
                swapMove && _0xf3eab8 == targetRow && (solveSequence[_0x208941(0x73)](movesCounter),
                targetRow = -0x1);
                _0x5a3dd4++;
                break;
            }
        }
    }
    ;if (adminFlag) {
        document['getElementById']('adminText')[_0x208941(0x8a)][_0x208941(0x81)] = _0x208941(0xb8);
        const _0x3ef9b4 = solveSequence[_0x208941(0x7e)](Math[_0x208941(0xa8)](solveSequence['length'] - gridN, 0x0));
        document[_0x208941(0x97)](_0x208941(0x7b))['innerText'] = '',
        _0x3ef9b4['forEach']( (_0x2df8bf, _0x27a35b) => {
            const _0x43163a = _0x208941;
            document['getElementById'](_0x43163a(0x7b))[_0x43163a(0x82)] += '[' + (_0x27a35b + 0x1) + ':\x20' + _0x2df8bf + ']\x20';
        }
        );
    } else
        document[_0x208941(0x97)](_0x208941(0x7b))[_0x208941(0x8a)][_0x208941(0x81)] = 'none';
    if (_0x5a3dd4 === gridN) {
        document[_0x208941(0x97)]('divMindCheck')['style'][_0x208941(0x81)] = 'none',
        document['getElementById']('rowShare')['style'][_0x208941(0x81)] = _0x208941(0xb8),
        document[_0x208941(0x97)](_0x208941(0x6f))[_0x208941(0x8a)][_0x208941(0x81)] = _0x208941(0xb8),
        document['getElementById'](_0x208941(0x93))[_0x208941(0x8a)]['display'] = _0x208941(0x9c);
        if (swapMove) {
            solveSequence['length'] < gridN && solveSequence[_0x208941(0x73)](movesCounter);
            winCount++;
            const _0x3d35fe = getValue(_0x208941(0xb1) + gridN, today);
            dayDiff = getIndex(_0x3d35fe);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue(_0x208941(0x78) + gridN, streakCount),
            setValue(_0x208941(0xaf) + gridN, streakMax),
            setValue(_0x208941(0xb1) + gridN, today),
            setValue(_0x208941(0x6e) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document[_0x208941(0x97)](_0x208941(0x6f))['style'][_0x208941(0x81)] = _0x208941(0x9c),
        document[_0x208941(0x97)](_0x208941(0x93))[_0x208941(0x8a)][_0x208941(0x81)] = _0x208941(0xb8),
        document[_0x208941(0x97)]('rowShare')[_0x208941(0x8a)][_0x208941(0x81)] = 'none',
        document['getElementById'](_0x208941(0xa1))[_0x208941(0x8a)][_0x208941(0x81)] = _0x208941(0xb8);
    document[_0x208941(0x97)](_0x208941(0x70))[_0x208941(0x82)] = '',
    _0x5a3dd4 > 0x0 && solveSequence['length'] > 0x0 && (document['getElementById'](_0x208941(0x70))[_0x208941(0x82)] = createBarChart());
}
function resetGrid() {
    const _0x4ed61d = _0x14d4b1
      , _0x5d1fb8 = document[_0x4ed61d(0x97)](_0x4ed61d(0xbf))
      , _0x4fc1e7 = document['createElement'](_0x4ed61d(0x95));
    _0x4fc1e7['id'] = _0x4ed61d(0xbf),
    _0x4fc1e7[_0x4ed61d(0xb0)]['add']('grid-container'),
    _0x5d1fb8[_0x4ed61d(0x74)][_0x4ed61d(0x89)](_0x4fc1e7, _0x5d1fb8),
    grid = _0x4fc1e7,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
