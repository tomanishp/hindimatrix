const _0x16312a = _0x54a6;
(function(_0x336f41, _0x533024) {
    const _0x2dcc0c = _0x54a6
      , _0x143971 = _0x336f41();
    while (!![]) {
        try {
            const _0x4b1d1e = -parseInt(_0x2dcc0c(0x9e)) / 0x1 + -parseInt(_0x2dcc0c(0xba)) / 0x2 + -parseInt(_0x2dcc0c(0x82)) / 0x3 + parseInt(_0x2dcc0c(0x90)) / 0x4 * (parseInt(_0x2dcc0c(0xb8)) / 0x5) + -parseInt(_0x2dcc0c(0xa2)) / 0x6 * (-parseInt(_0x2dcc0c(0xad)) / 0x7) + parseInt(_0x2dcc0c(0x6d)) / 0x8 + -parseInt(_0x2dcc0c(0xae)) / 0x9 * (parseInt(_0x2dcc0c(0x6f)) / 0xa);
            if (_0x4b1d1e === _0x533024)
                break;
            else
                _0x143971['push'](_0x143971['shift']());
        } catch (_0x3cbde4) {
            _0x143971['push'](_0x143971['shift']());
        }
    }
}(_0x3e21, 0xb82a4));
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
function toggleMenu(_0x39e298) {
    const _0x437965 = _0x54a6
      , _0x1a87f8 = document['querySelector']('.' + _0x39e298 + _0x437965(0x7b))
      , _0x4d8024 = document[_0x437965(0x98)]('.overlay')
      , _0x2a5dfb = document[_0x437965(0x8b)](_0x437965(0x69));
    _0x2a5dfb[_0x437965(0xa9)](_0x22674c => {
        const _0x3d7b15 = _0x437965;
        _0x22674c !== _0x1a87f8 && _0x22674c[_0x3d7b15(0x96)][_0x3d7b15(0x6b)](_0x3d7b15(0xb6));
    }
    ),
    _0x1a87f8[_0x437965(0x96)][_0x437965(0xaf)](_0x437965(0xb6)),
    _0x4d8024[_0x437965(0x96)][_0x437965(0xaf)]('active');
}
function closeAllMenus() {
    const _0x176d3c = _0x54a6
      , _0x258650 = document[_0x176d3c(0x8b)](_0x176d3c(0x69))
      , _0x60e1a4 = document[_0x176d3c(0x98)]('.overlay');
    _0x258650[_0x176d3c(0xa9)](_0xc910d7 => {
        const _0x2ae45a = _0x176d3c;
        _0xc910d7[_0x2ae45a(0x96)][_0x2ae45a(0x6b)](_0x2ae45a(0xb6));
    }
    ),
    _0x60e1a4[_0x176d3c(0x96)][_0x176d3c(0x6b)](_0x176d3c(0xb6));
}
function toggleDarkMode() {
    const _0x276692 = _0x54a6;
    darkMode = document[_0x276692(0x6c)]('darkModeToggle')['checked'],
    document[_0x276692(0x7e)][_0x276692(0x96)][_0x276692(0xaf)](_0x276692(0x88), darkMode),
    setValue(_0x276692(0x9a), darkMode);
}
function toggleThreeMode() {
    const _0x408ed2 = _0x54a6
      , _0x4197cf = document[_0x408ed2(0x6c)](_0x408ed2(0x8e))[_0x408ed2(0xa1)];
    setValue(_0x408ed2(0x97), _0x4197cf),
    gridN = _0x4197cf ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function _0x54a6(_0x90b0f7, _0x338c6d) {
    const _0x3e2162 = _0x3e21();
    return _0x54a6 = function(_0x54a6f7, _0x239487) {
        _0x54a6f7 = _0x54a6f7 - 0x68;
        let _0x511b5d = _0x3e2162[_0x54a6f7];
        return _0x511b5d;
    }
    ,
    _0x54a6(_0x90b0f7, _0x338c6d);
}
function toggleMindCheck() {
    const _0x435701 = _0x54a6;
    mindCheckMode = document[_0x435701(0x6c)]('mindCheckToggle')[_0x435701(0xa1)],
    Array[_0x435701(0x86)](document[_0x435701(0x8c)](_0x435701(0x93)))['forEach'](function(_0x3e4ce8) {
        const _0x55f296 = _0x435701;
        _0x3e4ce8[_0x55f296(0x96)][_0x55f296(0x6b)](_0x55f296(0xb4)),
        _0x3e4ce8[_0x55f296(0x96)][_0x55f296(0x6b)](_0x55f296(0x71));
    }),
    selectedItem = null;
}
window[_0x16312a(0xb0)] = function() {
    initializeFromCookies();
}
;
function readGridParam() {
    const _0x4c9a84 = _0x16312a;
    let _0x4688fe = 0x0;
    try {
        const _0x4e0714 = window['location'][_0x4c9a84(0x99)][_0x4c9a84(0x92)]('&');
        _0x4e0714[_0x4c9a84(0xa9)](_0x50c18c => {
            const _0x5a66b2 = _0x4c9a84;
            if (_0x50c18c[_0x5a66b2(0xab)](_0x5a66b2(0x77)))
                _0x4688fe = 0x3;
            else
                _0x50c18c[_0x5a66b2(0xab)](_0x5a66b2(0x73)) && (_0x4688fe = 0x4);
        }
        );
    } catch (_0x43ca3e) {}
    return _0x4688fe;
}
function initializeFromCookies() {
    const _0x337081 = _0x16312a;
    !(getValue(_0x337081(0xa0), '') == resetKey) && (resetAllData(),
    setValue(_0x337081(0xa0), resetKey));
    darkMode = getValue(_0x337081(0x9a), _0x337081(0x8f)) === _0x337081(0x6e);
    let _0xfa7a96 = getValue(_0x337081(0x97), _0x337081(0x8f)) === _0x337081(0x6e);
    const _0x35766c = document[_0x337081(0x6c)]('darkModeToggle')
      , _0x1e40cf = document[_0x337081(0x6c)](_0x337081(0x8e));
    _0x35766c && (_0x35766c[_0x337081(0xa1)] = darkMode);
    const _0x5f4fdf = readGridParam();
    _0x5f4fdf > 0x0 && (_0xfa7a96 = _0x5f4fdf == 0x3 ? !![] : ![]),
    _0x1e40cf && (_0x1e40cf[_0x337081(0xa1)] = _0xfa7a96),
    gridN = _0xfa7a96 ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document[_0x337081(0x7e)]['classList'][_0x337081(0xb1)]('dark-mode') : document[_0x337081(0x7e)][_0x337081(0x96)][_0x337081(0x6b)](_0x337081(0x88)),
    initializePuzzle();
}
function updateStats() {
    const _0x31cbb8 = _0x16312a
      , _0x1d7a23 = getValue(_0x31cbb8(0xb9) + gridN, '');
    playCount = getValue(_0x31cbb8(0x80) + gridN, 0x0),
    winCount = getValue(_0x31cbb8(0x79) + gridN, 0x0),
    streakCount = getValue(_0x31cbb8(0x9d) + gridN, 0x0),
    streakMax = getValue('streakMax' + gridN, 0x0),
    solveGrid = getValue(_0x31cbb8(0x7f) + gridN, ''),
    document[_0x31cbb8(0x6c)](_0x31cbb8(0x80))['textContent'] = playCount,
    winCount == 0x0 ? document['getElementById']('winCount')[_0x31cbb8(0x91)] = '0%' : document[_0x31cbb8(0x6c)](_0x31cbb8(0x79))['textContent'] = Math[_0x31cbb8(0x89)](winCount * 0x64 / playCount) + '%',
    document[_0x31cbb8(0x6c)](_0x31cbb8(0x72))[_0x31cbb8(0x91)] = streakCount,
    document[_0x31cbb8(0x6c)](_0x31cbb8(0x84))[_0x31cbb8(0x91)] = streakMax,
    (_0x1d7a23 != today || today == '') && (playCount++,
    setValue('lastPlayed' + gridN, today),
    setValue(_0x31cbb8(0x80) + gridN, playCount),
    setValue(_0x31cbb8(0x8d) + gridN, ''),
    setValue(_0x31cbb8(0x7f) + gridN, ''),
    setValue(_0x31cbb8(0x74) + gridN, 0x0),
    solveGrid = '',
    gridSequence = [],
    idxSequence = [],
    solveSequence = []);
}
function showWinModal() {
    const _0x188c89 = _0x16312a
      , _0x2d8fda = document[_0x188c89(0x6c)]('winModal');
    document[_0x188c89(0x6c)](_0x188c89(0x9b))[_0x188c89(0x91)] = movesCounter,
    document[_0x188c89(0x6c)](_0x188c89(0x83))[_0x188c89(0x91)] = gridN + 'x' + gridN,
    document[_0x188c89(0x6c)](_0x188c89(0x6a))[_0x188c89(0x91)] = movesCounter,
    _0x2d8fda[_0x188c89(0xa4)][_0x188c89(0x8a)] = _0x188c89(0x9f),
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    const _0x84f92e = _0x16312a;
    document['getElementById']('winModal')['style'][_0x84f92e(0x8a)] = 'none';
}
function _0x3e21() {
    const _0x184812 = ['setHours', '441204dYzKwU', 'gridSizeDisplay', 'maxStreak', 'select', 'from', 'substring', 'dark-mode', 'round', 'display', 'querySelectorAll', 'getElementsByClassName', 'userGrid', 'threeModeToggle', 'false', '28OgEubx', 'textContent', 'split', 'grid-item', '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a', 'padEnd', 'classList', 'threeMode', 'querySelector', 'search', 'darkMode', 'moveCount1', 'repeat', 'streakCount', '589173ZOVaWL', 'block', 'resetKey', 'checked', '2299326HCQBZq', 'bit.ly/hindi', 'style', 'removeChild', 'textarea', 'length', 'yellow', 'forEach', 'createElement', 'endsWith', 'execCommand', '21CGzrNH', '27NwzbWa', 'toggle', 'onload', 'add', 'toString', 'floor', 'selected', 'Hindi\x20Matrix\x20Puzzle', 'active', 'green', '605535lRNLEg', 'lastPlayed', '2139666GnNWXa', 'max', 'red', '.sidebar', 'moveCount2', 'remove', 'getElementById', '9178880TbBcZZ', 'true', '1947860UzgBEJ', 'शब्द:\x20चाल\x0a', 'selected2', 'playStreak', 'q=4', 'movesCounter', 'कुल\x20चालें:\x20', 'दिनाँक:\x20', 'q=3', 'share', 'winCount', 'Result\x20copied\x20to\x20clipboard!', '-sidebar', 'padStart', 'copy', 'body', 'solveGrid', 'playCount'];
    _0x3e21 = function() {
        return _0x184812;
    }
    ;
    return _0x3e21();
}
function updateCountdown() {
    const _0x459759 = _0x16312a
      , _0x2fa474 = new Date()
      , _0x2dfad3 = new Date();
    _0x2dfad3[_0x459759(0x81)](0x18, 0x0, 0x0, 0x0);
    const _0x2d19dc = _0x2dfad3 - _0x2fa474
      , _0x5b3d5a = Math[_0x459759(0xb3)](_0x2d19dc / (0x3e8 * 0x3c * 0x3c))
      , _0x3faa55 = Math[_0x459759(0xb3)](_0x2d19dc % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x40c6df = Math[_0x459759(0xb3)](_0x2d19dc % (0x3e8 * 0x3c) / 0x3e8)
      , _0x837d66 = String(_0x5b3d5a)[_0x459759(0x7c)](0x2, '0') + ':' + String(_0x3faa55)[_0x459759(0x7c)](0x2, '0') + ':' + String(_0x40c6df)[_0x459759(0x7c)](0x2, '0');
    document[_0x459759(0x6c)]('countdownTimer')['textContent'] = _0x837d66;
}
async function shareResult() {
    const _0x1870fb = _0x16312a
      , _0xd591da = new Date()[_0x1870fb(0xb2)]()[_0x1870fb(0x87)](0x4, 0xf);
    let _0x9ab37a = '🧩\x20हिन्दी\x20शब्द\x20रचना\x20' + gridN + 'x' + gridN + '\x0a\x0a' + (_0x1870fb(0x76) + _0xd591da + '\x0a') + (_0x1870fb(0x75) + movesCounter + '\x0a\x0a');
    const _0x439c69 = createBarChart(![]);
    _0x9ab37a += _0x439c69,
    _0x9ab37a += _0x1870fb(0x94) + (_0x1870fb(0xa3) + gridN + 'x' + gridN);
    if (navigator[_0x1870fb(0x78)])
        try {
            await navigator['share']({
                'title': _0x1870fb(0xb5),
                'text': _0x9ab37a
            });
        } catch (_0x28a60f) {
            fallbackShare(_0x9ab37a);
        }
    else
        fallbackShare(_0x9ab37a);
}
function createBarChart(_0x5ab3a1=!![]) {
    const _0x4e7200 = _0x16312a;
    let _0x85db62 = 0x0
      , _0x181598 = movesCounter > 0x0 ? _0x4e7200(0x70) : '';
    const _0x33a4d5 = solveSequence['slice'](Math[_0x4e7200(0xbb)](solveSequence[_0x4e7200(0xa7)] - gridN, 0x0));
    return _0x33a4d5[_0x4e7200(0xa9)]( (_0x49daad, _0x143955) => {
        const _0x57c5f4 = _0x4e7200
          , _0x13e025 = 0xa
          , _0x7817bd = Number(_0x49daad) - _0x85db62
          , _0x5a02f6 = _0x7817bd > _0x13e025 ? _0x13e025 : _0x7817bd;
        let _0x1a1ae4 = '';
        if (_0x7817bd >= _0x13e025)
            _0x1a1ae4 = boxes[_0x57c5f4(0x68)];
        else
            _0x7817bd > (gridN == 0x3 ? 0x3 : 0x5) ? _0x1a1ae4 = boxes[_0x57c5f4(0xa8)] : _0x1a1ae4 = boxes[_0x57c5f4(0xb7)];
        const _0x255034 = _0x5a02f6 <= 0x0 ? '' : _0x1a1ae4[_0x57c5f4(0x9c)](_0x5a02f6)
          , _0x5150a3 = _0x143955 + 0x1 + ':\x20'
          , _0x1a7eb7 = _0x5150a3[_0x57c5f4(0x95)](0x2);
        _0x181598 += '' + _0x1a7eb7 + _0x255034,
        _0x7817bd > 0xa ? _0x181598 += '\x20(' + _0x7817bd + ')\x0a' : _0x181598 += '\x0a',
        _0x85db62 += _0x7817bd;
    }
    ),
    _0x181598;
}
function fallbackShare(_0x2839b7) {
    const _0xec715e = _0x16312a
      , _0x28114f = document[_0xec715e(0xaa)](_0xec715e(0xa6));
    _0x28114f['value'] = _0x2839b7,
    document['body']['appendChild'](_0x28114f),
    _0x28114f[_0xec715e(0x85)](),
    document[_0xec715e(0xac)](_0xec715e(0x7d)),
    document[_0xec715e(0x7e)][_0xec715e(0xa5)](_0x28114f),
    alert(_0xec715e(0x7a));
}
