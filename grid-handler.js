const _0x4e7e31 = _0x5239;
(function(_0x416fb4, _0x1474c1) {
    const _0x1fab79 = _0x5239
      , _0x1be25b = _0x416fb4();
    while (!![]) {
        try {
            const _0x2835fb = parseInt(_0x1fab79(0xc0)) / 0x1 + -parseInt(_0x1fab79(0xd7)) / 0x2 + -parseInt(_0x1fab79(0xea)) / 0x3 * (parseInt(_0x1fab79(0xe3)) / 0x4) + parseInt(_0x1fab79(0xb6)) / 0x5 * (parseInt(_0x1fab79(0xb4)) / 0x6) + parseInt(_0x1fab79(0xe1)) / 0x7 + -parseInt(_0x1fab79(0xb3)) / 0x8 + parseInt(_0x1fab79(0xd5)) / 0x9;
            if (_0x2835fb === _0x1474c1)
                break;
            else
                _0x1be25b['push'](_0x1be25b['shift']());
        } catch (_0x228444) {
            _0x1be25b['push'](_0x1be25b['shift']());
        }
    }
}(_0x230a, 0x298f9));
const resetKey = _0x4e7e31(0xe2);
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
  , orgGrid = ''
  , userGrid = ''
  , solveGrid = ''
  , currRow = 0x0;
