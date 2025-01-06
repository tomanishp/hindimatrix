const _0x554b5e = _0x45e4;
(function(_0x17589e, _0x4c72c1) {
    const _0x377f76 = _0x45e4
      , _0xa399d3 = _0x17589e();
    while (!![]) {
        try {
            const _0x5d4f3d = -parseInt(_0x377f76(0xba)) / 0x1 * (parseInt(_0x377f76(0xb5)) / 0x2) + parseInt(_0x377f76(0x7f)) / 0x3 * (-parseInt(_0x377f76(0x92)) / 0x4) + parseInt(_0x377f76(0x81)) / 0x5 * (-parseInt(_0x377f76(0xbf)) / 0x6) + -parseInt(_0x377f76(0xb3)) / 0x7 + parseInt(_0x377f76(0xb0)) / 0x8 * (-parseInt(_0x377f76(0xbc)) / 0x9) + parseInt(_0x377f76(0x9f)) / 0xa + parseInt(_0x377f76(0x96)) / 0xb;
            if (_0x5d4f3d === _0x4c72c1)
                break;
            else
                _0xa399d3['push'](_0xa399d3['shift']());
        } catch (_0x265033) {
            _0xa399d3['push'](_0xa399d3['shift']());
        }
    }
}(_0x1e32, 0xefc51));
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
function toggleMenu(_0x50ab90) {
    const _0x3d7021 = _0x45e4
      , _0x178f20 = document['querySelector']('.' + _0x50ab90 + _0x3d7021(0x83))
      , _0x1f6cfd = document[_0x3d7021(0xaf)](_0x3d7021(0x9c))
      , _0x387e5a = document['querySelectorAll'](_0x3d7021(0x86));
    _0x387e5a[_0x3d7021(0xa4)](_0x3ccdd0 => {
        const _0x1c40ae = _0x3d7021;
        _0x3ccdd0 !== _0x178f20 && _0x3ccdd0['classList'][_0x1c40ae(0x9e)](_0x1c40ae(0x8f));
    }
    ),
    _0x178f20[_0x3d7021(0x98)]['toggle']('active'),
    _0x1f6cfd[_0x3d7021(0x98)][_0x3d7021(0x95)]('active');
}
function closeAllMenus() {
    const _0x2f7b53 = _0x45e4
      , _0x2e9808 = document['querySelectorAll'](_0x2f7b53(0x86))
      , _0x23bce9 = document[_0x2f7b53(0xaf)](_0x2f7b53(0x9c));
    _0x2e9808[_0x2f7b53(0xa4)](_0x908451 => {
        const _0x1f022d = _0x2f7b53;
        _0x908451[_0x1f022d(0x98)][_0x1f022d(0x9e)](_0x1f022d(0x8f));
    }
    ),
    _0x23bce9[_0x2f7b53(0x98)][_0x2f7b53(0x9e)](_0x2f7b53(0x8f));
}
function toggleDarkMode() {
    const _0x3ca10a = _0x45e4;
    darkMode = document[_0x3ca10a(0xc2)](_0x3ca10a(0x85))[_0x3ca10a(0xb7)],
    document[_0x3ca10a(0xaa)]['classList'][_0x3ca10a(0x95)](_0x3ca10a(0x79), darkMode),
    setValue(_0x3ca10a(0xb6), darkMode);
}
function toggleThreeMode() {
    const _0x3f9127 = _0x45e4
      , _0x346fc3 = document[_0x3f9127(0xc2)](_0x3f9127(0xa7))[_0x3f9127(0xb7)];
    setValue(_0x3f9127(0xa1), _0x346fc3),
    gridN = _0x346fc3 ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0x31b383 = _0x45e4;
    mindCheckMode = document[_0x31b383(0xc2)](_0x31b383(0x94))['checked'],
    Array['from'](document[_0x31b383(0x9d)](_0x31b383(0x77)))[_0x31b383(0xa4)](function(_0x4cde99) {
        const _0x5bee23 = _0x31b383;
        _0x4cde99['classList'][_0x5bee23(0x9e)](_0x5bee23(0x88)),
        _0x4cde99[_0x5bee23(0x98)]['remove'](_0x5bee23(0x97));
    }),
    selectedItem = null;
}
window[_0x554b5e(0xb1)] = function() {
    initializeFromCookies();
}
;
function readGridParam() {
    const _0x1fca4b = _0x554b5e;
    let _0x29a3cf = 0x0;
    try {
        const _0x4af9ce = window[_0x1fca4b(0x9b)][_0x1fca4b(0x7c)][_0x1fca4b(0x89)]('&');
        _0x4af9ce['forEach'](_0x3c3fa5 => {
            const _0x30b348 = _0x1fca4b;
            if (_0x3c3fa5[_0x30b348(0x99)](_0x30b348(0xab)))
                _0x29a3cf = 0x3;
            else
                _0x3c3fa5[_0x30b348(0x99)](_0x30b348(0x84)) && (_0x29a3cf = 0x4);
        }
        );
    } catch (_0x618fd1) {}
    return _0x29a3cf;
}
function _0x45e4(_0x3b48fb, _0x550fd5) {
    const _0x1e32f5 = _0x1e32();
    return _0x45e4 = function(_0x45e489, _0x750b90) {
        _0x45e489 = _0x45e489 - 0x76;
        let _0x13d8b4 = _0x1e32f5[_0x45e489];
        return _0x13d8b4;
    }
    ,
    _0x45e4(_0x3b48fb, _0x550fd5);
}
function initializeFromCookies() {
    const _0x475822 = _0x554b5e;
    !(getValue(_0x475822(0x8c), '') == resetKey) && (resetAllData(),
    setValue(_0x475822(0x8c), resetKey));
    darkMode = getValue('darkMode', 'false') === 'true';
    let _0x2f8433 = getValue('threeMode', _0x475822(0xb8)) === _0x475822(0x80);
    const _0x4aef10 = document[_0x475822(0xc2)](_0x475822(0x85))
      , _0x483642 = document[_0x475822(0xc2)](_0x475822(0xa7));
    _0x4aef10 && (_0x4aef10[_0x475822(0xb7)] = darkMode);
    const _0x4b2a1f = readGridParam();
    _0x4b2a1f > 0x0 && (_0x2f8433 = _0x4b2a1f == 0x3 ? !![] : ![]),
    _0x483642 && (_0x483642['checked'] = _0x2f8433),
    gridN = _0x2f8433 ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document['body'][_0x475822(0x98)][_0x475822(0x93)]('dark-mode') : document[_0x475822(0xaa)][_0x475822(0x98)][_0x475822(0x9e)](_0x475822(0x79)),
    initializePuzzle();
}
function updateStats() {
    const _0x2e592b = _0x554b5e
      , _0x26e17e = getValue(_0x2e592b(0x8b) + gridN, '');
    playCount = getValue(_0x2e592b(0xae) + gridN, 0x0),
    winCount = getValue(_0x2e592b(0xac) + gridN, 0x0),
    streakCount = getValue(_0x2e592b(0xa9) + gridN, 0x0),
    streakMax = getValue(_0x2e592b(0x87) + gridN, 0x0),
    orgGrid = getValue(_0x2e592b(0xa0) + gridN, ''),
    document[_0x2e592b(0xc2)](_0x2e592b(0xae))[_0x2e592b(0x82)] = playCount,
    winCount == 0x0 ? document[_0x2e592b(0xc2)](_0x2e592b(0xac))[_0x2e592b(0x82)] = '0%' : document['getElementById']('winCount')[_0x2e592b(0x82)] = Math['round'](winCount * 0x64 / playCount) + '%',
    document[_0x2e592b(0xc2)](_0x2e592b(0xa6))[_0x2e592b(0x82)] = streakCount,
    document[_0x2e592b(0xc2)](_0x2e592b(0x7d))[_0x2e592b(0x82)] = streakMax,
    (_0x26e17e != today || today == '') && (playCount++,
    setValue(_0x2e592b(0x8b) + gridN, today),
    setValue(_0x2e592b(0xae) + gridN, playCount),
    setValue('userGrid' + gridN, ''),
    setValue(_0x2e592b(0xa0) + gridN, ''),
    setValue('solvegGrid' + gridN, ''),
    setValue(_0x2e592b(0x76) + gridN, 0x0));
}
function showWinModal() {
    const _0x1358f4 = _0x554b5e
      , _0x14c7de = document[_0x1358f4(0xc2)]('winModal');
    document[_0x1358f4(0xc2)]('moveCount1')[_0x1358f4(0x82)] = movesCounter,
    document[_0x1358f4(0xc2)](_0x1358f4(0xa2))[_0x1358f4(0x82)] = gridN + 'x' + gridN,
    document[_0x1358f4(0xc2)](_0x1358f4(0x78))['textContent'] = movesCounter,
    _0x14c7de[_0x1358f4(0x7a)]['display'] = 'block',
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function _0x1e32() {
    const _0x118763 = ['threeModeToggle', 'share', 'streakCount', 'body', 'q=3', 'winCount', 'padEnd', 'playCount', 'querySelector', '80KwloFq', 'onload', 'red', '490420QMbuQE', 'winModal', '47048jzayTH', 'darkMode', 'checked', 'false', 'countdownTimer', '65TITHrj', 'green', '993861GxfCXD', 'Hindi\x20Matrix\x20Puzzle', 'copy', '23976TnJmuw', 'कुल\x20चालें:\x20', 'floor', 'getElementById', 'toString', 'setHours', 'movesCounter', 'grid-item', 'moveCount2', 'dark-mode', 'style', '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a', 'search', 'maxStreak', 'removeChild', '2106969hkpImL', 'true', '1765OhBguW', 'textContent', '-sidebar', 'q=4', 'darkModeToggle', '.sidebar', 'streakMax', 'selected', 'split', 'padStart', 'lastPlayed', 'resetKey', 'createElement', '🧩\x20हिन्दी\x20शब्द\x20रचना\x20', 'active', 'display', 'substring', '4QCgPOc', 'add', 'mindCheckToggle', 'toggle', '53571342UZRfoy', 'selected2', 'classList', 'endsWith', 'repeat', 'location', '.overlay', 'getElementsByClassName', 'remove', '9282960iHVfzo', 'orgGrid', 'threeMode', 'gridSizeDisplay', 'textarea', 'forEach', 'execCommand', 'playStreak'];
    _0x1e32 = function() {
        return _0x118763;
    }
    ;
    return _0x1e32();
}
function closeWinModal() {
    const _0x5743b6 = _0x554b5e;
    document[_0x5743b6(0xc2)](_0x5743b6(0xb4))[_0x5743b6(0x7a)][_0x5743b6(0x90)] = 'none';
}
function updateCountdown() {
    const _0x2f0b0e = _0x554b5e
      , _0x4285fe = new Date()
      , _0x2198d9 = new Date();
    _0x2198d9[_0x2f0b0e(0xc4)](0x18, 0x0, 0x0, 0x0);
    const _0x4131b1 = _0x2198d9 - _0x4285fe
      , _0x481957 = Math[_0x2f0b0e(0xc1)](_0x4131b1 / (0x3e8 * 0x3c * 0x3c))
      , _0x59b829 = Math[_0x2f0b0e(0xc1)](_0x4131b1 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x127fb9 = Math[_0x2f0b0e(0xc1)](_0x4131b1 % (0x3e8 * 0x3c) / 0x3e8)
      , _0x3c0d26 = String(_0x481957)[_0x2f0b0e(0x8a)](0x2, '0') + ':' + String(_0x59b829)[_0x2f0b0e(0x8a)](0x2, '0') + ':' + String(_0x127fb9)[_0x2f0b0e(0x8a)](0x2, '0');
    document[_0x2f0b0e(0xc2)](_0x2f0b0e(0xb9))['textContent'] = _0x3c0d26;
}
async function shareResult() {
    const _0x3fa8bd = _0x554b5e
      , _0x4db868 = new Date()[_0x3fa8bd(0xc3)]()[_0x3fa8bd(0x91)](0x4, 0xf);
    let _0x2f1a71 = _0x3fa8bd(0x8e) + gridN + 'x' + gridN + '\x0a\x0a' + ('दिनाँक:\x20' + _0x4db868 + '\x0a') + (_0x3fa8bd(0xc0) + movesCounter + '\x0a\x0a');
    const _0x4b7ee4 = createBarChart(![]);
    _0x2f1a71 += _0x4b7ee4,
    _0x2f1a71 += _0x3fa8bd(0x7b) + ('bit.ly/hindi' + gridN + 'x' + gridN);
    if (navigator[_0x3fa8bd(0xa8)])
        try {
            await navigator[_0x3fa8bd(0xa8)]({
                'title': _0x3fa8bd(0xbd),
                'text': _0x2f1a71
            });
        } catch (_0x3713fa) {
            fallbackShare(_0x2f1a71);
        }
    else
        fallbackShare(_0x2f1a71);
}
function createBarChart(_0x275cba=!![]) {
    const _0x16f4bf = _0x554b5e;
    let _0x26d370 = 0x0
      , _0x2705f0 = '';
    return solveSequence[_0x16f4bf(0xa4)]( (_0x21bcaf, _0x586f6f) => {
        const _0x2895a2 = _0x16f4bf
          , _0x161fa1 = Number(_0x21bcaf) - _0x26d370
          , _0x28e979 = _0x161fa1 > 0xa ? 0xa : _0x161fa1;
        let _0x1805da = '';
        if (_0x161fa1 >= 0xa)
            _0x1805da = boxes[_0x2895a2(0xb2)];
        else
            _0x161fa1 > (gridN == 0x3 ? 0x3 : 0x5) ? _0x1805da = boxes['yellow'] : _0x1805da = boxes[_0x2895a2(0xbb)];
        const _0x196741 = _0x1805da[_0x2895a2(0x9a)](_0x28e979)
          , _0x212517 = _0x586f6f + 0x1 + ':\x20'
          , _0x421ffb = _0x212517[_0x2895a2(0xad)](0x4);
        _0x2705f0 += '' + _0x421ffb + _0x196741 + '\x20(' + _0x161fa1 + ')\x0a',
        _0x26d370 += _0x161fa1;
    }
    ),
    _0x2705f0;
}
function fallbackShare(_0x35595c) {
    const _0x4acf79 = _0x554b5e
      , _0x17daec = document[_0x4acf79(0x8d)](_0x4acf79(0xa3));
    _0x17daec['value'] = _0x35595c,
    document[_0x4acf79(0xaa)]['appendChild'](_0x17daec),
    _0x17daec['select'](),
    document[_0x4acf79(0xa5)](_0x4acf79(0xbe)),
    document[_0x4acf79(0xaa)][_0x4acf79(0x7e)](_0x17daec),
    alert('Result\x20copied\x20to\x20clipboard!');
}
