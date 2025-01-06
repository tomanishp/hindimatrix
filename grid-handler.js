const _0x4e0463 = _0x28d9;
(function(_0xf0621e, _0x5b805b) {
    const _0x2dd991 = _0x28d9
      , _0x1eb36a = _0xf0621e();
    while (!![]) {
        try {
            const _0x393ac1 = parseInt(_0x2dd991(0xee)) / 0x1 * (-parseInt(_0x2dd991(0x11d)) / 0x2) + -parseInt(_0x2dd991(0xed)) / 0x3 + -parseInt(_0x2dd991(0x109)) / 0x4 + -parseInt(_0x2dd991(0xec)) / 0x5 + -parseInt(_0x2dd991(0xf7)) / 0x6 * (-parseInt(_0x2dd991(0xe7)) / 0x7) + -parseInt(_0x2dd991(0x122)) / 0x8 + parseInt(_0x2dd991(0xeb)) / 0x9;
            if (_0x393ac1 === _0x5b805b)
                break;
            else
                _0x1eb36a['push'](_0x1eb36a['shift']());
        } catch (_0x3745cf) {
            _0x1eb36a['push'](_0x1eb36a['shift']());
        }
    }
}(_0x275f, 0x76c82));
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
  , orgGrid = ''
  , userGrid = ''
  , solveGrid = ''
  , currRow = 0x0;