function setValue(_0x172114, _0x294d11) {
    const _0x376d72 = _0x4e7e31;
    window[_0x376d72(0xbf)][_0x376d72(0xe9)](_0x172114, _0x294d11);
}
function getToday() {
    const _0x495760 = _0x4e7e31
      , _0x3e6bad = new Date()
      , _0x53a702 = _0x3e6bad['getFullYear']()
      , _0x596989 = String(_0x3e6bad['getMonth']() + 0x1)[_0x495760(0xf3)](0x2, '0')
      , _0x412030 = String(_0x3e6bad[_0x495760(0xb9)]())['padStart'](0x2, '0');
    return _0x53a702 + '-' + _0x596989 + '-' + _0x412030;
}
function getValue(_0x51ba7d, _0xf8603c=null) {
    const _0x4bb359 = _0x4e7e31;
    let _0x276504 = window['localStorage'][_0x4bb359(0xce)](_0x51ba7d);
    return _0x276504 == null && _0xf8603c != null && (_0x276504 = _0xf8603c),
    _0x276504;
}
function initializePuzzle() {
    const _0x33aec4 = _0x4e7e31;
    movesCounter = getValue('movesCounter' + gridN, 0x0);
    let _0x5d7fd3 = ''
      , _0xe87105 = '';
    gridSequence = [],
    solveSequence = [],
    document[_0x33aec4(0xd6)](_0x33aec4(0xdf))[_0x33aec4(0xf5)] = movesCounter,
    document[_0x33aec4(0xd6)]('gridHindi')[_0x33aec4(0xf5)] = gridN == 0x3 ? _0x33aec4(0xc4) : _0x33aec4(0xf8),
    document[_0x33aec4(0xd6)](_0x33aec4(0xca))[_0x33aec4(0xf5)] = gridN == 0x3 ? 'three' : 'four';
    try {
        _0x5d7fd3 = getValue(_0x33aec4(0xd1) + gridN, '');
    } catch (_0x8461e1) {}
    try {
        _0xe87105 = getValue(_0x33aec4(0xf9) + gridN, '');
    } catch (_0x1fdbca) {}
    if (_0xe87105[_0x33aec4(0xcd)] > 0x0)
        solveSequence = [..._0xe87105['split']('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x39e652 = getGridSequence(gridN);
    if (_0x5d7fd3[_0x33aec4(0xcd)] > 0x5)
        try {
            idxSequence = [..._0x5d7fd3['split']('$')];
        } catch (_0x4a4bfc) {}
    else
        idxSequence = [..._0x39e652];
    for (let _0x34d105 = 0x0; _0x34d105 < idxSequence[_0x33aec4(0xcd)]; _0x34d105++) {
        gridSequence[_0x33aec4(0xef)](originalSequence[idxSequence[_0x34d105]]);
    }
    createGrid();
}
function _0x5239(_0x5cf606, _0x2f2360) {
    const _0x230a7b = _0x230a();
    return _0x5239 = function(_0x5239ac, _0x4a18db) {
        _0x5239ac = _0x5239ac - 0xb3;
        let _0x1b8217 = _0x230a7b[_0x5239ac];
        return _0x1b8217;
    }
    ,
    _0x5239(_0x5cf606, _0x2f2360);
}
function createGrid() {
    const _0x353118 = _0x4e7e31
      , _0x3ee3c2 = document[_0x353118(0xd6)](_0x353118(0xde));
    document[_0x353118(0xd6)]('gridSize')[_0x353118(0xf5)] = gridN + 'x' + gridN,
    _0x3ee3c2['innerHTML'] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0xd20fc6 = 0x0; _0xd20fc6 < gridN; _0xd20fc6++) {
        const _0x1eeeb2 = document[_0x353118(0xe0)]('div');
        _0x1eeeb2[_0x353118(0xdb)] = 'grid-row';
        for (let _0x3d2890 = 0x0; _0x3d2890 < gridN; _0x3d2890++) {
            const _0x5b18e8 = document[_0x353118(0xe0)](_0x353118(0xbd));
            _0x5b18e8[_0x353118(0xdb)] = 'grid-item\x20grid-item-' + gridN + '-' + gridN,
            _0x5b18e8[_0x353118(0xf6)] = gridSequence[_0xd20fc6 * gridN + _0x3d2890],
            _0x5b18e8[_0x353118(0xf1)] = _0xd20fc6 * gridN + _0x3d2890,
            _0x5b18e8[_0x353118(0xd2)](_0x353118(0xe7), handleItemClick),
            _0x5b18e8[_0x353118(0xd2)](_0x353118(0xc8), handleTouchStart, {
                'passive': ![]
            }),
            _0x1eeeb2['appendChild'](_0x5b18e8);
        }
        _0x3ee3c2[_0x353118(0xf7)](_0x1eeeb2);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0xc7cfb8 = _0x4e7e31;
    idxSequence = [...Array(gridN * gridN)[_0xc7cfb8(0xbe)]()];
    for (let _0x5abe0b = gridSequence[_0xc7cfb8(0xcd)] - 0x1; _0x5abe0b > 0x0; _0x5abe0b--) {
        let _0x3bf7ff = _0x5abe0b;
        while (_0x3bf7ff == _0x5abe0b) {
            _0x3bf7ff = Math['floor'](Math['random']() * (_0x5abe0b + 0x1));
        }
        [gridSequence[_0x5abe0b],gridSequence[_0x3bf7ff]] = [gridSequence[_0x3bf7ff], gridSequence[_0x5abe0b]],
        [idxSequence[_0x5abe0b],idxSequence[_0x3bf7ff]] = [idxSequence[_0x3bf7ff], idxSequence[_0x5abe0b]];
    }
}
function handleItemClick(_0x564a45) {
    const _0x8103bc = _0x4e7e31;
    if (_0x564a45[_0x8103bc(0xcb)][_0x8103bc(0xdc)][_0x8103bc(0xf0)](_0x8103bc(0xf4)))
        return;
    if (mindCheckMode)
        selectedItem = _0x564a45[_0x8103bc(0xcb)],
        selectedItem[_0x8103bc(0xdc)]['contains'](_0x8103bc(0xc9)) ? selectedItem[_0x8103bc(0xdc)][_0x8103bc(0xcc)]('selected2') : selectedItem['classList'][_0x8103bc(0xd9)](_0x8103bc(0xc9));
    else {
        if (!selectedItem)
            selectedItem = _0x564a45[_0x8103bc(0xcb)],
            selectedItem[_0x8103bc(0xdc)]['add'](_0x8103bc(0xd3));
        else
            selectedItem[_0x8103bc(0xf1)] != _0x564a45['target'][_0x8103bc(0xf1)] ? (swapItems(selectedItem, _0x564a45['target']),
            selectedItem[_0x8103bc(0xdc)][_0x8103bc(0xcc)]('selected'),
            selectedItem = null,
            swapMove = !![],
            currRow = Math[_0x8103bc(0xd0)](Number(_0x564a45[_0x8103bc(0xcb)][_0x8103bc(0xf1)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x8103bc(0xdc)]['remove'](_0x8103bc(0xd3)),
            selectedItem = null);
    }
}
function handleTouchStart(_0xa90719) {
    _0xa90719['preventDefault'](),
    handleItemClick(_0xa90719);
}
function swapItems(_0x12cc3d, _0x15c280) {
    const _0x16fed6 = _0x4e7e31
      , _0x125e34 = _0x12cc3d[_0x16fed6(0xf6)];
    gridSequence[_0x12cc3d[_0x16fed6(0xf1)]] = _0x15c280[_0x16fed6(0xf6)],
    gridSequence[_0x15c280[_0x16fed6(0xf1)]] = _0x125e34;
    const _0x4d6e8e = idxSequence[_0x12cc3d[_0x16fed6(0xf1)]];
    idxSequence[_0x12cc3d['tag']] = idxSequence[_0x15c280[_0x16fed6(0xf1)]],
    idxSequence[_0x15c280[_0x16fed6(0xf1)]] = _0x4d6e8e,
    _0x12cc3d[_0x16fed6(0xf6)] = _0x15c280[_0x16fed6(0xf6)],
    _0x15c280[_0x16fed6(0xf6)] = _0x125e34,
    movesCounter++,
    document[_0x16fed6(0xd6)](_0x16fed6(0xdf))['innerText'] = movesCounter;
}
function _0x230a() {
    const _0x2a079e = ['padStart', 'disabled', 'innerText', 'textContent', 'appendChild', 'चार', 'solveGrid', '845072lOVGaA', '186jZmMTs', 'grid-container', '53905gcObLV', 'clear', 'join', 'getDate', 'playCount', 'parentNode', 'style', 'div', 'keys', 'localStorage', '289912aeWyer', 'correct', 'playStreak', 'streakMax', 'तीन', 'slice', '#resetBtn', 'maxStreak', 'touchstart', 'selected2', 'gridEng', 'target', 'remove', 'length', 'getItem', 'winSteps', 'floor', 'userGrid', 'addEventListener', 'selected', 'block', '597249hDKWYF', 'getElementById', '637748tHQTNY', 'grid-item', 'add', 'none', 'className', 'classList', 'map', 'grid', 'movesCounter', 'createElement', '1245118tnzbuT', 'abcd', '4Yvbcrd', 'rowShare', 'from', 'display', 'click', 'streakCount', 'setItem', '820851lmAPVl', 'divMindCheck', 'replaceChild', 'lastWin', 'getElementsByClassName', 'push', 'contains', 'tag', 'winCount'];
    _0x230a = function() {
        return _0x2a079e;
    }
    ;
    return _0x230a();
}
function resetAllData() {
    const _0x2dc922 = _0x4e7e31;
    window[_0x2dc922(0xbf)][_0x2dc922(0xb7)]();
}
function resetLocalStorage() {
    const _0x2e0716 = _0x4e7e31;
    setValue(_0x2e0716(0xd1) + gridN, ''),
    setValue('movesCounter' + gridN, 0x0),
    setValue('lastPlayed' + gridN, ''),
    setValue(_0x2e0716(0xed) + gridN, ''),
    setValue(_0x2e0716(0xba) + gridN, 0x0),
    setValue('winCount' + gridN, 0x0),
    setValue(_0x2e0716(0xc2) + gridN, 0x0),
    setValue(_0x2e0716(0xc7) + gridN, 0x0);
}
function storeGridData() {
    const _0x351063 = _0x4e7e31;
    setValue(_0x351063(0xd1) + gridN, idxSequence[_0x351063(0xb8)]('$')),
    setValue(_0x351063(0xdf) + gridN, movesCounter),
    setValue('solveGrid' + gridN, solveSequence[_0x351063(0xb8)]('$'));
}
function checkRows() {
    const _0x582564 = _0x4e7e31
      , _0xdb11fd = document[_0x582564(0xee)]('grid-row');
    let _0x536f19 = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x50644d = 0x0; _0x50644d < _0xdb11fd[_0x582564(0xcd)]; _0x50644d++) {
        const _0x12beb5 = Array[_0x582564(0xe5)](_0xdb11fd[_0x50644d]['getElementsByClassName'](_0x582564(0xd8)))
          , _0x43dc52 = _0x12beb5[_0x582564(0xdd)](_0x11217b => _0x11217b[_0x582564(0xf6)]);
        for (let _0x20179c = 0x0; _0x20179c <= gridCheck; _0x20179c += gridN) {
            const _0x3e45f5 = originalSequence[_0x582564(0xc5)](_0x20179c, _0x20179c + gridN)[_0x582564(0xb8)]('');
            if (_0x43dc52[_0x582564(0xb8)]('') === _0x3e45f5) {
                _0x12beb5['forEach'](_0x2955ca => {
                    const _0x33990e = _0x582564;
                    _0x2955ca['classList'][_0x33990e(0xd9)](_0x33990e(0xc1), _0x33990e(0xf4));
                }
                );
                swapMove && _0x50644d == currRow && solveSequence[_0x582564(0xef)](movesCounter);
                _0x536f19++;
                break;
            }
        }
    }
    ;if (_0x536f19 === gridN) {
        document[_0x582564(0xd6)](_0x582564(0xeb))[_0x582564(0xbc)][_0x582564(0xe6)] = _0x582564(0xda),
        document[_0x582564(0xd6)](_0x582564(0xe4))[_0x582564(0xbc)]['display'] = _0x582564(0xd4),
        document['getElementById']('pWin')[_0x582564(0xbc)][_0x582564(0xe6)] = 'block',
        document[_0x582564(0xd6)]('pPlay')[_0x582564(0xbc)][_0x582564(0xe6)] = _0x582564(0xda);
        if (swapMove) {
            solveSequence['length'] < gridN && solveSequence[_0x582564(0xef)](movesCounter);
            winCount++;
            const _0x2427aa = getValue(_0x582564(0xed) + gridN, today);
            dayDiff = getIndex(_0x2427aa);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue(_0x582564(0xe8) + gridN, streakCount),
            setValue(_0x582564(0xc3) + gridN, streakMax),
            setValue(_0x582564(0xed) + gridN, today),
            setValue(_0x582564(0xf2) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document[_0x582564(0xd6)]('pWin')[_0x582564(0xbc)]['display'] = _0x582564(0xda),
        document['getElementById']('pPlay')[_0x582564(0xbc)][_0x582564(0xe6)] = _0x582564(0xd4),
        document[_0x582564(0xd6)](_0x582564(0xe4))[_0x582564(0xbc)]['display'] = _0x582564(0xda),
        document[_0x582564(0xd6)](_0x582564(0xeb))[_0x582564(0xbc)]['display'] = _0x582564(0xd4);
    if (_0x536f19 > 0x0 && solveSequence[_0x582564(0xcd)] > 0x0) {
        let _0x4953a0 = document['getElementById'](_0x582564(0xcf));
        try {
            _0x4953a0[_0x582564(0xf5)] = createBarChart();
        } catch (_0x48001) {
            _0x4953a0['innerText'] = '';
        }
    }
}
$(_0x4e7e31(0xc6))[_0x4e7e31(0xe7)](function() {
    const _0x4a7312 = _0x4e7e31
      , _0x4d82a3 = document['getElementById'](_0x4a7312(0xde))
      , _0x84f68b = document['createElement'](_0x4a7312(0xbd));
    _0x84f68b['id'] = 'grid',
    _0x84f68b[_0x4a7312(0xdc)]['add']('grid-container'),
    _0x4d82a3['parentNode'][_0x4a7312(0xec)](_0x84f68b, _0x4d82a3),
    grid = _0x84f68b,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x1197cb = _0x4e7e31
      , _0x9db4ec = document[_0x1197cb(0xd6)](_0x1197cb(0xde))
      , _0x4b4582 = document['createElement'](_0x1197cb(0xbd));
    _0x4b4582['id'] = _0x1197cb(0xde),
    _0x4b4582[_0x1197cb(0xdc)][_0x1197cb(0xd9)](_0x1197cb(0xb5)),
    _0x9db4ec[_0x1197cb(0xbb)][_0x1197cb(0xec)](_0x4b4582, _0x9db4ec),
    grid = _0x4b4582,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
