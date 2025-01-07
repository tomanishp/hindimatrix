const _0x36847d = _0x2644;
(function(_0xbe10c7, _0x57e88b) {
    const _0x184317 = _0x2644
      , _0x2b7958 = _0xbe10c7();
    while (!![]) {
        try {
            const _0x4e87b6 = parseInt(_0x184317(0x1cd)) / 0x1 + parseInt(_0x184317(0x1f0)) / 0x2 + -parseInt(_0x184317(0x1fc)) / 0x3 + -parseInt(_0x184317(0x1d9)) / 0x4 + parseInt(_0x184317(0x1cc)) / 0x5 * (parseInt(_0x184317(0x1f2)) / 0x6) + -parseInt(_0x184317(0x1c4)) / 0x7 + parseInt(_0x184317(0x1c0)) / 0x8;
            if (_0x4e87b6 === _0x57e88b)
                break;
            else
                _0x2b7958['push'](_0x2b7958['shift']());
        } catch (_0x2d8c99) {
            _0x2b7958['push'](_0x2b7958['shift']());
        }
    }
}(_0x4dc6, 0xba0ca));
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
function setValue(_0x5266ec, _0x527e99) {
    const _0x862411 = _0x2644;
    window[_0x862411(0x1ba)][_0x862411(0x200)](_0x5266ec, _0x527e99);
}
function getToday() {
    const _0x194839 = _0x2644
      , _0x3fa635 = new Date()
      , _0x2bf9be = _0x3fa635[_0x194839(0x1fb)]()
      , _0x293fe6 = String(_0x3fa635[_0x194839(0x1f8)]() + 0x1)['padStart'](0x2, '0')
      , _0x29c9fa = String(_0x3fa635['getDate']())[_0x194839(0x1c9)](0x2, '0');
    return _0x2bf9be + '-' + _0x293fe6 + '-' + _0x29c9fa;
}
function getValue(_0x18023d, _0x9808ab=null) {
    const _0x327020 = _0x2644;
    let _0x100950 = window[_0x327020(0x1ba)][_0x327020(0x1d3)](_0x18023d);
    return _0x100950 == null && _0x9808ab != null && (_0x100950 = _0x9808ab),
    _0x100950;
}
function _0x2644(_0x790554, _0x152ac7) {
    const _0x4dc681 = _0x4dc6();
    return _0x2644 = function(_0x264464, _0x30cd4c) {
        _0x264464 = _0x264464 - 0x1ba;
        let _0x5a69d1 = _0x4dc681[_0x264464];
        return _0x5a69d1;
    }
    ,
    _0x2644(_0x790554, _0x152ac7);
}
function initializePuzzle() {
    const _0xeb1ce0 = _0x2644;
    movesCounter = getValue(_0xeb1ce0(0x1c3) + gridN, 0x0),
    userGrid = '',
    solveGrid = '',
    gridSequence = [],
    solveSequence = [],
    document['getElementById'](_0xeb1ce0(0x1c3))[_0xeb1ce0(0x1bf)] = movesCounter,
    document['getElementById'](_0xeb1ce0(0x1e8))['innerText'] = gridN == 0x3 ? _0xeb1ce0(0x1bb) : _0xeb1ce0(0x1ff),
    document[_0xeb1ce0(0x1df)](_0xeb1ce0(0x1d8))[_0xeb1ce0(0x1bf)] = gridN == 0x3 ? _0xeb1ce0(0x1c7) : 'four',
    userGrid = getValue(_0xeb1ce0(0x1e9) + gridN, ''),
    solveGrid = getValue(_0xeb1ce0(0x1dc) + gridN, '');
    if (solveGrid[_0xeb1ce0(0x1da)] > 0x0)
        solveSequence = [...solveGrid['split']('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x5c756c = getGridSequence(gridN);
    if (userGrid[_0xeb1ce0(0x1da)] > 0x5)
        try {
            idxSequence = [...userGrid[_0xeb1ce0(0x1e2)]('$')];
        } catch (_0x4f0e2f) {
            idxSequence = [..._0x5c756c];
        }
    else
        idxSequence = [..._0x5c756c];
    for (let _0x1c05d2 = 0x0; _0x1c05d2 < idxSequence[_0xeb1ce0(0x1da)]; _0x1c05d2++) {
        gridSequence['push'](originalSequence[idxSequence[_0x1c05d2]]);
    }
    createGrid();
}
function createGrid() {
    const _0x35954f = _0x2644
      , _0x32c442 = document[_0x35954f(0x1df)]('grid');
    document['getElementById'](_0x35954f(0x1dd))[_0x35954f(0x1bf)] = gridN + 'x' + gridN,
    _0x32c442[_0x35954f(0x1d4)] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x239d13 = 0x0; _0x239d13 < gridN; _0x239d13++) {
        const _0x37c516 = document[_0x35954f(0x1f9)](_0x35954f(0x1e0));
        _0x37c516[_0x35954f(0x1ee)] = _0x35954f(0x1fa);
        for (let _0x4848a9 = 0x0; _0x4848a9 < gridN; _0x4848a9++) {
            const _0x2b06f7 = document['createElement']('div');
            _0x2b06f7[_0x35954f(0x1ee)] = 'grid-item\x20grid-item-' + gridN + '-' + gridN,
            _0x2b06f7[_0x35954f(0x1fd)] = gridSequence[_0x239d13 * gridN + _0x4848a9],
            _0x2b06f7[_0x35954f(0x1e3)] = _0x239d13 * gridN + _0x4848a9,
            _0x2b06f7[_0x35954f(0x1c1)](_0x35954f(0x202), handleItemClick),
            _0x2b06f7[_0x35954f(0x1c1)](_0x35954f(0x1e7), handleTouchStart, {
                'passive': ![]
            }),
            _0x37c516['appendChild'](_0x2b06f7);
        }
        _0x32c442[_0x35954f(0x1f5)](_0x37c516);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x27f87 = _0x2644;
    idxSequence = [...Array(gridN * gridN)[_0x27f87(0x1fe)]()];
    for (let _0x1e92ed = gridSequence[_0x27f87(0x1da)] - 0x1; _0x1e92ed > 0x0; _0x1e92ed--) {
        let _0x3c18e3 = _0x1e92ed;
        while (_0x3c18e3 == _0x1e92ed) {
            _0x3c18e3 = Math[_0x27f87(0x1f1)](Math['random']() * (_0x1e92ed + 0x1));
        }
        [gridSequence[_0x1e92ed],gridSequence[_0x3c18e3]] = [gridSequence[_0x3c18e3], gridSequence[_0x1e92ed]],
        [idxSequence[_0x1e92ed],idxSequence[_0x3c18e3]] = [idxSequence[_0x3c18e3], idxSequence[_0x1e92ed]];
    }
}
function handleItemClick(_0x5d659e) {
    const _0x16b127 = _0x2644;
    if (_0x5d659e['target'][_0x16b127(0x1f3)]['contains'](_0x16b127(0x1f4)))
        return;
    if (mindCheckMode)
        selectedItem = _0x5d659e['target'],
        selectedItem[_0x16b127(0x1f3)]['contains']('selected2') ? selectedItem[_0x16b127(0x1f3)][_0x16b127(0x1e5)](_0x16b127(0x1d7)) : selectedItem[_0x16b127(0x1f3)]['add']('selected2');
    else {
        if (!selectedItem)
            selectedItem = _0x5d659e['target'],
            selectedItem[_0x16b127(0x1f3)][_0x16b127(0x1ce)]('selected');
        else
            selectedItem[_0x16b127(0x1e3)] != _0x5d659e['target'][_0x16b127(0x1e3)] ? (swapItems(selectedItem, _0x5d659e[_0x16b127(0x1c2)]),
            selectedItem['classList']['remove'](_0x16b127(0x1eb)),
            selectedItem = null,
            swapMove = !![],
            targetRow = Math[_0x16b127(0x1f1)](Number(_0x5d659e[_0x16b127(0x1c2)][_0x16b127(0x1e3)]) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x16b127(0x1f3)]['remove']('selected'),
            selectedItem = null);
    }
}
function handleTouchStart(_0x1cf556) {
    const _0x3b59ad = _0x2644;
    _0x1cf556[_0x3b59ad(0x1d0)](),
    handleItemClick(_0x1cf556);
}
function swapItems(_0x51d3c3, _0x52c089) {
    const _0x1e4327 = _0x2644
      , _0x4fd990 = _0x51d3c3[_0x1e4327(0x1fd)];
    gridSequence[_0x51d3c3[_0x1e4327(0x1e3)]] = _0x52c089[_0x1e4327(0x1fd)],
    gridSequence[_0x52c089[_0x1e4327(0x1e3)]] = _0x4fd990;
    const _0x8b8cbe = idxSequence[_0x51d3c3[_0x1e4327(0x1e3)]];
    idxSequence[_0x51d3c3[_0x1e4327(0x1e3)]] = idxSequence[_0x52c089['tag']],
    idxSequence[_0x52c089[_0x1e4327(0x1e3)]] = _0x8b8cbe,
    _0x51d3c3[_0x1e4327(0x1fd)] = _0x52c089[_0x1e4327(0x1fd)],
    _0x52c089['textContent'] = _0x4fd990,
    movesCounter++,
    document['getElementById'](_0x1e4327(0x1c3))[_0x1e4327(0x1bf)] = movesCounter;
}
function resetAllData() {
    const _0x396164 = _0x2644;
    window['localStorage'][_0x396164(0x1e1)]();
}
function resetLocalStorage() {
    const _0x4ab397 = _0x2644;
    setValue(_0x4ab397(0x1e9) + gridN, ''),
    setValue(_0x4ab397(0x1c3) + gridN, 0x0),
    setValue('lastPlayed' + gridN, ''),
    setValue(_0x4ab397(0x201) + gridN, ''),
    setValue(_0x4ab397(0x1d5) + gridN, 0x0),
    setValue('winCount' + gridN, 0x0),
    setValue(_0x4ab397(0x1bc) + gridN, 0x0),
    setValue(_0x4ab397(0x1db) + gridN, 0x0);
}
function storeGridData() {
    const _0x4d7775 = _0x2644;
    setValue(_0x4d7775(0x1e9) + gridN, idxSequence[_0x4d7775(0x1de)]('$')),
    setValue(_0x4d7775(0x1c3) + gridN, movesCounter),
    setValue(_0x4d7775(0x1dc) + gridN, solveSequence[_0x4d7775(0x1de)]('$'));
}
function checkRows() {
    const _0x29b8f4 = _0x2644
      , _0xae0ff4 = document[_0x29b8f4(0x1f6)](_0x29b8f4(0x1fa));
    let _0x5d6f3d = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x96c02 = 0x0; _0x96c02 < _0xae0ff4[_0x29b8f4(0x1da)]; _0x96c02++) {
        const _0x1f7293 = Array['from'](_0xae0ff4[_0x96c02]['getElementsByClassName']('grid-item'))
          , _0x2a978e = _0x1f7293['map'](_0x15ec35 => _0x15ec35[_0x29b8f4(0x1fd)]);
        for (let _0x18c965 = 0x0; _0x18c965 <= gridCheck; _0x18c965 += gridN) {
            const _0x18bb57 = originalSequence[_0x29b8f4(0x1cf)](_0x18c965, _0x18c965 + gridN)[_0x29b8f4(0x1de)]('');
            if (_0x2a978e[_0x29b8f4(0x1de)]('') === _0x18bb57) {
                _0x1f7293[_0x29b8f4(0x1cb)](_0x1e2edf => {
                    const _0x32b3fb = _0x29b8f4;
                    _0x1e2edf[_0x32b3fb(0x1f3)][_0x32b3fb(0x1ce)]('correct', _0x32b3fb(0x1f4));
                }
                );
                swapMove && _0x96c02 == targetRow && (solveSequence[_0x29b8f4(0x1ef)](movesCounter),
                targetRow = -0x1);
                _0x5d6f3d++;
                break;
            }
        }
    }
    ;if (_0x5d6f3d === gridN) {
        document['getElementById'](_0x29b8f4(0x1c6))[_0x29b8f4(0x1d2)][_0x29b8f4(0x1d1)] = _0x29b8f4(0x1f7),
        document[_0x29b8f4(0x1df)](_0x29b8f4(0x1bd))['style']['display'] = _0x29b8f4(0x1d6),
        document[_0x29b8f4(0x1df)]('pWin')[_0x29b8f4(0x1d2)][_0x29b8f4(0x1d1)] = _0x29b8f4(0x1d6),
        document[_0x29b8f4(0x1df)]('pPlay')['style']['display'] = _0x29b8f4(0x1f7);
        if (swapMove) {
            solveSequence[_0x29b8f4(0x1da)] < gridN && solveSequence[_0x29b8f4(0x1ef)](movesCounter);
            winCount++;
            const _0x1924c1 = getValue('lastWin' + gridN, today);
            dayDiff = getIndex(_0x1924c1);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue('streakCount' + gridN, streakCount),
            setValue(_0x29b8f4(0x1c5) + gridN, streakMax),
            setValue('lastWin' + gridN, today),
            setValue(_0x29b8f4(0x1e6) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document[_0x29b8f4(0x1df)](_0x29b8f4(0x1ea))[_0x29b8f4(0x1d2)][_0x29b8f4(0x1d1)] = _0x29b8f4(0x1f7),
        document['getElementById'](_0x29b8f4(0x1c8))['style'][_0x29b8f4(0x1d1)] = _0x29b8f4(0x1d6),
        document[_0x29b8f4(0x1df)](_0x29b8f4(0x1bd))['style'][_0x29b8f4(0x1d1)] = _0x29b8f4(0x1f7),
        document[_0x29b8f4(0x1df)](_0x29b8f4(0x1c6))[_0x29b8f4(0x1d2)][_0x29b8f4(0x1d1)] = _0x29b8f4(0x1d6);
    document['getElementById'](_0x29b8f4(0x1ca))[_0x29b8f4(0x1bf)] = '',
    _0x5d6f3d > 0x0 && solveSequence['length'] > 0x0 && (document[_0x29b8f4(0x1df)](_0x29b8f4(0x1ca))[_0x29b8f4(0x1bf)] = createBarChart());
}
$('#resetBtn')[_0x36847d(0x202)](function() {
    const _0x474977 = _0x36847d
      , _0x1525bb = document[_0x474977(0x1df)]('grid')
      , _0x4f2697 = document[_0x474977(0x1f9)](_0x474977(0x1e0));
    _0x4f2697['id'] = _0x474977(0x1e4),
    _0x4f2697[_0x474977(0x1f3)][_0x474977(0x1ce)](_0x474977(0x1ed)),
    _0x1525bb['parentNode'][_0x474977(0x1be)](_0x4f2697, _0x1525bb),
    grid = _0x4f2697,
    selectedItem = null,
    createGrid();
});
function _0x4dc6() {
    const _0x2baf24 = ['click', 'localStorage', 'तीन', 'playStreak', 'rowShare', 'replaceChild', 'innerText', '7708880VwNlcg', 'addEventListener', 'target', 'movesCounter', '6555927mTjzOZ', 'streakMax', 'divMindCheck', 'three', 'pPlay', 'padStart', 'winSteps', 'forEach', '25DDmTwe', '323022QIFsIW', 'add', 'slice', 'preventDefault', 'display', 'style', 'getItem', 'innerHTML', 'playCount', 'block', 'selected2', 'gridEng', '3773528AxwjUF', 'length', 'maxStreak', 'solveGrid', 'gridSize', 'join', 'getElementById', 'div', 'clear', 'split', 'tag', 'grid', 'remove', 'winCount', 'touchstart', 'gridHindi', 'userGrid', 'pWin', 'selected', 'parentNode', 'grid-container', 'className', 'push', '2012930cYVnbE', 'floor', '681810bWoHdc', 'classList', 'disabled', 'appendChild', 'getElementsByClassName', 'none', 'getMonth', 'createElement', 'grid-row', 'getFullYear', '657813mPUkog', 'textContent', 'keys', 'चार', 'setItem', 'lastWin'];
    _0x4dc6 = function() {
        return _0x2baf24;
    }
    ;
    return _0x4dc6();
}
function resetGrid() {
    const _0x1d9564 = _0x36847d
      , _0x1e7363 = document[_0x1d9564(0x1df)](_0x1d9564(0x1e4))
      , _0x1221a6 = document[_0x1d9564(0x1f9)](_0x1d9564(0x1e0));
    _0x1221a6['id'] = _0x1d9564(0x1e4),
    _0x1221a6[_0x1d9564(0x1f3)][_0x1d9564(0x1ce)]('grid-container'),
    _0x1e7363[_0x1d9564(0x1ec)]['replaceChild'](_0x1221a6, _0x1e7363),
    grid = _0x1221a6,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
