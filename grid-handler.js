const _0x39943b = _0x9533;
(function(_0x1c1580, _0x560af8) {
    const _0x232db9 = _0x9533
      , _0xa5e4b2 = _0x1c1580();
    while (!![]) {
        try {
            const _0xe7a497 = parseInt(_0x232db9(0xff)) / 0x1 * (parseInt(_0x232db9(0xcd)) / 0x2) + -parseInt(_0x232db9(0xd0)) / 0x3 + -parseInt(_0x232db9(0xd3)) / 0x4 * (-parseInt(_0x232db9(0xed)) / 0x5) + parseInt(_0x232db9(0xda)) / 0x6 + parseInt(_0x232db9(0xd1)) / 0x7 * (-parseInt(_0x232db9(0xb7)) / 0x8) + parseInt(_0x232db9(0xaf)) / 0x9 * (parseInt(_0x232db9(0xb1)) / 0xa) + parseInt(_0x232db9(0xc4)) / 0xb * (-parseInt(_0x232db9(0xf7)) / 0xc);
            if (_0xe7a497 === _0x560af8)
                break;
            else
                _0xa5e4b2['push'](_0xa5e4b2['shift']());
        } catch (_0x4ec96a) {
            _0xa5e4b2['push'](_0xa5e4b2['shift']());
        }
    }
}(_0x550f, 0x49756));
function _0x550f() {
    const _0x4d1695 = ['488QWdsXD', 'div', 'block', 'rowShare', 'getMonth', 'click', 'keys', '2624472agGYyB', 'split', '\x20शब्द\x20', 'tag', 'correct', 'playCount', 'none', 'display', 'four', 'winSteps', 'className', 'addEventListener', 'preventDefault', 'abcd', 'style', 'contains', 'gridEng', 'solveGrid', 'localStorage', '21320boRKNh', 'getElementsByClassName', 'getElementById', 'target', 'grid-item', 'तीन', 'textContent', 'grid-container', 'disabled', 'push', '24ZzXACG', 'selected', 'touchstart', 'three', 'pPlay', 'padStart', 'replaceChild', 'createElement', '218hzNGAN', 'random', 'appendChild', 'slice', 'map', '23337CubkJl', 'win-step', '1310zLlXoi', 'innerText', 'floor', 'userGrid', 'maxStreak', 'innerHTML', '8ENrGEq', 'pWin', 'movesCounter', 'remove', 'winCount', 'grid-row', 'clear', 'getDate', 'selected2', 'streakMax', 'lastPlayed', '</ul>', '#resetBtn', '6366954CdCXeQ', 'grid', 'add', 'length', 'getFullYear', 'चार', 'join', 'classList', 'parentNode', '5176pvpLCt', 'gridSize', 'setItem', '831489vdhaND', '880670maSrkC', 'lastWin'];
    _0x550f = function() {
        return _0x4d1695;
    }
    ;
    return _0x550f();
}
const resetKey = _0x39943b(0xe7);
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
function setValue(_0x4d813a, _0x286f9c) {
    const _0x3a61e6 = _0x39943b;
    window[_0x3a61e6(0xec)][_0x3a61e6(0xcf)](_0x4d813a, _0x286f9c);
}
function getToday() {
    const _0x429144 = _0x39943b
      , _0x4a43a0 = new Date()
      , _0x53ce18 = _0x4a43a0[_0x429144(0xc8)]()
      , _0x320bc0 = String(_0x4a43a0[_0x429144(0xd7)]() + 0x1)[_0x429144(0xfc)](0x2, '0')
      , _0xfe05fd = String(_0x4a43a0[_0x429144(0xbe)]())[_0x429144(0xfc)](0x2, '0');
    return _0x53ce18 + '-' + _0x320bc0 + '-' + _0xfe05fd;
}
function getValue(_0x555335, _0xf80e62=null) {
    let _0x30c691 = window['localStorage']['getItem'](_0x555335);
    return _0x30c691 == null && _0xf80e62 != null && (_0x30c691 = _0xf80e62),
    _0x30c691;
}
function initializePuzzle() {
    const _0xd4bd2b = _0x39943b;
    movesCounter = getValue(_0xd4bd2b(0xb9) + gridN, 0x0);
    let _0x329173 = ''
      , _0x336325 = '';
    document[_0xd4bd2b(0xef)](_0xd4bd2b(0xb9))['innerText'] = movesCounter,
    document['getElementById']('gridHindi')['innerText'] = gridN == 0x3 ? _0xd4bd2b(0xf2) : _0xd4bd2b(0xc9),
    document[_0xd4bd2b(0xef)](_0xd4bd2b(0xea))[_0xd4bd2b(0xb2)] = gridN == 0x3 ? _0xd4bd2b(0xfa) : _0xd4bd2b(0xe2);
    try {
        _0x329173 = getValue('userGrid' + gridN, ''),
        _0x336325 = getValue(_0xd4bd2b(0xeb) + gridN, '');
    } catch (_0x22d245) {}
    gridSequence = [],
    solveSequence = [];
    if (_0x336325)
        solveSequence = [..._0x336325[_0xd4bd2b(0xdb)]('$')];
    originalSequence = getWordOfTheDay(gridN);
    let _0x457447 = getGridSequence(gridN);
    if (_0x329173[_0xd4bd2b(0xc7)] > 0x5)
        try {
            idxSequence = [..._0x329173[_0xd4bd2b(0xdb)]('$')];
        } catch (_0xa95531) {}
    else
        idxSequence = [..._0x457447];
    for (let _0x2e698a = 0x0; _0x2e698a < idxSequence[_0xd4bd2b(0xc7)]; _0x2e698a++) {
        gridSequence['push'](originalSequence[idxSequence[_0x2e698a]]);
    }
    createGrid();
}
function createGrid() {
    const _0x5f2b52 = _0x39943b
      , _0x58e4ee = document[_0x5f2b52(0xef)](_0x5f2b52(0xc5));
    document[_0x5f2b52(0xef)](_0x5f2b52(0xce))[_0x5f2b52(0xb2)] = gridN + 'x' + gridN,
    _0x58e4ee['innerHTML'] = '',
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x33bfdc = 0x0; _0x33bfdc < gridN; _0x33bfdc++) {
        const _0x122fd6 = document[_0x5f2b52(0xfe)](_0x5f2b52(0xd4));
        _0x122fd6['className'] = _0x5f2b52(0xbc);
        for (let _0x3502c3 = 0x0; _0x3502c3 < gridN; _0x3502c3++) {
            const _0x49c14a = document['createElement'](_0x5f2b52(0xd4));
            _0x49c14a[_0x5f2b52(0xe4)] = 'grid-item\x20grid-item-' + gridN + '-' + gridN,
            _0x49c14a[_0x5f2b52(0xf3)] = gridSequence[_0x33bfdc * gridN + _0x3502c3],
            _0x49c14a[_0x5f2b52(0xdd)] = _0x33bfdc * gridN + _0x3502c3,
            _0x49c14a[_0x5f2b52(0xe5)](_0x5f2b52(0xd8), handleItemClick),
            _0x49c14a[_0x5f2b52(0xe5)](_0x5f2b52(0xf9), handleTouchStart, {
                'passive': ![]
            }),
            _0x122fd6[_0x5f2b52(0x101)](_0x49c14a);
        }
        _0x58e4ee[_0x5f2b52(0x101)](_0x122fd6);
    }
    storeGridData(),
    checkRows();
}
function shuffleArray() {
    const _0x4e41d5 = _0x39943b;
    idxSequence = [...Array(gridN * gridN)[_0x4e41d5(0xd9)]()];
    for (let _0x26be1b = gridSequence[_0x4e41d5(0xc7)] - 0x1; _0x26be1b > 0x0; _0x26be1b--) {
        let _0x4ebd40 = _0x26be1b;
        while (_0x4ebd40 == _0x26be1b) {
            _0x4ebd40 = Math[_0x4e41d5(0xb3)](Math[_0x4e41d5(0x100)]() * (_0x26be1b + 0x1));
        }
        [gridSequence[_0x26be1b],gridSequence[_0x4ebd40]] = [gridSequence[_0x4ebd40], gridSequence[_0x26be1b]],
        [idxSequence[_0x26be1b],idxSequence[_0x4ebd40]] = [idxSequence[_0x4ebd40], idxSequence[_0x26be1b]];
    }
}
function handleItemClick(_0x47ae6e) {
    const _0x4ee45b = _0x39943b;
    if (_0x47ae6e[_0x4ee45b(0xf0)][_0x4ee45b(0xcb)][_0x4ee45b(0xe9)](_0x4ee45b(0xf5)))
        return;
    if (mindCheckMode)
        selectedItem = _0x47ae6e[_0x4ee45b(0xf0)],
        selectedItem[_0x4ee45b(0xcb)][_0x4ee45b(0xe9)](_0x4ee45b(0xbf)) ? selectedItem[_0x4ee45b(0xcb)][_0x4ee45b(0xba)]('selected2') : selectedItem['classList'][_0x4ee45b(0xc6)](_0x4ee45b(0xbf));
    else {
        if (!selectedItem)
            selectedItem = _0x47ae6e[_0x4ee45b(0xf0)],
            selectedItem[_0x4ee45b(0xcb)]['add'](_0x4ee45b(0xf8));
        else
            selectedItem[_0x4ee45b(0xdd)] != _0x47ae6e[_0x4ee45b(0xf0)][_0x4ee45b(0xdd)] ? (swapItems(selectedItem, _0x47ae6e[_0x4ee45b(0xf0)]),
            selectedItem[_0x4ee45b(0xcb)][_0x4ee45b(0xba)]('selected'),
            selectedItem = null,
            swapMove = !![],
            currRow = Math[_0x4ee45b(0xb3)](Number(_0x47ae6e[_0x4ee45b(0xf0)]['tag']) / gridN),
            checkRows(),
            storeGridData(),
            swapMove = ![]) : (selectedItem[_0x4ee45b(0xcb)][_0x4ee45b(0xba)]('selected'),
            selectedItem = null);
    }
}
function handleTouchStart(_0x102f0e) {
    const _0x55da5c = _0x39943b;
    _0x102f0e[_0x55da5c(0xe6)](),
    handleItemClick(_0x102f0e);
}
function swapItems(_0x1a8821, _0x3fc060) {
    const _0x1651e3 = _0x39943b
      , _0x2a095d = _0x1a8821['textContent'];
    gridSequence[_0x1a8821[_0x1651e3(0xdd)]] = _0x3fc060['textContent'],
    gridSequence[_0x3fc060[_0x1651e3(0xdd)]] = _0x2a095d;
    const _0x288567 = idxSequence[_0x1a8821['tag']];
    idxSequence[_0x1a8821[_0x1651e3(0xdd)]] = idxSequence[_0x3fc060[_0x1651e3(0xdd)]],
    idxSequence[_0x3fc060[_0x1651e3(0xdd)]] = _0x288567,
    _0x1a8821[_0x1651e3(0xf3)] = _0x3fc060[_0x1651e3(0xf3)],
    _0x3fc060['textContent'] = _0x2a095d,
    movesCounter++,
    document['getElementById'](_0x1651e3(0xb9))[_0x1651e3(0xb2)] = movesCounter;
}
function resetAllData() {
    const _0x200248 = _0x39943b;
    window['localStorage'][_0x200248(0xbd)]();
}
function resetLocalStorage() {
    const _0x205b5d = _0x39943b;
    setValue(_0x205b5d(0xb4) + gridN, ''),
    setValue(_0x205b5d(0xb9) + gridN, 0x0),
    setValue(_0x205b5d(0xc1) + gridN, ''),
    setValue('lastWin' + gridN, ''),
    setValue(_0x205b5d(0xdf) + gridN, 0x0),
    setValue(_0x205b5d(0xbb) + gridN, 0x0),
    setValue('playStreak' + gridN, 0x0),
    setValue(_0x205b5d(0xb5) + gridN, 0x0);
}
function storeGridData() {
    const _0x5ae93b = _0x39943b;
    setValue(_0x5ae93b(0xb4) + gridN, idxSequence[_0x5ae93b(0xca)]('$')),
    setValue(_0x5ae93b(0xb9) + gridN, movesCounter),
    setValue(_0x5ae93b(0xeb) + gridN, solveSequence[_0x5ae93b(0xca)]('$'));
}
function checkRows() {
    const _0x47120b = _0x39943b
      , _0x3fc5b9 = document['getElementsByClassName'](_0x47120b(0xbc));
    let _0x4c8ecf = 0x0;
    gridCheck = gridN * (gridN - 0x1);
    for (let _0x4fb4b1 = 0x0; _0x4fb4b1 < _0x3fc5b9[_0x47120b(0xc7)]; _0x4fb4b1++) {
        const _0x40ee64 = Array['from'](_0x3fc5b9[_0x4fb4b1][_0x47120b(0xee)](_0x47120b(0xf1)))
          , _0xc2dbe6 = _0x40ee64[_0x47120b(0x103)](_0x5ea95b => _0x5ea95b[_0x47120b(0xf3)]);
        for (let _0x302320 = 0x0; _0x302320 <= gridCheck; _0x302320 += gridN) {
            const _0x14707f = originalSequence[_0x47120b(0x102)](_0x302320, _0x302320 + gridN)[_0x47120b(0xca)]('');
            if (_0xc2dbe6[_0x47120b(0xca)]('') === _0x14707f) {
                _0x40ee64['forEach'](_0x534afb => {
                    const _0x1179e1 = _0x47120b;
                    _0x534afb['classList'][_0x1179e1(0xc6)](_0x1179e1(0xde), _0x1179e1(0xf5));
                }
                );
                swapMove && _0x4fb4b1 == currRow && solveSequence[_0x47120b(0xf6)](movesCounter);
                _0x4c8ecf++;
                break;
            }
        }
    }
    ;if (_0x4c8ecf === gridN) {
        document['getElementById']('divMindCheck')[_0x47120b(0xe8)][_0x47120b(0xe1)] = _0x47120b(0xe0),
        document[_0x47120b(0xef)]('rowShare')[_0x47120b(0xe8)]['display'] = _0x47120b(0xd5),
        document['getElementById'](_0x47120b(0xb8))['style'][_0x47120b(0xe1)] = _0x47120b(0xd5),
        document['getElementById']('pPlay')['style']['display'] = _0x47120b(0xe0);
        if (swapMove) {
            solveSequence[_0x47120b(0xc7)] < gridN && solveSequence[_0x47120b(0xf6)](movesCounter);
            winCount++;
            const _0x2de0b7 = getValue('lastWin' + gridN, today);
            dayDiff = getIndex(_0x2de0b7);
            if (dayDiff <= 0x1)
                streakCount++;
            else
                dayDiff > 0x1 && (streakCount = 0x1);
            streakCount > streakMax && streakMax++,
            setValue('streakCount' + gridN, streakCount),
            setValue(_0x47120b(0xc0) + gridN, streakMax),
            setValue(_0x47120b(0xd2) + gridN, today),
            setValue(_0x47120b(0xbb) + gridN, winCount),
            updateStats(),
            showWinModal();
        }
    } else
        document['getElementById']('pWin')[_0x47120b(0xe8)][_0x47120b(0xe1)] = 'none',
        document[_0x47120b(0xef)](_0x47120b(0xfb))[_0x47120b(0xe8)][_0x47120b(0xe1)] = _0x47120b(0xd5),
        document[_0x47120b(0xef)](_0x47120b(0xd6))[_0x47120b(0xe8)]['display'] = _0x47120b(0xe0),
        document[_0x47120b(0xef)]('divMindCheck')['style'][_0x47120b(0xe1)] = _0x47120b(0xd5);
    if (_0x4c8ecf > 0x0 && solveSequence[_0x47120b(0xc7)] > 0x0) {
        let _0x42fa5b = document[_0x47120b(0xef)](_0x47120b(0xe3));
        _0x42fa5b[_0x47120b(0xb6)] = '<ul>';
        let _0x169020 = 0x0;
        for (let _0x39457c = 0x0; _0x39457c < solveSequence[_0x47120b(0xc7)]; _0x39457c++) {
            const _0x3fd103 = document[_0x47120b(0xfe)]('li')
              , _0x4c94ef = solveSequence[_0x39457c] - _0x169020;
            _0x3fd103['className'] = _0x47120b(0xb0),
            _0x3fd103[_0x47120b(0xf3)] = wordCounter[_0x39457c] + _0x47120b(0xdc) + _0x4c94ef + '\x20चाल\x20में',
            _0x42fa5b[_0x47120b(0x101)](_0x3fd103),
            _0x169020 = solveSequence[_0x39457c];
        }
        _0x42fa5b['innerHTML'] += _0x47120b(0xc2);
    }
}
function _0x9533(_0x237521, _0x40a374) {
    const _0x550f28 = _0x550f();
    return _0x9533 = function(_0x953349, _0x5eb458) {
        _0x953349 = _0x953349 - 0xaf;
        let _0x4fced9 = _0x550f28[_0x953349];
        return _0x4fced9;
    }
    ,
    _0x9533(_0x237521, _0x40a374);
}
$(_0x39943b(0xc3))[_0x39943b(0xd8)](function() {
    const _0x538490 = _0x39943b
      , _0x393e67 = document[_0x538490(0xef)]('grid')
      , _0x14612e = document[_0x538490(0xfe)](_0x538490(0xd4));
    _0x14612e['id'] = _0x538490(0xc5),
    _0x14612e[_0x538490(0xcb)][_0x538490(0xc6)]('grid-container'),
    _0x393e67['parentNode'][_0x538490(0xfd)](_0x14612e, _0x393e67),
    grid = _0x14612e,
    selectedItem = null,
    createGrid();
});
function resetGrid() {
    const _0x4119d2 = _0x39943b
      , _0x2405af = document[_0x4119d2(0xef)]('grid')
      , _0x57a626 = document['createElement'](_0x4119d2(0xd4));
    _0x57a626['id'] = _0x4119d2(0xc5),
    _0x57a626[_0x4119d2(0xcb)][_0x4119d2(0xc6)](_0x4119d2(0xf4)),
    _0x2405af[_0x4119d2(0xcc)][_0x4119d2(0xfd)](_0x57a626, _0x2405af),
    grid = _0x57a626,
    selectedItem = null,
    userGrid = '',
    movesCounter = 0x0,
    shuffleArray(),
    initializePuzzle();
}
