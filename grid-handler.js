const _0x1edabe = _0x3141;
(function(_0x354ed8, _0x4d1461) {
    const _0x54e6ec = _0x3141
      , _0x4d9cba = _0x354ed8();
    while (!![]) {
        try {
            const _0x23a38b = parseInt(_0x54e6ec(0x9c)) / 0x1 * (-parseInt(_0x54e6ec(0x86)) / 0x2) + -parseInt(_0x54e6ec(0x8c)) / 0x3 * (parseInt(_0x54e6ec(0xba)) / 0x4) + parseInt(_0x54e6ec(0xac)) / 0x5 * (-parseInt(_0x54e6ec(0x97)) / 0x6) + parseInt(_0x54e6ec(0xc8)) / 0x7 * (parseInt(_0x54e6ec(0xb8)) / 0x8) + -parseInt(_0x54e6ec(0x7e)) / 0x9 * (parseInt(_0x54e6ec(0xab)) / 0xa) + parseInt(_0x54e6ec(0x98)) / 0xb * (-parseInt(_0x54e6ec(0xb2)) / 0xc) + parseInt(_0x54e6ec(0xbb)) / 0xd;
            if (_0x23a38b === _0x4d1461)
                break;
            else
                _0x4d9cba['push'](_0x4d9cba['shift']());
        } catch (_0x2e55f1) {
            _0x4d9cba['push'](_0x4d9cba['shift']());
        }
    }
}(_0x3074, 0x8b10c));
const resetKey = _0x1edabe(0xae);
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
function setValue(_0x49e23c, _0x130160) {
    const _0x570aba = _0x1edabe;
    window[_0x570aba(0xbe)][_0x570aba(0xa3)](_0x49e23c, _0x130160);
}
function getToday() {
    const _0x4cd975 = _0x1edabe
      , _0xeabbb8 = new Date()
      , _0x288a59 = _0xeabbb8[_0x4cd975(0xa2)]()
      , _0x243611 = String(_0xeabbb8['getMonth']() + 0x1)[_0x4cd975(0x87)](0x2, '0')
      , _0x1af929 = String(_0xeabbb8['getDate']())['padStart'](0x2, '0');
    return _0x288a59 + '-' + _0x243611 + '-' + _0x1af929;
}
function getValue(_0x2ed4bc, _0x15da8e=null) {
    const _0x229a5d = _0x1edabe;
    let _0x175d1a = window[_0x229a5d(0xbe)][_0x229a5d(0xa6)](_0x2ed4bc);
    return _0x175d1a == null && _0x15da8e != null && (_0x175d1a = _0x15da8e),
    _0x175d1a;
}
function initializePuzzle() {
    const _0x62b44 = _0x1edabe;
    movesCounter = getValue(_0x62b44(0xad) + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document[_0x62b44(0x9d)]('movesCounter')[_0x62b44(0xa4)] = movesCounter,
    document[_0x62b44(0x9d)](_0x62b44(0xc4))[_0x62b44(0xa4)] = gridN == 0x3 ? 'तीन' : 'चार',
    document[_0x62b44(0x9d)](_0x62b44(0xb7))[_0x62b44(0xa4)] = gridN == 0x3 ? 'three' : _0x62b44(0xb6),
    userGrid = getValue(_0x62b44(0x9a) + gridN, ''),
    solveGrid = getValue('solveGrid' + gridN, '');
    if (solveGrid[_0x62b44(0x85)] > 0x0)
        solveSequence = [...solveGrid[_0x62b44(0x90)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x5e1964 = getGridSequence(gridN);
    if (userGrid[_0x62b44(0x85)] > 0x5)
        try {
            idxSequence = [...userGrid['split']('$')];
        } catch (_0x20819c) {
            idxSequence = [..._0x5e1964];
        }
    else
        idxSequence = [..._0x5e1964];
    for (let _0x1860aa = 0x0; _0x1860aa < idxSequence[_0x62b44(0x85)]; _0x1860aa++) {
        gridSequence[_0x62b44(0xa8)](originalSequence[idxSequence[_0x1860aa]]);
    }
    createGrid();
}
function createGrid() {
    const _0x110b0f = _0x1edabe
      , _0x1bcea6 = document['getElementById']('grid');
    document[_0x110b0f(0x9d)]('gridSize')['innerText'] = gridN + 'x' + gridN,
    _0x1bcea6['innerHTML'] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x5eb578 = 0x0; _0x5eb578 < gridN; _0x5eb578++) {
        const _0x450de2 = document[_0x110b0f(0x88)]('div');
        _0x450de2[_0x110b0f(0xb5)] = 'grid-row';
        for (let _0x10733b = 0x0; _0x10733b < gridN; _0x10733b++) {
            const _0x1c53d8 = document[_0x110b0f(0x88)]('div');
            _0x1c53d8[_0x110b0f(0xb5)] = 'grid-item\x20grid-item-' + gridN + '-' + gridN,
            _0x1c53d8[_0x110b0f(0x8a)] = gridSequence[_0x5eb578 * gridN + _0x10733b],
            _0x1c53d8[_0x110b0f(0x8f)] = _0x5eb578 * gridN + _0x10733b,
            _0x1c53d8[_0x110b0f(0xb1)](_0x110b0f(0xb4), handleItemClick),
            _0x1c53d8[_0x110b0f(0xb1)](_0x110b0f(0x9b), handleTouchStart, {
                'passive': ![]
            }),
            _0x450de2[_0x110b0f(0xbc)](_0x1c53d8);
        }
        _0x1bcea6[_0x110b0f(0xbc)](_0x450de2);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x477226 = _0x1edabe;
    idxSequence = [...Array(gridN * gridN)[_0x477226(0x7f)]()];
    for (let _0x2d5389 = gridSequence['length'] - 0x1; _0x2d5389 > 0x0; _0x2d5389--) {
        let _0x52117b = _0x2d5389;
        while (_0x52117b == _0x2d5389) {
            _0x52117b = Math[_0x477226(0x99)](Math['random']() * (_0x2d5389 + 0x1));
        }
        [gridSequence[_0x2d5389],gridSequence[_0x52117b]] = [gridSequence[_0x52117b], gridSequence[_0x2d5389]],
        [idxSequence[_0x2d5389],idxSequence[_0x52117b]] = [idxSequence[_0x52117b], idxSequence[_0x2d5389]];
    }
}
function handleItemClick(_0x53c825) {
    const _0x3a7146 = _0x1edabe;
    if (_0x53c825[_0x3a7146(0x81)][_0x3a7146(0xa5)][_0x3a7146(0xaf)](_0x3a7146(0x8e)))
        return;
    if (mindCheckMode)
        selectedItem = _0x53c825[_0x3a7146(0x81)],
        selectedItem[_0x3a7146(0xa5)][_0x3a7146(0xaf)](_0x3a7146(0xc5)) ? selectedItem[_0x3a7146(0xa5)][_0x3a7146(0x89)]('selected2') : selectedItem[_0x3a7146(0xa5)][_0x3a7146(0xa0)](_0x3a7146(0xc5));
    else {
        if (!selectedItem)
            selectedItem = _0x53c825[_0x3a7146(0x81)],
            selectedItem['classList'][_0x3a7146(0xa0)](_0x3a7146(0x83));
        else
            selectedItem[_0x3a7146(0x8f)] != _0x53c825[_0x3a7146(0x81)]['tag'] ? (swapItems(selectedItem, _0x53c825[_0x3a7146(0x81)]),
            selectedItem[_0x3a7146(0xa5)]['remove'](_0x3a7146(0x83)),
            selectedItem = null,
            swapMove = !![],
            currRow = Math[_0x3a7146(0x99)](Number(_0x53c825[_0x3a7146(0x81)][_0x3a7146(0x8f)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x3a7146(0xa5)][_0x3a7146(0x89)](_0x3a7146(0x83)),
            selectedItem = null);
    }
}
function handleTouchStart(_0x48d961) {
    const _0xe74b14 = _0x1edabe;
    _0x48d961[_0xe74b14(0x95)](),
    handleItemClick(_0x48d961);
}
function _0x3074() {
    const _0x13212d = ['tag', 'split', 'style', 'div', 'streakMax', 'winSteps', 'preventDefault', 'display', '60XsJzOO', '30998YajrCv', 'floor', 'userGrid', 'touchstart', '1429rSfZcv', 'getElementById', 'grid', 'map', 'add', 'from', 'getFullYear', 'setItem', 'innerText', 'classList', 'getItem', 'rowShare', 'push', 'clear', 'grid-row', '10LSoXPu', '164665XAvvIA', 'movesCounter', 'abcd', 'contains', 'pWin', 'addEventListener', '108VXeecY', 'winCount', 'click', 'className', 'four', 'gridEng', '4382264LzxkwI', '#resetBtn', '1119700kyFThQ', '41169661RARPZC', 'appendChild', 'pPlay', 'localStorage', 'getElementsByClassName', 'replaceChild', 'forEach', 'slice', 'block', 'gridHindi', 'selected2', 'lastWin', 'playStreak', '7YRCOku', '7420941qJQdIv', 'keys', 'grid-container', 'target', 'join', 'selected', 'divMindCheck', 'length', '1576CLLTJB', 'padStart', 'createElement', 'remove', 'textContent', 'none', '9qRjTJK', 'grid-item', 'disabled'];
    _0x3074 = function() {
        return _0x13212d;
    }
    ;
    return _0x3074();
}
function swapItems(_0x3d08b3, _0x41f589) {
    const _0x5d51f2 = _0x1edabe
      , _0x2588a3 = _0x3d08b3['textContent'];
    gridSequence[_0x3d08b3['tag']] = _0x41f589[_0x5d51f2(0x8a)],
    gridSequence[_0x41f589[_0x5d51f2(0x8f)]] = _0x2588a3;
    const _0x47f4ce = idxSequence[_0x3d08b3[_0x5d51f2(0x8f)]];
    idxSequence[_0x3d08b3[_0x5d51f2(0x8f)]] = idxSequence[_0x41f589[_0x5d51f2(0x8f)]],
    idxSequence[_0x41f589['tag']] = _0x47f4ce,
    _0x3d08b3[_0x5d51f2(0x8a)] = _0x41f589[_0x5d51f2(0x8a)],
    _0x41f589['textContent'] = _0x2588a3,
    movesCounter++,
    document[_0x5d51f2(0x9d)](_0x5d51f2(0xad))['innerText'] = movesCounter;
}
function _0x3141(_0x2f79d8, _0x13318e) {
    const _0x3074cf = _0x3074();
    return _0x3141 = function(_0x3141db, _0x4d34f8) {
        _0x3141db = _0x3141db - 0x7e;
        let _0x469a2 = _0x3074cf[_0x3141db];
        return _0x469a2;
    }
    ,
    _0x3141(_0x2f79d8, _0x13318e);
}
function resetAllData() {
    const _0xa01889 = _0x1edabe;
    window[_0xa01889(0xbe)][_0xa01889(0xa9)]();
}
function resetLocalStorage() {
    const _0x4de718 = _0x1edabe;
    setValue(_0x4de718(0x9a) + gridN, ''),
    setValue('movesCounter' + gridN, 0x0),
    setValue('lastPlayed' + gridN, ''),
    setValue(_0x4de718(0xc6) + gridN, ''),
    setValue('playCount' + gridN, 0x0),
    setValue(_0x4de718(0xb3) + gridN, 0x0),
    setValue(_0x4de718(0xc7) + gridN, 0x0),
    setValue('maxStreak' + gridN, 0x0);
}
function storeGridData() {
    const _0x1aee4e = _0x1edabe;
    setValue('userGrid' + gridN, idxSequence['join']('$')),
    setValue(_0x1aee4e(0xad) + gridN, movesCounter),
    setValue('solveGrid' + gridN, solveSequence[_0x1aee4e(0x82)]('$'));
}
function checkRows() {
    const _0x37ea2f = _0x1edabe
      , _0x443ea = document[_0x37ea2f(0xbf)](_0x37ea2f(0xaa));
    let _0x4d1bce = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x4610eb = 0x0; _0x4610eb < _0x443ea[_0x37ea2f(0x85)]; _0x4610eb++) {
        const _0x326ab6 = Array[_0x37ea2f(0xa1)](_0x443ea[_0x4610eb][_0x37ea2f(0xbf)](_0x37ea2f(0x8d)))
          , _0x46da3b = _0x326ab6[_0x37ea2f(0x9f)](_0x3e2227 => _0x3e2227[_0x37ea2f(0x8a)]);
        for (let _0x28836c = 0x0; _0x28836c <= gridCheck; _0x28836c += gridN) {
            const _0x4eb439 = originalSequence[_0x37ea2f(0xc2)](_0x28836c, _0x28836c + gridN)[_0x37ea2f(0x82)]('');
            if (_0x46da3b[_0x37ea2f(0x82)]('') === _0x4eb439) {
                _0x326ab6[_0x37ea2f(0xc1)](_0x4ea94f => {
                    const _0x7b31f3 = _0x37ea2f;
                    _0x4ea94f[_0x7b31f3(0xa5)]['add']('correct', _0x7b31f3(0x8e));
                }
                );
                swapMove && _0x4610eb == currRow && solveSequence[_0x37ea2f(0xa8)](movesCounter);
                _0x4d1bce++;
                break;
            }
        }
    }
    ;if (_0x4d1bce === gridN) {
        document[_0x37ea2f(0x9d)]('divMindCheck')[_0x37ea2f(0x91)]['display'] = _0x37ea2f(0x8b),
        document['getElementById'](_0x37ea2f(0xa7))['style'][_0x37ea2f(0x96)] = _0x37ea2f(0xc3),
        document['getElementById']('pWin')[_0x37ea2f(0x91)]['display'] = _0x37ea2f(0xc3),
        document[_0x37ea2f(0x9d)](_0x37ea2f(0xbd))[_0x37ea2f(0x91)][_0x37ea2f(0x96)] = 'none';
        if (swapMove) {
            solveSequence[_0x37ea2f(0x85)] < gridN && solveSequence[_0x37ea2f(0xa8)](movesCounter);
            winCount++;
            const _0x13d7ff = getValue(_0x37ea2f(0xc6) + gridN, today);
            dayDiff = getIndex(_0x13d7ff);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue('streakCount' + gridN, streakCount),
            setValue(_0x37ea2f(0x93) + gridN, streakMax),
            setValue('lastWin' + gridN, today),
            setValue(_0x37ea2f(0xb3) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document['getElementById'](_0x37ea2f(0xb0))[_0x37ea2f(0x91)][_0x37ea2f(0x96)] = _0x37ea2f(0x8b),
        document['getElementById'](_0x37ea2f(0xbd))['style'][_0x37ea2f(0x96)] = 'block',
        document[_0x37ea2f(0x9d)](_0x37ea2f(0xa7))[_0x37ea2f(0x91)]['display'] = 'none',
        document[_0x37ea2f(0x9d)](_0x37ea2f(0x84))[_0x37ea2f(0x91)]['display'] = _0x37ea2f(0xc3);
    document[_0x37ea2f(0x9d)]('winSteps')[_0x37ea2f(0xa4)] = '',
    _0x4d1bce > 0x0 && solveSequence[_0x37ea2f(0x85)] > 0x0 && (document['getElementById'](_0x37ea2f(0x94))[_0x37ea2f(0xa4)] = createBarChart());
}
$(_0x1edabe(0xb9))[_0x1edabe(0xb4)](function() {
    const _0x4678b5 = _0x1edabe
      , _0x122ac7 = document[_0x4678b5(0x9d)](_0x4678b5(0x9e))
      , _0x2a8d52 = document[_0x4678b5(0x88)](_0x4678b5(0x92));
    _0x2a8d52['id'] = _0x4678b5(0x9e),
    _0x2a8d52[_0x4678b5(0xa5)][_0x4678b5(0xa0)](_0x4678b5(0x80)),
    _0x122ac7['parentNode'][_0x4678b5(0xc0)](_0x2a8d52, _0x122ac7),
    grid = _0x2a8d52,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x1209f4 = _0x1edabe
      , _0x4fc786 = document[_0x1209f4(0x9d)](_0x1209f4(0x9e))
      , _0x420a49 = document['createElement'](_0x1209f4(0x92));
    _0x420a49['id'] = _0x1209f4(0x9e),
    _0x420a49[_0x1209f4(0xa5)]['add'](_0x1209f4(0x80)),
    _0x4fc786['parentNode'][_0x1209f4(0xc0)](_0x420a49, _0x4fc786),
    grid = _0x420a49,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