function setValue(_0x3d267a, _0xbfde40) {
    const _0x46d4e2 = _0x28d9;
    window[_0x46d4e2(0xf5)]['setItem'](_0x3d267a, _0xbfde40);
}
function getToday() {
    const _0x411032 = _0x28d9
      , _0x3214d8 = new Date()
      , _0x160e15 = _0x3214d8[_0x411032(0xf8)]()
      , _0x38b77d = String(_0x3214d8[_0x411032(0xf1)]() + 0x1)[_0x411032(0xf9)](0x2, '0')
      , _0x21bfbc = String(_0x3214d8[_0x411032(0x10e)]())['padStart'](0x2, '0');
    return _0x160e15 + '-' + _0x38b77d + '-' + _0x21bfbc;
}
function getValue(_0x134478, _0x4a7044=null) {
    const _0x32fe65 = _0x28d9;
    let _0xa51f8f = window[_0x32fe65(0xf5)][_0x32fe65(0x119)](_0x134478);
    return _0xa51f8f == null && _0x4a7044 != null && (_0xa51f8f = _0x4a7044),
    _0xa51f8f;
}
function initializePuzzle() {
    const _0x32f088 = _0x28d9;
    movesCounter = getValue(_0x32f088(0xe2) + gridN, 0x0);
    let _0x1fa45b = ''
      , _0x4e605b = '';
    gridSequence = [],
    solveSequence = [],
    document[_0x32f088(0x106)](_0x32f088(0xe2))[_0x32f088(0xf2)] = movesCounter,
    document[_0x32f088(0x106)]('gridHindi')[_0x32f088(0xf2)] = gridN == 0x3 ? _0x32f088(0xf6) : _0x32f088(0x104),
    document[_0x32f088(0x106)]('gridEng')[_0x32f088(0xf2)] = gridN == 0x3 ? 'three' : 'four';
    try {
        _0x1fa45b = getValue('userGrid' + gridN, '');
    } catch (_0x93c1b6) {}
    try {
        _0x4e605b = getValue(_0x32f088(0x113) + gridN, '');
    } catch (_0x9d5861) {}
    if (_0x4e605b[_0x32f088(0x124)] > 0x0)
        solveSequence = [..._0x4e605b[_0x32f088(0x108)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x3492f9 = getGridSequence(gridN);
    if (_0x1fa45b[_0x32f088(0x124)] > 0x5)
        try {
            idxSequence = [..._0x1fa45b[_0x32f088(0x108)]('$')];
        } catch (_0x54f8fa) {
            idxSequence = [..._0x3492f9];
        }
    else
        idxSequence = [..._0x3492f9];
    try {
        for (let _0x4f3c86 = 0x0; _0x4f3c86 < idxSequence[_0x32f088(0x124)]; _0x4f3c86++) {
            gridSequence[_0x32f088(0x11f)](originalSequence[idxSequence[_0x4f3c86]]);
        }
    } catch (_0x428596) {
        gridSequence = [];
    }
    createGrid();
}
function createGrid() {
    const _0x297c8c = _0x28d9
      , _0x156119 = document[_0x297c8c(0x106)](_0x297c8c(0x118));
    document[_0x297c8c(0x106)](_0x297c8c(0x107))['innerText'] = gridN + 'x' + gridN,
    _0x156119[_0x297c8c(0x10a)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x1a346a = 0x0; _0x1a346a < gridN; _0x1a346a++) {
        const _0x46541b = document['createElement'](_0x297c8c(0xe3));
        _0x46541b['className'] = _0x297c8c(0x10c);
        for (let _0x4e8ab8 = 0x0; _0x4e8ab8 < gridN; _0x4e8ab8++) {
            const _0x33ca1a = document[_0x297c8c(0xf3)](_0x297c8c(0xe3));
            _0x33ca1a[_0x297c8c(0xe9)] = 'grid-item\x20grid-item-' + gridN + '-' + gridN,
            _0x33ca1a[_0x297c8c(0x121)] = gridSequence[_0x1a346a * gridN + _0x4e8ab8],
            _0x33ca1a[_0x297c8c(0xe8)] = _0x1a346a * gridN + _0x4e8ab8,
            _0x33ca1a['addEventListener'](_0x297c8c(0x111), handleItemClick),
            _0x33ca1a[_0x297c8c(0xe0)](_0x297c8c(0xfd), handleTouchStart, {
                'passive': ![]
            }),
            _0x46541b[_0x297c8c(0x112)](_0x33ca1a);
        }
        _0x156119['appendChild'](_0x46541b);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x241480 = _0x28d9;
    idxSequence = [...Array(gridN * gridN)[_0x241480(0x11b)]()];
    for (let _0x3bca46 = gridSequence[_0x241480(0x124)] - 0x1; _0x3bca46 > 0x0; _0x3bca46--) {
        let _0x136e87 = _0x3bca46;
        while (_0x136e87 == _0x3bca46) {
            _0x136e87 = Math[_0x241480(0xdf)](Math['random']() * (_0x3bca46 + 0x1));
        }
        [gridSequence[_0x3bca46],gridSequence[_0x136e87]] = [gridSequence[_0x136e87], gridSequence[_0x3bca46]],
        [idxSequence[_0x3bca46],idxSequence[_0x136e87]] = [idxSequence[_0x136e87], idxSequence[_0x3bca46]];
    }
}
function handleItemClick(_0x5408cb) {
    const _0x560ece = _0x28d9;
    if (_0x5408cb[_0x560ece(0x117)][_0x560ece(0x101)][_0x560ece(0x116)](_0x560ece(0x115)))
        return;
    if (mindCheckMode)
        selectedItem = _0x5408cb[_0x560ece(0x117)],
        selectedItem[_0x560ece(0x101)][_0x560ece(0x116)](_0x560ece(0x10d)) ? selectedItem['classList'][_0x560ece(0xf4)](_0x560ece(0x10d)) : selectedItem['classList'][_0x560ece(0xe1)](_0x560ece(0x10d));
    else {
        if (!selectedItem)
            selectedItem = _0x5408cb[_0x560ece(0x117)],
            selectedItem[_0x560ece(0x101)][_0x560ece(0xe1)](_0x560ece(0xea));
        else
            selectedItem[_0x560ece(0xe8)] != _0x5408cb[_0x560ece(0x117)][_0x560ece(0xe8)] ? (swapItems(selectedItem, _0x5408cb[_0x560ece(0x117)]),
            selectedItem[_0x560ece(0x101)][_0x560ece(0xf4)](_0x560ece(0xea)),
            selectedItem = null,
            swapMove = !![],
            currRow = Math[_0x560ece(0xdf)](Number(_0x5408cb['target'][_0x560ece(0xe8)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x560ece(0x101)][_0x560ece(0xf4)](_0x560ece(0xea)),
            selectedItem = null);
    }
}
function handleTouchStart(_0x342494) {
    _0x342494['preventDefault'](),
    handleItemClick(_0x342494);
}
function _0x275f() {
    const _0x5f3207 = ['length', 'block', 'rowShare', 'floor', 'addEventListener', 'add', 'movesCounter', 'div', 'display', 'forEach', 'getElementsByClassName', '3715873ZyIUZD', 'tag', 'className', 'selected', '22932459LgwTvX', '3409820WreKKp', '1451322TJFKjm', '133QktaAi', 'pWin', 'join', 'getMonth', 'innerText', 'createElement', 'remove', 'localStorage', 'तीन', '6jbtFiK', 'getFullYear', 'padStart', 'parentNode', 'lastPlayed', 'streakMax', 'touchstart', 'lastWin', 'userGrid', 'maxStreak', 'classList', 'none', 'style', 'चार', 'pPlay', 'getElementById', 'gridSize', 'split', '427752VvLFqF', 'innerHTML', 'grid-container', 'grid-row', 'selected2', 'getDate', 'playCount', 'winSteps', 'click', 'appendChild', 'solveGrid', 'winCount', 'disabled', 'contains', 'target', 'grid', 'getItem', 'divMindCheck', 'keys', 'grid-item', '12754YpjXsX', '#resetBtn', 'push', 'from', 'textContent', '3772344sdheQJ', 'replaceChild'];
    _0x275f = function() {
        return _0x5f3207;
    }
    ;
    return _0x275f();
}
function swapItems(_0xdf4d09, _0x4b8fcd) {
    const _0x43c7c6 = _0x28d9
      , _0x3f67ff = _0xdf4d09['textContent'];
    gridSequence[_0xdf4d09[_0x43c7c6(0xe8)]] = _0x4b8fcd[_0x43c7c6(0x121)],
    gridSequence[_0x4b8fcd[_0x43c7c6(0xe8)]] = _0x3f67ff;
    const _0x399028 = idxSequence[_0xdf4d09[_0x43c7c6(0xe8)]];
    idxSequence[_0xdf4d09[_0x43c7c6(0xe8)]] = idxSequence[_0x4b8fcd[_0x43c7c6(0xe8)]],
    idxSequence[_0x4b8fcd[_0x43c7c6(0xe8)]] = _0x399028,
    _0xdf4d09['textContent'] = _0x4b8fcd['textContent'],
    _0x4b8fcd['textContent'] = _0x3f67ff,
    movesCounter++,
    document['getElementById']('movesCounter')[_0x43c7c6(0xf2)] = movesCounter;
}
function _0x28d9(_0x58adb9, _0x3e9880) {
    const _0x275f62 = _0x275f();
    return _0x28d9 = function(_0x28d961, _0x14849d) {
        _0x28d961 = _0x28d961 - 0xde;
        let _0x4975c8 = _0x275f62[_0x28d961];
        return _0x4975c8;
    }
    ,
    _0x28d9(_0x58adb9, _0x3e9880);
}
function resetAllData() {
    window['localStorage']['clear']();
}
function resetLocalStorage() {
    const _0x5f281d = _0x28d9;
    setValue(_0x5f281d(0xff) + gridN, ''),
    setValue(_0x5f281d(0xe2) + gridN, 0x0),
    setValue(_0x5f281d(0xfb) + gridN, ''),
    setValue('lastWin' + gridN, ''),
    setValue(_0x5f281d(0x10f) + gridN, 0x0),
    setValue(_0x5f281d(0x114) + gridN, 0x0),
    setValue('playStreak' + gridN, 0x0),
    setValue(_0x5f281d(0x100) + gridN, 0x0);
}
function storeGridData() {
    const _0x57676e = _0x28d9;
    setValue(_0x57676e(0xff) + gridN, idxSequence['join']('$')),
    setValue(_0x57676e(0xe2) + gridN, movesCounter),
    setValue(_0x57676e(0x113) + gridN, solveSequence['join']('$'));
}
function checkRows() {
    const _0x5b3383 = _0x28d9
      , _0x5e660a = document[_0x5b3383(0xe6)](_0x5b3383(0x10c));
    let _0x231841 = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x53d763 = 0x0; _0x53d763 < _0x5e660a[_0x5b3383(0x124)]; _0x53d763++) {
        const _0x3c3f66 = Array[_0x5b3383(0x120)](_0x5e660a[_0x53d763]['getElementsByClassName'](_0x5b3383(0x11c)))
          , _0x4b469f = _0x3c3f66['map'](_0x21332c => _0x21332c[_0x5b3383(0x121)]);
        for (let _0x2a187e = 0x0; _0x2a187e <= gridCheck; _0x2a187e += gridN) {
            const _0x27065f = originalSequence['slice'](_0x2a187e, _0x2a187e + gridN)[_0x5b3383(0xf0)]('');
            if (_0x4b469f[_0x5b3383(0xf0)]('') === _0x27065f) {
                _0x3c3f66[_0x5b3383(0xe5)](_0x26a997 => {
                    const _0x399941 = _0x5b3383;
                    _0x26a997['classList'][_0x399941(0xe1)]('correct', 'disabled');
                }
                );
                swapMove && _0x53d763 == currRow && solveSequence['push'](movesCounter);
                _0x231841++;
                break;
            }
        }
    }
    ;if (_0x231841 === gridN) {
        document[_0x5b3383(0x106)]('divMindCheck')[_0x5b3383(0x103)][_0x5b3383(0xe4)] = _0x5b3383(0x102),
        document[_0x5b3383(0x106)](_0x5b3383(0xde))['style'][_0x5b3383(0xe4)] = _0x5b3383(0x125),
        document[_0x5b3383(0x106)](_0x5b3383(0xef))['style'][_0x5b3383(0xe4)] = 'block',
        document[_0x5b3383(0x106)](_0x5b3383(0x105))[_0x5b3383(0x103)][_0x5b3383(0xe4)] = 'none';
        if (swapMove) {
            solveSequence[_0x5b3383(0x124)] < gridN && solveSequence[_0x5b3383(0x11f)](movesCounter);
            winCount++;
            const _0x5bfed0 = getValue(_0x5b3383(0xfe) + gridN, today);
            dayDiff = getIndex(_0x5bfed0);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue('streakCount' + gridN, streakCount),
            setValue(_0x5b3383(0xfc) + gridN, streakMax),
            setValue('lastWin' + gridN, today),
            setValue('winCount' + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document[_0x5b3383(0x106)](_0x5b3383(0xef))[_0x5b3383(0x103)][_0x5b3383(0xe4)] = _0x5b3383(0x102),
        document[_0x5b3383(0x106)](_0x5b3383(0x105))[_0x5b3383(0x103)][_0x5b3383(0xe4)] = 'block',
        document[_0x5b3383(0x106)](_0x5b3383(0xde))[_0x5b3383(0x103)][_0x5b3383(0xe4)] = _0x5b3383(0x102),
        document['getElementById'](_0x5b3383(0x11a))['style'][_0x5b3383(0xe4)] = _0x5b3383(0x125);
    if (_0x231841 > 0x0 && solveSequence[_0x5b3383(0x124)] > 0x0) {
        let _0x3c5386 = document[_0x5b3383(0x106)](_0x5b3383(0x110));
        try {
            _0x3c5386['innerText'] = createBarChart();
        } catch (_0x5da606) {
            _0x3c5386[_0x5b3383(0xf2)] = '';
        }
    }
}
$(_0x4e0463(0x11e))[_0x4e0463(0x111)](function() {
    const _0x28a432 = _0x4e0463
      , _0x411308 = document[_0x28a432(0x106)]('grid')
      , _0x148869 = document[_0x28a432(0xf3)](_0x28a432(0xe3));
    _0x148869['id'] = _0x28a432(0x118),
    _0x148869['classList']['add'](_0x28a432(0x10b)),
    _0x411308[_0x28a432(0xfa)]['replaceChild'](_0x148869, _0x411308),
    grid = _0x148869,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x1d3601 = _0x4e0463
      , _0x982578 = document[_0x1d3601(0x106)](_0x1d3601(0x118))
      , _0x2bee15 = document[_0x1d3601(0xf3)]('div');
    _0x2bee15['id'] = _0x1d3601(0x118),
    _0x2bee15[_0x1d3601(0x101)][_0x1d3601(0xe1)](_0x1d3601(0x10b)),
    _0x982578['parentNode'][_0x1d3601(0x123)](_0x2bee15, _0x982578),
    grid = _0x2bee15,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
