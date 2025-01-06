const _0xd235a3 = _0x3f3a;
(function(_0x2fe1ea, _0x505ed8) {
    const _0xc2c5a0 = _0x3f3a
      , _0x113144 = _0x2fe1ea();
    while (!![]) {
        try {
            const _0x103812 = parseInt(_0xc2c5a0(0x145)) / 0x1 * (parseInt(_0xc2c5a0(0x12a)) / 0x2) + parseInt(_0xc2c5a0(0x122)) / 0x3 + -parseInt(_0xc2c5a0(0x120)) / 0x4 + -parseInt(_0xc2c5a0(0x128)) / 0x5 * (-parseInt(_0xc2c5a0(0x155)) / 0x6) + -parseInt(_0xc2c5a0(0x136)) / 0x7 + -parseInt(_0xc2c5a0(0x12c)) / 0x8 * (-parseInt(_0xc2c5a0(0x11c)) / 0x9) + -parseInt(_0xc2c5a0(0x118)) / 0xa * (-parseInt(_0xc2c5a0(0x114)) / 0xb);
            if (_0x103812 === _0x505ed8)
                break;
            else
                _0x113144['push'](_0x113144['shift']());
        } catch (_0x537a26) {
            _0x113144['push'](_0x113144['shift']());
        }
    }
}(_0x321d, 0xbad3f));
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
function setValue(_0x448cb7, _0x44a6a0) {
    const _0x4e4e40 = _0x3f3a;
    window[_0x4e4e40(0x138)][_0x4e4e40(0x13a)](_0x448cb7, _0x44a6a0);
}
function getToday() {
    const _0x9ccd41 = _0x3f3a
      , _0x40176d = new Date()
      , _0x2a0c3c = _0x40176d[_0x9ccd41(0x157)]()
      , _0x48e513 = String(_0x40176d['getMonth']() + 0x1)[_0x9ccd41(0x130)](0x2, '0')
      , _0x7f0ba4 = String(_0x40176d[_0x9ccd41(0x129)]())['padStart'](0x2, '0');
    return _0x2a0c3c + '-' + _0x48e513 + '-' + _0x7f0ba4;
}
function getValue(_0x42f597, _0x13fcb4=null) {
    const _0x3369df = _0x3f3a;
    let _0x59cc66 = window['localStorage'][_0x3369df(0x159)](_0x42f597);
    return _0x59cc66 == null && _0x13fcb4 != null && (_0x59cc66 = _0x13fcb4),
    _0x59cc66;
}
function initializePuzzle() {
    const _0x55d3d4 = _0x3f3a;
    movesCounter = getValue(_0x55d3d4(0x14f) + gridN, 0x0);
    let _0x479868 = ''
      , _0x1adefc = '';
    document['getElementById'](_0x55d3d4(0x14f))[_0x55d3d4(0x112)] = movesCounter,
    document[_0x55d3d4(0x111)](_0x55d3d4(0x113))['innerText'] = gridN == 0x3 ? _0x55d3d4(0x150) : 'चार',
    document['getElementById'](_0x55d3d4(0x11d))[_0x55d3d4(0x112)] = gridN == 0x3 ? 'three' : 'four';
    try {
        _0x479868 = getValue(_0x55d3d4(0x156) + gridN, ''),
        _0x1adefc = getValue(_0x55d3d4(0x140) + gridN, '');
    } catch (_0x379cf8) {}
    gridSequence = [],
    solveSequence = [];
    if (_0x1adefc)
        solveSequence = [..._0x1adefc[_0x55d3d4(0x121)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x16eecd = getGridSequence(gridN);
    if (_0x479868[_0x55d3d4(0x10f)] > 0x5)
        try {
            idxSequence = [..._0x479868[_0x55d3d4(0x121)]('$')];
        } catch (_0x432614) {}
    else
        idxSequence = [..._0x16eecd];
    for (let _0x15c453 = 0x0; _0x15c453 < idxSequence[_0x55d3d4(0x10f)]; _0x15c453++) {
        gridSequence[_0x55d3d4(0x151)](originalSequence[idxSequence[_0x15c453]]);
    }
    createGrid();
}
function createGrid() {
    const _0x2c5c19 = _0x3f3a
      , _0x2e1593 = document[_0x2c5c19(0x111)](_0x2c5c19(0x115));
    document['getElementById'](_0x2c5c19(0x147))[_0x2c5c19(0x112)] = gridN + 'x' + gridN,
    _0x2e1593[_0x2c5c19(0x12f)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x22491c = 0x0; _0x22491c < gridN; _0x22491c++) {
        const _0x10f911 = document[_0x2c5c19(0x127)](_0x2c5c19(0x13e));
        _0x10f911['className'] = _0x2c5c19(0x110);
        for (let _0x13fc4e = 0x0; _0x13fc4e < gridN; _0x13fc4e++) {
            const _0x15978a = document[_0x2c5c19(0x127)](_0x2c5c19(0x13e));
            _0x15978a[_0x2c5c19(0x154)] = _0x2c5c19(0x158) + gridN + '-' + gridN,
            _0x15978a[_0x2c5c19(0x149)] = gridSequence[_0x22491c * gridN + _0x13fc4e],
            _0x15978a[_0x2c5c19(0x15a)] = _0x22491c * gridN + _0x13fc4e,
            _0x15978a[_0x2c5c19(0x144)](_0x2c5c19(0x10d), handleItemClick),
            _0x15978a[_0x2c5c19(0x144)](_0x2c5c19(0x14d), handleTouchStart, {
                'passive': ![]
            }),
            _0x10f911[_0x2c5c19(0x13f)](_0x15978a);
        }
        _0x2e1593[_0x2c5c19(0x13f)](_0x10f911);
    }
    storeGridData(),
    checkRows();
}
function _0x321d() {
    const _0x1d7f2d = ['correct', 'movesCounter', 'तीन', 'push', 'playCount', 'grid-item', 'className', '47802XqoBcI', 'userGrid', 'getFullYear', 'grid-item\x20grid-item-', 'getItem', 'tag', 'click', 'from', 'length', 'grid-row', 'getElementById', 'innerText', 'gridHindi', '19589339LumFEl', 'grid', '#resetBtn', 'classList', '10PoewFZ', 'divMindCheck', 'keys', 'slice', '1955682KxbAUS', 'gridEng', 'remove', 'winCount', '4590216trpBAY', 'split', '556839nrxwVf', 'target', 'random', 'pWin', 'join', 'createElement', '205aTfkoP', 'getDate', '6wTzGBY', 'map', '32ultIVs', 'replaceChild', 'style', 'innerHTML', 'padStart', 'grid-container', 'preventDefault', 'lastWin', 'selected', 'clear', '10506132vmDshZ', 'maxStreak', 'localStorage', 'selected2', 'setItem', 'lastPlayed', 'contains', 'display', 'div', 'appendChild', 'solveGrid', 'winSteps', 'streakMax', 'none', 'addEventListener', '83792uBvwVg', 'block', 'gridSize', 'add', 'textContent', 'rowShare', 'floor', 'disabled', 'touchstart'];
    _0x321d = function() {
        return _0x1d7f2d;
    }
    ;
    return _0x321d();
}
function shuffleArray() {
    const _0x38bceb = _0x3f3a;
    idxSequence = [...Array(gridN * gridN)[_0x38bceb(0x11a)]()];
    for (let _0x378c6f = gridSequence[_0x38bceb(0x10f)] - 0x1; _0x378c6f > 0x0; _0x378c6f--) {
        let _0x4da9d0 = _0x378c6f;
        while (_0x4da9d0 == _0x378c6f) {
            _0x4da9d0 = Math[_0x38bceb(0x14b)](Math[_0x38bceb(0x124)]() * (_0x378c6f + 0x1));
        }
        [gridSequence[_0x378c6f],gridSequence[_0x4da9d0]] = [gridSequence[_0x4da9d0], gridSequence[_0x378c6f]],
        [idxSequence[_0x378c6f],idxSequence[_0x4da9d0]] = [idxSequence[_0x4da9d0], idxSequence[_0x378c6f]];
    }
}
function _0x3f3a(_0x29733f, _0x1edc78) {
    const _0x321d59 = _0x321d();
    return _0x3f3a = function(_0x3f3a0f, _0xa9e427) {
        _0x3f3a0f = _0x3f3a0f - 0x10d;
        let _0x5bc952 = _0x321d59[_0x3f3a0f];
        return _0x5bc952;
    }
    ,
    _0x3f3a(_0x29733f, _0x1edc78);
}
function handleItemClick(_0x4ea16d) {
    const _0x38b2c7 = _0x3f3a;
    if (_0x4ea16d[_0x38b2c7(0x123)][_0x38b2c7(0x117)]['contains'](_0x38b2c7(0x14c)))
        return;
    if (mindCheckMode)
        selectedItem = _0x4ea16d[_0x38b2c7(0x123)],
        selectedItem[_0x38b2c7(0x117)][_0x38b2c7(0x13c)](_0x38b2c7(0x139)) ? selectedItem[_0x38b2c7(0x117)][_0x38b2c7(0x11e)](_0x38b2c7(0x139)) : selectedItem[_0x38b2c7(0x117)]['add']('selected2');
    else {
        if (!selectedItem)
            selectedItem = _0x4ea16d[_0x38b2c7(0x123)],
            selectedItem[_0x38b2c7(0x117)][_0x38b2c7(0x148)]('selected');
        else
            selectedItem[_0x38b2c7(0x15a)] != _0x4ea16d[_0x38b2c7(0x123)]['tag'] ? (swapItems(selectedItem, _0x4ea16d[_0x38b2c7(0x123)]),
            selectedItem[_0x38b2c7(0x117)][_0x38b2c7(0x11e)](_0x38b2c7(0x134)),
            selectedItem = null,
            swapMove = !![],
            currRow = Math[_0x38b2c7(0x14b)](Number(_0x4ea16d[_0x38b2c7(0x123)][_0x38b2c7(0x15a)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x38b2c7(0x117)][_0x38b2c7(0x11e)](_0x38b2c7(0x134)),
            selectedItem = null);
    }
}
function handleTouchStart(_0xa83b90) {
    const _0x21845d = _0x3f3a;
    _0xa83b90[_0x21845d(0x132)](),
    handleItemClick(_0xa83b90);
}
function swapItems(_0x24da80, _0x5a27b3) {
    const _0x2dd6a7 = _0x3f3a
      , _0x9ccf03 = _0x24da80['textContent'];
    gridSequence[_0x24da80[_0x2dd6a7(0x15a)]] = _0x5a27b3[_0x2dd6a7(0x149)],
    gridSequence[_0x5a27b3['tag']] = _0x9ccf03;
    const _0x2579ae = idxSequence[_0x24da80[_0x2dd6a7(0x15a)]];
    idxSequence[_0x24da80['tag']] = idxSequence[_0x5a27b3[_0x2dd6a7(0x15a)]],
    idxSequence[_0x5a27b3[_0x2dd6a7(0x15a)]] = _0x2579ae,
    _0x24da80[_0x2dd6a7(0x149)] = _0x5a27b3[_0x2dd6a7(0x149)],
    _0x5a27b3[_0x2dd6a7(0x149)] = _0x9ccf03,
    movesCounter++,
    document['getElementById']('movesCounter')[_0x2dd6a7(0x112)] = movesCounter;
}
function resetAllData() {
    const _0x5e0cdc = _0x3f3a;
    window[_0x5e0cdc(0x138)][_0x5e0cdc(0x135)]();
}
function resetLocalStorage() {
    const _0x29cdcb = _0x3f3a;
    setValue('userGrid' + gridN, ''),
    setValue('movesCounter' + gridN, 0x0),
    setValue(_0x29cdcb(0x13b) + gridN, ''),
    setValue('lastWin' + gridN, ''),
    setValue(_0x29cdcb(0x152) + gridN, 0x0),
    setValue(_0x29cdcb(0x11f) + gridN, 0x0),
    setValue('playStreak' + gridN, 0x0),
    setValue(_0x29cdcb(0x137) + gridN, 0x0);
}
function storeGridData() {
    const _0x4ad0d0 = _0x3f3a;
    setValue(_0x4ad0d0(0x156) + gridN, idxSequence['join']('$')),
    setValue(_0x4ad0d0(0x14f) + gridN, movesCounter),
    setValue(_0x4ad0d0(0x140) + gridN, solveSequence[_0x4ad0d0(0x126)]('$'));
}
function checkRows() {
    const _0x360983 = _0x3f3a
      , _0xf93ebe = document['getElementsByClassName'](_0x360983(0x110));
    let _0xd97b9d = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x2d14eb = 0x0; _0x2d14eb < _0xf93ebe[_0x360983(0x10f)]; _0x2d14eb++) {
        const _0x24e3ed = Array[_0x360983(0x10e)](_0xf93ebe[_0x2d14eb]['getElementsByClassName'](_0x360983(0x153)))
          , _0xe28b15 = _0x24e3ed[_0x360983(0x12b)](_0x246fcc => _0x246fcc['textContent']);
        for (let _0x4edc4e = 0x0; _0x4edc4e <= gridCheck; _0x4edc4e += gridN) {
            const _0x954b26 = originalSequence[_0x360983(0x11b)](_0x4edc4e, _0x4edc4e + gridN)[_0x360983(0x126)]('');
            if (_0xe28b15[_0x360983(0x126)]('') === _0x954b26) {
                _0x24e3ed['forEach'](_0x4adb8f => {
                    const _0x5af150 = _0x360983;
                    _0x4adb8f['classList'][_0x5af150(0x148)](_0x5af150(0x14e), _0x5af150(0x14c));
                }
                );
                swapMove && _0x2d14eb == currRow && solveSequence[_0x360983(0x151)](movesCounter);
                _0xd97b9d++;
                break;
            }
        }
    }
    ;if (_0xd97b9d === gridN) {
        document['getElementById'](_0x360983(0x119))['style'][_0x360983(0x13d)] = _0x360983(0x143),
        document[_0x360983(0x111)]('rowShare')['style']['display'] = _0x360983(0x146),
        document['getElementById']('pWin')[_0x360983(0x12e)][_0x360983(0x13d)] = _0x360983(0x146),
        document[_0x360983(0x111)]('pPlay')['style']['display'] = _0x360983(0x143);
        if (swapMove) {
            solveSequence[_0x360983(0x10f)] < gridN && solveSequence[_0x360983(0x151)](movesCounter);
            winCount++;
            const _0x533dcb = getValue('lastWin' + gridN, today);
            dayDiff = getIndex(_0x533dcb);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue('streakCount' + gridN, streakCount),
            setValue(_0x360983(0x142) + gridN, streakMax),
            setValue(_0x360983(0x133) + gridN, today),
            setValue(_0x360983(0x11f) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document[_0x360983(0x111)](_0x360983(0x125))[_0x360983(0x12e)]['display'] = _0x360983(0x143),
        document[_0x360983(0x111)]('pPlay')[_0x360983(0x12e)]['display'] = 'block',
        document[_0x360983(0x111)](_0x360983(0x14a))[_0x360983(0x12e)]['display'] = _0x360983(0x143),
        document['getElementById'](_0x360983(0x119))[_0x360983(0x12e)][_0x360983(0x13d)] = _0x360983(0x146);
    if (_0xd97b9d > 0x0 && solveSequence[_0x360983(0x10f)] > 0x0) {
        let _0x1edba6 = document[_0x360983(0x111)](_0x360983(0x141));
        _0x1edba6['innerText'] = createBarChart();
    }
}
$(_0xd235a3(0x116))[_0xd235a3(0x10d)](function() {
    const _0x54ffdb = _0xd235a3
      , _0x2f4d2b = document['getElementById'](_0x54ffdb(0x115))
      , _0x468999 = document[_0x54ffdb(0x127)](_0x54ffdb(0x13e));
    _0x468999['id'] = _0x54ffdb(0x115),
    _0x468999[_0x54ffdb(0x117)]['add'](_0x54ffdb(0x131)),
    _0x2f4d2b['parentNode']['replaceChild'](_0x468999, _0x2f4d2b),
    grid = _0x468999,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x133dbf = _0xd235a3
      , _0x3b91b0 = document['getElementById'](_0x133dbf(0x115))
      , _0xb1b8d1 = document[_0x133dbf(0x127)](_0x133dbf(0x13e));
    _0xb1b8d1['id'] = _0x133dbf(0x115),
    _0xb1b8d1[_0x133dbf(0x117)][_0x133dbf(0x148)](_0x133dbf(0x131)),
    _0x3b91b0['parentNode'][_0x133dbf(0x12d)](_0xb1b8d1, _0x3b91b0),
    grid = _0xb1b8d1,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
