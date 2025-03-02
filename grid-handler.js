const _0x20245d = _0xc0df;
(function(_0x486ca5, _0x190c16) {
    const _0x1fa19a = _0xc0df
      , _0x3ca261 = _0x486ca5();
    while (!![]) {
        try {
            const _0x263b40 = -parseInt(_0x1fa19a(0x177)) / 0x1 * (-parseInt(_0x1fa19a(0x170)) / 0x2) + parseInt(_0x1fa19a(0x16a)) / 0x3 * (parseInt(_0x1fa19a(0x150)) / 0x4) + parseInt(_0x1fa19a(0x194)) / 0x5 * (parseInt(_0x1fa19a(0x17b)) / 0x6) + parseInt(_0x1fa19a(0x160)) / 0x7 + -parseInt(_0x1fa19a(0x149)) / 0x8 + -parseInt(_0x1fa19a(0x16e)) / 0x9 * (-parseInt(_0x1fa19a(0x18d)) / 0xa) + -parseInt(_0x1fa19a(0x163)) / 0xb;
            if (_0x263b40 === _0x190c16)
                break;
            else
                _0x3ca261['push'](_0x3ca261['shift']());
        } catch (_0x402372) {
            _0x3ca261['push'](_0x3ca261['shift']());
        }
    }
}(_0x1a34, 0xb227c));
const resetKey = '02-Mar-Again';
let today = getToday()
  , totalDays = getIndex(firstDate)
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
function setValue(_0x5e4ee7, _0x5e4fc2) {
    const _0x4e5784 = _0x20245d;
    window[_0x4e5784(0x17c)][_0x4e5784(0x168)](_0x5e4ee7, _0x5e4fc2);
}
function getToday() {
    const _0x25b7de = _0x20245d
      , _0x5134da = new Date()
      , _0x2538cd = _0x5134da[_0x25b7de(0x16c)]()
      , _0x308c88 = String(_0x5134da[_0x25b7de(0x176)]() + 0x1)['padStart'](0x2, '0')
      , _0x264512 = String(_0x5134da['getDate']())[_0x25b7de(0x14f)](0x2, '0');
    return _0x2538cd + '-' + _0x308c88 + '-' + _0x264512;
}
function getValue(_0x6577f, _0x55afd4=null) {
    const _0x4ceeae = _0x20245d;
    let _0x583674 = window[_0x4ceeae(0x17c)][_0x4ceeae(0x17f)](_0x6577f);
    return _0x583674 == null && _0x55afd4 != null && (_0x583674 = _0x55afd4),
    _0x583674;
}
function initializePuzzle() {
    const _0xadaca0 = _0x20245d;
    movesCounter = getValue(_0xadaca0(0x18c) + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document[_0xadaca0(0x171)](_0xadaca0(0x18c))['innerText'] = movesCounter,
    document[_0xadaca0(0x171)](_0xadaca0(0x18b))[_0xadaca0(0x156)] = gridN == 0x3 ? _0xadaca0(0x158) : _0xadaca0(0x16f),
    document[_0xadaca0(0x171)](_0xadaca0(0x148))[_0xadaca0(0x156)] = gridN == 0x3 ? _0xadaca0(0x190) : 'four',
    document.getElementById('totalDays').innerText = totalDays;    
    userGrid = getValue(_0xadaca0(0x18e) + gridN, ''),
    solveGrid = getValue('solveGrid' + gridN, '');
    if (solveGrid[_0xadaca0(0x157)] > 0x0)
        solveSequence = [...solveGrid[_0xadaca0(0x181)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x17329d = getGridSequence(gridN);
    if (userGrid['length'] > 0x5)
        try {
            idxSequence = [...userGrid[_0xadaca0(0x181)]('$')];
        } catch (_0x2223b4) {
            idxSequence = [..._0x17329d];
        }
    else
        idxSequence = [..._0x17329d];
    for (let _0x302e90 = 0x0; _0x302e90 < idxSequence[_0xadaca0(0x157)]; _0x302e90++) {
        gridSequence[_0xadaca0(0x162)](originalSequence[idxSequence[_0x302e90]]);
    }
    createGrid();
}
function createGrid() {
    const _0x32105d = _0x20245d
      , _0x10b9a3 = document[_0x32105d(0x171)](_0x32105d(0x175));
    document['getElementById'](_0x32105d(0x17a))[_0x32105d(0x156)] = gridN + 'x' + gridN,
    _0x10b9a3[_0x32105d(0x169)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x4f93ac = 0x0; _0x4f93ac < gridN; _0x4f93ac++) {
        const _0x3c773f = document['createElement'](_0x32105d(0x195));
        _0x3c773f[_0x32105d(0x154)] = 'grid-row';
        for (let _0x26cc53 = 0x0; _0x26cc53 < gridN; _0x26cc53++) {
            const _0x2b3e1c = document['createElement']('div');
            _0x2b3e1c['className'] = _0x32105d(0x196) + gridN + '-' + gridN,
            _0x2b3e1c[_0x32105d(0x183)] = gridSequence[_0x4f93ac * gridN + _0x26cc53],
            _0x2b3e1c[_0x32105d(0x159)] = _0x4f93ac * gridN + _0x26cc53,
            _0x2b3e1c[_0x32105d(0x188)](_0x32105d(0x198), handleItemClick),
            _0x2b3e1c[_0x32105d(0x188)](_0x32105d(0x14b), handleTouchStart, {
                'passive': ![]
            }),
            _0x3c773f[_0x32105d(0x16d)](_0x2b3e1c);
        }
        _0x10b9a3[_0x32105d(0x16d)](_0x3c773f);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x4c1d45 = _0x20245d;
    idxSequence = [...Array(gridN * gridN)[_0x4c1d45(0x17d)]()];
    for (let _0x212d72 = gridSequence[_0x4c1d45(0x157)] - 0x1; _0x212d72 > 0x0; _0x212d72--) {
        let _0x2ec10e = _0x212d72;
        while (_0x2ec10e == _0x212d72) {
            _0x2ec10e = Math[_0x4c1d45(0x16b)](Math[_0x4c1d45(0x178)]() * (_0x212d72 + 0x1));
        }
        [gridSequence[_0x212d72],gridSequence[_0x2ec10e]] = [gridSequence[_0x2ec10e], gridSequence[_0x212d72]],
        [idxSequence[_0x212d72],idxSequence[_0x2ec10e]] = [idxSequence[_0x2ec10e], idxSequence[_0x212d72]];
    }
}
function handleItemClick(_0x5cf398) {
    const _0x2d5ed9 = _0x20245d;
    if (_0x5cf398[_0x2d5ed9(0x179)][_0x2d5ed9(0x161)][_0x2d5ed9(0x199)]('disabled'))
        return;
    mindCheckMode = document[_0x2d5ed9(0x171)](_0x2d5ed9(0x18f))[_0x2d5ed9(0x152)];
    if (mindCheckMode)
        selectedItem = _0x5cf398[_0x2d5ed9(0x179)],
        selectedItem[_0x2d5ed9(0x161)][_0x2d5ed9(0x199)](_0x2d5ed9(0x155)) ? selectedItem['classList'][_0x2d5ed9(0x184)](_0x2d5ed9(0x155)) : selectedItem['classList'][_0x2d5ed9(0x15a)]('selected2');
    else {
        if (!selectedItem)
            selectedItem = _0x5cf398[_0x2d5ed9(0x179)],
            selectedItem[_0x2d5ed9(0x161)]['add'](_0x2d5ed9(0x151));
        else
            selectedItem[_0x2d5ed9(0x159)] != _0x5cf398[_0x2d5ed9(0x179)][_0x2d5ed9(0x159)] ? (swapItems(selectedItem, _0x5cf398[_0x2d5ed9(0x179)]),
            selectedItem['classList'][_0x2d5ed9(0x184)](_0x2d5ed9(0x151)),
            selectedItem = null,
            swapMove = !![],
            targetRow = Math[_0x2d5ed9(0x16b)](Number(_0x5cf398[_0x2d5ed9(0x179)][_0x2d5ed9(0x159)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x2d5ed9(0x161)]['remove']('selected'),
            selectedItem = null);
    }
}
function handleTouchStart(_0x24b4fd) {
    _0x24b4fd['preventDefault'](),
    handleItemClick(_0x24b4fd);
}
function swapItems(_0x362220, _0x53b649) {
    const _0x2ad9ea = _0x20245d
      , _0x525a35 = _0x362220[_0x2ad9ea(0x183)];
    gridSequence[_0x362220[_0x2ad9ea(0x159)]] = _0x53b649['textContent'],
    gridSequence[_0x53b649[_0x2ad9ea(0x159)]] = _0x525a35;
    const _0x5f3480 = idxSequence[_0x362220[_0x2ad9ea(0x159)]];
    idxSequence[_0x362220[_0x2ad9ea(0x159)]] = idxSequence[_0x53b649[_0x2ad9ea(0x159)]],
    idxSequence[_0x53b649['tag']] = _0x5f3480,
    _0x362220[_0x2ad9ea(0x183)] = _0x53b649['textContent'],
    _0x53b649[_0x2ad9ea(0x183)] = _0x525a35,
    movesCounter++,
    document[_0x2ad9ea(0x171)]('movesCounter')[_0x2ad9ea(0x156)] = movesCounter;
}
function resetAllData(type) {
    setValue('userGrid' + type, '');
    setValue('solveGrid' + type, '');
    setValue('movesCounter' + type, 0);
}

function resetAllDataAdmin() {
    window.localStorage.clear();
}

function _0xc0df(_0x1782f6, _0x2623d2) {
    const _0x1a3417 = _0x1a34();
    return _0xc0df = function(_0xc0dfd9, _0x823a2a) {
        _0xc0dfd9 = _0xc0dfd9 - 0x148;
        let _0x5a0276 = _0x1a3417[_0xc0dfd9];
        return _0x5a0276;
    }
    ,
    _0xc0df(_0x1782f6, _0x2623d2);
}
function resetLocalStorage() {
    const _0x2da22a = _0x20245d;
    setValue('userGrid' + gridN, ''),
    setValue('movesCounter' + gridN, 0x0),
    setValue('lastPlayed' + gridN, ''),
    setValue(_0x2da22a(0x14c) + gridN, ''),
    setValue('playCount' + gridN, 0x0),
    setValue(_0x2da22a(0x187) + gridN, 0x0),
    setValue(_0x2da22a(0x165) + gridN, 0x0),
    setValue(_0x2da22a(0x185) + gridN, 0x0);
}
function storeGridData() {
    const _0x26ab0b = _0x20245d;
    setValue(_0x26ab0b(0x18e) + gridN, idxSequence[_0x26ab0b(0x14a)]('$')),
    setValue(_0x26ab0b(0x18c) + gridN, movesCounter),
    setValue('solveGrid' + gridN, solveSequence[_0x26ab0b(0x14a)]('$'));
}
function _0x1a34() {
    const _0x47a1ef = ['target', 'gridSize', '6fCDVfd', 'localStorage', 'keys', 'divMindCheck', 'getItem', 'grid-item', 'split', 'getElementsByClassName', 'textContent', 'remove', 'maxStreak', 'grid-row', 'winCount', 'addEventListener', 'map', 'none', 'gridHindi', 'movesCounter', '7281910yCMXcJ', 'userGrid', 'mindCheckToggle', 'three', 'grid-container', 'slice', 'style', '6586180PyKUSk', 'div', 'grid-item\x20grid-item-', 'streakMax', 'click', 'contains', 'pWin', 'gridEng', '8281600oLdSsE', 'join', 'touchstart', 'lastWin', 'abcd', 'max', 'padStart', '8628VCGmyA', 'selected', 'checked', 'from', 'className', 'selected2', 'innerText', 'length', 'तीन', 'tag', 'add', 'forEach', 'parentNode', 'streakCount', 'adminText', 'block', '5312552wrRPvb', 'classList', 'push', '35756600gNQJRn', 'pPlay', 'playStreak', 'disabled', 'rowShare', 'setItem', 'innerHTML', '1674ZEhiGL', 'floor', 'getFullYear', 'appendChild', '9UcRqgG', 'चार', '403022WSxdCR', 'getElementById', 'clear', 'display', 'winSteps', 'grid', 'getMonth', '5FXbOQO', 'random'];
    _0x1a34 = function() {
        return _0x47a1ef;
    }
    ;
    return _0x1a34();
}
function checkRows() {
    const _0xcd6e70 = _0x20245d
      , _0x6cf3c9 = document[_0xcd6e70(0x182)](_0xcd6e70(0x186));
    let _0x2de7dd = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x5b22c8 = 0x0; _0x5b22c8 < _0x6cf3c9[_0xcd6e70(0x157)]; _0x5b22c8++) {
        const _0x218a6d = Array[_0xcd6e70(0x153)](_0x6cf3c9[_0x5b22c8][_0xcd6e70(0x182)](_0xcd6e70(0x180)))
          , _0x8342b4 = _0x218a6d[_0xcd6e70(0x189)](_0x14c371 => _0x14c371[_0xcd6e70(0x183)]);
        for (let _0x1e5b9d = 0x0; _0x1e5b9d <= gridCheck; _0x1e5b9d += gridN) {
            const _0xa2c6cf = originalSequence[_0xcd6e70(0x192)](_0x1e5b9d, _0x1e5b9d + gridN)[_0xcd6e70(0x14a)]('');
            if (_0x8342b4[_0xcd6e70(0x14a)]('') === _0xa2c6cf) {
                _0x218a6d[_0xcd6e70(0x15b)](_0x33e6ce => {
                    const _0x137bd7 = _0xcd6e70;
                    _0x33e6ce['classList']['add']('correct', _0x137bd7(0x166));
                }
                );
                swapMove && _0x5b22c8 == targetRow && (solveSequence[_0xcd6e70(0x162)](movesCounter),
                targetRow = -0x1);
                _0x2de7dd++;
                break;
            }
        }
    }
    ;if (adminFlag) {
        document[_0xcd6e70(0x171)](_0xcd6e70(0x15e))[_0xcd6e70(0x193)][_0xcd6e70(0x173)] = 'block';
        const _0x504e45 = solveSequence[_0xcd6e70(0x192)](Math[_0xcd6e70(0x14e)](solveSequence['length'] - gridN, 0x0));
        document['getElementById'](_0xcd6e70(0x15e))[_0xcd6e70(0x156)] = '',
        _0x504e45[_0xcd6e70(0x15b)]( (_0xa29fde, _0x52b23d) => {
            const _0x323293 = _0xcd6e70;
            document[_0x323293(0x171)](_0x323293(0x15e))['innerText'] += '[' + (_0x52b23d + 0x1) + ':\x20' + _0xa29fde + ']\x20';
        }
        );
    } else
        document[_0xcd6e70(0x171)](_0xcd6e70(0x15e))[_0xcd6e70(0x193)]['display'] = _0xcd6e70(0x18a);
    if (_0x2de7dd === gridN) {
        document[_0xcd6e70(0x171)](_0xcd6e70(0x17e))[_0xcd6e70(0x193)][_0xcd6e70(0x173)] = _0xcd6e70(0x18a),
        document[_0xcd6e70(0x171)](_0xcd6e70(0x167))[_0xcd6e70(0x193)][_0xcd6e70(0x173)] = _0xcd6e70(0x15f),
        document[_0xcd6e70(0x171)](_0xcd6e70(0x19a))[_0xcd6e70(0x193)][_0xcd6e70(0x173)] = 'block',
        document[_0xcd6e70(0x171)](_0xcd6e70(0x164))['style'][_0xcd6e70(0x173)] = _0xcd6e70(0x18a);
        if (swapMove) {
            solveSequence[_0xcd6e70(0x157)] < gridN && solveSequence['push'](movesCounter);
            winCount++;
            const _0x4a0fc4 = getValue('lastWin' + gridN, today);
            dayDiff = getIndex(_0x4a0fc4);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue(_0xcd6e70(0x15d) + gridN, streakCount),
            setValue(_0xcd6e70(0x197) + gridN, streakMax),
            setValue(_0xcd6e70(0x14c) + gridN, today),
            setValue(_0xcd6e70(0x187) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document[_0xcd6e70(0x171)](_0xcd6e70(0x19a))['style']['display'] = _0xcd6e70(0x18a),
        document[_0xcd6e70(0x171)](_0xcd6e70(0x164))['style'][_0xcd6e70(0x173)] = 'block',
        document[_0xcd6e70(0x171)](_0xcd6e70(0x167))[_0xcd6e70(0x193)][_0xcd6e70(0x173)] = 'none',
        document[_0xcd6e70(0x171)]('divMindCheck')[_0xcd6e70(0x193)][_0xcd6e70(0x173)] = _0xcd6e70(0x15f);
    document['getElementById']('winSteps')[_0xcd6e70(0x156)] = '',
    _0x2de7dd > 0x0 && solveSequence['length'] > 0x0 && (document[_0xcd6e70(0x171)](_0xcd6e70(0x174))[_0xcd6e70(0x156)] = createBarChart());
}
function resetGrid() {
    const _0x9eae1c = _0x20245d
      , _0x8b7533 = document[_0x9eae1c(0x171)](_0x9eae1c(0x175))
      , _0x55b8a3 = document['createElement'](_0x9eae1c(0x195));
    _0x55b8a3['id'] = _0x9eae1c(0x175),
    _0x55b8a3[_0x9eae1c(0x161)][_0x9eae1c(0x15a)](_0x9eae1c(0x191)),
    _0x8b7533[_0x9eae1c(0x15c)]['replaceChild'](_0x55b8a3, _0x8b7533),
    grid = _0x55b8a3,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
