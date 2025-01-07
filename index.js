const _0x1a3884 = _0x23b7;
(function(_0x1379c9, _0xff70a5) {
    const _0x3a208c = _0x23b7
      , _0x27984e = _0x1379c9();
    while (!![]) {
        try {
            const _0x13368d = parseInt(_0x3a208c(0x1c4)) / 0x1 * (-parseInt(_0x3a208c(0x1b6)) / 0x2) + -parseInt(_0x3a208c(0x1b1)) / 0x3 * (-parseInt(_0x3a208c(0x1da)) / 0x4) + parseInt(_0x3a208c(0x1b3)) / 0x5 + parseInt(_0x3a208c(0x1d2)) / 0x6 + -parseInt(_0x3a208c(0x1b7)) / 0x7 + parseInt(_0x3a208c(0x1c2)) / 0x8 + -parseInt(_0x3a208c(0x1d5)) / 0x9 * (parseInt(_0x3a208c(0x1c0)) / 0xa);
            if (_0x13368d === _0xff70a5)
                break;
            else
                _0x27984e['push'](_0x27984e['shift']());
        } catch (_0x3a4bc1) {
            _0x27984e['push'](_0x27984e['shift']());
        }
    }
}(_0x3113, 0x6f7f6));
let darkMode = ![];
const BOX = '█'
  , boxes = {
    'yellow': '🟨',
    'green': '🟩',
    'blue': '🟦',
    'red': '🟥',
    'orange': '🟧',
    'purple': '🟪',
    'brown': '🟫',
    'white': '⬜',
    'black': '⬛'
};
function toggleMenu(_0xeb2ef7) {
    const _0x19906b = _0x23b7
      , _0x2bab50 = document[_0x19906b(0x1c6)]('.' + _0xeb2ef7 + _0x19906b(0x1c8))
      , _0x5d3735 = document[_0x19906b(0x1c6)](_0x19906b(0x1a6))
      , _0x5d396e = document['querySelectorAll'](_0x19906b(0x1d0));
    _0x5d396e[_0x19906b(0x19d)](_0x6c237d => {
        const _0x20aba6 = _0x19906b;
        _0x6c237d !== _0x2bab50 && _0x6c237d[_0x20aba6(0x1b8)]['remove'](_0x20aba6(0x1c1));
    }
    ),
    _0x2bab50[_0x19906b(0x1b8)][_0x19906b(0x1d3)](_0x19906b(0x1c1)),
    _0x5d3735[_0x19906b(0x1b8)][_0x19906b(0x1d3)]('active');
}
function closeAllMenus() {
    const _0x2ea65f = _0x23b7
      , _0x8cddc5 = document[_0x2ea65f(0x1ca)](_0x2ea65f(0x1d0))
      , _0x8a4009 = document[_0x2ea65f(0x1c6)](_0x2ea65f(0x1a6));
    _0x8cddc5[_0x2ea65f(0x19d)](_0x32876e => {
        const _0x42dfe3 = _0x2ea65f;
        _0x32876e[_0x42dfe3(0x1b8)][_0x42dfe3(0x1df)](_0x42dfe3(0x1c1));
    }
    ),
    _0x8a4009[_0x2ea65f(0x1b8)][_0x2ea65f(0x1df)](_0x2ea65f(0x1c1));
}
function toggleDarkMode() {
    const _0x1a9f35 = _0x23b7;
    darkMode = document['getElementById'](_0x1a9f35(0x1aa))[_0x1a9f35(0x1c9)],
    document[_0x1a9f35(0x1db)][_0x1a9f35(0x1b8)][_0x1a9f35(0x1d3)](_0x1a9f35(0x1a7), darkMode),
    setValue(_0x1a9f35(0x1d6), darkMode);
}
function toggleThreeMode() {
    const _0x490fe4 = _0x23b7
      , _0xdffe8e = document[_0x490fe4(0x1a9)](_0x490fe4(0x19b))[_0x490fe4(0x1c9)];
    setValue(_0x490fe4(0x1d1), _0xdffe8e),
    gridN = _0xdffe8e ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0x30b54c = _0x23b7;
    mindCheckMode = document[_0x30b54c(0x1a9)]('mindCheckToggle')['checked'],
    Array[_0x30b54c(0x1ba)](document[_0x30b54c(0x1b2)](_0x30b54c(0x1b0)))[_0x30b54c(0x19d)](function(_0x41b7da) {
        const _0x2428ea = _0x30b54c;
        _0x41b7da['classList'][_0x2428ea(0x1df)](_0x2428ea(0x1bc)),
        _0x41b7da[_0x2428ea(0x1b8)][_0x2428ea(0x1df)](_0x2428ea(0x1c7));
    }),
    selectedItem = null;
}
window[_0x1a3884(0x1e0)] = function() {
    initializeFromCookies();
}
;
function readGridParam() {
    const _0x3a443d = _0x1a3884;
    let _0x1913b1 = 0x0;
    try {
        const _0x3b9538 = window['location'][_0x3a443d(0x1dc)][_0x3a443d(0x1e4)]('&');
        _0x3b9538[_0x3a443d(0x19d)](_0x594609 => {
            const _0x43003b = _0x3a443d;
            if (_0x594609['endsWith']('q=3'))
                _0x1913b1 = 0x3;
            else
                _0x594609[_0x43003b(0x1d8)](_0x43003b(0x1d9)) && (_0x1913b1 = 0x4);
        }
        );
    } catch (_0x3d4ce0) {}
    return _0x1913b1;
}
function initializeFromCookies() {
    const _0x53844d = _0x1a3884;
    !(getValue(_0x53844d(0x1a8), '') == resetKey) && (resetAllData(),
    setValue('resetKey', resetKey));
    darkMode = getValue(_0x53844d(0x1d6), 'false') === _0x53844d(0x1d7);
    let _0x4a0189 = getValue(_0x53844d(0x1d1), _0x53844d(0x19c)) === _0x53844d(0x1d7);
    const _0x1a586a = document[_0x53844d(0x1a9)](_0x53844d(0x1aa))
      , _0x21237b = document[_0x53844d(0x1a9)](_0x53844d(0x19b));
    _0x1a586a && (_0x1a586a[_0x53844d(0x1c9)] = darkMode);
    const _0x4f15e3 = readGridParam();
    _0x4f15e3 > 0x0 && (_0x4a0189 = _0x4f15e3 == 0x3 ? !![] : ![]),
    _0x21237b && (_0x21237b[_0x53844d(0x1c9)] = _0x4a0189),
    gridN = _0x4a0189 ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document[_0x53844d(0x1db)][_0x53844d(0x1b8)][_0x53844d(0x1e3)](_0x53844d(0x1a7)) : document['body'][_0x53844d(0x1b8)][_0x53844d(0x1df)](_0x53844d(0x1a7)),
    initializePuzzle();
}
function updateStats() {
    const _0x3bfe58 = _0x1a3884
      , _0x3b0ce6 = getValue('lastPlayed' + gridN, '');
    playCount = getValue(_0x3bfe58(0x1bb) + gridN, 0x0),
    winCount = getValue(_0x3bfe58(0x1ae) + gridN, 0x0),
    streakCount = getValue('streakCount' + gridN, 0x0),
    streakMax = getValue('streakMax' + gridN, 0x0),
    solveGrid = getValue('solveGrid' + gridN, ''),
    document[_0x3bfe58(0x1a9)]('playCount')['textContent'] = playCount,
    winCount == 0x0 ? document[_0x3bfe58(0x1a9)](_0x3bfe58(0x1ae))['textContent'] = '0%' : document[_0x3bfe58(0x1a9)](_0x3bfe58(0x1ae))['textContent'] = Math[_0x3bfe58(0x1ce)](winCount * 0x64 / playCount) + '%',
    document[_0x3bfe58(0x1a9)](_0x3bfe58(0x1d4))[_0x3bfe58(0x1e5)] = streakCount,
    document[_0x3bfe58(0x1a9)](_0x3bfe58(0x1c3))[_0x3bfe58(0x1e5)] = streakMax,
    (_0x3b0ce6 != today || today == '') && (playCount++,
    setValue('lastPlayed' + gridN, today),
    setValue(_0x3bfe58(0x1bb) + gridN, playCount),
    setValue(_0x3bfe58(0x1af) + gridN, ''),
    setValue(_0x3bfe58(0x1a3) + gridN, ''),
    setValue(_0x3bfe58(0x1b9) + gridN, 0x0));
}
function showWinModal() {
    const _0x400442 = _0x1a3884
      , _0x9929c7 = document[_0x400442(0x1a9)]('winModal');
    document[_0x400442(0x1a9)](_0x400442(0x1bd))['textContent'] = movesCounter,
    document[_0x400442(0x1a9)](_0x400442(0x1cb))['textContent'] = gridN + 'x' + gridN,
    document['getElementById'](_0x400442(0x1bf))['textContent'] = movesCounter,
    _0x9929c7[_0x400442(0x1ad)][_0x400442(0x1de)] = 'block',
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function _0x3113() {
    const _0x3e0e6d = ['body', 'search', 'padStart', 'display', 'remove', 'onload', 'Result\x20copied\x20to\x20clipboard!', 'repeat', 'add', 'split', 'textContent', 'red', 'removeChild', 'threeModeToggle', 'false', 'forEach', 'execCommand', 'substring', 'bit.ly/hindi', 'textarea', 'toString', 'solveGrid', 'setHours', 'none', '.overlay', 'dark-mode', 'resetKey', 'getElementById', 'darkModeToggle', 'createElement', 'कुल\x20चालें:\x20', 'style', 'winCount', 'userGrid', 'grid-item', '810357nrnJji', 'getElementsByClassName', '2290jQXEgX', 'countdownTimer', 'share', '188398sBuyfV', '3091480tgpeXG', 'classList', 'movesCounter', 'from', 'playCount', 'selected', 'moveCount1', 'yellow', 'moveCount2', '10cbTvmK', 'active', '6565368MPdvqm', 'maxStreak', '5RKeJmp', 'floor', 'querySelector', 'selected2', '-sidebar', 'checked', 'querySelectorAll', 'gridSizeDisplay', 'winModal', 'select', 'round', 'Hindi\x20Matrix\x20Puzzle', '.sidebar', 'threeMode', '2539608cRECJo', 'toggle', 'playStreak', '3737754plciEI', 'darkMode', 'true', 'endsWith', 'q=4', '8mOuXbu'];
    _0x3113 = function() {
        return _0x3e0e6d;
    }
    ;
    return _0x3113();
}
function closeWinModal() {
    const _0x5bd218 = _0x1a3884;
    document[_0x5bd218(0x1a9)](_0x5bd218(0x1cc))['style']['display'] = _0x5bd218(0x1a5);
}
function _0x23b7(_0x165927, _0x3040c3) {
    const _0x3113cc = _0x3113();
    return _0x23b7 = function(_0x23b78, _0x2facf3) {
        _0x23b78 = _0x23b78 - 0x199;
        let _0x4899f4 = _0x3113cc[_0x23b78];
        return _0x4899f4;
    }
    ,
    _0x23b7(_0x165927, _0x3040c3);
}
function updateCountdown() {
    const _0x5689db = _0x1a3884
      , _0xffd89a = new Date()
      , _0x9a3f52 = new Date();
    _0x9a3f52[_0x5689db(0x1a4)](0x18, 0x0, 0x0, 0x0);
    const _0x550802 = _0x9a3f52 - _0xffd89a
      , _0x2cbaa3 = Math['floor'](_0x550802 / (0x3e8 * 0x3c * 0x3c))
      , _0x634c8a = Math[_0x5689db(0x1c5)](_0x550802 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x125639 = Math[_0x5689db(0x1c5)](_0x550802 % (0x3e8 * 0x3c) / 0x3e8)
      , _0x423234 = String(_0x2cbaa3)['padStart'](0x2, '0') + ':' + String(_0x634c8a)[_0x5689db(0x1dd)](0x2, '0') + ':' + String(_0x125639)[_0x5689db(0x1dd)](0x2, '0');
    document['getElementById'](_0x5689db(0x1b4))[_0x5689db(0x1e5)] = _0x423234;
}
async function shareResult() {
    const _0x372d86 = _0x1a3884
      , _0x3b2e5e = new Date()[_0x372d86(0x1a2)]()[_0x372d86(0x19f)](0x4, 0xf);
    let _0x14ed8a = '🧩\x20हिन्दी\x20शब्द\x20रचना\x20' + gridN + 'x' + gridN + '\x0a\x0a' + ('दिनाँक:\x20' + _0x3b2e5e + '\x0a') + (_0x372d86(0x1ac) + movesCounter + '\x0a\x0a');
    const _0x331697 = createBarChart(![]);
    _0x14ed8a += _0x331697,
    _0x14ed8a += '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a' + (_0x372d86(0x1a0) + gridN + 'x' + gridN);
    if (navigator[_0x372d86(0x1b5)])
        try {
            await navigator[_0x372d86(0x1b5)]({
                'title': _0x372d86(0x1cf),
                'text': _0x14ed8a
            });
        } catch (_0x8accbf) {
            fallbackShare(_0x14ed8a);
        }
    else
        fallbackShare(_0x14ed8a);
}
function createBarChart(_0xc22218=!![]) {
    const _0x46eabd = _0x1a3884;
    let _0x307d91 = 0x0
      , _0x352194 = '';
    return solveSequence[_0x46eabd(0x19d)]( (_0x4e095b, _0x19b8fc) => {
        const _0x2bbde5 = _0x46eabd
          , _0x1ccb0d = 0xa
          , _0x2582c1 = Number(_0x4e095b) - _0x307d91
          , _0x3e0f7d = _0x2582c1 > _0x1ccb0d ? _0x1ccb0d : _0x2582c1;
        let _0x39ab0b = '';
        if (_0x2582c1 >= _0x1ccb0d)
            _0x39ab0b = boxes[_0x2bbde5(0x199)];
        else
            _0x2582c1 > (gridN == 0x3 ? 0x3 : 0x5) ? _0x39ab0b = boxes[_0x2bbde5(0x1be)] : _0x39ab0b = boxes['green'];
        const _0x5be441 = _0x3e0f7d <= 0x0 ? '' : _0x39ab0b[_0x2bbde5(0x1e2)](_0x3e0f7d)
          , _0x6e04cc = _0x19b8fc + 0x1 + ':\x20'
          , _0x34a5e7 = _0x6e04cc['padEnd'](0x2);
        _0x352194 += '' + _0x34a5e7 + _0x5be441 + '\x20(' + _0x2582c1 + ')\x0a',
        _0x307d91 += _0x2582c1;
    }
    ),
    _0x352194;
}
function fallbackShare(_0x2a2a32) {
    const _0x45f4f1 = _0x1a3884
      , _0xff7bec = document[_0x45f4f1(0x1ab)](_0x45f4f1(0x1a1));
    _0xff7bec['value'] = _0x2a2a32,
    document['body']['appendChild'](_0xff7bec),
    _0xff7bec[_0x45f4f1(0x1cd)](),
    document[_0x45f4f1(0x19e)]('copy'),
    document['body'][_0x45f4f1(0x19a)](_0xff7bec),
    alert(_0x45f4f1(0x1e1));
}
