const _0x2e37da = _0x32d4;
(function(_0x240970, _0x29b9bc) {
    const _0x4cee11 = _0x32d4
      , _0x2fe280 = _0x240970();
    while (!![]) {
        try {
            const _0x1afd4b = parseInt(_0x4cee11(0x183)) / 0x1 + parseInt(_0x4cee11(0x14b)) / 0x2 + -parseInt(_0x4cee11(0x184)) / 0x3 + parseInt(_0x4cee11(0x14c)) / 0x4 * (parseInt(_0x4cee11(0x149)) / 0x5) + parseInt(_0x4cee11(0x13e)) / 0x6 + -parseInt(_0x4cee11(0x137)) / 0x7 * (parseInt(_0x4cee11(0x150)) / 0x8) + parseInt(_0x4cee11(0x16f)) / 0x9 * (-parseInt(_0x4cee11(0x159)) / 0xa);
            if (_0x1afd4b === _0x29b9bc)
                break;
            else
                _0x2fe280['push'](_0x2fe280['shift']());
        } catch (_0x205612) {
            _0x2fe280['push'](_0x2fe280['shift']());
        }
    }
}(_0x1481, 0x9d846));
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
function toggleMenu(_0x6ddb1d) {
    const _0x3474dd = _0x32d4
      , _0x2a43ac = document[_0x3474dd(0x15d)]('.' + _0x6ddb1d + _0x3474dd(0x176))
      , _0xf7e36c = document[_0x3474dd(0x15d)](_0x3474dd(0x153))
      , _0x42b402 = document['querySelectorAll'](_0x3474dd(0x178));
    _0x42b402['forEach'](_0x5588c0 => {
        const _0x4d740a = _0x3474dd;
        _0x5588c0 !== _0x2a43ac && _0x5588c0['classList']['remove'](_0x4d740a(0x144));
    }
    ),
    _0x2a43ac[_0x3474dd(0x186)][_0x3474dd(0x16e)](_0x3474dd(0x144)),
    _0xf7e36c['classList'][_0x3474dd(0x16e)](_0x3474dd(0x144));
}
function closeAllMenus() {
    const _0x4a2afe = _0x32d4
      , _0x249a3e = document[_0x4a2afe(0x146)]('.sidebar')
      , _0x138577 = document[_0x4a2afe(0x15d)](_0x4a2afe(0x153));
    _0x249a3e['forEach'](_0x4f5e9b => {
        const _0x30b777 = _0x4a2afe;
        _0x4f5e9b[_0x30b777(0x186)][_0x30b777(0x141)](_0x30b777(0x144));
    }
    ),
    _0x138577[_0x4a2afe(0x186)][_0x4a2afe(0x141)]('active');
}
function toggleDarkMode() {
    const _0x1bd8c4 = _0x32d4;
    darkMode = document[_0x1bd8c4(0x170)](_0x1bd8c4(0x13f))[_0x1bd8c4(0x158)],
    document[_0x1bd8c4(0x174)][_0x1bd8c4(0x186)]['toggle'](_0x1bd8c4(0x136), darkMode),
    setValue(_0x1bd8c4(0x160), darkMode);
}
function toggleThreeMode() {
    const _0x2e3f1f = _0x32d4
      , _0x32400e = document[_0x2e3f1f(0x170)]('threeModeToggle')[_0x2e3f1f(0x158)];
    setValue(_0x2e3f1f(0x156), _0x32400e),
    gridN = _0x32400e ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0x315cb5 = _0x32d4;
    mindCheckMode = document[_0x315cb5(0x170)](_0x315cb5(0x157))[_0x315cb5(0x158)],
    Array[_0x315cb5(0x148)](document[_0x315cb5(0x16d)](_0x315cb5(0x139)))[_0x315cb5(0x168)](function(_0x1477c9) {
        const _0xee6634 = _0x315cb5;
        _0x1477c9[_0xee6634(0x186)][_0xee6634(0x141)](_0xee6634(0x17c)),
        _0x1477c9[_0xee6634(0x186)]['remove'](_0xee6634(0x16b));
    }),
    selectedItem = null;
}
window[_0x2e37da(0x177)] = function() {
    initializeFromCookies();
}
;
function _0x1481() {
    const _0x2810c0 = ['true', 'padStart', 'selected', 'solvegGrid', 'moveCount1', 'threeModeToggle', 'movesCounter', 'orgGrid', 'floor', '682524WoaVZE', '2269041HJyYgZ', 'execCommand', 'classList', 'playCount', 'dark-mode', '482468pLufCp', 'q=4', 'grid-item', 'lastPlayed', 'share', 'round', 'removeChild', '95472XXxItJ', 'darkModeToggle', 'कुल\x20चालें:\x20', 'remove', 'textContent', 'display', 'active', 'userGrid', 'querySelectorAll', 'style', 'from', '3890kmBTlx', 'दिनाँक:\x20', '1759706nQVcNO', '6288tJqqcI', 'maxStreak', 'red', 'select', '56PAsEwW', 'substring', 'padEnd', '.overlay', 'split', 'search', 'threeMode', 'mindCheckToggle', 'checked', '100jnmsWc', 'textarea', 'resetKey', 'copy', 'querySelector', 'add', 'countdownTimer', 'darkMode', 'location', 'repeat', 'Result\x20copied\x20to\x20clipboard!', 'bit.ly/hindi', 'Hindi\x20Matrix\x20Puzzle', 'gridSizeDisplay', 'playStreak', 'forEach', 'solveGrid', '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a', 'selected2', 'setHours', 'getElementsByClassName', 'toggle', '825570oFzyJL', 'getElementById', 'green', 'endsWith', 'winModal', 'body', 'winCount', '-sidebar', 'onload', '.sidebar', 'q=3'];
    _0x1481 = function() {
        return _0x2810c0;
    }
    ;
    return _0x1481();
}
function readGridParam() {
    const _0x2e6f99 = _0x2e37da;
    let _0x119125 = 0x0;
    try {
        const _0x176b57 = window[_0x2e6f99(0x161)][_0x2e6f99(0x155)][_0x2e6f99(0x154)]('&');
        _0x176b57[_0x2e6f99(0x168)](_0xae6f56 => {
            const _0x568287 = _0x2e6f99;
            if (_0xae6f56[_0x568287(0x172)](_0x568287(0x179)))
                _0x119125 = 0x3;
            else
                _0xae6f56[_0x568287(0x172)](_0x568287(0x138)) && (_0x119125 = 0x4);
        }
        );
    } catch (_0x5dde21) {}
    return _0x119125;
}
function initializeFromCookies() {
    const _0xccb509 = _0x2e37da;
    !(getValue(_0xccb509(0x15b), '') == resetKey) && (resetAllData(),
    setValue(_0xccb509(0x15b), resetKey));
    darkMode = getValue(_0xccb509(0x160), 'false') === _0xccb509(0x17a);
    let _0x2fe091 = getValue(_0xccb509(0x156), 'false') === _0xccb509(0x17a);
    const _0x3348c2 = document[_0xccb509(0x170)](_0xccb509(0x13f))
      , _0x2ac568 = document[_0xccb509(0x170)](_0xccb509(0x17f));
    _0x3348c2 && (_0x3348c2['checked'] = darkMode);
    const _0x261867 = readGridParam();
    _0x261867 > 0x0 && (_0x2fe091 = _0x261867 == 0x3 ? !![] : ![]),
    _0x2ac568 && (_0x2ac568[_0xccb509(0x158)] = _0x2fe091),
    gridN = _0x2fe091 ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document[_0xccb509(0x174)][_0xccb509(0x186)][_0xccb509(0x15e)](_0xccb509(0x136)) : document['body']['classList'][_0xccb509(0x141)](_0xccb509(0x136)),
    initializePuzzle();
}
function updateStats() {
    const _0x505628 = _0x2e37da
      , _0x212a18 = getValue(_0x505628(0x13a) + gridN, '');
    playCount = getValue(_0x505628(0x187) + gridN, 0x0),
    winCount = getValue(_0x505628(0x175) + gridN, 0x0),
    streakCount = getValue('streakCount' + gridN, 0x0),
    streakMax = getValue('streakMax' + gridN, 0x0),
    orgGrid = getValue(_0x505628(0x181) + gridN, ''),
    solveGrid = getValue(_0x505628(0x169) + gridN, ''),
    document['getElementById'](_0x505628(0x187))[_0x505628(0x142)] = playCount,
    winCount == 0x0 ? document[_0x505628(0x170)]('winCount')[_0x505628(0x142)] = '0%' : document[_0x505628(0x170)](_0x505628(0x175))[_0x505628(0x142)] = Math[_0x505628(0x13c)](winCount * 0x64 / playCount) + '%',
    document[_0x505628(0x170)](_0x505628(0x167))[_0x505628(0x142)] = streakCount,
    document['getElementById'](_0x505628(0x14d))[_0x505628(0x142)] = streakMax,
    (_0x212a18 != today || today == '') && (playCount++,
    setValue(_0x505628(0x13a) + gridN, today),
    setValue(_0x505628(0x187) + gridN, playCount),
    setValue(_0x505628(0x145) + gridN, ''),
    setValue(_0x505628(0x181) + gridN, ''),
    setValue(_0x505628(0x17d) + gridN, ''),
    setValue(_0x505628(0x180) + gridN, 0x0));
}
function showWinModal() {
    const _0x497565 = _0x2e37da
      , _0x3aff9b = document[_0x497565(0x170)](_0x497565(0x173));
    document[_0x497565(0x170)](_0x497565(0x17e))['textContent'] = movesCounter,
    document[_0x497565(0x170)](_0x497565(0x166))[_0x497565(0x142)] = gridN + 'x' + gridN,
    document['getElementById']('moveCount2')[_0x497565(0x142)] = movesCounter,
    _0x3aff9b[_0x497565(0x147)][_0x497565(0x143)] = 'block',
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    document['getElementById']('winModal')['style']['display'] = 'none';
}
function updateCountdown() {
    const _0x1e8f5b = _0x2e37da
      , _0x5c240b = new Date()
      , _0xbaa5d9 = new Date();
    _0xbaa5d9[_0x1e8f5b(0x16c)](0x18, 0x0, 0x0, 0x0);
    const _0x1ca855 = _0xbaa5d9 - _0x5c240b
      , _0x814fd6 = Math[_0x1e8f5b(0x182)](_0x1ca855 / (0x3e8 * 0x3c * 0x3c))
      , _0x28b16d = Math[_0x1e8f5b(0x182)](_0x1ca855 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x16c287 = Math[_0x1e8f5b(0x182)](_0x1ca855 % (0x3e8 * 0x3c) / 0x3e8)
      , _0x5a0f51 = String(_0x814fd6)[_0x1e8f5b(0x17b)](0x2, '0') + ':' + String(_0x28b16d)[_0x1e8f5b(0x17b)](0x2, '0') + ':' + String(_0x16c287)[_0x1e8f5b(0x17b)](0x2, '0');
    document[_0x1e8f5b(0x170)](_0x1e8f5b(0x15f))[_0x1e8f5b(0x142)] = _0x5a0f51;
}
async function shareResult() {
    const _0x28a57e = _0x2e37da
      , _0x3983ba = new Date()['toString']()[_0x28a57e(0x151)](0x4, 0xf);
    let _0x4b7664 = '🧩\x20हिन्दी\x20शब्द\x20रचना\x20' + gridN + 'x' + gridN + '\x0a\x0a' + (_0x28a57e(0x14a) + _0x3983ba + '\x0a') + (_0x28a57e(0x140) + movesCounter + '\x0a\x0a');
    const _0x56e7a4 = createBarChart(![]);
    _0x4b7664 += _0x56e7a4,
    _0x4b7664 += _0x28a57e(0x16a) + (_0x28a57e(0x164) + gridN + 'x' + gridN);
    if (navigator[_0x28a57e(0x13b)])
        try {
            await navigator[_0x28a57e(0x13b)]({
                'title': _0x28a57e(0x165),
                'text': _0x4b7664
            });
        } catch (_0x151a4f) {
            fallbackShare(_0x4b7664);
        }
    else
        fallbackShare(_0x4b7664);
}
function _0x32d4(_0x50431a, _0x1be3fa) {
    const _0x1481a1 = _0x1481();
    return _0x32d4 = function(_0x32d47e, _0x573a48) {
        _0x32d47e = _0x32d47e - 0x136;
        let _0x5dfa6f = _0x1481a1[_0x32d47e];
        return _0x5dfa6f;
    }
    ,
    _0x32d4(_0x50431a, _0x1be3fa);
}
function createBarChart(_0x16e7dc=!![]) {
    const _0x4728e8 = _0x2e37da;
    let _0xacea00 = 0x0
      , _0x3b24d9 = '';
    return solveSequence[_0x4728e8(0x168)]( (_0x5a7e55, _0x3d3b57) => {
        const _0x141c4e = _0x4728e8
          , _0x138c38 = Number(_0x5a7e55) - _0xacea00
          , _0x5a8887 = _0x138c38 > 0xa ? 0xa : _0x138c38;
        let _0x1792ba = '';
        if (_0x138c38 >= 0xa)
            _0x1792ba = boxes[_0x141c4e(0x14e)];
        else
            _0x138c38 > (gridN == 0x3 ? 0x3 : 0x5) ? _0x1792ba = boxes['yellow'] : _0x1792ba = boxes[_0x141c4e(0x171)];
        if (_0x5a8887 >= 0x0) {
            const _0x346313 = _0x1792ba[_0x141c4e(0x162)](_0x5a8887)
              , _0x2c74fc = _0x3d3b57 + 0x1 + ':\x20'
              , _0x483e5c = _0x2c74fc[_0x141c4e(0x152)](0x4);
            _0x3b24d9 += '' + _0x483e5c + _0x346313 + '\x20(' + _0x138c38 + ')\x0a',
            _0xacea00 += _0x138c38;
        }
    }
    ),
    _0x3b24d9;
}
function fallbackShare(_0x471f9b) {
    const _0x20c94b = _0x2e37da
      , _0xb4086f = document['createElement'](_0x20c94b(0x15a));
    _0xb4086f['value'] = _0x471f9b,
    document[_0x20c94b(0x174)]['appendChild'](_0xb4086f),
    _0xb4086f[_0x20c94b(0x14f)](),
    document[_0x20c94b(0x185)](_0x20c94b(0x15c)),
    document[_0x20c94b(0x174)][_0x20c94b(0x13d)](_0xb4086f),
    alert(_0x20c94b(0x163));
}
