const _0x481acd = _0x53bf;
(function(_0x3ceabf, _0x48e635) {
    const _0x9d2b6e = _0x53bf
      , _0x5ea344 = _0x3ceabf();
    while (!![]) {
        try {
            const _0x11fb67 = -parseInt(_0x9d2b6e(0x1df)) / 0x1 * (-parseInt(_0x9d2b6e(0x1e0)) / 0x2) + -parseInt(_0x9d2b6e(0x1e7)) / 0x3 + -parseInt(_0x9d2b6e(0x1be)) / 0x4 + parseInt(_0x9d2b6e(0x1d3)) / 0x5 * (-parseInt(_0x9d2b6e(0x1d0)) / 0x6) + parseInt(_0x9d2b6e(0x1a1)) / 0x7 * (-parseInt(_0x9d2b6e(0x1c3)) / 0x8) + parseInt(_0x9d2b6e(0x1b5)) / 0x9 * (parseInt(_0x9d2b6e(0x1ca)) / 0xa) + parseInt(_0x9d2b6e(0x19f)) / 0xb;
            if (_0x11fb67 === _0x48e635)
                break;
            else
                _0x5ea344['push'](_0x5ea344['shift']());
        } catch (_0x578c1c) {
            _0x5ea344['push'](_0x5ea344['shift']());
        }
    }
}(_0x5c8e, 0x9f124));
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
  , targetRow = 0x0;
