const _0x70693 = _0x4fce;
(function(_0x4aad6b, _0x179fdf) {
    const _0xee40c0 = _0x4fce
      , _0x16765c = _0x4aad6b();
    while (!![]) {
        try {
            const _0x3118c3 = parseInt(_0xee40c0(0xbc)) / 0x1 * (parseInt(_0xee40c0(0xad)) / 0x2) + parseInt(_0xee40c0(0xdc)) / 0x3 * (-parseInt(_0xee40c0(0x9f)) / 0x4) + -parseInt(_0xee40c0(0xc3)) / 0x5 * (parseInt(_0xee40c0(0xaa)) / 0x6) + parseInt(_0xee40c0(0xb8)) / 0x7 + -parseInt(_0xee40c0(0xa9)) / 0x8 + -parseInt(_0xee40c0(0xd1)) / 0x9 + parseInt(_0xee40c0(0xb1)) / 0xa;
            if (_0x3118c3 === _0x179fdf)
                break;
            else
                _0x16765c['push'](_0x16765c['shift']());
        } catch (_0x2e5b52) {
            _0x16765c['push'](_0x16765c['shift']());
        }
    }
}(_0x570a, 0x84fb6));
function _0x570a() {
    const _0x3e5d4d = ['push', 'userGrid', 'classList', '17810Ckhlvv', '#resetBtn', 'random', 'from', 'touchstart', 'parentNode', 'grid-container', 'gridEng', 'selected', 'className', 'join', 'block', 'lastPlayed', 'innerHTML', '9727182cMIXaj', 'localStorage', 'createElement', 'split', 'grid-item', 'pPlay', 'replaceChild', 'none', 'contains', 'grid-item\x20grid-item-', 'floor', '94680KCPrdy', 'playStreak', 'disabled', 'length', 'setItem', 'slice', 'playCount', 'getDate', 'keys', 'grid-row', 'movesCounter', 'getItem', 'rowShare', 'click', '124Zxfswl', 'div', 'forEach', 'चार', 'solveGrid', 'getElementsByClassName', 'padStart', 'textContent', 'winCount', 'four', '3527624jZtOfI', '312CtHqMj', 'tag', 'gridSize', '1984292ahFgVw', 'style', 'correct', 'addEventListener', '21901980bqtADl', 'add', 'grid', 'clear', 'display', 'maxStreak', 'getFullYear', '333795XcVnqr', 'innerText', 'getElementById', 'remove', '1RANMou', 'lastWin', 'target', 'winSteps'];
    _0x570a = function() {
        return _0x3e5d4d;
    }
    ;
    return _0x570a();
}
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
  , userGrid = ''
  , solveGrid = ''
  , targetRow = 0x0;
