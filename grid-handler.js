const _0x54c82a = _0x537b;
(function(_0x173e61, _0x5d22a3) {
    const _0x10c4ee = _0x537b
      , _0xb89c5c = _0x173e61();
    while (!![]) {
        try {
            const _0x3a8373 = parseInt(_0x10c4ee(0x15f)) / 0x1 * (-parseInt(_0x10c4ee(0x14c)) / 0x2) + -parseInt(_0x10c4ee(0x184)) / 0x3 * (parseInt(_0x10c4ee(0x150)) / 0x4) + parseInt(_0x10c4ee(0x17f)) / 0x5 + -parseInt(_0x10c4ee(0x156)) / 0x6 + parseInt(_0x10c4ee(0x185)) / 0x7 * (parseInt(_0x10c4ee(0x18f)) / 0x8) + parseInt(_0x10c4ee(0x163)) / 0x9 * (parseInt(_0x10c4ee(0x190)) / 0xa) + -parseInt(_0x10c4ee(0x170)) / 0xb * (-parseInt(_0x10c4ee(0x171)) / 0xc);
            if (_0x3a8373 === _0x5d22a3)
                break;
            else
                _0xb89c5c['push'](_0xb89c5c['shift']());
        } catch (_0x17039a) {
            _0xb89c5c['push'](_0xb89c5c['shift']());
        }
    }
}(_0x1fa0, 0x7b724));
const resetKey = 'abcd';
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
function setValue(_0x176d05, _0xebea49) {
    const _0x2c5168 = _0x537b;
    window[_0x2c5168(0x17a)][_0x2c5168(0x179)](_0x176d05, _0xebea49);
}
function getToday() {
    const _0xbe943d = _0x537b
      , _0x2f0b0d = new Date()
      , _0x4fb7a1 = _0x2f0b0d[_0xbe943d(0x161)]()
      , _0x34a8a0 = String(_0x2f0b0d['getMonth']() + 0x1)[_0xbe943d(0x181)](0x2, '0')
      , _0x250873 = String(_0x2f0b0d[_0xbe943d(0x17b)]())[_0xbe943d(0x181)](0x2, '0');
    return _0x4fb7a1 + '-' + _0x34a8a0 + '-' + _0x250873;
}
function getValue(_0xd6b7dd, _0x1db61a=null) {
    const _0x317d15 = _0x537b;
    let _0x26e412 = window['localStorage'][_0x317d15(0x145)](_0xd6b7dd);
    return _0x26e412 == null && _0x1db61a != null && (_0x26e412 = _0x1db61a),
    _0x26e412;
}
function initializePuzzle() {
    const _0x11e56c = _0x537b;
    movesCounter = getValue(_0x11e56c(0x180) + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document[_0x11e56c(0x193)](_0x11e56c(0x180))[_0x11e56c(0x186)] = movesCounter,
    document[_0x11e56c(0x193)](_0x11e56c(0x158))[_0x11e56c(0x186)] = gridN == 0x3 ? 'तीन' : 'चार',
    document[_0x11e56c(0x193)]('gridEng')['innerText'] = gridN == 0x3 ? _0x11e56c(0x194) : _0x11e56c(0x169),
    userGrid = getValue(_0x11e56c(0x166) + gridN, ''),
    solveGrid = getValue(_0x11e56c(0x16e) + gridN, '');
    if (solveGrid['length'] > 0x0)
        solveSequence = [...solveGrid[_0x11e56c(0x14f)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x3f4d69 = getGridSequence(gridN);
    if (userGrid[_0x11e56c(0x177)] > 0x5)
        try {
            idxSequence = [...userGrid[_0x11e56c(0x14f)]('$')];
        } catch (_0x52d1a9) {
            idxSequence = [..._0x3f4d69];
        }
    else
        idxSequence = [..._0x3f4d69];
    for (let _0x3e2ee7 = 0x0; _0x3e2ee7 < idxSequence['length']; _0x3e2ee7++) {
        gridSequence[_0x11e56c(0x15e)](originalSequence[idxSequence[_0x3e2ee7]]);
    }
    createGrid();
}
function _0x537b(_0x17dbcf, _0x25fa01) {
    const _0x1fa030 = _0x1fa0();
    return _0x537b = function(_0x537bd1, _0x555b1d) {
        _0x537bd1 = _0x537bd1 - 0x144;
        let _0xf3b3d6 = _0x1fa030[_0x537bd1];
        return _0xf3b3d6;
    }
    ,
    _0x537b(_0x17dbcf, _0x25fa01);
}
function createGrid() {
    const _0x58d83c = _0x537b
      , _0x1a2e0c = document['getElementById'](_0x58d83c(0x165));
    document[_0x58d83c(0x193)](_0x58d83c(0x155))[_0x58d83c(0x186)] = gridN + 'x' + gridN,
    _0x1a2e0c[_0x58d83c(0x162)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x11d194 = 0x0; _0x11d194 < gridN; _0x11d194++) {
        const _0x4b68a0 = document[_0x58d83c(0x146)](_0x58d83c(0x178));
        _0x4b68a0[_0x58d83c(0x157)] = 'grid-row';
        for (let _0x5708bf = 0x0; _0x5708bf < gridN; _0x5708bf++) {
            const _0x5426e7 = document[_0x58d83c(0x146)]('div');
            _0x5426e7[_0x58d83c(0x157)] = _0x58d83c(0x15b) + gridN + '-' + gridN,
            _0x5426e7[_0x58d83c(0x17e)] = gridSequence[_0x11d194 * gridN + _0x5708bf],
            _0x5426e7[_0x58d83c(0x191)] = _0x11d194 * gridN + _0x5708bf,
            _0x5426e7['addEventListener'](_0x58d83c(0x18e), handleItemClick),
            _0x5426e7[_0x58d83c(0x176)]('touchstart', handleTouchStart, {
                'passive': ![]
            }),
            _0x4b68a0[_0x58d83c(0x175)](_0x5426e7);
        }
        _0x1a2e0c['appendChild'](_0x4b68a0);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x9b3d6a = _0x537b;
    idxSequence = [...Array(gridN * gridN)['keys']()];
    for (let _0x46d5b4 = gridSequence[_0x9b3d6a(0x177)] - 0x1; _0x46d5b4 > 0x0; _0x46d5b4--) {
        let _0x83880d = _0x46d5b4;
        while (_0x83880d == _0x46d5b4) {
            _0x83880d = Math[_0x9b3d6a(0x187)](Math[_0x9b3d6a(0x149)]() * (_0x46d5b4 + 0x1));
        }
        [gridSequence[_0x46d5b4],gridSequence[_0x83880d]] = [gridSequence[_0x83880d], gridSequence[_0x46d5b4]],
        [idxSequence[_0x46d5b4],idxSequence[_0x83880d]] = [idxSequence[_0x83880d], idxSequence[_0x46d5b4]];
    }
}
function handleItemClick(_0x3557ac) {
    const _0x3cec33 = _0x537b;
    if (_0x3557ac[_0x3cec33(0x153)]['classList'][_0x3cec33(0x16a)](_0x3cec33(0x152)))
        return;
    if (mindCheckMode)
        selectedItem = _0x3557ac[_0x3cec33(0x153)],
        selectedItem[_0x3cec33(0x18b)][_0x3cec33(0x16a)](_0x3cec33(0x18a)) ? selectedItem['classList'][_0x3cec33(0x148)](_0x3cec33(0x18a)) : selectedItem[_0x3cec33(0x18b)][_0x3cec33(0x15c)]('selected2');
    else {
        if (!selectedItem)
            selectedItem = _0x3557ac[_0x3cec33(0x153)],
            selectedItem[_0x3cec33(0x18b)][_0x3cec33(0x15c)](_0x3cec33(0x18d));
        else
            selectedItem[_0x3cec33(0x191)] != _0x3557ac[_0x3cec33(0x153)][_0x3cec33(0x191)] ? (swapItems(selectedItem, _0x3557ac[_0x3cec33(0x153)]),
            selectedItem[_0x3cec33(0x18b)]['remove'](_0x3cec33(0x18d)),
            selectedItem = null,
            swapMove = !![],
            targetRow = Math[_0x3cec33(0x187)](Number(_0x3557ac[_0x3cec33(0x153)][_0x3cec33(0x191)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x3cec33(0x18b)][_0x3cec33(0x148)](_0x3cec33(0x18d)),
            selectedItem = null);
    }
}
function handleTouchStart(_0x3e0f15) {
    const _0x1c34ff = _0x537b;
    _0x3e0f15[_0x1c34ff(0x192)](),
    handleItemClick(_0x3e0f15);
}
function swapItems(_0x519725, _0x2ae60a) {
    const _0x560276 = _0x537b
      , _0x34eb11 = _0x519725[_0x560276(0x17e)];
    gridSequence[_0x519725[_0x560276(0x191)]] = _0x2ae60a['textContent'],
    gridSequence[_0x2ae60a['tag']] = _0x34eb11;
    const _0x59c4a7 = idxSequence[_0x519725[_0x560276(0x191)]];
    idxSequence[_0x519725[_0x560276(0x191)]] = idxSequence[_0x2ae60a[_0x560276(0x191)]],
    idxSequence[_0x2ae60a[_0x560276(0x191)]] = _0x59c4a7,
    _0x519725[_0x560276(0x17e)] = _0x2ae60a['textContent'],
    _0x2ae60a['textContent'] = _0x34eb11,
    movesCounter++,
    document['getElementById']('movesCounter')[_0x560276(0x186)] = movesCounter;
}
function resetAllData() {
    const _0x22ae08 = _0x537b;
    window[_0x22ae08(0x17a)][_0x22ae08(0x167)]();
}
function resetLocalStorage() {
    const _0x58223b = _0x537b;
    setValue(_0x58223b(0x166) + gridN, ''),
    setValue(_0x58223b(0x180) + gridN, 0x0),
    setValue(_0x58223b(0x15a) + gridN, ''),
    setValue('lastWin' + gridN, ''),
    setValue(_0x58223b(0x14b) + gridN, 0x0),
    setValue(_0x58223b(0x14e) + gridN, 0x0),
    setValue(_0x58223b(0x18c) + gridN, 0x0),
    setValue(_0x58223b(0x15d) + gridN, 0x0);
}
function storeGridData() {
    const _0x28e19b = _0x537b;
    setValue(_0x28e19b(0x166) + gridN, idxSequence[_0x28e19b(0x188)]('$')),
    setValue(_0x28e19b(0x180) + gridN, movesCounter),
    setValue(_0x28e19b(0x16e) + gridN, solveSequence[_0x28e19b(0x188)]('$'));
}
function checkRows() {
    const _0x11141b = _0x537b
      , _0xfcf02e = document['getElementsByClassName'](_0x11141b(0x164));
    let _0x2c1eb5 = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x152dcd = 0x0; _0x152dcd < _0xfcf02e[_0x11141b(0x177)]; _0x152dcd++) {
        const _0x1ef5fe = Array[_0x11141b(0x174)](_0xfcf02e[_0x152dcd]['getElementsByClassName'](_0x11141b(0x17d)))
          , _0x5b9ef0 = _0x1ef5fe[_0x11141b(0x173)](_0x279200 => _0x279200['textContent']);
        for (let _0x4fec84 = 0x0; _0x4fec84 <= gridCheck; _0x4fec84 += gridN) {
            const _0x1e5315 = originalSequence[_0x11141b(0x195)](_0x4fec84, _0x4fec84 + gridN)[_0x11141b(0x188)]('');
            if (_0x5b9ef0[_0x11141b(0x188)]('') === _0x1e5315) {
                _0x1ef5fe[_0x11141b(0x154)](_0x2fdf71 => {
                    const _0x2bc577 = _0x11141b;
                    _0x2fdf71[_0x2bc577(0x18b)][_0x2bc577(0x15c)](_0x2bc577(0x17c), _0x2bc577(0x152));
                }
                );
                if (swapMove && _0x152dcd == targetRow) {
                    if (_0x2c1eb5 == 0x0)
                        solveSequence = [];
                    solveSequence[_0x11141b(0x15e)](movesCounter),
                    targetRow = -0x1;
                }
                _0x2c1eb5++;
                break;
            }
        }
    }
    ;if (_0x2c1eb5 === gridN) {
        document[_0x11141b(0x193)](_0x11141b(0x189))[_0x11141b(0x182)][_0x11141b(0x147)] = _0x11141b(0x151),
        document[_0x11141b(0x193)](_0x11141b(0x159))[_0x11141b(0x182)][_0x11141b(0x147)] = _0x11141b(0x172),
        document[_0x11141b(0x193)](_0x11141b(0x183))[_0x11141b(0x182)][_0x11141b(0x147)] = _0x11141b(0x172),
        document[_0x11141b(0x193)](_0x11141b(0x160))[_0x11141b(0x182)]['display'] = 'none';
        if (swapMove) {
            solveSequence[_0x11141b(0x177)] < gridN && solveSequence['push'](movesCounter);
            winCount++;
            const _0x56ffa2 = getValue(_0x11141b(0x16f) + gridN, today);
            dayDiff = getIndex(_0x56ffa2);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue(_0x11141b(0x14a) + gridN, streakCount),
            setValue(_0x11141b(0x144) + gridN, streakMax),
            setValue('lastWin' + gridN, today),
            setValue(_0x11141b(0x14e) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document['getElementById'](_0x11141b(0x183))[_0x11141b(0x182)][_0x11141b(0x147)] = _0x11141b(0x151),
        document[_0x11141b(0x193)]('pPlay')[_0x11141b(0x182)]['display'] = _0x11141b(0x172),
        document[_0x11141b(0x193)](_0x11141b(0x159))[_0x11141b(0x182)][_0x11141b(0x147)] = 'none',
        document[_0x11141b(0x193)]('divMindCheck')[_0x11141b(0x182)][_0x11141b(0x147)] = 'block';
    document[_0x11141b(0x193)](_0x11141b(0x16d))[_0x11141b(0x186)] = '',
    _0x2c1eb5 > 0x0 && solveSequence[_0x11141b(0x177)] > 0x0 && (document['getElementById']('winSteps')[_0x11141b(0x186)] = createBarChart());
}
$(_0x54c82a(0x168))[_0x54c82a(0x18e)](function() {
    const _0x1bd001 = _0x54c82a
      , _0x27c591 = document['getElementById'](_0x1bd001(0x165))
      , _0x2d0da8 = document[_0x1bd001(0x146)]('div');
    _0x2d0da8['id'] = _0x1bd001(0x165),
    _0x2d0da8[_0x1bd001(0x18b)][_0x1bd001(0x15c)]('grid-container'),
    _0x27c591[_0x1bd001(0x16c)][_0x1bd001(0x16b)](_0x2d0da8, _0x27c591),
    grid = _0x2d0da8,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x2a064a = _0x54c82a
      , _0x921f57 = document[_0x2a064a(0x193)]('grid')
      , _0x357b00 = document[_0x2a064a(0x146)]('div');
    _0x357b00['id'] = _0x2a064a(0x165),
    _0x357b00[_0x2a064a(0x18b)][_0x2a064a(0x15c)](_0x2a064a(0x14d)),
    _0x921f57[_0x2a064a(0x16c)]['replaceChild'](_0x357b00, _0x921f57),
    grid = _0x357b00,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
function _0x1fa0() {
    const _0x31beaf = ['padStart', 'style', 'pWin', '18rxJmYn', '7CCqfLI', 'innerText', 'floor', 'join', 'divMindCheck', 'selected2', 'classList', 'playStreak', 'selected', 'click', '1011880PYFFet', '2457380KjQYSX', 'tag', 'preventDefault', 'getElementById', 'three', 'slice', 'streakMax', 'getItem', 'createElement', 'display', 'remove', 'random', 'streakCount', 'playCount', '2QBYRxD', 'grid-container', 'winCount', 'split', '42672EPWYyC', 'none', 'disabled', 'target', 'forEach', 'gridSize', '5074470zrYhgk', 'className', 'gridHindi', 'rowShare', 'lastPlayed', 'grid-item\x20grid-item-', 'add', 'maxStreak', 'push', '12883YHalZv', 'pPlay', 'getFullYear', 'innerHTML', '36ravofT', 'grid-row', 'grid', 'userGrid', 'clear', '#resetBtn', 'four', 'contains', 'replaceChild', 'parentNode', 'winSteps', 'solveGrid', 'lastWin', '2227775ojcZPh', '12yaPUHR', 'block', 'map', 'from', 'appendChild', 'addEventListener', 'length', 'div', 'setItem', 'localStorage', 'getDate', 'correct', 'grid-item', 'textContent', '581550gDXBAl', 'movesCounter'];
    _0x1fa0 = function() {
        return _0x31beaf;
    }
    ;
    return _0x1fa0();
}
