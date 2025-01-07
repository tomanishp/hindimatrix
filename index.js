const _0xf2b303 = _0x2c2c;
(function(_0x190417, _0x55b550) {
    const _0x557b33 = _0x2c2c
      , _0x37af88 = _0x190417();
    while (!![]) {
        try {
            const _0x1095ea = -parseInt(_0x557b33(0x1a8)) / 0x1 * (-parseInt(_0x557b33(0x1c9)) / 0x2) + parseInt(_0x557b33(0x190)) / 0x3 * (parseInt(_0x557b33(0x19c)) / 0x4) + -parseInt(_0x557b33(0x1b0)) / 0x5 * (-parseInt(_0x557b33(0x1bd)) / 0x6) + -parseInt(_0x557b33(0x19a)) / 0x7 * (-parseInt(_0x557b33(0x1b1)) / 0x8) + -parseInt(_0x557b33(0x1aa)) / 0x9 * (-parseInt(_0x557b33(0x188)) / 0xa) + -parseInt(_0x557b33(0x187)) / 0xb * (parseInt(_0x557b33(0x18e)) / 0xc) + parseInt(_0x557b33(0x1b4)) / 0xd * (-parseInt(_0x557b33(0x1ab)) / 0xe);
            if (_0x1095ea === _0x55b550)
                break;
            else
                _0x37af88['push'](_0x37af88['shift']());
        } catch (_0x41b270) {
            _0x37af88['push'](_0x37af88['shift']());
        }
    }
}(_0x2f0c, 0x396d2));
function _0x2f0c() {
    const _0x1c684a = ['\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a', 'floor', 'block', 'threeModeToggle', '26286dZLkLy', '.sidebar', 'moveCount1', 'red', 'querySelector', 'green', 'lastPlayed', '-sidebar', 'createElement', 'शब्द:\x20चाल\x0a', 'appendChild', 'yellow', '128514WccTDk', 'toString', 'false', 'darkModeToggle', 'substring', 'resetKey', 'padStart', 'true', 'dark-mode', 'copy', 'search', 'maxStreak', 'playCount', 'style', 'classList', 'forEach', 'playStreak', 'movesCounter', '11fzouUB', '10WwdwwA', 'body', '🧩\x20हिन्दी\x20शब्द\x20रचना\x20', 'from', 'solveGrid', 'userGrid', '2161092QXElSy', 'value', '9qzZxWm', 'bit.ly/hindi', 'textContent', 'winModal', 'selected2', 'selected', 'round', 'querySelectorAll', 'active', 'threeMode', '15064RpVylh', 'none', '411576vuJqNS', 'darkMode', '.overlay', 'repeat', 'streakMax', 'setHours', 'mindCheckToggle', 'q=4', 'remove', 'endsWith', 'Result\x20copied\x20to\x20clipboard!', 'split', '3TtVYSf', 'getElementById', '1018431ElOnJi', '18998JhFbCP', 'countdownTimer', 'winCount', 'onload', 'textarea', '15QORhJu', '88XxnviP', 'gridSizeDisplay', 'execCommand', '2262XoLWgy', 'add', 'checked', 'toggle', 'select'];
    _0x2f0c = function() {
        return _0x1c684a;
    }
    ;
    return _0x2f0c();
}
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
function toggleMenu(_0x53c542) {
    const _0x2f6a43 = _0x2c2c
      , _0xe61ac0 = document[_0x2f6a43(0x1c1)]('.' + _0x53c542 + _0x2f6a43(0x1c4))
      , _0x8c6216 = document['querySelector']('.overlay')
      , _0x38feda = document[_0x2f6a43(0x197)]('.sidebar');
    _0x38feda[_0x2f6a43(0x184)](_0x380bc1 => {
        const _0x589c8c = _0x2f6a43;
        _0x380bc1 !== _0xe61ac0 && _0x380bc1['classList'][_0x589c8c(0x1a4)](_0x589c8c(0x198));
    }
    ),
    _0xe61ac0[_0x2f6a43(0x183)][_0x2f6a43(0x1b7)](_0x2f6a43(0x198)),
    _0x8c6216[_0x2f6a43(0x183)][_0x2f6a43(0x1b7)](_0x2f6a43(0x198));
}
function _0x2c2c(_0x585e9e, _0x50b36b) {
    const _0x2f0c48 = _0x2f0c();
    return _0x2c2c = function(_0x2c2c8e, _0x102eb1) {
        _0x2c2c8e = _0x2c2c8e - 0x179;
        let _0x3ca386 = _0x2f0c48[_0x2c2c8e];
        return _0x3ca386;
    }
    ,
    _0x2c2c(_0x585e9e, _0x50b36b);
}
function closeAllMenus() {
    const _0x2bc2da = _0x2c2c
      , _0x490dd7 = document[_0x2bc2da(0x197)](_0x2bc2da(0x1be))
      , _0x4db3a6 = document[_0x2bc2da(0x1c1)](_0x2bc2da(0x19e));
    _0x490dd7[_0x2bc2da(0x184)](_0x166e81 => {
        const _0x3d9965 = _0x2bc2da;
        _0x166e81[_0x3d9965(0x183)]['remove'](_0x3d9965(0x198));
    }
    ),
    _0x4db3a6[_0x2bc2da(0x183)][_0x2bc2da(0x1a4)]('active');
}
function toggleDarkMode() {
    const _0x31e4bf = _0x2c2c;
    darkMode = document[_0x31e4bf(0x1a9)](_0x31e4bf(0x1cc))['checked'],
    document[_0x31e4bf(0x189)][_0x31e4bf(0x183)]['toggle']('dark-mode', darkMode),
    setValue(_0x31e4bf(0x19d), darkMode);
}
function toggleThreeMode() {
    const _0x45b335 = _0x2c2c
      , _0x288ff2 = document[_0x45b335(0x1a9)](_0x45b335(0x1bc))[_0x45b335(0x1b6)];
    setValue(_0x45b335(0x199), _0x288ff2),
    gridN = _0x288ff2 ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0x33bc43 = _0x2c2c;
    mindCheckMode = document['getElementById'](_0x33bc43(0x1a2))['checked'],
    Array[_0x33bc43(0x18b)](document['getElementsByClassName']('grid-item'))['forEach'](function(_0x283728) {
        const _0x120e3c = _0x33bc43;
        _0x283728[_0x120e3c(0x183)][_0x120e3c(0x1a4)](_0x120e3c(0x195)),
        _0x283728['classList'][_0x120e3c(0x1a4)](_0x120e3c(0x194));
    }),
    selectedItem = null;
}
window[_0xf2b303(0x1ae)] = function() {
    initializeFromCookies();
}
;
function readGridParam() {
    const _0x59ce11 = _0xf2b303;
    let _0x4a7572 = 0x0;
    try {
        const _0x487fa0 = window['location'][_0x59ce11(0x17f)][_0x59ce11(0x1a7)]('&');
        _0x487fa0[_0x59ce11(0x184)](_0xaad733 => {
            const _0x59b9ee = _0x59ce11;
            if (_0xaad733[_0x59b9ee(0x1a5)]('q=3'))
                _0x4a7572 = 0x3;
            else
                _0xaad733[_0x59b9ee(0x1a5)](_0x59b9ee(0x1a3)) && (_0x4a7572 = 0x4);
        }
        );
    } catch (_0x31cf94) {}
    return _0x4a7572;
}
function initializeFromCookies() {
    const _0x1b9933 = _0xf2b303;
    !(getValue(_0x1b9933(0x17a), '') == resetKey) && (resetAllData(),
    setValue(_0x1b9933(0x17a), resetKey));
    darkMode = getValue(_0x1b9933(0x19d), _0x1b9933(0x1cb)) === _0x1b9933(0x17c);
    let _0x5d5e1b = getValue('threeMode', _0x1b9933(0x1cb)) === 'true';
    const _0xb816d7 = document[_0x1b9933(0x1a9)](_0x1b9933(0x1cc))
      , _0x61db93 = document[_0x1b9933(0x1a9)]('threeModeToggle');
    _0xb816d7 && (_0xb816d7[_0x1b9933(0x1b6)] = darkMode);
    const _0x1db843 = readGridParam();
    _0x1db843 > 0x0 && (_0x5d5e1b = _0x1db843 == 0x3 ? !![] : ![]),
    _0x61db93 && (_0x61db93[_0x1b9933(0x1b6)] = _0x5d5e1b),
    gridN = _0x5d5e1b ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document[_0x1b9933(0x189)][_0x1b9933(0x183)][_0x1b9933(0x1b5)](_0x1b9933(0x17d)) : document[_0x1b9933(0x189)][_0x1b9933(0x183)][_0x1b9933(0x1a4)]('dark-mode'),
    initializePuzzle();
}
function updateStats() {
    const _0x30bad4 = _0xf2b303
      , _0x31e943 = getValue(_0x30bad4(0x1c3) + gridN, '');
    playCount = getValue(_0x30bad4(0x181) + gridN, 0x0),
    winCount = getValue(_0x30bad4(0x1ad) + gridN, 0x0),
    streakCount = getValue('streakCount' + gridN, 0x0),
    streakMax = getValue(_0x30bad4(0x1a0) + gridN, 0x0),
    solveGrid = getValue('solveGrid' + gridN, ''),
    document[_0x30bad4(0x1a9)](_0x30bad4(0x181))[_0x30bad4(0x192)] = playCount,
    winCount == 0x0 ? document[_0x30bad4(0x1a9)]('winCount')[_0x30bad4(0x192)] = '0%' : document['getElementById'](_0x30bad4(0x1ad))[_0x30bad4(0x192)] = Math[_0x30bad4(0x196)](winCount * 0x64 / playCount) + '%',
    document['getElementById'](_0x30bad4(0x185))['textContent'] = streakCount,
    document[_0x30bad4(0x1a9)](_0x30bad4(0x180))[_0x30bad4(0x192)] = streakMax,
    (_0x31e943 != today || today == '') && (playCount++,
    setValue('lastPlayed' + gridN, today),
    setValue('playCount' + gridN, playCount),
    setValue(_0x30bad4(0x18d) + gridN, ''),
    setValue(_0x30bad4(0x18c) + gridN, ''),
    setValue(_0x30bad4(0x186) + gridN, 0x0));
}
function showWinModal() {
    const _0x25b957 = _0xf2b303
      , _0x202c6f = document[_0x25b957(0x1a9)]('winModal');
    document[_0x25b957(0x1a9)](_0x25b957(0x1bf))[_0x25b957(0x192)] = movesCounter,
    document[_0x25b957(0x1a9)](_0x25b957(0x1b2))['textContent'] = gridN + 'x' + gridN,
    document['getElementById']('moveCount2')[_0x25b957(0x192)] = movesCounter,
    _0x202c6f['style']['display'] = _0x25b957(0x1bb),
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    const _0x4c5f0d = _0xf2b303;
    document['getElementById'](_0x4c5f0d(0x193))[_0x4c5f0d(0x182)]['display'] = _0x4c5f0d(0x19b);
}
function updateCountdown() {
    const _0x2089db = _0xf2b303
      , _0x5e6a2f = new Date()
      , _0x3b0335 = new Date();
    _0x3b0335[_0x2089db(0x1a1)](0x18, 0x0, 0x0, 0x0);
    const _0x3d4aa5 = _0x3b0335 - _0x5e6a2f
      , _0x41b407 = Math['floor'](_0x3d4aa5 / (0x3e8 * 0x3c * 0x3c))
      , _0x43cee8 = Math['floor'](_0x3d4aa5 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x502e0d = Math[_0x2089db(0x1ba)](_0x3d4aa5 % (0x3e8 * 0x3c) / 0x3e8)
      , _0x3d9dce = String(_0x41b407)[_0x2089db(0x17b)](0x2, '0') + ':' + String(_0x43cee8)[_0x2089db(0x17b)](0x2, '0') + ':' + String(_0x502e0d)['padStart'](0x2, '0');
    document[_0x2089db(0x1a9)](_0x2089db(0x1ac))[_0x2089db(0x192)] = _0x3d9dce;
}
async function shareResult() {
    const _0x2f73de = _0xf2b303
      , _0x1eda10 = new Date()[_0x2f73de(0x1ca)]()[_0x2f73de(0x179)](0x4, 0xf);
    let _0x21e645 = _0x2f73de(0x18a) + gridN + 'x' + gridN + '\x0a\x0a' + ('दिनाँक:\x20' + _0x1eda10 + '\x0a') + ('कुल\x20चालें:\x20' + movesCounter + '\x0a\x0a');
    _0x2f73de(0x1c6);
    const _0x26bc81 = createBarChart(![]);
    _0x21e645 += _0x26bc81,
    _0x21e645 += _0x2f73de(0x1b9) + (_0x2f73de(0x191) + gridN + 'x' + gridN);
    if (navigator['share'])
        try {
            await navigator['share']({
                'title': 'Hindi\x20Matrix\x20Puzzle',
                'text': _0x21e645
            });
        } catch (_0x36d520) {
            fallbackShare(_0x21e645);
        }
    else
        fallbackShare(_0x21e645);
}
function createBarChart(_0x229381=!![]) {
    const _0x1c2e42 = _0xf2b303;
    let _0x3d749e = 0x0
      , _0x54c9db = '';
    return solveSequence[_0x1c2e42(0x184)]( (_0x40c725, _0x135ce8) => {
        const _0x206682 = _0x1c2e42
          , _0xd8bfa0 = 0xa
          , _0x503f2c = Number(_0x40c725) - _0x3d749e
          , _0x35a84b = _0x503f2c > _0xd8bfa0 ? _0xd8bfa0 : _0x503f2c;
        let _0x370148 = '';
        if (_0x503f2c >= _0xd8bfa0)
            _0x370148 = boxes[_0x206682(0x1c0)];
        else
            _0x503f2c > (gridN == 0x3 ? 0x3 : 0x5) ? _0x370148 = boxes[_0x206682(0x1c8)] : _0x370148 = boxes[_0x206682(0x1c2)];
        const _0x37fdfb = _0x35a84b <= 0x0 ? '' : _0x370148[_0x206682(0x19f)](_0x35a84b)
          , _0x23b6c5 = _0x135ce8 + 0x1 + ':\x20'
          , _0x21020e = _0x23b6c5['padEnd'](0x2);
        _0x54c9db += '' + _0x21020e + _0x37fdfb + _0x503f2c > 0xa ? '\x20(' + _0x503f2c + ')\x0a' : '\x0a',
        _0x3d749e += _0x503f2c;
    }
    ),
    _0x54c9db;
}
function fallbackShare(_0x185920) {
    const _0x1a34b6 = _0xf2b303
      , _0x4448cc = document[_0x1a34b6(0x1c5)](_0x1a34b6(0x1af));
    _0x4448cc[_0x1a34b6(0x18f)] = _0x185920,
    document[_0x1a34b6(0x189)][_0x1a34b6(0x1c7)](_0x4448cc),
    _0x4448cc[_0x1a34b6(0x1b8)](),
    document[_0x1a34b6(0x1b3)](_0x1a34b6(0x17e)),
    document['body']['removeChild'](_0x4448cc),
    alert(_0x1a34b6(0x1a6));
}
