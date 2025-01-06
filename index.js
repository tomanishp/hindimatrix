const _0x1188f4 = _0x2bf5;
(function(_0x190a51, _0x310827) {
    const _0x53bf40 = _0x2bf5
      , _0x5b7735 = _0x190a51();
    while (!![]) {
        try {
            const _0x38d94d = parseInt(_0x53bf40(0x88)) / 0x1 * (parseInt(_0x53bf40(0xc4)) / 0x2) + -parseInt(_0x53bf40(0x99)) / 0x3 + -parseInt(_0x53bf40(0xc1)) / 0x4 + parseInt(_0x53bf40(0xa0)) / 0x5 * (-parseInt(_0x53bf40(0xbc)) / 0x6) + -parseInt(_0x53bf40(0x93)) / 0x7 + -parseInt(_0x53bf40(0x9b)) / 0x8 + parseInt(_0x53bf40(0x79)) / 0x9;
            if (_0x38d94d === _0x310827)
                break;
            else
                _0x5b7735['push'](_0x5b7735['shift']());
        } catch (_0x46cb42) {
            _0x5b7735['push'](_0x5b7735['shift']());
        }
    }
}(_0x5885, 0xacec7));
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
function toggleMenu(_0x4ae4a9) {
    const _0x202005 = _0x2bf5
      , _0x50f620 = document[_0x202005(0xc8)]('.' + _0x4ae4a9 + '-sidebar')
      , _0x556ce9 = document[_0x202005(0xc8)](_0x202005(0xad))
      , _0xd243a9 = document[_0x202005(0x90)](_0x202005(0xb4));
    _0xd243a9[_0x202005(0xc7)](_0x5ed11b => {
        const _0x235622 = _0x202005;
        _0x5ed11b !== _0x50f620 && _0x5ed11b[_0x235622(0xab)][_0x235622(0x82)]('active');
    }
    ),
    _0x50f620['classList'][_0x202005(0x8f)](_0x202005(0xc2)),
    _0x556ce9[_0x202005(0xab)][_0x202005(0x8f)](_0x202005(0xc2));
}
function closeAllMenus() {
    const _0x3beece = _0x2bf5
      , _0x5659e5 = document[_0x3beece(0x90)]('.sidebar')
      , _0x55b4b6 = document['querySelector'](_0x3beece(0xad));
    _0x5659e5[_0x3beece(0xc7)](_0x26523b => {
        const _0x222745 = _0x3beece;
        _0x26523b[_0x222745(0xab)][_0x222745(0x82)]('active');
    }
    ),
    _0x55b4b6[_0x3beece(0xab)][_0x3beece(0x82)](_0x3beece(0xc2));
}
function toggleDarkMode() {
    const _0x138835 = _0x2bf5;
    darkMode = document[_0x138835(0xa1)](_0x138835(0xa4))[_0x138835(0xbd)],
    document[_0x138835(0x9c)][_0x138835(0xab)][_0x138835(0x8f)]('dark-mode', darkMode),
    setValue(_0x138835(0x80), darkMode);
}
function toggleThreeMode() {
    const _0x17b0ae = _0x2bf5
      , _0x4bbe5b = document[_0x17b0ae(0xa1)](_0x17b0ae(0x89))[_0x17b0ae(0xbd)];
    setValue(_0x17b0ae(0xa2), _0x4bbe5b),
    gridN = _0x4bbe5b ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function _0x5885() {
    const _0x461d22 = ['copy', 'solvegGrid', 'floor', 'classList', 'winCount', '.overlay', 'userGrid', 'bit.ly/hindi', 'mindCheckToggle', 'orgGrid', 'select', 'false', '.sidebar', 'block', 'playStreak', 'Result\x20copied\x20to\x20clipboard!', 'location', 'streakMax', 'moveCount1', 'कुल\x20चालें:\x20', '2558484SHcpmt', 'checked', 'Hindi\x20Matrix\x20Puzzle', 'toString', 'display', '1800836hKShAZ', 'active', 'endsWith', '88tOUFuH', 'search', 'movesCounter', 'forEach', 'querySelector', 'repeat', 'solveGrid', 'add', 'padStart', '19896048yMgqtn', 'true', 'moveCount2', 'winModal', 'getElementsByClassName', 'substring', 'दिनाँक:\x20', 'darkMode', 'removeChild', 'remove', 'maxStreak', 'playCount', 'setHours', 'split', 'q=4', '27179VJrIDd', 'threeModeToggle', 'round', 'appendChild', 'resetKey', 'dark-mode', 'value', 'toggle', 'querySelectorAll', 'selected', 'streakCount', '1286362PYsCPv', 'textContent', 'lastPlayed', 'onload', 'selected2', 'createElement', '3624567jsIcIB', 'gridSizeDisplay', '3437400biiuZt', 'body', 'share', 'from', 'q=3', '5LXBbAO', 'getElementById', 'threeMode', '🧩\x20हिन्दी\x20शब्द\x20रचना\x20', 'darkModeToggle', 'yellow', 'padEnd', 'red'];
    _0x5885 = function() {
        return _0x461d22;
    }
    ;
    return _0x5885();
}
function toggleMindCheck() {
    const _0x4aa59b = _0x2bf5;
    mindCheckMode = document['getElementById'](_0x4aa59b(0xb0))[_0x4aa59b(0xbd)],
    Array[_0x4aa59b(0x9e)](document[_0x4aa59b(0x7d)]('grid-item'))['forEach'](function(_0x66882a) {
        const _0x503288 = _0x4aa59b;
        _0x66882a[_0x503288(0xab)]['remove'](_0x503288(0x91)),
        _0x66882a[_0x503288(0xab)][_0x503288(0x82)](_0x503288(0x97));
    }),
    selectedItem = null;
}
window[_0x1188f4(0x96)] = function() {
    initializeFromCookies();
}
;
function _0x2bf5(_0x432dda, _0x548098) {
    const _0x5885ea = _0x5885();
    return _0x2bf5 = function(_0x2bf504, _0x7db6f9) {
        _0x2bf504 = _0x2bf504 - 0x79;
        let _0x2a7bb2 = _0x5885ea[_0x2bf504];
        return _0x2a7bb2;
    }
    ,
    _0x2bf5(_0x432dda, _0x548098);
}
function readGridParam() {
    const _0x2df861 = _0x1188f4;
    let _0x19d692 = 0x0;
    try {
        const _0x15177f = window[_0x2df861(0xb8)][_0x2df861(0xc5)][_0x2df861(0x86)]('&');
        _0x15177f[_0x2df861(0xc7)](_0x366beb => {
            const _0x213e54 = _0x2df861;
            if (_0x366beb[_0x213e54(0xc3)](_0x213e54(0x9f)))
                _0x19d692 = 0x3;
            else
                _0x366beb[_0x213e54(0xc3)](_0x213e54(0x87)) && (_0x19d692 = 0x4);
        }
        );
    } catch (_0x20b426) {}
    return _0x19d692;
}
function initializeFromCookies() {
    const _0x4b9e83 = _0x1188f4;
    !(getValue(_0x4b9e83(0x8c), '') == resetKey) && (resetAllData(),
    setValue(_0x4b9e83(0x8c), resetKey));
    darkMode = getValue(_0x4b9e83(0x80), _0x4b9e83(0xb3)) === _0x4b9e83(0x7a);
    let _0x2bd683 = getValue(_0x4b9e83(0xa2), _0x4b9e83(0xb3)) === _0x4b9e83(0x7a);
    const _0x76ee98 = document[_0x4b9e83(0xa1)](_0x4b9e83(0xa4))
      , _0x1e68bb = document['getElementById']('threeModeToggle');
    _0x76ee98 && (_0x76ee98[_0x4b9e83(0xbd)] = darkMode);
    const _0x368d76 = readGridParam();
    _0x368d76 > 0x0 && (_0x2bd683 = _0x368d76 == 0x3 ? !![] : ![]),
    _0x1e68bb && (_0x1e68bb[_0x4b9e83(0xbd)] = _0x2bd683),
    gridN = _0x2bd683 ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document[_0x4b9e83(0x9c)][_0x4b9e83(0xab)][_0x4b9e83(0xcb)](_0x4b9e83(0x8d)) : document[_0x4b9e83(0x9c)][_0x4b9e83(0xab)]['remove'](_0x4b9e83(0x8d)),
    initializePuzzle();
}
function updateStats() {
    const _0x4d73e3 = _0x1188f4
      , _0x106750 = getValue('lastPlayed' + gridN, '');
    playCount = getValue(_0x4d73e3(0x84) + gridN, 0x0),
    winCount = getValue('winCount' + gridN, 0x0),
    streakCount = getValue(_0x4d73e3(0x92) + gridN, 0x0),
    streakMax = getValue(_0x4d73e3(0xb9) + gridN, 0x0),
    orgGrid = getValue(_0x4d73e3(0xb1) + gridN, ''),
    solveGrid = getValue(_0x4d73e3(0xca) + gridN, ''),
    document[_0x4d73e3(0xa1)](_0x4d73e3(0x84))['textContent'] = playCount,
    winCount == 0x0 ? document[_0x4d73e3(0xa1)](_0x4d73e3(0xac))[_0x4d73e3(0x94)] = '0%' : document['getElementById'](_0x4d73e3(0xac))[_0x4d73e3(0x94)] = Math[_0x4d73e3(0x8a)](winCount * 0x64 / playCount) + '%',
    document[_0x4d73e3(0xa1)](_0x4d73e3(0xb6))['textContent'] = streakCount,
    document[_0x4d73e3(0xa1)](_0x4d73e3(0x83))[_0x4d73e3(0x94)] = streakMax,
    (_0x106750 != today || today == '') && (playCount++,
    setValue(_0x4d73e3(0x95) + gridN, today),
    setValue(_0x4d73e3(0x84) + gridN, playCount),
    setValue(_0x4d73e3(0xae) + gridN, ''),
    setValue('orgGrid' + gridN, ''),
    setValue(_0x4d73e3(0xa9) + gridN, ''),
    setValue(_0x4d73e3(0xc6) + gridN, 0x0));
}
function showWinModal() {
    const _0xd2c015 = _0x1188f4
      , _0x24424a = document[_0xd2c015(0xa1)](_0xd2c015(0x7c));
    document[_0xd2c015(0xa1)](_0xd2c015(0xba))[_0xd2c015(0x94)] = movesCounter,
    document[_0xd2c015(0xa1)](_0xd2c015(0x9a))[_0xd2c015(0x94)] = gridN + 'x' + gridN,
    document[_0xd2c015(0xa1)](_0xd2c015(0x7b))['textContent'] = movesCounter,
    _0x24424a['style'][_0xd2c015(0xc0)] = _0xd2c015(0xb5),
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    const _0x45c393 = _0x1188f4;
    document[_0x45c393(0xa1)](_0x45c393(0x7c))['style'][_0x45c393(0xc0)] = 'none';
}
function updateCountdown() {
    const _0x73b3c4 = _0x1188f4
      , _0x4e866a = new Date()
      , _0x5736c4 = new Date();
    _0x5736c4[_0x73b3c4(0x85)](0x18, 0x0, 0x0, 0x0);
    const _0x3f9777 = _0x5736c4 - _0x4e866a
      , _0x309a85 = Math[_0x73b3c4(0xaa)](_0x3f9777 / (0x3e8 * 0x3c * 0x3c))
      , _0x4412c3 = Math[_0x73b3c4(0xaa)](_0x3f9777 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0xfd45fe = Math[_0x73b3c4(0xaa)](_0x3f9777 % (0x3e8 * 0x3c) / 0x3e8)
      , _0x482008 = String(_0x309a85)[_0x73b3c4(0xcc)](0x2, '0') + ':' + String(_0x4412c3)[_0x73b3c4(0xcc)](0x2, '0') + ':' + String(_0xfd45fe)[_0x73b3c4(0xcc)](0x2, '0');
    document[_0x73b3c4(0xa1)]('countdownTimer')['textContent'] = _0x482008;
}
async function shareResult() {
    const _0x4e0185 = _0x1188f4
      , _0x18cdac = new Date()[_0x4e0185(0xbf)]()[_0x4e0185(0x7e)](0x4, 0xf);
    let _0x18c23c = _0x4e0185(0xa3) + gridN + 'x' + gridN + '\x0a\x0a' + (_0x4e0185(0x7f) + _0x18cdac + '\x0a') + (_0x4e0185(0xbb) + movesCounter + '\x0a\x0a');
    const _0x58bbc6 = createBarChart(![]);
    _0x18c23c += _0x58bbc6,
    _0x18c23c += '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a' + (_0x4e0185(0xaf) + gridN + 'x' + gridN);
    if (navigator['share'])
        try {
            await navigator[_0x4e0185(0x9d)]({
                'title': _0x4e0185(0xbe),
                'text': _0x18c23c
            });
        } catch (_0x12e51d) {
            fallbackShare(_0x18c23c);
        }
    else
        fallbackShare(_0x18c23c);
}
function createBarChart(_0x4d1cbb=!![]) {
    const _0x44b562 = _0x1188f4;
    let _0x1792a2 = 0x0
      , _0x3c9b67 = '';
    return solveSequence[_0x44b562(0xc7)]( (_0x154342, _0x3ac873) => {
        const _0x8d485d = _0x44b562
          , _0x3363eb = Number(_0x154342) - _0x1792a2
          , _0x47cc20 = _0x3363eb > 0xa ? 0xa : _0x3363eb;
        let _0x42eb27 = '';
        if (_0x3363eb >= 0x8)
            _0x42eb27 = boxes[_0x8d485d(0xa7)];
        else
            _0x3363eb > (gridN == 0x3 ? 0x3 : 0x5) ? _0x42eb27 = boxes[_0x8d485d(0xa5)] : _0x42eb27 = boxes['green'];
        const _0x3b41ae = _0x47cc20 <= 0x0 ? '' : _0x42eb27[_0x8d485d(0xc9)](_0x47cc20)
          , _0x260cf9 = _0x3ac873 + 0x1 + ':\x20'
          , _0x2ab7e0 = _0x260cf9[_0x8d485d(0xa6)](0x2);
        _0x3c9b67 += '' + _0x2ab7e0 + _0x3b41ae + '\x0a',
        _0x1792a2 += _0x3363eb;
    }
    ),
    _0x3c9b67;
}
function fallbackShare(_0x89609a) {
    const _0x3b3e30 = _0x1188f4
      , _0x17dac5 = document[_0x3b3e30(0x98)]('textarea');
    _0x17dac5[_0x3b3e30(0x8e)] = _0x89609a,
    document[_0x3b3e30(0x9c)][_0x3b3e30(0x8b)](_0x17dac5),
    _0x17dac5[_0x3b3e30(0xb2)](),
    document['execCommand'](_0x3b3e30(0xa8)),
    document[_0x3b3e30(0x9c)][_0x3b3e30(0x81)](_0x17dac5),
    alert(_0x3b3e30(0xb7));
}
