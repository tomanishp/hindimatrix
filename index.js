const _0xdd911d = _0x4762;
(function(_0x4214c7, _0x13dd74) {
    const _0xfb269a = _0x4762
      , _0x49e321 = _0x4214c7();
    while (!![]) {
        try {
            const _0x5cc0aa = parseInt(_0xfb269a(0x112)) / 0x1 * (parseInt(_0xfb269a(0x10d)) / 0x2) + -parseInt(_0xfb269a(0xc8)) / 0x3 + -parseInt(_0xfb269a(0xc7)) / 0x4 * (-parseInt(_0xfb269a(0x109)) / 0x5) + -parseInt(_0xfb269a(0xd4)) / 0x6 * (-parseInt(_0xfb269a(0xdb)) / 0x7) + -parseInt(_0xfb269a(0x101)) / 0x8 * (-parseInt(_0xfb269a(0x106)) / 0x9) + parseInt(_0xfb269a(0x10f)) / 0xa + -parseInt(_0xfb269a(0xf4)) / 0xb * (parseInt(_0xfb269a(0xc3)) / 0xc);
            if (_0x5cc0aa === _0x13dd74)
                break;
            else
                _0x49e321['push'](_0x49e321['shift']());
        } catch (_0x47c7f0) {
            _0x49e321['push'](_0x49e321['shift']());
        }
    }
}(_0x1b0e, 0xc0282));
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
function _0x1b0e() {
    const _0x4b0106 = ['appendChild', 'remove', '🧩\x20हिन्दी\x20शब्द\x20रचना\x20', 'false', 'select', 'dark-mode', 'toString', 'threeModeToggle', 'length', 'endsWith', 'display', 'copy', 'slice', 'maxStreak', 'floor', 'onload', 'split', 'mindCheckToggle', '12034jrFnmc', 'threeMode', 'playCount', 'lastPlayed', 'darkModeToggle', 'red', '.overlay', 'search', 'getElementById', 'userGrid', 'padStart', '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a', 'green', '1011688OOMNGt', 'style', 'solveGrid', 'streakCount', 'selected', '54OPZpaC', 'true', 'Result\x20copied\x20to\x20clipboard!', '13940ziDKeS', 'querySelector', 'resetKey', 'toggle', '1016354MyNRKy', 'yellow', '10714710ZDFVdM', 'darkMode', 'textarea', '1iZebvm', 'winCount', 'getElementsByClassName', 'createElement', 'location', 'share', '35796DSvInK', 'Hindi\x20Matrix\x20Puzzle', 'bit.ly/hindi', 'दिनाँक:\x20', '1452dfdRex', '1013355JXeFif', 'moveCount2', 'checked', 'round', 'selected2', 'removeChild', '-sidebar', 'q=4', 'कुल\x20चालें:\x20', 'moveCount1', 'querySelectorAll', 'movesCounter', '582SvQkYI', 'active', 'add', '.sidebar', 'body', 'classList', 'setHours', '74893Smfkcn', 'execCommand', 'textContent', 'winModal', 'from', 'forEach', 'padEnd'];
    _0x1b0e = function() {
        return _0x4b0106;
    }
    ;
    return _0x1b0e();
}
function toggleMenu(_0x3699f2) {
    const _0x459502 = _0x4762
      , _0x43f928 = document[_0x459502(0x10a)]('.' + _0x3699f2 + _0x459502(0xce))
      , _0x505217 = document[_0x459502(0x10a)]('.overlay')
      , _0x87e210 = document[_0x459502(0xd2)](_0x459502(0xd7));
    _0x87e210[_0x459502(0xe0)](_0x12d480 => {
        const _0x4da4c2 = _0x459502;
        _0x12d480 !== _0x43f928 && _0x12d480[_0x4da4c2(0xd9)][_0x4da4c2(0xe3)]('active');
    }
    ),
    _0x43f928[_0x459502(0xd9)]['toggle'](_0x459502(0xd5)),
    _0x505217[_0x459502(0xd9)][_0x459502(0x10c)](_0x459502(0xd5));
}
function closeAllMenus() {
    const _0x4d2d11 = _0x4762
      , _0x16e3d5 = document[_0x4d2d11(0xd2)](_0x4d2d11(0xd7))
      , _0x25646c = document[_0x4d2d11(0x10a)](_0x4d2d11(0xfa));
    _0x16e3d5[_0x4d2d11(0xe0)](_0xa3aa30 => {
        const _0x519f19 = _0x4d2d11;
        _0xa3aa30[_0x519f19(0xd9)]['remove'](_0x519f19(0xd5));
    }
    ),
    _0x25646c[_0x4d2d11(0xd9)][_0x4d2d11(0xe3)](_0x4d2d11(0xd5));
}
function toggleDarkMode() {
    const _0x583a3b = _0x4762;
    darkMode = document['getElementById']('darkModeToggle')['checked'],
    document['body']['classList'][_0x583a3b(0x10c)]('dark-mode', darkMode),
    setValue(_0x583a3b(0x110), darkMode);
}
function toggleThreeMode() {
    const _0x1cb447 = _0x4762
      , _0x306453 = document[_0x1cb447(0xfc)](_0x1cb447(0xe9))['checked'];
    setValue('threeMode', _0x306453),
    gridN = _0x306453 ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0xb93d44 = _0x4762;
    mindCheckMode = document[_0xb93d44(0xfc)](_0xb93d44(0xf3))[_0xb93d44(0xca)],
    Array[_0xb93d44(0xdf)](document[_0xb93d44(0x114)]('grid-item'))['forEach'](function(_0xc4c330) {
        const _0x1f0cd7 = _0xb93d44;
        _0xc4c330[_0x1f0cd7(0xd9)][_0x1f0cd7(0xe3)](_0x1f0cd7(0x105)),
        _0xc4c330[_0x1f0cd7(0xd9)]['remove'](_0x1f0cd7(0xcc));
    }),
    selectedItem = null;
}
window[_0xdd911d(0xf1)] = function() {
    initializeFromCookies();
}
;
function _0x4762(_0x3e3f06, _0x502732) {
    const _0x1b0ea8 = _0x1b0e();
    return _0x4762 = function(_0x476202, _0x2fc814) {
        _0x476202 = _0x476202 - 0xc2;
        let _0x12a748 = _0x1b0ea8[_0x476202];
        return _0x12a748;
    }
    ,
    _0x4762(_0x3e3f06, _0x502732);
}
function readGridParam() {
    const _0x504eed = _0xdd911d;
    let _0x4ce2ea = 0x0;
    try {
        const _0x362ef6 = window[_0x504eed(0x116)][_0x504eed(0xfb)][_0x504eed(0xf2)]('&');
        _0x362ef6[_0x504eed(0xe0)](_0x435e3b => {
            const _0x5a2568 = _0x504eed;
            if (_0x435e3b['endsWith']('q=3'))
                _0x4ce2ea = 0x3;
            else
                _0x435e3b[_0x5a2568(0xeb)](_0x5a2568(0xcf)) && (_0x4ce2ea = 0x4);
        }
        );
    } catch (_0x57376f) {}
    return _0x4ce2ea;
}
function initializeFromCookies() {
    const _0x3944f0 = _0xdd911d;
    !(getValue(_0x3944f0(0x10b), '') == resetKey) && (resetAllData(),
    setValue(_0x3944f0(0x10b), resetKey));
    darkMode = getValue(_0x3944f0(0x110), _0x3944f0(0xe5)) === _0x3944f0(0x107);
    let _0xe688b3 = getValue(_0x3944f0(0xf5), _0x3944f0(0xe5)) === 'true';
    const _0x488747 = document[_0x3944f0(0xfc)](_0x3944f0(0xf8))
      , _0x2fc12e = document[_0x3944f0(0xfc)](_0x3944f0(0xe9));
    _0x488747 && (_0x488747[_0x3944f0(0xca)] = darkMode);
    const _0x42c4cd = readGridParam();
    _0x42c4cd > 0x0 && (_0xe688b3 = _0x42c4cd == 0x3 ? !![] : ![]),
    _0x2fc12e && (_0x2fc12e['checked'] = _0xe688b3),
    gridN = _0xe688b3 ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document[_0x3944f0(0xd8)]['classList'][_0x3944f0(0xd6)](_0x3944f0(0xe7)) : document[_0x3944f0(0xd8)]['classList'][_0x3944f0(0xe3)](_0x3944f0(0xe7)),
    initializePuzzle();
}
function updateStats() {
    const _0x344d70 = _0xdd911d
      , _0x43c316 = getValue(_0x344d70(0xf7) + gridN, '');
    playCount = getValue(_0x344d70(0xf6) + gridN, 0x0),
    winCount = getValue('winCount' + gridN, 0x0),
    streakCount = getValue(_0x344d70(0x104) + gridN, 0x0),
    streakMax = getValue('streakMax' + gridN, 0x0),
    solveGrid = getValue('solveGrid' + gridN, ''),
    document['getElementById'](_0x344d70(0xf6))[_0x344d70(0xdd)] = playCount,
    winCount == 0x0 ? document[_0x344d70(0xfc)](_0x344d70(0x113))[_0x344d70(0xdd)] = '0%' : document['getElementById'](_0x344d70(0x113))['textContent'] = Math[_0x344d70(0xcb)](winCount * 0x64 / playCount) + '%',
    document['getElementById']('playStreak')[_0x344d70(0xdd)] = streakCount,
    document[_0x344d70(0xfc)](_0x344d70(0xef))['textContent'] = streakMax,
    (_0x43c316 != today || today == '') && (playCount++,
    setValue(_0x344d70(0xf7) + gridN, today),
    setValue(_0x344d70(0xf6) + gridN, playCount),
    setValue(_0x344d70(0xfd) + gridN, ''),
    setValue(_0x344d70(0x103) + gridN, ''),
    setValue(_0x344d70(0xd3) + gridN, 0x0));
}
function showWinModal() {
    const _0x541c68 = _0xdd911d
      , _0xed4b17 = document[_0x541c68(0xfc)](_0x541c68(0xde));
    document['getElementById'](_0x541c68(0xd1))[_0x541c68(0xdd)] = movesCounter,
    document[_0x541c68(0xfc)]('gridSizeDisplay')[_0x541c68(0xdd)] = gridN + 'x' + gridN,
    document[_0x541c68(0xfc)](_0x541c68(0xc9))[_0x541c68(0xdd)] = movesCounter,
    _0xed4b17[_0x541c68(0x102)][_0x541c68(0xec)] = 'block',
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    const _0x2c2a54 = _0xdd911d;
    document[_0x2c2a54(0xfc)](_0x2c2a54(0xde))['style'][_0x2c2a54(0xec)] = 'none';
}
function updateCountdown() {
    const _0xf5ccca = _0xdd911d
      , _0x39d472 = new Date()
      , _0x20dbb4 = new Date();
    _0x20dbb4[_0xf5ccca(0xda)](0x18, 0x0, 0x0, 0x0);
    const _0x41a925 = _0x20dbb4 - _0x39d472
      , _0x82b57b = Math[_0xf5ccca(0xf0)](_0x41a925 / (0x3e8 * 0x3c * 0x3c))
      , _0x982de1 = Math['floor'](_0x41a925 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x5b9ea1 = Math[_0xf5ccca(0xf0)](_0x41a925 % (0x3e8 * 0x3c) / 0x3e8)
      , _0x5c403b = String(_0x82b57b)[_0xf5ccca(0xfe)](0x2, '0') + ':' + String(_0x982de1)['padStart'](0x2, '0') + ':' + String(_0x5b9ea1)[_0xf5ccca(0xfe)](0x2, '0');
    document['getElementById']('countdownTimer')[_0xf5ccca(0xdd)] = _0x5c403b;
}
async function shareResult() {
    const _0x4261ef = _0xdd911d
      , _0x5d05c4 = new Date()[_0x4261ef(0xe8)]()['substring'](0x4, 0xf);
    let _0x570cb2 = _0x4261ef(0xe4) + gridN + 'x' + gridN + '\x0a\x0a' + (_0x4261ef(0xc6) + _0x5d05c4 + '\x0a') + (_0x4261ef(0xd0) + movesCounter + '\x0a\x0a');
    const _0x198143 = createBarChart(![]);
    _0x570cb2 += _0x198143,
    _0x570cb2 += _0x4261ef(0xff) + (_0x4261ef(0xc5) + gridN + 'x' + gridN);
    if (navigator['share'])
        try {
            await navigator[_0x4261ef(0xc2)]({
                'title': _0x4261ef(0xc4),
                'text': _0x570cb2
            });
        } catch (_0x355a57) {
            fallbackShare(_0x570cb2);
        }
    else
        fallbackShare(_0x570cb2);
}
function createBarChart(_0x1c2b00=!![]) {
    const _0x32909f = _0xdd911d;
    let _0x5681ca = 0x0
      , _0x465f27 = movesCounter > 0x0 ? 'शब्द:\x20चाल\x0a' : '';
    const _0x283e55 = solveSequence[_0x32909f(0xee)](Math['max'](solveSequence[_0x32909f(0xea)] - gridN, 0x0));
    return _0x283e55['forEach']( (_0x43e9a2, _0x52ae0b) => {
        const _0x2f9e57 = _0x32909f
          , _0x1b622d = 0xa
          , _0x5c8d10 = Number(_0x43e9a2) - _0x5681ca
          , _0xa998e7 = _0x5c8d10 > _0x1b622d ? _0x1b622d : _0x5c8d10;
        let _0x413c11 = '';
        if (_0x5c8d10 >= _0x1b622d)
            _0x413c11 = boxes[_0x2f9e57(0xf9)];
        else
            _0x5c8d10 > (gridN == 0x3 ? 0x3 : 0x5) ? _0x413c11 = boxes[_0x2f9e57(0x10e)] : _0x413c11 = boxes[_0x2f9e57(0x100)];
        const _0x135f9a = _0xa998e7 <= 0x0 ? '' : _0x413c11['repeat'](_0xa998e7)
          , _0x10ee62 = _0x52ae0b + 0x1 + ':\x20'
          , _0x3599ab = _0x10ee62[_0x2f9e57(0xe1)](0x2);
        _0x465f27 += '' + _0x3599ab + _0x135f9a,
        _0x465f27 += _0x5c8d10 > 0xa ? '\x20(' + _0x5c8d10 + ')\x0a' : '\x0a',
        _0x5681ca += _0x5c8d10;
    }
    ),
    _0x465f27;
}
function fallbackShare(_0x686b2) {
    const _0x10d32e = _0xdd911d
      , _0x265f9f = document[_0x10d32e(0x115)](_0x10d32e(0x111));
    _0x265f9f['value'] = _0x686b2,
    document[_0x10d32e(0xd8)][_0x10d32e(0xe2)](_0x265f9f),
    _0x265f9f[_0x10d32e(0xe6)](),
    document[_0x10d32e(0xdc)](_0x10d32e(0xed)),
    document[_0x10d32e(0xd8)][_0x10d32e(0xcd)](_0x265f9f),
    alert(_0x10d32e(0x108));
}