function setValue(_0x536a16, _0x48944f) {
    const _0x562c6b = _0x4fce;
    window[_0x562c6b(0xd2)][_0x562c6b(0xe0)](_0x536a16, _0x48944f);
}
function getToday() {
    const _0x37e088 = _0x4fce
      , _0x13d9e9 = new Date()
      , _0x27bc80 = _0x13d9e9[_0x37e088(0xb7)]()
      , _0x1cd2b = String(_0x13d9e9['getMonth']() + 0x1)[_0x37e088(0xa5)](0x2, '0')
      , _0xc0a6c4 = String(_0x13d9e9[_0x37e088(0xe3)]())['padStart'](0x2, '0');
    return _0x27bc80 + '-' + _0x1cd2b + '-' + _0xc0a6c4;
}
function getValue(_0x950679, _0x1af7d0=null) {
    const _0x130ed0 = _0x4fce;
    let _0x823a40 = window[_0x130ed0(0xd2)][_0x130ed0(0x9c)](_0x950679);
    return _0x823a40 == null && _0x1af7d0 != null && (_0x823a40 = _0x1af7d0),
    _0x823a40;
}
function initializePuzzle() {
    const _0x3f937a = _0x4fce;
    movesCounter = getValue('movesCounter' + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document['getElementById']('movesCounter')[_0x3f937a(0xb9)] = movesCounter,
    document['getElementById']('gridHindi')[_0x3f937a(0xb9)] = gridN == 0x3 ? 'तीन' : _0x3f937a(0xa2),
    document[_0x3f937a(0xba)](_0x3f937a(0xca))[_0x3f937a(0xb9)] = gridN == 0x3 ? 'three' : _0x3f937a(0xa8),
    userGrid = getValue(_0x3f937a(0xc1) + gridN, ''),
    solveGrid = getValue('solveGrid' + gridN, '');
    if (solveGrid['length'] > 0x0)
        solveSequence = [...solveGrid[_0x3f937a(0xd4)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x45da93 = getGridSequence(gridN);
    if (userGrid['length'] > 0x5)
        try {
            idxSequence = [...userGrid[_0x3f937a(0xd4)]('$')];
        } catch (_0x5125e9) {
            idxSequence = [..._0x45da93];
        }
    else
        idxSequence = [..._0x45da93];
    for (let _0x179ece = 0x0; _0x179ece < idxSequence[_0x3f937a(0xdf)]; _0x179ece++) {
        gridSequence[_0x3f937a(0xc0)](originalSequence[idxSequence[_0x179ece]]);
    }
    createGrid();
}
function createGrid() {
    const _0x406eda = _0x4fce
      , _0x676cfc = document['getElementById']('grid');
    document[_0x406eda(0xba)](_0x406eda(0xac))[_0x406eda(0xb9)] = gridN + 'x' + gridN,
    _0x676cfc[_0x406eda(0xd0)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x62fa6f = 0x0; _0x62fa6f < gridN; _0x62fa6f++) {
        const _0x42964f = document[_0x406eda(0xd3)](_0x406eda(0xa0));
        _0x42964f['className'] = _0x406eda(0xe5);
        for (let _0x2586f0 = 0x0; _0x2586f0 < gridN; _0x2586f0++) {
            const _0x1ff542 = document[_0x406eda(0xd3)](_0x406eda(0xa0));
            _0x1ff542[_0x406eda(0xcc)] = _0x406eda(0xda) + gridN + '-' + gridN,
            _0x1ff542[_0x406eda(0xa6)] = gridSequence[_0x62fa6f * gridN + _0x2586f0],
            _0x1ff542[_0x406eda(0xab)] = _0x62fa6f * gridN + _0x2586f0,
            _0x1ff542[_0x406eda(0xb0)]('click', handleItemClick),
            _0x1ff542['addEventListener'](_0x406eda(0xc7), handleTouchStart, {
                'passive': ![]
            }),
            _0x42964f['appendChild'](_0x1ff542);
        }
        _0x676cfc['appendChild'](_0x42964f);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x19dac7 = _0x4fce;
    idxSequence = [...Array(gridN * gridN)[_0x19dac7(0xe4)]()];
    for (let _0xb94f7 = gridSequence[_0x19dac7(0xdf)] - 0x1; _0xb94f7 > 0x0; _0xb94f7--) {
        let _0xb0fd3a = _0xb94f7;
        while (_0xb0fd3a == _0xb94f7) {
            _0xb0fd3a = Math['floor'](Math[_0x19dac7(0xc5)]() * (_0xb94f7 + 0x1));
        }
        [gridSequence[_0xb94f7],gridSequence[_0xb0fd3a]] = [gridSequence[_0xb0fd3a], gridSequence[_0xb94f7]],
        [idxSequence[_0xb94f7],idxSequence[_0xb0fd3a]] = [idxSequence[_0xb0fd3a], idxSequence[_0xb94f7]];
    }
}
function handleItemClick(_0xdd194) {
    const _0x304693 = _0x4fce;
    if (_0xdd194['target'][_0x304693(0xc2)][_0x304693(0xd9)](_0x304693(0xde)))
        return;
    if (mindCheckMode)
        selectedItem = _0xdd194[_0x304693(0xbe)],
        selectedItem['classList'][_0x304693(0xd9)]('selected2') ? selectedItem['classList'][_0x304693(0xbb)]('selected2') : selectedItem[_0x304693(0xc2)]['add']('selected2');
    else {
        if (!selectedItem)
            selectedItem = _0xdd194['target'],
            selectedItem[_0x304693(0xc2)][_0x304693(0xb2)]('selected');
        else
            selectedItem['tag'] != _0xdd194[_0x304693(0xbe)][_0x304693(0xab)] ? (swapItems(selectedItem, _0xdd194['target']),
            selectedItem[_0x304693(0xc2)]['remove'](_0x304693(0xcb)),
            selectedItem = null,
            swapMove = !![],
            targetRow = Math[_0x304693(0xdb)](Number(_0xdd194[_0x304693(0xbe)][_0x304693(0xab)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x304693(0xc2)][_0x304693(0xbb)]('selected'),
            selectedItem = null);
    }
}
function handleTouchStart(_0x55df90) {
    _0x55df90['preventDefault'](),
    handleItemClick(_0x55df90);
}
function swapItems(_0x1919dd, _0x4bd56d) {
    const _0x406090 = _0x4fce
      , _0x559d2b = _0x1919dd[_0x406090(0xa6)];
    gridSequence[_0x1919dd[_0x406090(0xab)]] = _0x4bd56d['textContent'],
    gridSequence[_0x4bd56d[_0x406090(0xab)]] = _0x559d2b;
    const _0x4c7d73 = idxSequence[_0x1919dd[_0x406090(0xab)]];
    idxSequence[_0x1919dd[_0x406090(0xab)]] = idxSequence[_0x4bd56d[_0x406090(0xab)]],
    idxSequence[_0x4bd56d[_0x406090(0xab)]] = _0x4c7d73,
    _0x1919dd[_0x406090(0xa6)] = _0x4bd56d[_0x406090(0xa6)],
    _0x4bd56d[_0x406090(0xa6)] = _0x559d2b,
    movesCounter++,
    document[_0x406090(0xba)](_0x406090(0x9b))[_0x406090(0xb9)] = movesCounter;
}
function resetAllData() {
    const _0x1b3466 = _0x4fce;
    window[_0x1b3466(0xd2)][_0x1b3466(0xb4)]();
}
function _0x4fce(_0x202fac, _0x1c856a) {
    const _0x570a64 = _0x570a();
    return _0x4fce = function(_0x4fce8e, _0x296a62) {
        _0x4fce8e = _0x4fce8e - 0x9b;
        let _0x51b5b3 = _0x570a64[_0x4fce8e];
        return _0x51b5b3;
    }
    ,
    _0x4fce(_0x202fac, _0x1c856a);
}
function resetLocalStorage() {
    const _0xe5880 = _0x4fce;
    setValue(_0xe5880(0xc1) + gridN, ''),
    setValue(_0xe5880(0x9b) + gridN, 0x0),
    setValue(_0xe5880(0xcf) + gridN, ''),
    setValue(_0xe5880(0xbd) + gridN, ''),
    setValue(_0xe5880(0xe2) + gridN, 0x0),
    setValue('winCount' + gridN, 0x0),
    setValue(_0xe5880(0xdd) + gridN, 0x0),
    setValue(_0xe5880(0xb6) + gridN, 0x0);
}
function storeGridData() {
    const _0x3e5853 = _0x4fce;
    setValue(_0x3e5853(0xc1) + gridN, idxSequence[_0x3e5853(0xcd)]('$')),
    setValue(_0x3e5853(0x9b) + gridN, movesCounter),
    setValue(_0x3e5853(0xa3) + gridN, solveSequence[_0x3e5853(0xcd)]('$'));
}
function checkRows() {
    const _0x5b3975 = _0x4fce
      , _0x26b8cd = document[_0x5b3975(0xa4)](_0x5b3975(0xe5));
    let _0x907da9 = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x3a455f = 0x0; _0x3a455f < _0x26b8cd['length']; _0x3a455f++) {
        const _0x15a316 = Array[_0x5b3975(0xc6)](_0x26b8cd[_0x3a455f][_0x5b3975(0xa4)](_0x5b3975(0xd5)))
          , _0x235361 = _0x15a316['map'](_0x557fa8 => _0x557fa8[_0x5b3975(0xa6)]);
        for (let _0x44ab7e = 0x0; _0x44ab7e <= gridCheck; _0x44ab7e += gridN) {
            const _0x4123d9 = originalSequence[_0x5b3975(0xe1)](_0x44ab7e, _0x44ab7e + gridN)[_0x5b3975(0xcd)]('');
            if (_0x235361[_0x5b3975(0xcd)]('') === _0x4123d9) {
                _0x15a316[_0x5b3975(0xa1)](_0x183a3e => {
                    const _0x50c3ea = _0x5b3975;
                    _0x183a3e[_0x50c3ea(0xc2)]['add'](_0x50c3ea(0xaf), _0x50c3ea(0xde));
                }
                );
                if (swapMove && _0x3a455f == targetRow) {
                    if (_0x907da9 == 0x0)
                        solveSequence = [];
                    solveSequence[_0x5b3975(0xc0)](movesCounter),
                    targetRow = -0x1;
                }
                _0x907da9++;
                break;
            }
        }
    }
    ;if (_0x907da9 === gridN) {
        document['getElementById']('divMindCheck')[_0x5b3975(0xae)][_0x5b3975(0xb5)] = _0x5b3975(0xd8),
        document[_0x5b3975(0xba)](_0x5b3975(0x9d))[_0x5b3975(0xae)][_0x5b3975(0xb5)] = 'block',
        document[_0x5b3975(0xba)]('pWin')[_0x5b3975(0xae)][_0x5b3975(0xb5)] = _0x5b3975(0xce),
        document['getElementById']('pPlay')['style'][_0x5b3975(0xb5)] = _0x5b3975(0xd8);
        if (swapMove) {
            solveSequence[_0x5b3975(0xdf)] < gridN && solveSequence[_0x5b3975(0xc0)](movesCounter);
            winCount++;
            const _0x2eaf01 = getValue(_0x5b3975(0xbd) + gridN, today);
            dayDiff = getIndex(_0x2eaf01);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue('streakCount' + gridN, streakCount),
            setValue('streakMax' + gridN, streakMax),
            setValue('lastWin' + gridN, today),
            setValue(_0x5b3975(0xa7) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document[_0x5b3975(0xba)]('pWin')[_0x5b3975(0xae)][_0x5b3975(0xb5)] = _0x5b3975(0xd8),
        document[_0x5b3975(0xba)](_0x5b3975(0xd6))['style']['display'] = _0x5b3975(0xce),
        document[_0x5b3975(0xba)]('rowShare')[_0x5b3975(0xae)]['display'] = _0x5b3975(0xd8),
        document['getElementById']('divMindCheck')[_0x5b3975(0xae)][_0x5b3975(0xb5)] = _0x5b3975(0xce);
    document['getElementById'](_0x5b3975(0xbf))[_0x5b3975(0xb9)] = '',
    _0x907da9 > 0x0 && solveSequence[_0x5b3975(0xdf)] > 0x0 && (document[_0x5b3975(0xba)]('winSteps')[_0x5b3975(0xb9)] = createBarChart());
}
$(_0x70693(0xc4))[_0x70693(0x9e)](function() {
    const _0x56e12c = _0x70693
      , _0x19a0f6 = document['getElementById'](_0x56e12c(0xb3))
      , _0x7ec1c0 = document['createElement'](_0x56e12c(0xa0));
    _0x7ec1c0['id'] = _0x56e12c(0xb3),
    _0x7ec1c0[_0x56e12c(0xc2)][_0x56e12c(0xb2)](_0x56e12c(0xc9)),
    _0x19a0f6[_0x56e12c(0xc8)][_0x56e12c(0xd7)](_0x7ec1c0, _0x19a0f6),
    grid = _0x7ec1c0,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x12f070 = _0x70693
      , _0x2c0772 = document['getElementById'](_0x12f070(0xb3))
      , _0x2a1685 = document[_0x12f070(0xd3)](_0x12f070(0xa0));
    _0x2a1685['id'] = _0x12f070(0xb3),
    _0x2a1685[_0x12f070(0xc2)]['add'](_0x12f070(0xc9)),
    _0x2c0772[_0x12f070(0xc8)]['replaceChild'](_0x2a1685, _0x2c0772),
    grid = _0x2a1685,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