function setValue(_0x20afa2, _0x339feb) {
    const _0x4a38ef = _0x53bf;
    window[_0x4a38ef(0x1bf)][_0x4a38ef(0x1e9)](_0x20afa2, _0x339feb);
}
function getToday() {
    const _0x5d1c0e = _0x53bf
      , _0x44a7d = new Date()
      , _0x5cc33b = _0x44a7d[_0x5d1c0e(0x1cf)]()
      , _0x4f00ab = String(_0x44a7d[_0x5d1c0e(0x1c1)]() + 0x1)[_0x5d1c0e(0x1a0)](0x2, '0')
      , _0xfd7d6f = String(_0x44a7d['getDate']())[_0x5d1c0e(0x1a0)](0x2, '0');
    return _0x5cc33b + '-' + _0x4f00ab + '-' + _0xfd7d6f;
}
function getValue(_0x3bf342, _0x4b08d2=null) {
    const _0x451327 = _0x53bf;
    let _0x5227fd = window[_0x451327(0x1bf)]['getItem'](_0x3bf342);
    return _0x5227fd == null && _0x4b08d2 != null && (_0x5227fd = _0x4b08d2),
    _0x5227fd;
}
function initializePuzzle() {
    const _0x1d0453 = _0x53bf;
    movesCounter = getValue(_0x1d0453(0x1a4) + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document['getElementById'](_0x1d0453(0x1a4))[_0x1d0453(0x1d6)] = movesCounter,
    document[_0x1d0453(0x1c5)](_0x1d0453(0x1e4))[_0x1d0453(0x1d6)] = gridN == 0x3 ? _0x1d0453(0x1a9) : _0x1d0453(0x1d9),
    document[_0x1d0453(0x1c5)](_0x1d0453(0x1c2))['innerText'] = gridN == 0x3 ? 'three' : _0x1d0453(0x1bd),
    userGrid = getValue(_0x1d0453(0x1c8) + gridN, ''),
    solveGrid = getValue(_0x1d0453(0x1cc) + gridN, '');
    if (solveGrid[_0x1d0453(0x199)] > 0x0)
        solveSequence = [...solveGrid['split']('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x12cffd = getGridSequence(gridN);
    if (userGrid['length'] > 0x5)
        try {
            idxSequence = [...userGrid[_0x1d0453(0x19c)]('$')];
        } catch (_0x2105dc) {
            idxSequence = [..._0x12cffd];
        }
    else
        idxSequence = [..._0x12cffd];
    for (let _0x41784e = 0x0; _0x41784e < idxSequence[_0x1d0453(0x199)]; _0x41784e++) {
        gridSequence['push'](originalSequence[idxSequence[_0x41784e]]);
    }
    createGrid();
}
function createGrid() {
    const _0x21701d = _0x53bf
      , _0x3e95f6 = document[_0x21701d(0x1c5)](_0x21701d(0x1a3));
    document[_0x21701d(0x1c5)](_0x21701d(0x19e))[_0x21701d(0x1d6)] = gridN + 'x' + gridN,
    _0x3e95f6[_0x21701d(0x1a6)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x2ea099 = 0x0; _0x2ea099 < gridN; _0x2ea099++) {
        const _0x7e08e = document[_0x21701d(0x1d1)](_0x21701d(0x1b9));
        _0x7e08e[_0x21701d(0x1b7)] = _0x21701d(0x1bb);
        for (let _0x2c9804 = 0x0; _0x2c9804 < gridN; _0x2c9804++) {
            const _0x5c2bbd = document['createElement'](_0x21701d(0x1b9));
            _0x5c2bbd['className'] = 'grid-item\x20grid-item-' + gridN + '-' + gridN,
            _0x5c2bbd[_0x21701d(0x1a8)] = gridSequence[_0x2ea099 * gridN + _0x2c9804],
            _0x5c2bbd[_0x21701d(0x1e8)] = _0x2ea099 * gridN + _0x2c9804,
            _0x5c2bbd[_0x21701d(0x1b8)](_0x21701d(0x1c0), handleItemClick),
            _0x5c2bbd['addEventListener'](_0x21701d(0x1c9), handleTouchStart, {
                'passive': ![]
            }),
            _0x7e08e[_0x21701d(0x19b)](_0x5c2bbd);
        }
        _0x3e95f6[_0x21701d(0x19b)](_0x7e08e);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x37cb1a = _0x53bf;
    idxSequence = [...Array(gridN * gridN)['keys']()];
    for (let _0x23e1c3 = gridSequence[_0x37cb1a(0x199)] - 0x1; _0x23e1c3 > 0x0; _0x23e1c3--) {
        let _0x3fa1d7 = _0x23e1c3;
        while (_0x3fa1d7 == _0x23e1c3) {
            _0x3fa1d7 = Math[_0x37cb1a(0x1e6)](Math[_0x37cb1a(0x1d4)]() * (_0x23e1c3 + 0x1));
        }
        [gridSequence[_0x23e1c3],gridSequence[_0x3fa1d7]] = [gridSequence[_0x3fa1d7], gridSequence[_0x23e1c3]],
        [idxSequence[_0x23e1c3],idxSequence[_0x3fa1d7]] = [idxSequence[_0x3fa1d7], idxSequence[_0x23e1c3]];
    }
}
function _0x53bf(_0x597401, _0x2f1c8c) {
    const _0x5c8e24 = _0x5c8e();
    return _0x53bf = function(_0x53bf13, _0x4d174b) {
        _0x53bf13 = _0x53bf13 - 0x199;
        let _0x57cf79 = _0x5c8e24[_0x53bf13];
        return _0x57cf79;
    }
    ,
    _0x53bf(_0x597401, _0x2f1c8c);
}
function handleItemClick(_0x5501f2) {
    const _0x3135c2 = _0x53bf;
    if (_0x5501f2[_0x3135c2(0x1b6)][_0x3135c2(0x1dc)][_0x3135c2(0x1e1)](_0x3135c2(0x1bc)))
        return;
    if (mindCheckMode)
        selectedItem = _0x5501f2[_0x3135c2(0x1b6)],
        selectedItem[_0x3135c2(0x1dc)][_0x3135c2(0x1e1)](_0x3135c2(0x1d2)) ? selectedItem[_0x3135c2(0x1dc)][_0x3135c2(0x19a)](_0x3135c2(0x1d2)) : selectedItem['classList'][_0x3135c2(0x1e5)](_0x3135c2(0x1d2));
    else {
        if (!selectedItem)
            selectedItem = _0x5501f2[_0x3135c2(0x1b6)],
            selectedItem['classList'][_0x3135c2(0x1e5)](_0x3135c2(0x1b4));
        else
            selectedItem[_0x3135c2(0x1e8)] != _0x5501f2['target'][_0x3135c2(0x1e8)] ? (swapItems(selectedItem, _0x5501f2[_0x3135c2(0x1b6)]),
            selectedItem['classList'][_0x3135c2(0x19a)](_0x3135c2(0x1b4)),
            selectedItem = null,
            swapMove = !![],
            targetRow = Math['floor'](Number(_0x5501f2[_0x3135c2(0x1b6)][_0x3135c2(0x1e8)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x3135c2(0x1dc)][_0x3135c2(0x19a)](_0x3135c2(0x1b4)),
            selectedItem = null);
    }
}
function handleTouchStart(_0x476f72) {
    const _0x29eb83 = _0x53bf;
    _0x476f72[_0x29eb83(0x1b1)](),
    handleItemClick(_0x476f72);
}
function swapItems(_0x132502, _0x4d3a76) {
    const _0x2b70c6 = _0x53bf
      , _0x47e4d2 = _0x132502[_0x2b70c6(0x1a8)];
    gridSequence[_0x132502[_0x2b70c6(0x1e8)]] = _0x4d3a76[_0x2b70c6(0x1a8)],
    gridSequence[_0x4d3a76[_0x2b70c6(0x1e8)]] = _0x47e4d2;
    const _0x1b66f3 = idxSequence[_0x132502[_0x2b70c6(0x1e8)]];
    idxSequence[_0x132502[_0x2b70c6(0x1e8)]] = idxSequence[_0x4d3a76[_0x2b70c6(0x1e8)]],
    idxSequence[_0x4d3a76[_0x2b70c6(0x1e8)]] = _0x1b66f3,
    _0x132502[_0x2b70c6(0x1a8)] = _0x4d3a76['textContent'],
    _0x4d3a76['textContent'] = _0x47e4d2,
    movesCounter++,
    document[_0x2b70c6(0x1c5)](_0x2b70c6(0x1a4))[_0x2b70c6(0x1d6)] = movesCounter;
}
function resetAllData() {
    const _0x79adc2 = _0x53bf;
    window['localStorage'][_0x79adc2(0x1ac)]();
}
function _0x5c8e() {
    const _0x5c7f36 = ['5850534NdcfGq', 'createElement', 'selected2', '5OQNOEH', 'random', 'none', 'innerText', 'from', 'pPlay', 'चार', 'grid-item', 'getElementsByClassName', 'classList', 'slice', 'rowShare', '33410dEDciD', '4MMflxU', 'contains', 'pWin', 'streakMax', 'gridHindi', 'add', 'floor', '3310797tVnxip', 'tag', 'setItem', 'winSteps', 'length', 'remove', 'appendChild', 'split', '#resetBtn', 'gridSize', '31321389JFEEHZ', 'padStart', '77PhKmpN', 'block', 'grid', 'movesCounter', 'parentNode', 'innerHTML', 'playStreak', 'textContent', 'तीन', 'lastWin', 'winCount', 'clear', 'display', 'replaceChild', 'push', 'lastPlayed', 'preventDefault', 'grid-container', 'map', 'selected', '1595691HmUMtQ', 'target', 'className', 'addEventListener', 'div', 'maxStreak', 'grid-row', 'disabled', 'four', '1655380AOGcwT', 'localStorage', 'click', 'getMonth', 'gridEng', '219656UgdfQl', 'forEach', 'getElementById', 'divMindCheck', 'streakCount', 'userGrid', 'touchstart', '30AeOWeM', 'style', 'solveGrid', 'correct', 'join', 'getFullYear'];
    _0x5c8e = function() {
        return _0x5c7f36;
    }
    ;
    return _0x5c8e();
}
function resetLocalStorage() {
    const _0x336f85 = _0x53bf;
    setValue(_0x336f85(0x1c8) + gridN, ''),
    setValue('movesCounter' + gridN, 0x0),
    setValue(_0x336f85(0x1b0) + gridN, ''),
    setValue(_0x336f85(0x1aa) + gridN, ''),
    setValue('playCount' + gridN, 0x0),
    setValue(_0x336f85(0x1ab) + gridN, 0x0),
    setValue(_0x336f85(0x1a7) + gridN, 0x0),
    setValue(_0x336f85(0x1ba) + gridN, 0x0);
}
function storeGridData() {
    const _0x381408 = _0x53bf;
    setValue(_0x381408(0x1c8) + gridN, idxSequence['join']('$')),
    setValue(_0x381408(0x1a4) + gridN, movesCounter),
    setValue('solveGrid' + gridN, solveSequence[_0x381408(0x1ce)]('$'));
}
function checkRows() {
    const _0x4b626e = _0x53bf
      , _0x506909 = document[_0x4b626e(0x1db)](_0x4b626e(0x1bb));
    let _0x2a1e3c = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x27035f = 0x0; _0x27035f < _0x506909['length']; _0x27035f++) {
        const _0x4a419c = Array[_0x4b626e(0x1d7)](_0x506909[_0x27035f][_0x4b626e(0x1db)](_0x4b626e(0x1da)))
          , _0xb8233c = _0x4a419c[_0x4b626e(0x1b3)](_0x3f2d00 => _0x3f2d00['textContent']);
        for (let _0x146a7d = 0x0; _0x146a7d <= gridCheck; _0x146a7d += gridN) {
            const _0x4bc61c = originalSequence[_0x4b626e(0x1dd)](_0x146a7d, _0x146a7d + gridN)[_0x4b626e(0x1ce)]('');
            if (_0xb8233c[_0x4b626e(0x1ce)]('') === _0x4bc61c) {
                _0x4a419c[_0x4b626e(0x1c4)](_0x36a203 => {
                    const _0x2fb921 = _0x4b626e;
                    _0x36a203[_0x2fb921(0x1dc)][_0x2fb921(0x1e5)](_0x2fb921(0x1cd), _0x2fb921(0x1bc));
                }
                );
                swapMove && _0x27035f == targetRow && (solveSequence['push'](movesCounter),
                targetRow = -0x1);
                _0x2a1e3c++;
                break;
            }
        }
    }
    ;if (_0x2a1e3c === gridN) {
        document[_0x4b626e(0x1c5)](_0x4b626e(0x1c6))[_0x4b626e(0x1cb)][_0x4b626e(0x1ad)] = _0x4b626e(0x1d5),
        document[_0x4b626e(0x1c5)]('rowShare')[_0x4b626e(0x1cb)][_0x4b626e(0x1ad)] = _0x4b626e(0x1a2),
        document[_0x4b626e(0x1c5)]('pWin')[_0x4b626e(0x1cb)][_0x4b626e(0x1ad)] = 'block',
        document[_0x4b626e(0x1c5)](_0x4b626e(0x1d8))[_0x4b626e(0x1cb)][_0x4b626e(0x1ad)] = _0x4b626e(0x1d5);
        if (swapMove) {
            solveSequence['length'] < gridN && solveSequence[_0x4b626e(0x1af)](movesCounter);
            winCount++;
            const _0x47bda3 = getValue(_0x4b626e(0x1aa) + gridN, today);
            dayDiff = getIndex(_0x47bda3);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue(_0x4b626e(0x1c7) + gridN, streakCount),
            setValue(_0x4b626e(0x1e3) + gridN, streakMax),
            setValue('lastWin' + gridN, today),
            setValue('winCount' + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document['getElementById'](_0x4b626e(0x1e2))[_0x4b626e(0x1cb)][_0x4b626e(0x1ad)] = 'none',
        document[_0x4b626e(0x1c5)](_0x4b626e(0x1d8))[_0x4b626e(0x1cb)][_0x4b626e(0x1ad)] = 'block',
        document[_0x4b626e(0x1c5)](_0x4b626e(0x1de))[_0x4b626e(0x1cb)][_0x4b626e(0x1ad)] = _0x4b626e(0x1d5),
        document[_0x4b626e(0x1c5)](_0x4b626e(0x1c6))['style'][_0x4b626e(0x1ad)] = _0x4b626e(0x1a2);
    document[_0x4b626e(0x1c5)]('winSteps')[_0x4b626e(0x1d6)] = '',
    _0x2a1e3c > 0x0 && solveSequence[_0x4b626e(0x199)] > 0x0 && (document[_0x4b626e(0x1c5)](_0x4b626e(0x1ea))[_0x4b626e(0x1d6)] = createBarChart());
}
$(_0x481acd(0x19d))['click'](function() {
    const _0x5a1deb = _0x481acd
      , _0xa7d89a = document[_0x5a1deb(0x1c5)](_0x5a1deb(0x1a3))
      , _0x59f9a9 = document[_0x5a1deb(0x1d1)](_0x5a1deb(0x1b9));
    _0x59f9a9['id'] = _0x5a1deb(0x1a3),
    _0x59f9a9[_0x5a1deb(0x1dc)][_0x5a1deb(0x1e5)](_0x5a1deb(0x1b2)),
    _0xa7d89a[_0x5a1deb(0x1a5)]['replaceChild'](_0x59f9a9, _0xa7d89a),
    grid = _0x59f9a9,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x4b7c79 = _0x481acd
      , _0x2e580c = document[_0x4b7c79(0x1c5)](_0x4b7c79(0x1a3))
      , _0x2bcf21 = document['createElement'](_0x4b7c79(0x1b9));
    _0x2bcf21['id'] = _0x4b7c79(0x1a3),
    _0x2bcf21['classList'][_0x4b7c79(0x1e5)](_0x4b7c79(0x1b2)),
    _0x2e580c[_0x4b7c79(0x1a5)][_0x4b7c79(0x1ae)](_0x2bcf21, _0x2e580c),
    grid = _0x2bcf21,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
