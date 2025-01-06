const _0x181d14 = _0x59cb;
(function(_0x16ca79, _0x2ac76c) {
    const _0x42b415 = _0x59cb
      , _0x57de4a = _0x16ca79();
    while (!![]) {
        try {
            const _0x22d65d = -parseInt(_0x42b415(0x18a)) / 0x1 * (-parseInt(_0x42b415(0x15c)) / 0x2) + -parseInt(_0x42b415(0x160)) / 0x3 + parseInt(_0x42b415(0x179)) / 0x4 * (-parseInt(_0x42b415(0x191)) / 0x5) + parseInt(_0x42b415(0x196)) / 0x6 * (parseInt(_0x42b415(0x180)) / 0x7) + parseInt(_0x42b415(0x17a)) / 0x8 + -parseInt(_0x42b415(0x178)) / 0x9 + -parseInt(_0x42b415(0x193)) / 0xa * (-parseInt(_0x42b415(0x14f)) / 0xb);
            if (_0x22d65d === _0x2ac76c)
                break;
            else
                _0x57de4a['push'](_0x57de4a['shift']());
        } catch (_0x37742c) {
            _0x57de4a['push'](_0x57de4a['shift']());
        }
    }
}(_0x141c, 0xaedb5));
const resetKey = _0x181d14(0x195);
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
function setValue(_0x31f6bd, _0x3775a0) {
    const _0x4a86bc = _0x181d14;
    window[_0x4a86bc(0x185)][_0x4a86bc(0x189)](_0x31f6bd, _0x3775a0);
}
function getToday() {
    const _0x457bc9 = _0x181d14
      , _0x22bf86 = new Date()
      , _0x110030 = _0x22bf86[_0x457bc9(0x150)]()
      , _0x4f1bda = String(_0x22bf86['getMonth']() + 0x1)[_0x457bc9(0x14e)](0x2, '0')
      , _0x4d2494 = String(_0x22bf86[_0x457bc9(0x18e)]())['padStart'](0x2, '0');
    return _0x110030 + '-' + _0x4f1bda + '-' + _0x4d2494;
}
function getValue(_0x34e76e, _0x1f8c7a=null) {
    const _0x5199d6 = _0x181d14;
    let _0x504313 = window[_0x5199d6(0x185)][_0x5199d6(0x192)](_0x34e76e);
    return _0x504313 == null && _0x1f8c7a != null && (_0x504313 = _0x1f8c7a),
    _0x504313;
}
function initializePuzzle() {
    const _0x11ca10 = _0x181d14;
    movesCounter = getValue(_0x11ca10(0x16b) + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document[_0x11ca10(0x16a)](_0x11ca10(0x16b))['innerText'] = movesCounter,
    document[_0x11ca10(0x16a)](_0x11ca10(0x16e))[_0x11ca10(0x186)] = gridN == 0x3 ? _0x11ca10(0x155) : _0x11ca10(0x164),
    document[_0x11ca10(0x16a)]('gridEng')[_0x11ca10(0x186)] = gridN == 0x3 ? _0x11ca10(0x152) : 'four',
    userGrid = getValue(_0x11ca10(0x169) + gridN, ''),
    solveGrid = getValue(_0x11ca10(0x14d) + gridN, '');
    if (solveGrid[_0x11ca10(0x17e)] > 0x0)
        solveSequence = [...solveGrid[_0x11ca10(0x184)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x1bd798 = getGridSequence(gridN);
    if (userGrid[_0x11ca10(0x17e)] > 0x5)
        try {
            idxSequence = [...userGrid[_0x11ca10(0x184)]('$')];
        } catch (_0x2a3c39) {
            idxSequence = [..._0x1bd798];
        }
    else
        idxSequence = [..._0x1bd798];
    for (let _0x4b956e = 0x0; _0x4b956e < idxSequence[_0x11ca10(0x17e)]; _0x4b956e++) {
        gridSequence[_0x11ca10(0x15f)](originalSequence[idxSequence[_0x4b956e]]);
    }
    createGrid();
}
function createGrid() {
    const _0x192834 = _0x181d14
      , _0x165d76 = document[_0x192834(0x16a)](_0x192834(0x158));
    document[_0x192834(0x16a)](_0x192834(0x17d))[_0x192834(0x186)] = gridN + 'x' + gridN,
    _0x165d76['innerHTML'] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x59f575 = 0x0; _0x59f575 < gridN; _0x59f575++) {
        const _0x44dee9 = document[_0x192834(0x194)](_0x192834(0x17f));
        _0x44dee9[_0x192834(0x18c)] = _0x192834(0x188);
        for (let _0x4785a5 = 0x0; _0x4785a5 < gridN; _0x4785a5++) {
            const _0x32f0b2 = document[_0x192834(0x194)](_0x192834(0x17f));
            _0x32f0b2[_0x192834(0x18c)] = _0x192834(0x151) + gridN + '-' + gridN,
            _0x32f0b2[_0x192834(0x15e)] = gridSequence[_0x59f575 * gridN + _0x4785a5],
            _0x32f0b2[_0x192834(0x167)] = _0x59f575 * gridN + _0x4785a5,
            _0x32f0b2[_0x192834(0x170)]('click', handleItemClick),
            _0x32f0b2[_0x192834(0x170)](_0x192834(0x16d), handleTouchStart, {
                'passive': ![]
            }),
            _0x44dee9[_0x192834(0x166)](_0x32f0b2);
        }
        _0x165d76['appendChild'](_0x44dee9);
    }
    storeGridData(),
    checkRows();
}
function _0x59cb(_0x18d10a, _0x5d4acc) {
    const _0x141cd9 = _0x141c();
    return _0x59cb = function(_0x59cb46, _0x52ed0c) {
        _0x59cb46 = _0x59cb46 - 0x14d;
        let _0x30a7f7 = _0x141cd9[_0x59cb46];
        return _0x30a7f7;
    }
    ,
    _0x59cb(_0x18d10a, _0x5d4acc);
}
function shuffleArray() {
    const _0x8a5c9a = _0x181d14;
    idxSequence = [...Array(gridN * gridN)[_0x8a5c9a(0x16c)]()];
    for (let _0x10e886 = gridSequence['length'] - 0x1; _0x10e886 > 0x0; _0x10e886--) {
        let _0x4bfac2 = _0x10e886;
        while (_0x4bfac2 == _0x10e886) {
            _0x4bfac2 = Math[_0x8a5c9a(0x17b)](Math[_0x8a5c9a(0x15a)]() * (_0x10e886 + 0x1));
        }
        [gridSequence[_0x10e886],gridSequence[_0x4bfac2]] = [gridSequence[_0x4bfac2], gridSequence[_0x10e886]],
        [idxSequence[_0x10e886],idxSequence[_0x4bfac2]] = [idxSequence[_0x4bfac2], idxSequence[_0x10e886]];
    }
}
function handleItemClick(_0xe245a1) {
    const _0x178082 = _0x181d14;
    if (_0xe245a1[_0x178082(0x168)][_0x178082(0x16f)][_0x178082(0x159)](_0x178082(0x156)))
        return;
    if (mindCheckMode)
        selectedItem = _0xe245a1[_0x178082(0x168)],
        selectedItem[_0x178082(0x16f)][_0x178082(0x159)]('selected2') ? selectedItem[_0x178082(0x16f)]['remove']('selected2') : selectedItem[_0x178082(0x16f)][_0x178082(0x165)](_0x178082(0x181));
    else {
        if (!selectedItem)
            selectedItem = _0xe245a1[_0x178082(0x168)],
            selectedItem[_0x178082(0x16f)][_0x178082(0x165)](_0x178082(0x175));
        else
            selectedItem[_0x178082(0x167)] != _0xe245a1[_0x178082(0x168)][_0x178082(0x167)] ? (swapItems(selectedItem, _0xe245a1['target']),
            selectedItem[_0x178082(0x16f)][_0x178082(0x17c)](_0x178082(0x175)),
            selectedItem = null,
            swapMove = !![],
            targetRow = Math[_0x178082(0x17b)](Number(_0xe245a1[_0x178082(0x168)][_0x178082(0x167)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x178082(0x16f)][_0x178082(0x17c)]('selected'),
            selectedItem = null);
    }
}
function handleTouchStart(_0x543a81) {
    const _0xe21aa3 = _0x181d14;
    _0x543a81[_0xe21aa3(0x18b)](),
    handleItemClick(_0x543a81);
}
function swapItems(_0x575192, _0x48910e) {
    const _0x379f83 = _0x181d14
      , _0x2ff862 = _0x575192[_0x379f83(0x15e)];
    gridSequence[_0x575192[_0x379f83(0x167)]] = _0x48910e['textContent'],
    gridSequence[_0x48910e[_0x379f83(0x167)]] = _0x2ff862;
    const _0x55ba40 = idxSequence[_0x575192[_0x379f83(0x167)]];
    idxSequence[_0x575192['tag']] = idxSequence[_0x48910e[_0x379f83(0x167)]],
    idxSequence[_0x48910e['tag']] = _0x55ba40,
    _0x575192[_0x379f83(0x15e)] = _0x48910e[_0x379f83(0x15e)],
    _0x48910e[_0x379f83(0x15e)] = _0x2ff862,
    movesCounter++,
    document[_0x379f83(0x16a)](_0x379f83(0x16b))[_0x379f83(0x186)] = movesCounter;
}
function resetAllData() {
    const _0x144683 = _0x181d14;
    window[_0x144683(0x185)]['clear']();
}
function resetLocalStorage() {
    const _0x5edf3d = _0x181d14;
    setValue(_0x5edf3d(0x169) + gridN, ''),
    setValue(_0x5edf3d(0x16b) + gridN, 0x0),
    setValue('lastPlayed' + gridN, ''),
    setValue('lastWin' + gridN, ''),
    setValue('playCount' + gridN, 0x0),
    setValue('winCount' + gridN, 0x0),
    setValue('playStreak' + gridN, 0x0),
    setValue('maxStreak' + gridN, 0x0);
}
function storeGridData() {
    const _0x259c88 = _0x181d14;
    setValue(_0x259c88(0x169) + gridN, idxSequence[_0x259c88(0x171)]('$')),
    setValue(_0x259c88(0x16b) + gridN, movesCounter),
    setValue(_0x259c88(0x14d) + gridN, solveSequence[_0x259c88(0x171)]('$'));
}
function checkRows() {
    const _0x5cf327 = _0x181d14
      , _0x1ca80b = document[_0x5cf327(0x161)](_0x5cf327(0x188));
    let _0x48e214 = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x4d606b = 0x0; _0x4d606b < _0x1ca80b[_0x5cf327(0x17e)]; _0x4d606b++) {
        const _0x1bebdf = Array[_0x5cf327(0x173)](_0x1ca80b[_0x4d606b]['getElementsByClassName'](_0x5cf327(0x198)))
          , _0x8e49b9 = _0x1bebdf[_0x5cf327(0x153)](_0xacc20a => _0xacc20a[_0x5cf327(0x15e)]);
        for (let _0x1e0874 = 0x0; _0x1e0874 <= gridCheck; _0x1e0874 += gridN) {
            const _0x867236 = originalSequence[_0x5cf327(0x176)](_0x1e0874, _0x1e0874 + gridN)['join']('');
            if (_0x8e49b9[_0x5cf327(0x171)]('') === _0x867236) {
                _0x1bebdf['forEach'](_0x32018c => {
                    const _0x5cd07d = _0x5cf327;
                    _0x32018c[_0x5cd07d(0x16f)]['add']('correct', 'disabled');
                }
                );
                swapMove && _0x4d606b == targetRow && (solveSequence[_0x5cf327(0x15f)](movesCounter),
                targetRow = -0x1);
                _0x48e214++;
                break;
            }
        }
    }
    ;if (_0x48e214 === gridN) {
        document[_0x5cf327(0x16a)](_0x5cf327(0x172))[_0x5cf327(0x162)]['display'] = 'none',
        document[_0x5cf327(0x16a)]('rowShare')[_0x5cf327(0x162)][_0x5cf327(0x157)] = 'block',
        document[_0x5cf327(0x16a)]('pWin')['style'][_0x5cf327(0x157)] = _0x5cf327(0x197),
        document[_0x5cf327(0x16a)](_0x5cf327(0x190))[_0x5cf327(0x162)][_0x5cf327(0x157)] = _0x5cf327(0x154);
        if (swapMove) {
            solveSequence['length'] < gridN && solveSequence[_0x5cf327(0x15f)](movesCounter);
            winCount++;
            const _0x190fd5 = getValue(_0x5cf327(0x177) + gridN, today);
            dayDiff = getIndex(_0x190fd5);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue('streakCount' + gridN, streakCount),
            setValue(_0x5cf327(0x18f) + gridN, streakMax),
            setValue('lastWin' + gridN, today),
            setValue(_0x5cf327(0x174) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document[_0x5cf327(0x16a)](_0x5cf327(0x18d))[_0x5cf327(0x162)][_0x5cf327(0x157)] = _0x5cf327(0x154),
        document[_0x5cf327(0x16a)](_0x5cf327(0x190))['style'][_0x5cf327(0x157)] = _0x5cf327(0x197),
        document[_0x5cf327(0x16a)]('rowShare')[_0x5cf327(0x162)][_0x5cf327(0x157)] = _0x5cf327(0x154),
        document['getElementById'](_0x5cf327(0x172))[_0x5cf327(0x162)][_0x5cf327(0x157)] = 'block';
    document['getElementById'](_0x5cf327(0x183))[_0x5cf327(0x186)] = '',
    _0x48e214 > 0x0 && solveSequence[_0x5cf327(0x17e)] > 0x0 && (document[_0x5cf327(0x16a)](_0x5cf327(0x183))[_0x5cf327(0x186)] = createBarChart());
}
$(_0x181d14(0x15d))[_0x181d14(0x182)](function() {
    const _0x5b74d8 = _0x181d14
      , _0x19fd77 = document['getElementById']('grid')
      , _0x4352ed = document['createElement'](_0x5b74d8(0x17f));
    _0x4352ed['id'] = 'grid',
    _0x4352ed[_0x5b74d8(0x16f)]['add']('grid-container'),
    _0x19fd77[_0x5b74d8(0x187)][_0x5b74d8(0x15b)](_0x4352ed, _0x19fd77),
    grid = _0x4352ed,
    selectedItem = null,
    createGrid();
});
function _0x141c() {
    const _0x1b0811 = ['grid-item', 'solveGrid', 'padStart', '8141573jqllFU', 'getFullYear', 'grid-item\x20grid-item-', 'three', 'map', 'none', 'तीन', 'disabled', 'display', 'grid', 'contains', 'random', 'replaceChild', '14GmzWdx', '#resetBtn', 'textContent', 'push', '2600268mSMhNT', 'getElementsByClassName', 'style', 'grid-container', 'चार', 'add', 'appendChild', 'tag', 'target', 'userGrid', 'getElementById', 'movesCounter', 'keys', 'touchstart', 'gridHindi', 'classList', 'addEventListener', 'join', 'divMindCheck', 'from', 'winCount', 'selected', 'slice', 'lastWin', '8733645wVAcna', '152ZcrAuP', '9212016esRBpY', 'floor', 'remove', 'gridSize', 'length', 'div', '63GOOIvW', 'selected2', 'click', 'winSteps', 'split', 'localStorage', 'innerText', 'parentNode', 'grid-row', 'setItem', '43210wZZCNR', 'preventDefault', 'className', 'pWin', 'getDate', 'streakMax', 'pPlay', '123805IKUHrw', 'getItem', '20HoXiBw', 'createElement', 'abcd', '373356QggyXf', 'block'];
    _0x141c = function() {
        return _0x1b0811;
    }
    ;
    return _0x141c();
}
function resetGrid() {
    const _0x1f301f = _0x181d14
      , _0x20a763 = document[_0x1f301f(0x16a)]('grid')
      , _0xff6c70 = document[_0x1f301f(0x194)](_0x1f301f(0x17f));
    _0xff6c70['id'] = _0x1f301f(0x158),
    _0xff6c70[_0x1f301f(0x16f)][_0x1f301f(0x165)](_0x1f301f(0x163)),
    _0x20a763[_0x1f301f(0x187)]['replaceChild'](_0xff6c70, _0x20a763),
    grid = _0xff6c70,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
