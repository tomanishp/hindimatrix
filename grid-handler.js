const _0x360277 = _0x7ea7;
(function(_0x3cd15, _0x3e3440) {
    const _0x48e8b8 = _0x7ea7
      , _0x48a6d9 = _0x3cd15();
    while (!![]) {
        try {
            const _0xb36b0d = parseInt(_0x48e8b8(0x226)) / 0x1 * (-parseInt(_0x48e8b8(0x217)) / 0x2) + parseInt(_0x48e8b8(0x223)) / 0x3 + parseInt(_0x48e8b8(0x1ff)) / 0x4 * (-parseInt(_0x48e8b8(0x20d)) / 0x5) + parseInt(_0x48e8b8(0x20c)) / 0x6 + parseInt(_0x48e8b8(0x233)) / 0x7 * (-parseInt(_0x48e8b8(0x227)) / 0x8) + parseInt(_0x48e8b8(0x207)) / 0x9 * (parseInt(_0x48e8b8(0x206)) / 0xa) + parseInt(_0x48e8b8(0x220)) / 0xb;
            if (_0xb36b0d === _0x3e3440)
                break;
            else
                _0x48a6d9['push'](_0x48a6d9['shift']());
        } catch (_0x13cc97) {
            _0x48a6d9['push'](_0x48a6d9['shift']());
        }
    }
}(_0x57aa, 0x721e9));
const resetKey = _0x360277(0x22e);
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
function setValue(_0x235ddf, _0x246691) {
    const _0x4c1315 = _0x360277;
    window[_0x4c1315(0x1ed)][_0x4c1315(0x234)](_0x235ddf, _0x246691);
}
function getToday() {
    const _0x157bb0 = _0x360277
      , _0x25377b = new Date()
      , _0x1201f4 = _0x25377b['getFullYear']()
      , _0x174ca5 = String(_0x25377b[_0x157bb0(0x201)]() + 0x1)[_0x157bb0(0x1eb)](0x2, '0')
      , _0x3752be = String(_0x25377b['getDate']())[_0x157bb0(0x1eb)](0x2, '0');
    return _0x1201f4 + '-' + _0x174ca5 + '-' + _0x3752be;
}
function _0x7ea7(_0x2d8ac6, _0x360d9f) {
    const _0x57aaa2 = _0x57aa();
    return _0x7ea7 = function(_0x7ea796, _0x18c520) {
        _0x7ea796 = _0x7ea796 - 0x1ea;
        let _0x113552 = _0x57aaa2[_0x7ea796];
        return _0x113552;
    }
    ,
    _0x7ea7(_0x2d8ac6, _0x360d9f);
}
function getValue(_0x20fdf5, _0x4f3919=null) {
    const _0x5b1eba = _0x360277;
    let _0x320796 = window[_0x5b1eba(0x1ed)][_0x5b1eba(0x21f)](_0x20fdf5);
    return _0x320796 == null && _0x4f3919 != null && (_0x320796 = _0x4f3919),
    _0x320796;
}
function initializePuzzle() {
    const _0x3454e2 = _0x360277;
    movesCounter = getValue(_0x3454e2(0x222) + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document['getElementById'](_0x3454e2(0x222))[_0x3454e2(0x203)] = movesCounter,
    document['getElementById']('gridHindi')[_0x3454e2(0x203)] = gridN == 0x3 ? _0x3454e2(0x20b) : _0x3454e2(0x1f4),
    document[_0x3454e2(0x216)](_0x3454e2(0x208))[_0x3454e2(0x203)] = gridN == 0x3 ? _0x3454e2(0x1f3) : 'four';
    try {
        userGrid = getValue(_0x3454e2(0x1f6) + gridN, '');
    } catch (_0x5a8649) {}
    try {
        solveGrid = getValue(_0x3454e2(0x1f2) + gridN, '');
    } catch (_0x2d5e6a) {}
    if (solveGrid[_0x3454e2(0x21a)] > 0x0)
        solveSequence = [...solveGrid[_0x3454e2(0x22a)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x93dc26 = getGridSequence(gridN);
    if (userGrid['length'] > 0x5)
        try {
            idxSequence = [...userGrid[_0x3454e2(0x22a)]('$')];
        } catch (_0x4d851f) {
            idxSequence = [..._0x93dc26];
        }
    else
        idxSequence = [..._0x93dc26];
    try {
        for (let _0x52a5b4 = 0x0; _0x52a5b4 < idxSequence[_0x3454e2(0x21a)]; _0x52a5b4++) {
            gridSequence[_0x3454e2(0x235)](originalSequence[idxSequence[_0x52a5b4]]);
        }
    } catch (_0x5598be) {
        gridSequence = [];
    }
    createGrid();
}
function createGrid() {
    const _0x220045 = _0x360277
      , _0x50a601 = document[_0x220045(0x216)](_0x220045(0x22b));
    document['getElementById']('gridSize')[_0x220045(0x203)] = gridN + 'x' + gridN,
    _0x50a601[_0x220045(0x204)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0xab7f4b = 0x0; _0xab7f4b < gridN; _0xab7f4b++) {
        const _0x89c039 = document['createElement'](_0x220045(0x228));
        _0x89c039[_0x220045(0x22d)] = _0x220045(0x215);
        for (let _0x478f80 = 0x0; _0x478f80 < gridN; _0x478f80++) {
            const _0x32cd0e = document[_0x220045(0x1fe)](_0x220045(0x228));
            _0x32cd0e['className'] = 'grid-item\x20grid-item-' + gridN + '-' + gridN,
            _0x32cd0e[_0x220045(0x22c)] = gridSequence[_0xab7f4b * gridN + _0x478f80],
            _0x32cd0e[_0x220045(0x1fd)] = _0xab7f4b * gridN + _0x478f80,
            _0x32cd0e['addEventListener'](_0x220045(0x21b), handleItemClick),
            _0x32cd0e[_0x220045(0x219)](_0x220045(0x212), handleTouchStart, {
                'passive': ![]
            }),
            _0x89c039[_0x220045(0x230)](_0x32cd0e);
        }
        _0x50a601[_0x220045(0x230)](_0x89c039);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x1650e9 = _0x360277;
    idxSequence = [...Array(gridN * gridN)[_0x1650e9(0x1ee)]()];
    for (let _0x4ee962 = gridSequence[_0x1650e9(0x21a)] - 0x1; _0x4ee962 > 0x0; _0x4ee962--) {
        let _0x25c748 = _0x4ee962;
        while (_0x25c748 == _0x4ee962) {
            _0x25c748 = Math[_0x1650e9(0x1f7)](Math[_0x1650e9(0x231)]() * (_0x4ee962 + 0x1));
        }
        [gridSequence[_0x4ee962],gridSequence[_0x25c748]] = [gridSequence[_0x25c748], gridSequence[_0x4ee962]],
        [idxSequence[_0x4ee962],idxSequence[_0x25c748]] = [idxSequence[_0x25c748], idxSequence[_0x4ee962]];
    }
}
function handleItemClick(_0x2baa2a) {
    const _0x163d17 = _0x360277;
    if (_0x2baa2a['target']['classList'][_0x163d17(0x1f9)]('disabled'))
        return;
    if (mindCheckMode)
        selectedItem = _0x2baa2a[_0x163d17(0x221)],
        selectedItem[_0x163d17(0x21e)][_0x163d17(0x1f9)](_0x163d17(0x214)) ? selectedItem[_0x163d17(0x21e)][_0x163d17(0x229)](_0x163d17(0x214)) : selectedItem[_0x163d17(0x21e)][_0x163d17(0x20f)](_0x163d17(0x214));
    else {
        if (!selectedItem)
            selectedItem = _0x2baa2a[_0x163d17(0x221)],
            selectedItem[_0x163d17(0x21e)]['add'](_0x163d17(0x1f8));
        else
            selectedItem[_0x163d17(0x1fd)] != _0x2baa2a[_0x163d17(0x221)][_0x163d17(0x1fd)] ? (swapItems(selectedItem, _0x2baa2a[_0x163d17(0x221)]),
            selectedItem[_0x163d17(0x21e)][_0x163d17(0x229)](_0x163d17(0x1f8)),
            selectedItem = null,
            swapMove = !![],
            currRow = Math[_0x163d17(0x1f7)](Number(_0x2baa2a[_0x163d17(0x221)][_0x163d17(0x1fd)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x163d17(0x21e)][_0x163d17(0x229)](_0x163d17(0x1f8)),
            selectedItem = null);
    }
}
function handleTouchStart(_0x374010) {
    const _0x16bdf9 = _0x360277;
    _0x374010[_0x16bdf9(0x211)](),
    handleItemClick(_0x374010);
}
function swapItems(_0x26f71d, _0x376043) {
    const _0x1244ea = _0x360277
      , _0x2f16a3 = _0x26f71d[_0x1244ea(0x22c)];
    gridSequence[_0x26f71d[_0x1244ea(0x1fd)]] = _0x376043['textContent'],
    gridSequence[_0x376043['tag']] = _0x2f16a3;
    const _0x574f5f = idxSequence[_0x26f71d[_0x1244ea(0x1fd)]];
    idxSequence[_0x26f71d['tag']] = idxSequence[_0x376043[_0x1244ea(0x1fd)]],
    idxSequence[_0x376043[_0x1244ea(0x1fd)]] = _0x574f5f,
    _0x26f71d[_0x1244ea(0x22c)] = _0x376043[_0x1244ea(0x22c)],
    _0x376043[_0x1244ea(0x22c)] = _0x2f16a3,
    movesCounter++,
    document[_0x1244ea(0x216)](_0x1244ea(0x222))[_0x1244ea(0x203)] = movesCounter;
}
function _0x57aa() {
    const _0x5e28be = ['1910832BLudik', '2448885rbQPHt', 'map', 'add', 'correct', 'preventDefault', 'touchstart', 'divMindCheck', 'selected2', 'grid-row', 'getElementById', '114cPtblt', 'pPlay', 'addEventListener', 'length', 'click', 'getElementsByClassName', 'streakCount', 'classList', 'getItem', '6851614cZMPUF', 'target', 'movesCounter', '209871fMBQMa', 'lastPlayed', 'grid-item', '4601qdoGxv', '1932760MZCVEG', 'div', 'remove', 'split', 'grid', 'textContent', 'className', 'abcd', 'display', 'appendChild', 'random', 'playCount', '7ymDyVp', 'setItem', 'push', 'forEach', 'none', 'padStart', 'rowShare', 'localStorage', 'keys', 'streakMax', 'replaceChild', 'pWin', 'solveGrid', 'three', 'चार', 'style', 'userGrid', 'floor', 'selected', 'contains', 'block', 'lastWin', 'playStreak', 'tag', 'createElement', '4BtdTwL', 'winCount', 'getMonth', 'clear', 'innerText', 'innerHTML', 'winSteps', '4497590DKalPI', '9hxTdFv', 'gridEng', 'grid-container', 'parentNode', 'तीन'];
    _0x57aa = function() {
        return _0x5e28be;
    }
    ;
    return _0x57aa();
}
function resetAllData() {
    const _0x2f7871 = _0x360277;
    window[_0x2f7871(0x1ed)][_0x2f7871(0x202)]();
}
function resetLocalStorage() {
    const _0x14b99b = _0x360277;
    setValue('userGrid' + gridN, ''),
    setValue(_0x14b99b(0x222) + gridN, 0x0),
    setValue(_0x14b99b(0x224) + gridN, ''),
    setValue(_0x14b99b(0x1fb) + gridN, ''),
    setValue(_0x14b99b(0x232) + gridN, 0x0),
    setValue(_0x14b99b(0x200) + gridN, 0x0),
    setValue(_0x14b99b(0x1fc) + gridN, 0x0),
    setValue('maxStreak' + gridN, 0x0);
}
function storeGridData() {
    const _0x5cb0d5 = _0x360277;
    setValue('userGrid' + gridN, idxSequence['join']('$')),
    setValue('movesCounter' + gridN, movesCounter),
    setValue(_0x5cb0d5(0x1f2) + gridN, solveSequence['join']('$'));
}
function checkRows() {
    const _0x378b1b = _0x360277
      , _0x2755b2 = document[_0x378b1b(0x21c)]('grid-row');
    let _0xc26aaf = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x5b3bc2 = 0x0; _0x5b3bc2 < _0x2755b2['length']; _0x5b3bc2++) {
        const _0x2fd755 = Array['from'](_0x2755b2[_0x5b3bc2][_0x378b1b(0x21c)](_0x378b1b(0x225)))
          , _0x1190e9 = _0x2fd755[_0x378b1b(0x20e)](_0x2cfcd5 => _0x2cfcd5['textContent']);
        for (let _0xd0672a = 0x0; _0xd0672a <= gridCheck; _0xd0672a += gridN) {
            const _0x24d9ec = originalSequence['slice'](_0xd0672a, _0xd0672a + gridN)['join']('');
            if (_0x1190e9['join']('') === _0x24d9ec) {
                _0x2fd755[_0x378b1b(0x236)](_0x4ea652 => {
                    const _0x22ae9f = _0x378b1b;
                    _0x4ea652[_0x22ae9f(0x21e)]['add'](_0x22ae9f(0x210), 'disabled');
                }
                );
                swapMove && _0x5b3bc2 == currRow && solveSequence['push'](movesCounter);
                _0xc26aaf++;
                break;
            }
        }
    }
    ;if (_0xc26aaf === gridN) {
        document[_0x378b1b(0x216)](_0x378b1b(0x213))[_0x378b1b(0x1f5)][_0x378b1b(0x22f)] = _0x378b1b(0x1ea),
        document[_0x378b1b(0x216)](_0x378b1b(0x1ec))[_0x378b1b(0x1f5)][_0x378b1b(0x22f)] = 'block',
        document[_0x378b1b(0x216)](_0x378b1b(0x1f1))[_0x378b1b(0x1f5)][_0x378b1b(0x22f)] = _0x378b1b(0x1fa),
        document[_0x378b1b(0x216)](_0x378b1b(0x218))[_0x378b1b(0x1f5)][_0x378b1b(0x22f)] = 'none';
        if (swapMove) {
            solveSequence['length'] < gridN && solveSequence[_0x378b1b(0x235)](movesCounter);
            winCount++;
            const _0x257927 = getValue(_0x378b1b(0x1fb) + gridN, today);
            dayDiff = getIndex(_0x257927);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue(_0x378b1b(0x21d) + gridN, streakCount),
            setValue(_0x378b1b(0x1ef) + gridN, streakMax),
            setValue(_0x378b1b(0x1fb) + gridN, today),
            setValue(_0x378b1b(0x200) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document['getElementById'](_0x378b1b(0x1f1))[_0x378b1b(0x1f5)][_0x378b1b(0x22f)] = 'none',
        document[_0x378b1b(0x216)](_0x378b1b(0x218))[_0x378b1b(0x1f5)][_0x378b1b(0x22f)] = _0x378b1b(0x1fa),
        document[_0x378b1b(0x216)](_0x378b1b(0x1ec))[_0x378b1b(0x1f5)][_0x378b1b(0x22f)] = _0x378b1b(0x1ea),
        document['getElementById']('divMindCheck')[_0x378b1b(0x1f5)][_0x378b1b(0x22f)] = _0x378b1b(0x1fa);
    if (_0xc26aaf > 0x0 && solveSequence[_0x378b1b(0x21a)] > 0x0) {
        let _0x2cbbe5 = document[_0x378b1b(0x216)](_0x378b1b(0x205));
        try {
            _0x2cbbe5['innerText'] = createBarChart();
        } catch (_0xd11bfd) {
            _0x2cbbe5[_0x378b1b(0x203)] = '';
        }
    }
}
$('#resetBtn')[_0x360277(0x21b)](function() {
    const _0x12c795 = _0x360277
      , _0x5e522f = document[_0x12c795(0x216)](_0x12c795(0x22b))
      , _0x2af445 = document[_0x12c795(0x1fe)](_0x12c795(0x228));
    _0x2af445['id'] = 'grid',
    _0x2af445[_0x12c795(0x21e)][_0x12c795(0x20f)](_0x12c795(0x209)),
    _0x5e522f[_0x12c795(0x20a)][_0x12c795(0x1f0)](_0x2af445, _0x5e522f),
    grid = _0x2af445,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x515ee3 = _0x360277
      , _0x34452b = document['getElementById'](_0x515ee3(0x22b))
      , _0x5e8e49 = document['createElement'](_0x515ee3(0x228));
    _0x5e8e49['id'] = _0x515ee3(0x22b),
    _0x5e8e49[_0x515ee3(0x21e)][_0x515ee3(0x20f)](_0x515ee3(0x209)),
    _0x34452b[_0x515ee3(0x20a)]['replaceChild'](_0x5e8e49, _0x34452b),
    grid = _0x5e8e49,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
