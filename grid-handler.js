const _0x5f0feb = _0x4719;
(function(_0x38e363, _0x125a79) {
    const _0x4d91df = _0x4719
      , _0x253382 = _0x38e363();
    while (!![]) {
        try {
            const _0x127ebb = -parseInt(_0x4d91df(0x1b1)) / 0x1 + parseInt(_0x4d91df(0x189)) / 0x2 * (-parseInt(_0x4d91df(0x180)) / 0x3) + parseInt(_0x4d91df(0x1b8)) / 0x4 + -parseInt(_0x4d91df(0x1ac)) / 0x5 + -parseInt(_0x4d91df(0x1c8)) / 0x6 * (-parseInt(_0x4d91df(0x190)) / 0x7) + -parseInt(_0x4d91df(0x1b0)) / 0x8 + parseInt(_0x4d91df(0x1ae)) / 0x9;
            if (_0x127ebb === _0x125a79)
                break;
            else
                _0x253382['push'](_0x253382['shift']());
        } catch (_0x311a22) {
            _0x253382['push'](_0x253382['shift']());
        }
    }
}(_0x19af, 0xf3060));
const resetKey = _0x5f0feb(0x1b9);
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
function setValue(_0x5dd26b, _0x59711c) {
    const _0x1b19b7 = _0x5f0feb;
    window[_0x1b19b7(0x182)][_0x1b19b7(0x191)](_0x5dd26b, _0x59711c);
}
function getToday() {
    const _0x24350e = _0x5f0feb
      , _0x6a3968 = new Date()
      , _0x5ac84e = _0x6a3968['getFullYear']()
      , _0x318435 = String(_0x6a3968['getMonth']() + 0x1)[_0x24350e(0x18c)](0x2, '0')
      , _0x9463ad = String(_0x6a3968[_0x24350e(0x188)]())[_0x24350e(0x18c)](0x2, '0');
    return _0x5ac84e + '-' + _0x318435 + '-' + _0x9463ad;
}
function _0x19af() {
    const _0x4bab6c = ['localStorage', 'div', 'target', 'disabled', 'selected', 'winCount', 'getDate', '4MYxyOw', 'textContent', 'slice', 'padStart', 'add', 'createElement', 'तीन', '35oXzAKA', 'setItem', 'correct', 'push', 'click', 'replaceChild', 'block', 'pWin', 'selected2', 'keys', 'three', 'four', 'playCount', 'streakCount', 'preventDefault', 'addEventListener', 'classList', 'grid', 'join', 'rowShare', 'contains', 'innerText', '#resetBtn', 'display', 'maxStreak', 'none', 'tag', 'gridHindi', '8261945fnhcAn', 'lastPlayed', '8688618FQEeeS', 'appendChild', '3209096bxbmuq', '549855VIYllc', 'from', 'movesCounter', 'pPlay', 'className', 'lastWin', 'divMindCheck', '5037728cHxNBR', 'abcd', 'streakMax', 'getElementById', 'clear', 'style', 'getElementsByClassName', 'split', 'winSteps', 'length', 'getItem', 'innerHTML', 'parentNode', 'solveGrid', 'grid-item\x20grid-item-', 'gridSize', '2240886MPsYDG', 'remove', 'grid-row', 'userGrid', '740151CjCHaJ', 'floor'];
    _0x19af = function() {
        return _0x4bab6c;
    }
    ;
    return _0x19af();
}
function getValue(_0x5c3955, _0x6c27e2=null) {
    const _0x1fdeeb = _0x5f0feb;
    let _0x32902e = window[_0x1fdeeb(0x182)][_0x1fdeeb(0x1c2)](_0x5c3955);
    return _0x32902e == null && _0x6c27e2 != null && (_0x32902e = _0x6c27e2),
    _0x32902e;
}
function initializePuzzle() {
    const _0x3ac8dc = _0x5f0feb;
    movesCounter = getValue(_0x3ac8dc(0x1b3) + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document['getElementById'](_0x3ac8dc(0x1b3))[_0x3ac8dc(0x1a5)] = movesCounter,
    document['getElementById'](_0x3ac8dc(0x1ab))['innerText'] = gridN == 0x3 ? _0x3ac8dc(0x18f) : 'चार',
    document['getElementById']('gridEng')[_0x3ac8dc(0x1a5)] = gridN == 0x3 ? _0x3ac8dc(0x19a) : _0x3ac8dc(0x19b),
    userGrid = getValue(_0x3ac8dc(0x17f) + gridN, ''),
    solveGrid = getValue('solveGrid' + gridN, '');
    if (solveGrid[_0x3ac8dc(0x1c1)] > 0x0)
        solveSequence = [...solveGrid[_0x3ac8dc(0x1bf)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0xe890dc = getGridSequence(gridN);
    if (userGrid['length'] > 0x5)
        try {
            idxSequence = [...userGrid[_0x3ac8dc(0x1bf)]('$')];
        } catch (_0x318cb5) {
            idxSequence = [..._0xe890dc];
        }
    else
        idxSequence = [..._0xe890dc];
    for (let _0x5006ad = 0x0; _0x5006ad < idxSequence[_0x3ac8dc(0x1c1)]; _0x5006ad++) {
        gridSequence[_0x3ac8dc(0x193)](originalSequence[idxSequence[_0x5006ad]]);
    }
    createGrid();
}
function createGrid() {
    const _0x121853 = _0x5f0feb
      , _0x3f2159 = document[_0x121853(0x1bb)]('grid');
    document[_0x121853(0x1bb)](_0x121853(0x1c7))[_0x121853(0x1a5)] = gridN + 'x' + gridN,
    _0x3f2159[_0x121853(0x1c3)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x337786 = 0x0; _0x337786 < gridN; _0x337786++) {
        const _0x251186 = document['createElement'](_0x121853(0x183));
        _0x251186[_0x121853(0x1b5)] = _0x121853(0x17e);
        for (let _0x228176 = 0x0; _0x228176 < gridN; _0x228176++) {
            const _0x2490a1 = document['createElement'](_0x121853(0x183));
            _0x2490a1[_0x121853(0x1b5)] = _0x121853(0x1c6) + gridN + '-' + gridN,
            _0x2490a1[_0x121853(0x18a)] = gridSequence[_0x337786 * gridN + _0x228176],
            _0x2490a1[_0x121853(0x1aa)] = _0x337786 * gridN + _0x228176,
            _0x2490a1[_0x121853(0x19f)]('click', handleItemClick),
            _0x2490a1[_0x121853(0x19f)]('touchstart', handleTouchStart, {
                'passive': ![]
            }),
            _0x251186[_0x121853(0x1af)](_0x2490a1);
        }
        _0x3f2159[_0x121853(0x1af)](_0x251186);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x137614 = _0x5f0feb;
    idxSequence = [...Array(gridN * gridN)[_0x137614(0x199)]()];
    for (let _0x3980e8 = gridSequence['length'] - 0x1; _0x3980e8 > 0x0; _0x3980e8--) {
        let _0x25ba72 = _0x3980e8;
        while (_0x25ba72 == _0x3980e8) {
            _0x25ba72 = Math['floor'](Math['random']() * (_0x3980e8 + 0x1));
        }
        [gridSequence[_0x3980e8],gridSequence[_0x25ba72]] = [gridSequence[_0x25ba72], gridSequence[_0x3980e8]],
        [idxSequence[_0x3980e8],idxSequence[_0x25ba72]] = [idxSequence[_0x25ba72], idxSequence[_0x3980e8]];
    }
}
function handleItemClick(_0x5e5b2b) {
    const _0x24a605 = _0x5f0feb;
    if (_0x5e5b2b['target'][_0x24a605(0x1a0)][_0x24a605(0x1a4)](_0x24a605(0x185)))
        return;
    if (mindCheckMode)
        selectedItem = _0x5e5b2b['target'],
        selectedItem[_0x24a605(0x1a0)]['contains'](_0x24a605(0x198)) ? selectedItem[_0x24a605(0x1a0)]['remove'](_0x24a605(0x198)) : selectedItem[_0x24a605(0x1a0)][_0x24a605(0x18d)](_0x24a605(0x198));
    else {
        if (!selectedItem)
            selectedItem = _0x5e5b2b[_0x24a605(0x184)],
            selectedItem['classList'][_0x24a605(0x18d)](_0x24a605(0x186));
        else
            selectedItem[_0x24a605(0x1aa)] != _0x5e5b2b['target'][_0x24a605(0x1aa)] ? (swapItems(selectedItem, _0x5e5b2b[_0x24a605(0x184)]),
            selectedItem[_0x24a605(0x1a0)][_0x24a605(0x1c9)](_0x24a605(0x186)),
            selectedItem = null,
            swapMove = !![],
            targetRow = Math[_0x24a605(0x181)](Number(_0x5e5b2b['target'][_0x24a605(0x1aa)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x24a605(0x1a0)][_0x24a605(0x1c9)]('selected'),
            selectedItem = null);
    }
}
function handleTouchStart(_0x2614c9) {
    const _0x3321d8 = _0x5f0feb;
    _0x2614c9[_0x3321d8(0x19e)](),
    handleItemClick(_0x2614c9);
}
function swapItems(_0x38e5fb, _0x52abf2) {
    const _0x51224b = _0x5f0feb
      , _0x2e12c6 = _0x38e5fb[_0x51224b(0x18a)];
    gridSequence[_0x38e5fb[_0x51224b(0x1aa)]] = _0x52abf2[_0x51224b(0x18a)],
    gridSequence[_0x52abf2[_0x51224b(0x1aa)]] = _0x2e12c6;
    const _0x4d7e26 = idxSequence[_0x38e5fb[_0x51224b(0x1aa)]];
    idxSequence[_0x38e5fb[_0x51224b(0x1aa)]] = idxSequence[_0x52abf2[_0x51224b(0x1aa)]],
    idxSequence[_0x52abf2[_0x51224b(0x1aa)]] = _0x4d7e26,
    _0x38e5fb[_0x51224b(0x18a)] = _0x52abf2['textContent'],
    _0x52abf2[_0x51224b(0x18a)] = _0x2e12c6,
    movesCounter++,
    document['getElementById'](_0x51224b(0x1b3))[_0x51224b(0x1a5)] = movesCounter;
}
function resetAllData() {
    const _0x2d7629 = _0x5f0feb;
    window[_0x2d7629(0x182)][_0x2d7629(0x1bc)]();
}
function resetLocalStorage() {
    const _0x34186e = _0x5f0feb;
    setValue(_0x34186e(0x17f) + gridN, ''),
    setValue(_0x34186e(0x1b3) + gridN, 0x0),
    setValue(_0x34186e(0x1ad) + gridN, ''),
    setValue('lastWin' + gridN, ''),
    setValue(_0x34186e(0x19c) + gridN, 0x0),
    setValue(_0x34186e(0x187) + gridN, 0x0),
    setValue('playStreak' + gridN, 0x0),
    setValue(_0x34186e(0x1a8) + gridN, 0x0);
}
function storeGridData() {
    const _0x261816 = _0x5f0feb;
    setValue(_0x261816(0x17f) + gridN, idxSequence[_0x261816(0x1a2)]('$')),
    setValue(_0x261816(0x1b3) + gridN, movesCounter),
    setValue(_0x261816(0x1c5) + gridN, solveSequence[_0x261816(0x1a2)]('$'));
}
function _0x4719(_0x3fce47, _0x2a3038) {
    const _0x19af91 = _0x19af();
    return _0x4719 = function(_0x47191b, _0x1f2e6e) {
        _0x47191b = _0x47191b - 0x17e;
        let _0x3143b2 = _0x19af91[_0x47191b];
        return _0x3143b2;
    }
    ,
    _0x4719(_0x3fce47, _0x2a3038);
}
function checkRows() {
    const _0xc7d8a = _0x5f0feb
      , _0x36ba2a = document[_0xc7d8a(0x1be)]('grid-row');
    let _0x3f034c = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x262d15 = 0x0; _0x262d15 < _0x36ba2a[_0xc7d8a(0x1c1)]; _0x262d15++) {
        const _0x11b7ea = Array[_0xc7d8a(0x1b2)](_0x36ba2a[_0x262d15][_0xc7d8a(0x1be)]('grid-item'))
          , _0x3483fa = _0x11b7ea['map'](_0x241fe0 => _0x241fe0[_0xc7d8a(0x18a)]);
        for (let _0x18f919 = 0x0; _0x18f919 <= gridCheck; _0x18f919 += gridN) {
            const _0x4f1f37 = originalSequence[_0xc7d8a(0x18b)](_0x18f919, _0x18f919 + gridN)[_0xc7d8a(0x1a2)]('');
            if (_0x3483fa[_0xc7d8a(0x1a2)]('') === _0x4f1f37) {
                _0x11b7ea['forEach'](_0x6c6715 => {
                    const _0x589794 = _0xc7d8a;
                    _0x6c6715[_0x589794(0x1a0)][_0x589794(0x18d)](_0x589794(0x192), 'disabled');
                }
                );
                swapMove && _0x262d15 == targetRow && (solveSequence[_0xc7d8a(0x193)](movesCounter),
                targetRow = -0x1);
                _0x3f034c++;
                break;
            }
        }
    }
    ;if (_0x3f034c === gridN) {
        document[_0xc7d8a(0x1bb)](_0xc7d8a(0x1b7))['style']['display'] = _0xc7d8a(0x1a9),
        document['getElementById'](_0xc7d8a(0x1a3))[_0xc7d8a(0x1bd)]['display'] = _0xc7d8a(0x196),
        document[_0xc7d8a(0x1bb)](_0xc7d8a(0x197))[_0xc7d8a(0x1bd)]['display'] = _0xc7d8a(0x196),
        document['getElementById'](_0xc7d8a(0x1b4))[_0xc7d8a(0x1bd)][_0xc7d8a(0x1a7)] = _0xc7d8a(0x1a9);
        if (swapMove) {
            solveSequence[_0xc7d8a(0x1c1)] < gridN && solveSequence[_0xc7d8a(0x193)](movesCounter);
            winCount++;
            const _0x4c673d = getValue('lastWin' + gridN, today);
            dayDiff = getIndex(_0x4c673d);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue(_0xc7d8a(0x19d) + gridN, streakCount),
            setValue(_0xc7d8a(0x1ba) + gridN, streakMax),
            setValue(_0xc7d8a(0x1b6) + gridN, today),
            setValue(_0xc7d8a(0x187) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document['getElementById']('pWin')[_0xc7d8a(0x1bd)]['display'] = 'none',
        document[_0xc7d8a(0x1bb)](_0xc7d8a(0x1b4))[_0xc7d8a(0x1bd)][_0xc7d8a(0x1a7)] = _0xc7d8a(0x196),
        document[_0xc7d8a(0x1bb)](_0xc7d8a(0x1a3))[_0xc7d8a(0x1bd)]['display'] = _0xc7d8a(0x1a9),
        document[_0xc7d8a(0x1bb)]('divMindCheck')[_0xc7d8a(0x1bd)][_0xc7d8a(0x1a7)] = _0xc7d8a(0x196);
    document[_0xc7d8a(0x1bb)](_0xc7d8a(0x1c0))[_0xc7d8a(0x1a5)] = '',
    _0x3f034c > 0x0 && solveSequence[_0xc7d8a(0x1c1)] > 0x0 && (document[_0xc7d8a(0x1bb)](_0xc7d8a(0x1c0))['innerText'] = createBarChart());
}
$(_0x5f0feb(0x1a6))[_0x5f0feb(0x194)](function() {
    const _0x310582 = _0x5f0feb
      , _0x318588 = document[_0x310582(0x1bb)](_0x310582(0x1a1))
      , _0x1dab6b = document[_0x310582(0x18e)](_0x310582(0x183));
    _0x1dab6b['id'] = 'grid',
    _0x1dab6b[_0x310582(0x1a0)][_0x310582(0x18d)]('grid-container'),
    _0x318588[_0x310582(0x1c4)][_0x310582(0x195)](_0x1dab6b, _0x318588),
    grid = _0x1dab6b,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x186b8 = _0x5f0feb
      , _0x4079cc = document[_0x186b8(0x1bb)](_0x186b8(0x1a1))
      , _0x45815c = document[_0x186b8(0x18e)](_0x186b8(0x183));
    _0x45815c['id'] = 'grid',
    _0x45815c[_0x186b8(0x1a0)][_0x186b8(0x18d)]('grid-container'),
    _0x4079cc['parentNode'][_0x186b8(0x195)](_0x45815c, _0x4079cc),
    grid = _0x45815c,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
