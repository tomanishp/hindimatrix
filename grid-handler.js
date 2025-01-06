const _0x486e48 = _0x8b01;
(function(_0xe46f19, _0x26d058) {
    const _0x7eed7a = _0x8b01
      , _0x1d0d15 = _0xe46f19();
    while (!![]) {
        try {
            const _0x2eb17c = -parseInt(_0x7eed7a(0xeb)) / 0x1 * (parseInt(_0x7eed7a(0x10b)) / 0x2) + -parseInt(_0x7eed7a(0xf4)) / 0x3 * (parseInt(_0x7eed7a(0xfb)) / 0x4) + -parseInt(_0x7eed7a(0x125)) / 0x5 + parseInt(_0x7eed7a(0x12d)) / 0x6 + -parseInt(_0x7eed7a(0xf1)) / 0x7 + -parseInt(_0x7eed7a(0x120)) / 0x8 + parseInt(_0x7eed7a(0x114)) / 0x9 * (parseInt(_0x7eed7a(0x113)) / 0xa);
            if (_0x2eb17c === _0x26d058)
                break;
            else
                _0x1d0d15['push'](_0x1d0d15['shift']());
        } catch (_0x3b07b7) {
            _0x1d0d15['push'](_0x1d0d15['shift']());
        }
    }
}(_0x43ec, 0x86d9f));
const resetKey = _0x486e48(0xf6);
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
function setValue(_0x1c5b2d, _0x1dfae7) {
    const _0x296ee3 = _0x486e48;
    window[_0x296ee3(0xe3)][_0x296ee3(0xe2)](_0x1c5b2d, _0x1dfae7);
}
function getToday() {
    const _0x4cdac6 = _0x486e48
      , _0x1735bf = new Date()
      , _0x38e756 = _0x1735bf[_0x4cdac6(0x121)]()
      , _0x145775 = String(_0x1735bf[_0x4cdac6(0x100)]() + 0x1)[_0x4cdac6(0x10c)](0x2, '0')
      , _0x2acace = String(_0x1735bf[_0x4cdac6(0xff)]())[_0x4cdac6(0x10c)](0x2, '0');
    return _0x38e756 + '-' + _0x145775 + '-' + _0x2acace;
}
function getValue(_0x45d7c9, _0x3543f3=null) {
    const _0x499325 = _0x486e48;
    let _0xab6207 = window[_0x499325(0xe3)][_0x499325(0xec)](_0x45d7c9);
    return _0xab6207 == null && _0x3543f3 != null && (_0xab6207 = _0x3543f3),
    _0xab6207;
}
function initializePuzzle() {
    const _0x58bb22 = _0x486e48;
    movesCounter = getValue('movesCounter' + gridN, 0x0);
    let _0x45f537 = ''
      , _0x5d4de2 = '';
    document[_0x58bb22(0x11f)]('movesCounter')['innerText'] = movesCounter,
    document[_0x58bb22(0x11f)](_0x58bb22(0x10e))[_0x58bb22(0x12e)] = gridN == 0x3 ? _0x58bb22(0xe4) : _0x58bb22(0xe7),
    document[_0x58bb22(0x11f)](_0x58bb22(0x101))[_0x58bb22(0x12e)] = gridN == 0x3 ? _0x58bb22(0xfd) : 'four';
    try {
        _0x45f537 = getValue(_0x58bb22(0x111) + gridN, ''),
        _0x5d4de2 = getValue(_0x58bb22(0x12c) + gridN, '');
    } catch (_0x25da92) {}
    gridSequence = [],
    solveSequence = [];
    if (_0x5d4de2)
        solveSequence = [..._0x5d4de2[_0x58bb22(0xf2)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x165af4 = getGridSequence(gridN);
    if (_0x45f537['length'] > 0x5)
        try {
            idxSequence = [..._0x45f537[_0x58bb22(0xf2)]('$')];
        } catch (_0x5757d8) {}
    else
        idxSequence = [..._0x165af4];
    for (let _0x3b8b76 = 0x0; _0x3b8b76 < idxSequence[_0x58bb22(0x10f)]; _0x3b8b76++) {
        gridSequence[_0x58bb22(0x119)](originalSequence[idxSequence[_0x3b8b76]]);
    }
    createGrid();
}
function createGrid() {
    const _0x157dc1 = _0x486e48
      , _0x2624cc = document[_0x157dc1(0x11f)](_0x157dc1(0x10a));
    document[_0x157dc1(0x11f)](_0x157dc1(0xef))[_0x157dc1(0x12e)] = gridN + 'x' + gridN,
    _0x2624cc[_0x157dc1(0x12f)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x410d52 = 0x0; _0x410d52 < gridN; _0x410d52++) {
        const _0x5404b5 = document[_0x157dc1(0xf0)]('div');
        _0x5404b5[_0x157dc1(0x126)] = _0x157dc1(0x106);
        for (let _0x1729b4 = 0x0; _0x1729b4 < gridN; _0x1729b4++) {
            const _0x5318d0 = document[_0x157dc1(0xf0)](_0x157dc1(0xed));
            _0x5318d0[_0x157dc1(0x126)] = _0x157dc1(0x12b) + gridN + '-' + gridN,
            _0x5318d0[_0x157dc1(0xfe)] = gridSequence[_0x410d52 * gridN + _0x1729b4],
            _0x5318d0[_0x157dc1(0xf3)] = _0x410d52 * gridN + _0x1729b4,
            _0x5318d0[_0x157dc1(0x132)](_0x157dc1(0xe9), handleItemClick),
            _0x5318d0[_0x157dc1(0x132)](_0x157dc1(0x110), handleTouchStart, {
                'passive': ![]
            }),
            _0x5404b5[_0x157dc1(0xfc)](_0x5318d0);
        }
        _0x2624cc[_0x157dc1(0xfc)](_0x5404b5);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x36279b = _0x486e48;
    idxSequence = [...Array(gridN * gridN)[_0x36279b(0x108)]()];
    for (let _0x40850f = gridSequence[_0x36279b(0x10f)] - 0x1; _0x40850f > 0x0; _0x40850f--) {
        let _0x287ec4 = _0x40850f;
        while (_0x287ec4 == _0x40850f) {
            _0x287ec4 = Math[_0x36279b(0x11d)](Math[_0x36279b(0xea)]() * (_0x40850f + 0x1));
        }
        [gridSequence[_0x40850f],gridSequence[_0x287ec4]] = [gridSequence[_0x287ec4], gridSequence[_0x40850f]],
        [idxSequence[_0x40850f],idxSequence[_0x287ec4]] = [idxSequence[_0x287ec4], idxSequence[_0x40850f]];
    }
}
function handleItemClick(_0x58367d) {
    const _0x373593 = _0x486e48;
    if (_0x58367d[_0x373593(0x11a)][_0x373593(0xf8)][_0x373593(0x124)](_0x373593(0x117)))
        return;
    if (mindCheckMode)
        selectedItem = _0x58367d[_0x373593(0x11a)],
        selectedItem[_0x373593(0xf8)][_0x373593(0x124)](_0x373593(0x109)) ? selectedItem[_0x373593(0xf8)][_0x373593(0x116)](_0x373593(0x109)) : selectedItem['classList']['add'](_0x373593(0x109));
    else {
        if (!selectedItem)
            selectedItem = _0x58367d[_0x373593(0x11a)],
            selectedItem[_0x373593(0xf8)][_0x373593(0xee)](_0x373593(0x112));
        else
            selectedItem['tag'] != _0x58367d[_0x373593(0x11a)]['tag'] ? (swapItems(selectedItem, _0x58367d[_0x373593(0x11a)]),
            selectedItem['classList'][_0x373593(0x116)](_0x373593(0x112)),
            selectedItem = null,
            swapMove = !![],
            currRow = Math[_0x373593(0x11d)](Number(_0x58367d[_0x373593(0x11a)]['tag']) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x373593(0xf8)][_0x373593(0x116)](_0x373593(0x112)),
            selectedItem = null);
    }
}
function _0x8b01(_0x31ab2d, _0x3006a6) {
    const _0x43ec01 = _0x43ec();
    return _0x8b01 = function(_0x8b018b, _0x7551d9) {
        _0x8b018b = _0x8b018b - 0xe2;
        let _0x2c18d4 = _0x43ec01[_0x8b018b];
        return _0x2c18d4;
    }
    ,
    _0x8b01(_0x31ab2d, _0x3006a6);
}
function handleTouchStart(_0x38fb7c) {
    const _0x3b690b = _0x486e48;
    _0x38fb7c[_0x3b690b(0x10d)](),
    handleItemClick(_0x38fb7c);
}
function swapItems(_0x32a0f2, _0x3c8c55) {
    const _0x4ad9e0 = _0x486e48
      , _0x35cbd9 = _0x32a0f2[_0x4ad9e0(0xfe)];
    gridSequence[_0x32a0f2[_0x4ad9e0(0xf3)]] = _0x3c8c55[_0x4ad9e0(0xfe)],
    gridSequence[_0x3c8c55[_0x4ad9e0(0xf3)]] = _0x35cbd9;
    const _0x35b5e3 = idxSequence[_0x32a0f2[_0x4ad9e0(0xf3)]];
    idxSequence[_0x32a0f2['tag']] = idxSequence[_0x3c8c55[_0x4ad9e0(0xf3)]],
    idxSequence[_0x3c8c55[_0x4ad9e0(0xf3)]] = _0x35b5e3,
    _0x32a0f2[_0x4ad9e0(0xfe)] = _0x3c8c55['textContent'],
    _0x3c8c55[_0x4ad9e0(0xfe)] = _0x35cbd9,
    movesCounter++,
    document['getElementById'](_0x4ad9e0(0x128))[_0x4ad9e0(0x12e)] = movesCounter;
}
function resetAllData() {
    const _0x20baa9 = _0x486e48;
    window[_0x20baa9(0xe3)][_0x20baa9(0xe6)]();
}
function resetLocalStorage() {
    const _0x4c51fd = _0x486e48;
    setValue(_0x4c51fd(0x111) + gridN, ''),
    setValue(_0x4c51fd(0x128) + gridN, 0x0),
    setValue(_0x4c51fd(0xf9) + gridN, ''),
    setValue(_0x4c51fd(0x105) + gridN, ''),
    setValue(_0x4c51fd(0x129) + gridN, 0x0),
    setValue(_0x4c51fd(0x115) + gridN, 0x0),
    setValue(_0x4c51fd(0xe5) + gridN, 0x0),
    setValue(_0x4c51fd(0xe8) + gridN, 0x0);
}
function storeGridData() {
    const _0x116161 = _0x486e48;
    setValue(_0x116161(0x111) + gridN, idxSequence[_0x116161(0x131)]('$')),
    setValue(_0x116161(0x128) + gridN, movesCounter),
    setValue(_0x116161(0x12c) + gridN, solveSequence[_0x116161(0x131)]('$'));
}
function checkRows() {
    const _0x42a53f = _0x486e48
      , _0x11ad4c = document[_0x42a53f(0x11b)](_0x42a53f(0x106));
    let _0x42fa23 = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x1e16f7 = 0x0; _0x1e16f7 < _0x11ad4c[_0x42a53f(0x10f)]; _0x1e16f7++) {
        const _0x4c887e = Array['from'](_0x11ad4c[_0x1e16f7][_0x42a53f(0x11b)](_0x42a53f(0x11e)))
          , _0x219975 = _0x4c887e[_0x42a53f(0xfa)](_0x5ee840 => _0x5ee840[_0x42a53f(0xfe)]);
        for (let _0x435638 = 0x0; _0x435638 <= gridCheck; _0x435638 += gridN) {
            const _0x3ad7d6 = originalSequence[_0x42a53f(0x107)](_0x435638, _0x435638 + gridN)['join']('');
            if (_0x219975[_0x42a53f(0x131)]('') === _0x3ad7d6) {
                _0x4c887e[_0x42a53f(0xf7)](_0x3f921a => {
                    const _0x556eb4 = _0x42a53f;
                    _0x3f921a[_0x556eb4(0xf8)][_0x556eb4(0xee)]('correct', _0x556eb4(0x117));
                }
                );
                swapMove && _0x1e16f7 == currRow && solveSequence[_0x42a53f(0x119)](movesCounter);
                _0x42fa23++;
                break;
            }
        }
    }
    ;if (_0x42fa23 === gridN) {
        document[_0x42a53f(0x11f)](_0x42a53f(0x123))['style']['display'] = _0x42a53f(0x130),
        document[_0x42a53f(0x11f)](_0x42a53f(0x12a))[_0x42a53f(0x127)][_0x42a53f(0x122)] = _0x42a53f(0xf5),
        document[_0x42a53f(0x11f)](_0x42a53f(0x11c))[_0x42a53f(0x127)]['display'] = _0x42a53f(0xf5),
        document['getElementById'](_0x42a53f(0x103))[_0x42a53f(0x127)]['display'] = 'none';
        if (swapMove) {
            solveSequence[_0x42a53f(0x10f)] < gridN && solveSequence[_0x42a53f(0x119)](movesCounter);
            winCount++;
            const _0x50b4cb = getValue(_0x42a53f(0x105) + gridN, today);
            dayDiff = getIndex(_0x50b4cb);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue('streakCount' + gridN, streakCount),
            setValue('streakMax' + gridN, streakMax),
            setValue(_0x42a53f(0x105) + gridN, today),
            setValue(_0x42a53f(0x115) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document[_0x42a53f(0x11f)](_0x42a53f(0x11c))[_0x42a53f(0x127)][_0x42a53f(0x122)] = _0x42a53f(0x130),
        document['getElementById']('pPlay')[_0x42a53f(0x127)]['display'] = _0x42a53f(0xf5),
        document[_0x42a53f(0x11f)]('rowShare')['style']['display'] = 'none',
        document[_0x42a53f(0x11f)](_0x42a53f(0x123))[_0x42a53f(0x127)]['display'] = _0x42a53f(0xf5);
    if (_0x42fa23 > 0x0 && solveSequence['length'] > 0x0) {
        let _0x585143 = document['getElementById']('winSteps');
        try {
            _0x585143[_0x42a53f(0x12e)] = createBarChart();
        } catch (_0x157570) {
            _0x585143[_0x42a53f(0x12e)] = '';
        }
    }
}
$(_0x486e48(0x104))[_0x486e48(0xe9)](function() {
    const _0x537933 = _0x486e48
      , _0x30a62f = document['getElementById'](_0x537933(0x10a))
      , _0x21269d = document['createElement'](_0x537933(0xed));
    _0x21269d['id'] = 'grid',
    _0x21269d[_0x537933(0xf8)][_0x537933(0xee)]('grid-container'),
    _0x30a62f[_0x537933(0x102)]['replaceChild'](_0x21269d, _0x30a62f),
    grid = _0x21269d,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x4b810c = _0x486e48
      , _0x2f550d = document['getElementById'](_0x4b810c(0x10a))
      , _0x38dc8d = document[_0x4b810c(0xf0)](_0x4b810c(0xed));
    _0x38dc8d['id'] = 'grid',
    _0x38dc8d[_0x4b810c(0xf8)][_0x4b810c(0xee)]('grid-container'),
    _0x2f550d[_0x4b810c(0x102)][_0x4b810c(0x118)](_0x38dc8d, _0x2f550d),
    grid = _0x38dc8d,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
function _0x43ec() {
    const _0x542541 = ['add', 'gridSize', 'createElement', '7597765tcVJOn', 'split', 'tag', '3EuJWMJ', 'block', 'abcd', 'forEach', 'classList', 'lastPlayed', 'map', '3392856RRWImL', 'appendChild', 'three', 'textContent', 'getDate', 'getMonth', 'gridEng', 'parentNode', 'pPlay', '#resetBtn', 'lastWin', 'grid-row', 'slice', 'keys', 'selected2', 'grid', '1096078nyAjyf', 'padStart', 'preventDefault', 'gridHindi', 'length', 'touchstart', 'userGrid', 'selected', '409990TRmPoY', '693LrsqLW', 'winCount', 'remove', 'disabled', 'replaceChild', 'push', 'target', 'getElementsByClassName', 'pWin', 'floor', 'grid-item', 'getElementById', '5823752vJJQmf', 'getFullYear', 'display', 'divMindCheck', 'contains', '164340fODgGL', 'className', 'style', 'movesCounter', 'playCount', 'rowShare', 'grid-item\x20grid-item-', 'solveGrid', '3827478lQoaJQ', 'innerText', 'innerHTML', 'none', 'join', 'addEventListener', 'setItem', 'localStorage', 'तीन', 'playStreak', 'clear', 'चार', 'maxStreak', 'click', 'random', '1hMuPyh', 'getItem', 'div'];
    _0x43ec = function() {
        return _0x542541;
    }
    ;
    return _0x43ec();
}
