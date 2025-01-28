function _0x4618(_0x52ad30, _0x16216b) {
    const _0x3f838e = _0x3f83();
    return _0x4618 = function(_0x4618cc, _0x505e41) {
        _0x4618cc = _0x4618cc - 0x1ab;
        let _0xcfba98 = _0x3f838e[_0x4618cc];
        return _0xcfba98;
    }
    ,
    _0x4618(_0x52ad30, _0x16216b);
}
const _0x143888 = _0x4618;
(function(_0x34481f, _0x283ee1) {
    const _0x356c1c = _0x4618
      , _0x164c9f = _0x34481f();
    while (!![]) {
        try {
            const _0x533ba1 = parseInt(_0x356c1c(0x1e2)) / 0x1 + -parseInt(_0x356c1c(0x1c7)) / 0x2 + -parseInt(_0x356c1c(0x1b3)) / 0x3 + parseInt(_0x356c1c(0x1da)) / 0x4 * (-parseInt(_0x356c1c(0x1c6)) / 0x5) + parseInt(_0x356c1c(0x1f7)) / 0x6 * (parseInt(_0x356c1c(0x1e3)) / 0x7) + parseInt(_0x356c1c(0x1f6)) / 0x8 + parseInt(_0x356c1c(0x1ba)) / 0x9;
            if (_0x533ba1 === _0x283ee1)
                break;
            else
                _0x164c9f['push'](_0x164c9f['shift']());
        } catch (_0x67aff9) {
            _0x164c9f['push'](_0x164c9f['shift']());
        }
    }
}(_0x3f83, 0x86048));
const resetKey = _0x143888(0x1ef);
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
function setValue(_0x4524da, _0x3452cf) {
    const _0x9ba917 = _0x143888;
    window[_0x9ba917(0x1cb)][_0x9ba917(0x1b1)](_0x4524da, _0x3452cf);
}
function getToday() {
    const _0x40b956 = _0x143888
      , _0x4958a4 = new Date()
      , _0x4b43d5 = _0x4958a4[_0x40b956(0x1b0)]()
      , _0x3c42b4 = String(_0x4958a4[_0x40b956(0x1ab)]() + 0x1)['padStart'](0x2, '0')
      , _0x4deb66 = String(_0x4958a4[_0x40b956(0x1bf)]())[_0x40b956(0x1b9)](0x2, '0');
    return _0x4b43d5 + '-' + _0x3c42b4 + '-' + _0x4deb66;
}
function getValue(_0x38a65f, _0x5c6d3f=null) {
    const _0x36b188 = _0x143888;
    let _0x3fc7a7 = window[_0x36b188(0x1cb)][_0x36b188(0x1f0)](_0x38a65f);
    return _0x3fc7a7 == null && _0x5c6d3f != null && (_0x3fc7a7 = _0x5c6d3f),
    _0x3fc7a7;
}
function initializePuzzle() {
    const _0xded5ac = _0x143888;
    movesCounter = getValue('movesCounter' + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document[_0xded5ac(0x1b6)]('movesCounter')[_0xded5ac(0x1d6)] = movesCounter,
    document[_0xded5ac(0x1b6)](_0xded5ac(0x1c8))['innerText'] = gridN == 0x3 ? _0xded5ac(0x1d8) : _0xded5ac(0x1cd),
    document[_0xded5ac(0x1b6)](_0xded5ac(0x1fb))[_0xded5ac(0x1d6)] = gridN == 0x3 ? 'three' : _0xded5ac(0x1c9),
    userGrid = getValue('userGrid' + gridN, ''),
    solveGrid = getValue(_0xded5ac(0x1d9) + gridN, '');
    if (solveGrid[_0xded5ac(0x1c0)] > 0x0)
        solveSequence = [...solveGrid['split']('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x832edc = getGridSequence(gridN);
    if (userGrid[_0xded5ac(0x1c0)] > 0x5)
        try {
            idxSequence = [...userGrid[_0xded5ac(0x1e4)]('$')];
        } catch (_0x407ecd) {
            idxSequence = [..._0x832edc];
        }
    else
        idxSequence = [..._0x832edc];
    for (let _0x240a15 = 0x0; _0x240a15 < idxSequence['length']; _0x240a15++) {
        gridSequence[_0xded5ac(0x1bd)](originalSequence[idxSequence[_0x240a15]]);
    }
    createGrid();
}
function createGrid() {
    const _0x5d7ef2 = _0x143888
      , _0x210136 = document[_0x5d7ef2(0x1b6)](_0x5d7ef2(0x1ac));
    document[_0x5d7ef2(0x1b6)]('gridSize')[_0x5d7ef2(0x1d6)] = gridN + 'x' + gridN,
    _0x210136[_0x5d7ef2(0x1ae)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x4c1748 = 0x0; _0x4c1748 < gridN; _0x4c1748++) {
        const _0x4d3ef9 = document[_0x5d7ef2(0x1fa)](_0x5d7ef2(0x1d5));
        _0x4d3ef9['className'] = _0x5d7ef2(0x1c4);
        for (let _0x93f63a = 0x0; _0x93f63a < gridN; _0x93f63a++) {
            const _0x2532aa = document[_0x5d7ef2(0x1fa)](_0x5d7ef2(0x1d5));
            _0x2532aa[_0x5d7ef2(0x1ad)] = _0x5d7ef2(0x1fd) + gridN + '-' + gridN,
            _0x2532aa['textContent'] = gridSequence[_0x4c1748 * gridN + _0x93f63a],
            _0x2532aa[_0x5d7ef2(0x1d0)] = _0x4c1748 * gridN + _0x93f63a,
            _0x2532aa['addEventListener']('click', handleItemClick),
            _0x2532aa[_0x5d7ef2(0x1c1)]('touchstart', handleTouchStart, {
                'passive': ![]
            }),
            _0x4d3ef9[_0x5d7ef2(0x1e1)](_0x2532aa);
        }
        _0x210136['appendChild'](_0x4d3ef9);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x10997a = _0x143888;
    idxSequence = [...Array(gridN * gridN)[_0x10997a(0x1f5)]()];
    for (let _0x2b8803 = gridSequence[_0x10997a(0x1c0)] - 0x1; _0x2b8803 > 0x0; _0x2b8803--) {
        let _0x2f14db = _0x2b8803;
        while (_0x2f14db == _0x2b8803) {
            _0x2f14db = Math[_0x10997a(0x1bb)](Math[_0x10997a(0x1af)]() * (_0x2b8803 + 0x1));
        }
        [gridSequence[_0x2b8803],gridSequence[_0x2f14db]] = [gridSequence[_0x2f14db], gridSequence[_0x2b8803]],
        [idxSequence[_0x2b8803],idxSequence[_0x2f14db]] = [idxSequence[_0x2f14db], idxSequence[_0x2b8803]];
    }
}
function handleItemClick(_0x45e263) {
    const _0x5b051c = _0x143888;
    if (_0x45e263['target'][_0x5b051c(0x1d2)][_0x5b051c(0x1f2)]('disabled'))
        return;
    mindCheckMode = document[_0x5b051c(0x1b6)](_0x5b051c(0x1f9))['checked'];
    if (mindCheckMode)
        selectedItem = _0x45e263[_0x5b051c(0x1e6)],
        selectedItem[_0x5b051c(0x1d2)]['contains'](_0x5b051c(0x1e9)) ? selectedItem[_0x5b051c(0x1d2)][_0x5b051c(0x1e7)](_0x5b051c(0x1e9)) : selectedItem[_0x5b051c(0x1d2)]['add'](_0x5b051c(0x1e9));
    else {
        if (!selectedItem)
            selectedItem = _0x45e263['target'],
            selectedItem[_0x5b051c(0x1d2)][_0x5b051c(0x1cc)](_0x5b051c(0x1f4));
        else
            selectedItem[_0x5b051c(0x1d0)] != _0x45e263[_0x5b051c(0x1e6)][_0x5b051c(0x1d0)] ? (swapItems(selectedItem, _0x45e263['target']),
            selectedItem[_0x5b051c(0x1d2)]['remove'](_0x5b051c(0x1f4)),
            selectedItem = null,
            swapMove = !![],
            targetRow = Math['floor'](Number(_0x45e263['target']['tag']) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x5b051c(0x1d2)]['remove'](_0x5b051c(0x1f4)),
            selectedItem = null);
    }
}
function handleTouchStart(_0x58df64) {
    _0x58df64['preventDefault'](),
    handleItemClick(_0x58df64);
}
function swapItems(_0x31a7ba, _0x52b2ca) {
    const _0x5038b2 = _0x143888
      , _0x40db17 = _0x31a7ba[_0x5038b2(0x1ea)];
    gridSequence[_0x31a7ba[_0x5038b2(0x1d0)]] = _0x52b2ca[_0x5038b2(0x1ea)],
    gridSequence[_0x52b2ca['tag']] = _0x40db17;
    const _0x3bd982 = idxSequence[_0x31a7ba['tag']];
    idxSequence[_0x31a7ba[_0x5038b2(0x1d0)]] = idxSequence[_0x52b2ca['tag']],
    idxSequence[_0x52b2ca[_0x5038b2(0x1d0)]] = _0x3bd982,
    _0x31a7ba[_0x5038b2(0x1ea)] = _0x52b2ca['textContent'],
    _0x52b2ca[_0x5038b2(0x1ea)] = _0x40db17,
    movesCounter++,
    document['getElementById']('movesCounter')[_0x5038b2(0x1d6)] = movesCounter;
}
function resetAllData() {
    const _0x484050 = _0x143888;
    window[_0x484050(0x1cb)][_0x484050(0x1de)]();
}
function resetLocalStorage() {
    const _0x55af03 = _0x143888;
    setValue(_0x55af03(0x1c5) + gridN, ''),
    setValue(_0x55af03(0x1ce) + gridN, 0x0),
    setValue(_0x55af03(0x1b8) + gridN, ''),
    setValue(_0x55af03(0x1d4) + gridN, ''),
    setValue(_0x55af03(0x1d1) + gridN, 0x0),
    setValue(_0x55af03(0x1fc) + gridN, 0x0),
    setValue(_0x55af03(0x1d7) + gridN, 0x0),
    setValue(_0x55af03(0x1bc) + gridN, 0x0);
}
function storeGridData() {
    const _0x17b3a4 = _0x143888;
    setValue(_0x17b3a4(0x1c5) + gridN, idxSequence['join']('$')),
    setValue(_0x17b3a4(0x1ce) + gridN, movesCounter),
    setValue(_0x17b3a4(0x1d9) + gridN, solveSequence['join']('$'));
}
function _0x3f83() {
    const _0x199be4 = ['getElementsByClassName', 'localStorage', 'add', 'चार', 'movesCounter', 'none', 'tag', 'playCount', 'classList', 'grid-item', 'lastWin', 'div', 'innerText', 'playStreak', 'तीन', 'solveGrid', '64bWxzCe', 'block', 'slice', 'replaceChild', 'clear', 'from', 'join', 'appendChild', '1010724KwnXtk', '2550310lrHbtW', 'split', 'disabled', 'target', 'remove', 'pWin', 'selected2', 'textContent', 'winSteps', 'pPlay', 'map', 'correct', 'abcd', 'getItem', 'style', 'contains', 'streakCount', 'selected', 'keys', '2891928KlGEGE', '6pNUIqL', 'rowShare', 'mindCheckToggle', 'createElement', 'gridEng', 'winCount', 'grid-item\x20grid-item-', 'getMonth', 'grid', 'className', 'innerHTML', 'random', 'getFullYear', 'setItem', 'grid-container', '1616781JByKBB', 'parentNode', 'divMindCheck', 'getElementById', 'display', 'lastPlayed', 'padStart', '6339672PVapvh', 'floor', 'maxStreak', 'push', 'forEach', 'getDate', 'length', 'addEventListener', 'max', 'adminText', 'grid-row', 'userGrid', '279945uekeFw', '914532ZMdMeS', 'gridHindi', 'four'];
    _0x3f83 = function() {
        return _0x199be4;
    }
    ;
    return _0x3f83();
}
function checkRows() {
    const _0x4623b2 = _0x143888
      , _0x3c868f = document[_0x4623b2(0x1ca)](_0x4623b2(0x1c4));
    let _0x38a6cf = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x26d516 = 0x0; _0x26d516 < _0x3c868f['length']; _0x26d516++) {
        const _0x425d84 = Array[_0x4623b2(0x1df)](_0x3c868f[_0x26d516]['getElementsByClassName'](_0x4623b2(0x1d3)))
          , _0x29a367 = _0x425d84[_0x4623b2(0x1ed)](_0x151f2b => _0x151f2b['textContent']);
        for (let _0xd1deba = 0x0; _0xd1deba <= gridCheck; _0xd1deba += gridN) {
            const _0x552189 = originalSequence['slice'](_0xd1deba, _0xd1deba + gridN)[_0x4623b2(0x1e0)]('');
            if (_0x29a367['join']('') === _0x552189) {
                _0x425d84[_0x4623b2(0x1be)](_0x38e3cb => {
                    const _0x2ec818 = _0x4623b2;
                    _0x38e3cb['classList'][_0x2ec818(0x1cc)](_0x2ec818(0x1ee), _0x2ec818(0x1e5));
                }
                );
                swapMove && _0x26d516 == targetRow && (solveSequence[_0x4623b2(0x1bd)](movesCounter),
                targetRow = -0x1);
                _0x38a6cf++;
                break;
            }
        }
    }
    ;if (adminFlag) {
        document[_0x4623b2(0x1b6)](_0x4623b2(0x1c3))[_0x4623b2(0x1f1)][_0x4623b2(0x1b7)] = _0x4623b2(0x1db);
        const _0x36b01e = solveSequence[_0x4623b2(0x1dc)](Math[_0x4623b2(0x1c2)](solveSequence[_0x4623b2(0x1c0)] - gridN, 0x0));
        document['getElementById'](_0x4623b2(0x1c3))[_0x4623b2(0x1d6)] = '',
        _0x36b01e['forEach']( (_0x3ac3e6, _0x2bd8df) => {
            const _0x534a5a = _0x4623b2;
            document['getElementById'](_0x534a5a(0x1c3))[_0x534a5a(0x1d6)] += '[' + (_0x2bd8df + 0x1) + ':\x20' + _0x3ac3e6 + ']\x20';
        }
        );
    } else
        document[_0x4623b2(0x1b6)](_0x4623b2(0x1c3))[_0x4623b2(0x1f1)][_0x4623b2(0x1b7)] = _0x4623b2(0x1cf);
    if (_0x38a6cf === gridN) {
        document[_0x4623b2(0x1b6)](_0x4623b2(0x1b5))[_0x4623b2(0x1f1)][_0x4623b2(0x1b7)] = _0x4623b2(0x1cf),
        document[_0x4623b2(0x1b6)](_0x4623b2(0x1f8))[_0x4623b2(0x1f1)]['display'] = _0x4623b2(0x1db),
        document[_0x4623b2(0x1b6)](_0x4623b2(0x1e8))[_0x4623b2(0x1f1)][_0x4623b2(0x1b7)] = 'block',
        document[_0x4623b2(0x1b6)](_0x4623b2(0x1ec))['style'][_0x4623b2(0x1b7)] = 'none';
        if (swapMove) {
            solveSequence['length'] < gridN && solveSequence[_0x4623b2(0x1bd)](movesCounter);
            winCount++;
            const _0x55a8d7 = getValue('lastWin' + gridN, today);
            dayDiff = getIndex(_0x55a8d7);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue(_0x4623b2(0x1f3) + gridN, streakCount),
            setValue('streakMax' + gridN, streakMax),
            setValue(_0x4623b2(0x1d4) + gridN, today),
            setValue(_0x4623b2(0x1fc) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document['getElementById'](_0x4623b2(0x1e8))[_0x4623b2(0x1f1)][_0x4623b2(0x1b7)] = _0x4623b2(0x1cf),
        document[_0x4623b2(0x1b6)]('pPlay')[_0x4623b2(0x1f1)][_0x4623b2(0x1b7)] = _0x4623b2(0x1db),
        document['getElementById']('rowShare')[_0x4623b2(0x1f1)]['display'] = _0x4623b2(0x1cf),
        document[_0x4623b2(0x1b6)](_0x4623b2(0x1b5))[_0x4623b2(0x1f1)][_0x4623b2(0x1b7)] = _0x4623b2(0x1db);
    document[_0x4623b2(0x1b6)]('winSteps')[_0x4623b2(0x1d6)] = '',
    _0x38a6cf > 0x0 && solveSequence[_0x4623b2(0x1c0)] > 0x0 && (document[_0x4623b2(0x1b6)](_0x4623b2(0x1eb))[_0x4623b2(0x1d6)] = createBarChart());
}
function resetGrid() {
    const _0x9322f1 = _0x143888
      , _0x3e05ef = document[_0x9322f1(0x1b6)](_0x9322f1(0x1ac))
      , _0x305d0a = document[_0x9322f1(0x1fa)](_0x9322f1(0x1d5));
    _0x305d0a['id'] = 'grid',
    _0x305d0a['classList']['add'](_0x9322f1(0x1b2)),
    _0x3e05ef[_0x9322f1(0x1b4)][_0x9322f1(0x1dd)](_0x305d0a, _0x3e05ef),
    grid = _0x305d0a,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
