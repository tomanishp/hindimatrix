const _0x15aa55 = _0x4f96;
function _0x4f96(_0x4e9042, _0x1897a4) {
    const _0x552158 = _0x5521();
    return _0x4f96 = function(_0x4f9661, _0x50cb0f) {
        _0x4f9661 = _0x4f9661 - 0x1b1;
        let _0x54d8b3 = _0x552158[_0x4f9661];
        return _0x54d8b3;
    }
    ,
    _0x4f96(_0x4e9042, _0x1897a4);
}
(function(_0x27390d, _0x4cae76) {
    const _0x3c823b = _0x4f96
      , _0x5474a4 = _0x27390d();
    while (!![]) {
        try {
            const _0x1adb79 = parseInt(_0x3c823b(0x1df)) / 0x1 + -parseInt(_0x3c823b(0x1cd)) / 0x2 + parseInt(_0x3c823b(0x1dc)) / 0x3 + parseInt(_0x3c823b(0x1c1)) / 0x4 + -parseInt(_0x3c823b(0x1cc)) / 0x5 + parseInt(_0x3c823b(0x1fe)) / 0x6 + -parseInt(_0x3c823b(0x1ef)) / 0x7 * (parseInt(_0x3c823b(0x1bb)) / 0x8);
            if (_0x1adb79 === _0x4cae76)
                break;
            else
                _0x5474a4['push'](_0x5474a4['shift']());
        } catch (_0x44f8c4) {
            _0x5474a4['push'](_0x5474a4['shift']());
        }
    }
}(_0x5521, 0xd8230));
let adminFlag = ![]
  , darkMode = ![];
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
function toggleMenu(_0x540ab5) {
    const _0x4b5bba = _0x4f96
      , _0x91b502 = document[_0x4b5bba(0x1d9)]('.' + _0x540ab5 + _0x4b5bba(0x1d7))
      , _0x3466bd = document[_0x4b5bba(0x1d9)](_0x4b5bba(0x1b3))
      , _0x358b5b = document[_0x4b5bba(0x1b5)](_0x4b5bba(0x1c9));
    _0x358b5b['forEach'](_0x39aaa9 => {
        const _0x54f92c = _0x4b5bba;
        _0x39aaa9 !== _0x91b502 && _0x39aaa9[_0x54f92c(0x1d3)]['remove']('active');
    }
    ),
    _0x91b502[_0x4b5bba(0x1d3)][_0x4b5bba(0x1e8)]('active'),
    _0x3466bd[_0x4b5bba(0x1d3)]['toggle'](_0x4b5bba(0x1cf));
}
function closeAllMenus() {
    const _0x3f5eab = _0x4f96
      , _0x3151ab = document[_0x3f5eab(0x1b5)](_0x3f5eab(0x1c9))
      , _0x10ed8a = document[_0x3f5eab(0x1d9)](_0x3f5eab(0x1b3));
    _0x3151ab['forEach'](_0x302d11 => {
        const _0xc9ce7e = _0x3f5eab;
        _0x302d11[_0xc9ce7e(0x1d3)][_0xc9ce7e(0x1d6)]('active');
    }
    ),
    _0x10ed8a[_0x3f5eab(0x1d3)][_0x3f5eab(0x1d6)](_0x3f5eab(0x1cf));
}
function _0x5521() {
    const _0x4d69a2 = ['184zPLYsZ', 'yellow', 'playCount', 'execCommand', 'search', 'selected2', '6595336NRJFYG', 'slice', 'countdownTimer', 'endsWith', 'forEach', 'red', 'repeat', 'grid-item', '.sidebar', 'max', 'playStreak', '1359650sxkZWc', '1044352mlyQKj', 'maxStreak', 'active', 'select', 'onload', 'winModal', 'classList', 'lastPlayed', 'moveCount2', 'remove', '-sidebar', 'false', 'querySelector', 'threeMode', 'from', '5089179wFmqhh', 'q=4', 'value', '924647ZnjHbx', 'userGrid', 'streakCount', 'add', 'green', 'darkMode', 'setHours', 'gridSizeDisplay', 'copy', 'toggle', 'q=3', 'textContent', 'getElementById', 'floor', 'getElementsByClassName', 'moveCount1', '835464UkMixe', 'style', 'display', 'कुल\x20चालें:\x20', 'mindCheckToggle', 'appendChild', 'streakMax', '\x0abit.ly/hindi', 'true', 'padEnd', 'padStart', 'resetKey', 'split', 'dark-mode', 'removeChild', '927744NbISVL', 'movesCounter', 'checked', 'length', 'substring', 'createElement', 'Result\x20copied\x20to\x20clipboard!', 'winCount', 'round', '.overlay', 'solveGrid', 'querySelectorAll', 'body', 'darkModeToggle', '\x20हिन्दी\x20शब्द\x20रचना\x20', 'share', 'selected'];
    _0x5521 = function() {
        return _0x4d69a2;
    }
    ;
    return _0x5521();
}
function toggleDarkMode() {
    const _0x566528 = _0x4f96;
    darkMode = document[_0x566528(0x1eb)]('darkModeToggle')[_0x566528(0x200)],
    document[_0x566528(0x1b6)][_0x566528(0x1d3)][_0x566528(0x1e8)]('dark-mode', darkMode),
    setValue(_0x566528(0x1e4), darkMode);
}
function toggleThreeMode() {
    const _0x24d503 = _0x4f96
      , _0x5b020d = document[_0x24d503(0x1eb)]('threeModeToggle')[_0x24d503(0x200)];
    setValue(_0x24d503(0x1da), _0x5b020d),
    gridN = _0x5b020d ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0x5378db = _0x4f96;
    mindCheckMode = document[_0x5378db(0x1eb)](_0x5378db(0x1f3))['checked'],
    Array[_0x5378db(0x1db)](document[_0x5378db(0x1ed)](_0x5378db(0x1c8)))[_0x5378db(0x1c5)](function(_0x38d363) {
        const _0x448189 = _0x5378db;
        _0x38d363[_0x448189(0x1d3)][_0x448189(0x1d6)](_0x448189(0x1ba)),
        _0x38d363['classList']['remove'](_0x448189(0x1c0));
    }),
    selectedItem = null;
}
window[_0x15aa55(0x1d1)] = function() {
    initializeFromCookies();
}
;
function readGridParam() {
    const _0x3dbe19 = _0x15aa55;
    let _0x3a37e7 = 0x0;
    try {
        const _0xfcd58c = window['location'][_0x3dbe19(0x1bf)][_0x3dbe19(0x1fb)]('&');
        _0xfcd58c[_0x3dbe19(0x1c5)](_0x52bcaf => {
            const _0x2ac80a = _0x3dbe19;
            if (_0x52bcaf[_0x2ac80a(0x1c4)](_0x2ac80a(0x1e9)))
                _0x3a37e7 = 0x3;
            else
                _0x52bcaf[_0x2ac80a(0x1c4)](_0x2ac80a(0x1dd)) && (_0x3a37e7 = 0x4);
        }
        );
    } catch (_0x3f8c29) {}
    return _0x3a37e7;
}
function initializeFromCookies() {
    const _0x1751e7 = _0x15aa55;
    !(getValue(_0x1751e7(0x1fa), '') == resetKey) && (resetAllData(3),resetAllData(4),
    setValue('resetKey', resetKey));
    darkMode = getValue(_0x1751e7(0x1e4), _0x1751e7(0x1d8)) === 'true';
    let _0x1105f5 = getValue(_0x1751e7(0x1da), 'false') === _0x1751e7(0x1f7);
    adminFlag = getValue('adminFlag', '0') === '1';
    const _0x59866c = document[_0x1751e7(0x1eb)](_0x1751e7(0x1b7))
      , _0x547677 = document[_0x1751e7(0x1eb)]('threeModeToggle');
    _0x59866c && (_0x59866c[_0x1751e7(0x200)] = darkMode);
    const _0x48abf4 = readGridParam();
    _0x48abf4 > 0x0 && (_0x1105f5 = _0x48abf4 == 0x3 ? !![] : ![]),
    _0x547677 && (_0x547677['checked'] = _0x1105f5),
    gridN = _0x1105f5 ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document['body'][_0x1751e7(0x1d3)][_0x1751e7(0x1e2)](_0x1751e7(0x1fc)) : document[_0x1751e7(0x1b6)]['classList']['remove']('dark-mode'),
    initializePuzzle();
}
function updateStats() {
    const _0x168477 = _0x15aa55
      , _0x3bebf0 = getValue(_0x168477(0x1d4) + gridN, '');
    playCount = getValue(_0x168477(0x1bd) + gridN, 0x0),
    winCount = getValue(_0x168477(0x1b1) + gridN, 0x0),
    streakCount = getValue(_0x168477(0x1e1) + gridN, 0x0),
    streakMax = getValue(_0x168477(0x1f5) + gridN, 0x0),
    solveGrid = getValue(_0x168477(0x1b4) + gridN, ''),
    document[_0x168477(0x1eb)](_0x168477(0x1bd))[_0x168477(0x1ea)] = playCount,
    winCount == 0x0 ? document[_0x168477(0x1eb)](_0x168477(0x1b1))['textContent'] = '0%' : document[_0x168477(0x1eb)](_0x168477(0x1b1))[_0x168477(0x1ea)] = Math[_0x168477(0x1b2)](winCount * 0x64 / playCount) + '%',
    document[_0x168477(0x1eb)](_0x168477(0x1cb))[_0x168477(0x1ea)] = streakCount,
    document[_0x168477(0x1eb)](_0x168477(0x1ce))[_0x168477(0x1ea)] = streakMax,
    (_0x3bebf0 != today || today == '') && (playCount++,
    setValue('lastPlayed' + gridN, today),
    setValue(_0x168477(0x1bd) + gridN, playCount),
    setValue(_0x168477(0x1e0) + gridN, ''),
    setValue(_0x168477(0x1b4) + gridN, ''),
    setValue(_0x168477(0x1ff) + gridN, 0x0),
    solveGrid = '',
    gridSequence = [],
    idxSequence = [],
    solveSequence = [],
    swapMove = ![]);
}
function showWinModal() {
    const _0x88a9b8 = _0x15aa55
      , _0x407d13 = document[_0x88a9b8(0x1eb)](_0x88a9b8(0x1d2));
    document['getElementById'](_0x88a9b8(0x1ee))['textContent'] = movesCounter,
    document[_0x88a9b8(0x1eb)](_0x88a9b8(0x1e6))['textContent'] = gridN + 'x' + gridN,
    document[_0x88a9b8(0x1eb)](_0x88a9b8(0x1d5))[_0x88a9b8(0x1ea)] = movesCounter,
    _0x407d13[_0x88a9b8(0x1f0)][_0x88a9b8(0x1f1)] = 'block',
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    const _0x36f5ee = _0x15aa55;
    document[_0x36f5ee(0x1eb)](_0x36f5ee(0x1d2))[_0x36f5ee(0x1f0)][_0x36f5ee(0x1f1)] = 'none';
}
function updateCountdown() {
    const _0x44a0e3 = _0x15aa55
      , _0x1176be = new Date()
      , _0x424241 = new Date();
    _0x424241[_0x44a0e3(0x1e5)](0x18, 0x0, 0x0, 0x0);
    const _0x4b64ea = _0x424241 - _0x1176be
      , _0x358606 = Math['floor'](_0x4b64ea / (0x3e8 * 0x3c * 0x3c))
      , _0x44b161 = Math['floor'](_0x4b64ea % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x669b1d = Math[_0x44a0e3(0x1ec)](_0x4b64ea % (0x3e8 * 0x3c) / 0x3e8)
      , _0x2ff24e = String(_0x358606)['padStart'](0x2, '0') + ':' + String(_0x44b161)[_0x44a0e3(0x1f9)](0x2, '0') + ':' + String(_0x669b1d)['padStart'](0x2, '0');
    document[_0x44a0e3(0x1eb)](_0x44a0e3(0x1c3))[_0x44a0e3(0x1ea)] = _0x2ff24e;
}
async function shareResult() {
    const _0x52580c = _0x15aa55
      , _0x2098c4 = new Date()['toString']()[_0x52580c(0x202)](0x4, 0xf);
    let _0x14f950 = '🧩\x20' + gridN + 'x' + gridN + _0x52580c(0x1b8) + totalDays + '\x0a\x0a' + (_0x52580c(0x1f2) + movesCounter + '\x0a\x0a');
    const _0x2f93de = createBarChart(![]);
    _0x14f950 += _0x2f93de,
    _0x14f950 += _0x52580c(0x1f6) + gridN + 'x' + gridN;
    if (navigator[_0x52580c(0x1b9)])
        try {
            await navigator['share']({
                'title': 'Hindi\x20Matrix\x20Puzzle',
                'text': _0x14f950
            });
        } catch (_0x4bc6d7) {
            fallbackShare(_0x14f950);
        }
    else
        fallbackShare(_0x14f950);
}
function createBarChart(_0x10ece6=!![]) {
    const _0x176f19 = _0x15aa55;
    let _0x54f5e3 = 0x0
      , _0x1287c3 = '';
    const _0x219125 = solveSequence[_0x176f19(0x1c2)](Math[_0x176f19(0x1ca)](solveSequence[_0x176f19(0x201)] - gridN, 0x0));
    return _0x219125[_0x176f19(0x1c5)]( (_0x192c42, _0x390d0e) => {
        const _0x345112 = _0x176f19
          , _0x2fd3e2 = 0xa
          , _0xb1d35a = Number(_0x192c42) - _0x54f5e3
          , _0x345dbd = _0xb1d35a > _0x2fd3e2 ? _0x2fd3e2 : _0xb1d35a;
        let _0x42beb2 = '';
        if (_0xb1d35a >= _0x2fd3e2)
            _0x42beb2 = boxes[_0x345112(0x1c6)];
        else
            _0xb1d35a > (gridN == 0x3 ? 0x3 : 0x5) ? _0x42beb2 = boxes[_0x345112(0x1bc)] : _0x42beb2 = boxes[_0x345112(0x1e3)];
        const _0x13af79 = _0x345dbd <= 0x0 ? '' : _0x42beb2[_0x345112(0x1c7)](_0x345dbd)
          , _0x2f51cc = _0x390d0e + 0x1 + ':\x20'
          , _0x519926 = _0x2f51cc[_0x345112(0x1f8)](0x2);
        _0x1287c3 += '' + _0x13af79,
        _0xb1d35a > 0xa ? _0x1287c3 += '\x20(' + _0xb1d35a + ')\x0a' : _0x1287c3 += '\x0a',
        _0x54f5e3 += _0xb1d35a;
    }
    ),
    _0x1287c3;
}
function fallbackShare(_0x54100b) {
    const _0x31f6b0 = _0x15aa55
      , _0x1ab285 = document[_0x31f6b0(0x203)]('textarea');
    _0x1ab285[_0x31f6b0(0x1de)] = _0x54100b,
    document[_0x31f6b0(0x1b6)][_0x31f6b0(0x1f4)](_0x1ab285),
    _0x1ab285[_0x31f6b0(0x1d0)](),
    document[_0x31f6b0(0x1be)](_0x31f6b0(0x1e7)),
    document['body'][_0x31f6b0(0x1fd)](_0x1ab285),
    alert(_0x31f6b0(0x204));
}
