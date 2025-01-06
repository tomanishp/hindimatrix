const _0xb79abb = _0x27c2;
(function(_0x28d864, _0x1cd285) {
    const _0x2e6b8f = _0x27c2
      , _0xda3c4b = _0x28d864();
    while (!![]) {
        try {
            const _0x1b1d0d = parseInt(_0x2e6b8f(0x1b0)) / 0x1 * (parseInt(_0x2e6b8f(0x197)) / 0x2) + -parseInt(_0x2e6b8f(0x189)) / 0x3 + -parseInt(_0x2e6b8f(0x179)) / 0x4 + -parseInt(_0x2e6b8f(0x1a0)) / 0x5 + parseInt(_0x2e6b8f(0x1a3)) / 0x6 + parseInt(_0x2e6b8f(0x18d)) / 0x7 + parseInt(_0x2e6b8f(0x1bd)) / 0x8;
            if (_0x1b1d0d === _0x1cd285)
                break;
            else
                _0xda3c4b['push'](_0xda3c4b['shift']());
        } catch (_0x1659c8) {
            _0xda3c4b['push'](_0xda3c4b['shift']());
        }
    }
}(_0x5066, 0x42c69));
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
function toggleMenu(_0x55c9a7) {
    const _0x34464c = _0x27c2
      , _0x2611fd = document['querySelector']('.' + _0x55c9a7 + '-sidebar')
      , _0x573e23 = document[_0x34464c(0x1b4)](_0x34464c(0x19c))
      , _0xb6e4ee = document[_0x34464c(0x19d)]('.sidebar');
    _0xb6e4ee['forEach'](_0x202d8a => {
        const _0x4c7615 = _0x34464c;
        _0x202d8a !== _0x2611fd && _0x202d8a[_0x4c7615(0x17b)][_0x4c7615(0x1a7)](_0x4c7615(0x17a));
    }
    ),
    _0x2611fd[_0x34464c(0x17b)]['toggle'](_0x34464c(0x17a)),
    _0x573e23['classList'][_0x34464c(0x1b1)](_0x34464c(0x17a));
}
function closeAllMenus() {
    const _0x52177f = _0x27c2
      , _0x132051 = document[_0x52177f(0x19d)](_0x52177f(0x178))
      , _0x39d2d3 = document[_0x52177f(0x1b4)]('.overlay');
    _0x132051[_0x52177f(0x18a)](_0x2b6628 => {
        const _0x270d9f = _0x52177f;
        _0x2b6628[_0x270d9f(0x17b)][_0x270d9f(0x1a7)]('active');
    }
    ),
    _0x39d2d3['classList']['remove']('active');
}
function _0x5066() {
    const _0x24f3bd = ['createElement', 'remove', 'false', 'streakMax', 'lastPlayed', 'grid-item', 'Result\x20copied\x20to\x20clipboard!', 'getElementById', 'moveCount2', 'threeModeToggle', '1sKthlH', 'toggle', 'select', 'threeMode', 'querySelector', 'endsWith', 'getElementsByClassName', 'block', 'true', 'moveCount1', '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a', 'search', 'textContent', '3612936MyJAcZ', 'dark-mode', 'winCount', '🧩\x20हिन्दी\x20शब्द\x20रचना\x20', 'resetKey', 'none', '.sidebar', '540872iHVFRB', 'active', 'classList', 'onload', 'q=4', 'gridSizeDisplay', 'copy', 'darkMode', 'setHours', 'from', 'q=3', 'orgGrid', 'checked', 'style', 'maxStreak', 'movesCounter', '1339971xMTAFJ', 'forEach', 'selected2', 'playCount', '348901tTxZnZ', 'padStart', 'कुल\x20चालें:\x20', 'userGrid', 'Hindi\x20Matrix\x20Puzzle', 'execCommand', 'playStreak', 'countdownTimer', 'darkModeToggle', 'share', '718014ZXsxgb', 'solveGrid', 'repeat', 'body', 'red', '.overlay', 'querySelectorAll', 'display', 'solvegGrid', '1510880MOjbUi', 'value', 'location', '1782582vTBxrW', 'mindCheckToggle', 'floor'];
    _0x5066 = function() {
        return _0x24f3bd;
    }
    ;
    return _0x5066();
}
function toggleDarkMode() {
    const _0x8edb80 = _0x27c2;
    darkMode = document[_0x8edb80(0x1ad)](_0x8edb80(0x195))['checked'],
    document[_0x8edb80(0x19a)]['classList']['toggle'](_0x8edb80(0x1be), darkMode),
    setValue(_0x8edb80(0x180), darkMode);
}
function toggleThreeMode() {
    const _0x3a585b = _0x27c2
      , _0x126965 = document[_0x3a585b(0x1ad)](_0x3a585b(0x1af))[_0x3a585b(0x185)];
    setValue(_0x3a585b(0x1b3), _0x126965),
    gridN = _0x126965 ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0x170eb3 = _0x27c2;
    mindCheckMode = document[_0x170eb3(0x1ad)](_0x170eb3(0x1a4))[_0x170eb3(0x185)],
    Array[_0x170eb3(0x182)](document[_0x170eb3(0x1b6)](_0x170eb3(0x1ab)))[_0x170eb3(0x18a)](function(_0x4e6702) {
        const _0x51dffd = _0x170eb3;
        _0x4e6702[_0x51dffd(0x17b)][_0x51dffd(0x1a7)]('selected'),
        _0x4e6702[_0x51dffd(0x17b)]['remove'](_0x51dffd(0x18b));
    }),
    selectedItem = null;
}
window[_0xb79abb(0x17c)] = function() {
    initializeFromCookies();
}
;
function _0x27c2(_0x1a0ee4, _0x4638db) {
    const _0x5066b2 = _0x5066();
    return _0x27c2 = function(_0x27c298, _0x4bb728) {
        _0x27c298 = _0x27c298 - 0x176;
        let _0x73985e = _0x5066b2[_0x27c298];
        return _0x73985e;
    }
    ,
    _0x27c2(_0x1a0ee4, _0x4638db);
}
function readGridParam() {
    const _0x10894c = _0xb79abb;
    let _0xfa256b = 0x0;
    try {
        const _0x1eaa52 = window[_0x10894c(0x1a2)][_0x10894c(0x1bb)]['split']('&');
        _0x1eaa52[_0x10894c(0x18a)](_0x91aab9 => {
            const _0x43e542 = _0x10894c;
            if (_0x91aab9['endsWith'](_0x43e542(0x183)))
                _0xfa256b = 0x3;
            else
                _0x91aab9[_0x43e542(0x1b5)](_0x43e542(0x17d)) && (_0xfa256b = 0x4);
        }
        );
    } catch (_0x282960) {}
    return _0xfa256b;
}
function initializeFromCookies() {
    const _0x263b45 = _0xb79abb;
    !(getValue('resetKey', '') == resetKey) && (resetAllData(),
    setValue(_0x263b45(0x176), resetKey));
    darkMode = getValue(_0x263b45(0x180), _0x263b45(0x1a8)) === _0x263b45(0x1b8);
    let _0x1b6c13 = getValue('threeMode', _0x263b45(0x1a8)) === 'true';
    const _0x172c7a = document['getElementById'](_0x263b45(0x195))
      , _0xd60e81 = document[_0x263b45(0x1ad)](_0x263b45(0x1af));
    _0x172c7a && (_0x172c7a['checked'] = darkMode);
    const _0x3daa9e = readGridParam();
    _0x3daa9e > 0x0 && (_0x1b6c13 = _0x3daa9e == 0x3 ? !![] : ![]),
    _0xd60e81 && (_0xd60e81[_0x263b45(0x185)] = _0x1b6c13),
    gridN = _0x1b6c13 ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document['body'][_0x263b45(0x17b)]['add']('dark-mode') : document['body'][_0x263b45(0x17b)][_0x263b45(0x1a7)](_0x263b45(0x1be)),
    initializePuzzle();
}
function updateStats() {
    const _0x2f6a55 = _0xb79abb
      , _0x50b35 = getValue(_0x2f6a55(0x1aa) + gridN, '');
    playCount = getValue(_0x2f6a55(0x18c) + gridN, 0x0),
    winCount = getValue(_0x2f6a55(0x1bf) + gridN, 0x0),
    streakCount = getValue('streakCount' + gridN, 0x0),
    streakMax = getValue(_0x2f6a55(0x1a9) + gridN, 0x0),
    orgGrid = getValue('orgGrid' + gridN, ''),
    solveGrid = getValue(_0x2f6a55(0x198) + gridN, ''),
    document['getElementById'](_0x2f6a55(0x18c))[_0x2f6a55(0x1bc)] = playCount,
    winCount == 0x0 ? document['getElementById'](_0x2f6a55(0x1bf))['textContent'] = '0%' : document[_0x2f6a55(0x1ad)](_0x2f6a55(0x1bf))['textContent'] = Math['round'](winCount * 0x64 / playCount) + '%',
    document[_0x2f6a55(0x1ad)](_0x2f6a55(0x193))[_0x2f6a55(0x1bc)] = streakCount,
    document[_0x2f6a55(0x1ad)](_0x2f6a55(0x187))[_0x2f6a55(0x1bc)] = streakMax,
    (_0x50b35 != today || today == '') && (playCount++,
    setValue(_0x2f6a55(0x1aa) + gridN, today),
    setValue(_0x2f6a55(0x18c) + gridN, playCount),
    setValue(_0x2f6a55(0x190) + gridN, ''),
    setValue(_0x2f6a55(0x184) + gridN, ''),
    setValue(_0x2f6a55(0x19f) + gridN, ''),
    setValue(_0x2f6a55(0x188) + gridN, 0x0));
}
function showWinModal() {
    const _0x4ea6e2 = _0xb79abb
      , _0x1d2650 = document[_0x4ea6e2(0x1ad)]('winModal');
    document[_0x4ea6e2(0x1ad)](_0x4ea6e2(0x1b9))[_0x4ea6e2(0x1bc)] = movesCounter,
    document[_0x4ea6e2(0x1ad)](_0x4ea6e2(0x17e))['textContent'] = gridN + 'x' + gridN,
    document[_0x4ea6e2(0x1ad)](_0x4ea6e2(0x1ae))[_0x4ea6e2(0x1bc)] = movesCounter,
    _0x1d2650['style'][_0x4ea6e2(0x19e)] = _0x4ea6e2(0x1b7),
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    const _0xd89c3 = _0xb79abb;
    document['getElementById']('winModal')[_0xd89c3(0x186)]['display'] = _0xd89c3(0x177);
}
function updateCountdown() {
    const _0x1c1d3b = _0xb79abb
      , _0x5315f8 = new Date()
      , _0x9d031c = new Date();
    _0x9d031c[_0x1c1d3b(0x181)](0x18, 0x0, 0x0, 0x0);
    const _0x1adbd0 = _0x9d031c - _0x5315f8
      , _0x40b81e = Math[_0x1c1d3b(0x1a5)](_0x1adbd0 / (0x3e8 * 0x3c * 0x3c))
      , _0x53016b = Math[_0x1c1d3b(0x1a5)](_0x1adbd0 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x2b961c = Math[_0x1c1d3b(0x1a5)](_0x1adbd0 % (0x3e8 * 0x3c) / 0x3e8)
      , _0x3ad92b = String(_0x40b81e)[_0x1c1d3b(0x18e)](0x2, '0') + ':' + String(_0x53016b)[_0x1c1d3b(0x18e)](0x2, '0') + ':' + String(_0x2b961c)['padStart'](0x2, '0');
    document['getElementById'](_0x1c1d3b(0x194))[_0x1c1d3b(0x1bc)] = _0x3ad92b;
}
async function shareResult() {
    const _0x1b6304 = _0xb79abb
      , _0x40ef5b = new Date()['toString']()['substring'](0x4, 0xf);
    let _0x1cd822 = _0x1b6304(0x1c0) + gridN + 'x' + gridN + '\x0a\x0a' + ('दिनाँक:\x20' + _0x40ef5b + '\x0a') + (_0x1b6304(0x18f) + movesCounter + '\x0a\x0a');
    const _0x45e479 = createBarChart(![]);
    _0x1cd822 += _0x45e479,
    _0x1cd822 += _0x1b6304(0x1ba) + ('bit.ly/hindi' + gridN + 'x' + gridN);
    if (navigator[_0x1b6304(0x196)])
        try {
            await navigator[_0x1b6304(0x196)]({
                'title': _0x1b6304(0x191),
                'text': _0x1cd822
            });
        } catch (_0xc788ec) {
            fallbackShare(_0x1cd822);
        }
    else
        fallbackShare(_0x1cd822);
}
function createBarChart(_0x639517=!![]) {
    const _0x25de55 = _0xb79abb;
    let _0x4f7a75 = 0x0
      , _0x22d1fe = '';
    return solveSequence[_0x25de55(0x18a)]( (_0x54f36d, _0x240736) => {
        const _0xf00de0 = _0x25de55
          , _0x5c0e56 = Number(_0x54f36d) - _0x4f7a75
          , _0x5bf685 = _0x5c0e56 > 0xa ? 0xa : _0x5c0e56;
        let _0x250a83 = '';
        if (_0x5c0e56 >= 0xa)
            _0x250a83 = boxes[_0xf00de0(0x19b)];
        else
            _0x5c0e56 > (gridN == 0x3 ? 0x3 : 0x5) ? _0x250a83 = boxes['yellow'] : _0x250a83 = boxes['green'];
        const _0x358dd3 = _0x250a83[_0xf00de0(0x199)](_0x5bf685)
          , _0x72eb19 = _0x240736 + 0x1 + ':\x20'
          , _0x342bc4 = _0x72eb19['padEnd'](0x4);
        _0x22d1fe += '' + _0x342bc4 + _0x358dd3 + '\x20(' + _0x5c0e56 + ')\x0a',
        _0x4f7a75 += _0x5c0e56;
    }
    ),
    _0x22d1fe;
}
function fallbackShare(_0x321d51) {
    const _0x3d2770 = _0xb79abb
      , _0x1b42f2 = document[_0x3d2770(0x1a6)]('textarea');
    _0x1b42f2[_0x3d2770(0x1a1)] = _0x321d51,
    document[_0x3d2770(0x19a)]['appendChild'](_0x1b42f2),
    _0x1b42f2[_0x3d2770(0x1b2)](),
    document[_0x3d2770(0x192)](_0x3d2770(0x17f)),
    document['body']['removeChild'](_0x1b42f2),
    alert(_0x3d2770(0x1ac));
}
