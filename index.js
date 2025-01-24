(function(_0x52b274, _0xf602f) {
    const _0x53f00f = _0x5d90
      , _0x4e0d70 = _0x52b274();
    while (!![]) {
        try {
            const _0x290cb0 = -parseInt(_0x53f00f(0x1b2)) / 0x1 + parseInt(_0x53f00f(0x1e4)) / 0x2 * (parseInt(_0x53f00f(0x1b9)) / 0x3) + parseInt(_0x53f00f(0x1a8)) / 0x4 * (-parseInt(_0x53f00f(0x19f)) / 0x5) + parseInt(_0x53f00f(0x1c0)) / 0x6 + parseInt(_0x53f00f(0x1af)) / 0x7 + parseInt(_0x53f00f(0x1be)) / 0x8 + -parseInt(_0x53f00f(0x1d4)) / 0x9;
            if (_0x290cb0 === _0xf602f)
                break;
            else
                _0x4e0d70['push'](_0x4e0d70['shift']());
        } catch (_0x237600) {
            _0x4e0d70['push'](_0x4e0d70['shift']());
        }
    }
}(_0x34d5, 0xaedd2));
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
function toggleMenu(_0x4f8305) {
    const _0x47ff80 = _0x5d90
      , _0x1d3e2c = document[_0x47ff80(0x1c5)]('.' + _0x4f8305 + '-sidebar')
      , _0x3e4040 = document['querySelector'](_0x47ff80(0x1c6))
      , _0x426128 = document[_0x47ff80(0x1a5)](_0x47ff80(0x1c7));
    _0x426128[_0x47ff80(0x1a7)](_0xa9bba4 => {
        const _0x2456e5 = _0x47ff80;
        _0xa9bba4 !== _0x1d3e2c && _0xa9bba4[_0x2456e5(0x1d1)][_0x2456e5(0x1bf)](_0x2456e5(0x1b1));
    }
    ),
    _0x1d3e2c['classList'][_0x47ff80(0x1a2)]('active'),
    _0x3e4040[_0x47ff80(0x1d1)]['toggle'](_0x47ff80(0x1b1));
}
function closeAllMenus() {
    const _0x23ad12 = _0x5d90
      , _0x81e9ba = document[_0x23ad12(0x1a5)](_0x23ad12(0x1c7))
      , _0x28affd = document[_0x23ad12(0x1c5)](_0x23ad12(0x1c6));
    _0x81e9ba[_0x23ad12(0x1a7)](_0x3656e7 => {
        const _0x563622 = _0x23ad12;
        _0x3656e7[_0x563622(0x1d1)][_0x563622(0x1bf)]('active');
    }
    ),
    _0x28affd[_0x23ad12(0x1d1)][_0x23ad12(0x1bf)](_0x23ad12(0x1b1));
}
function toggleDarkMode() {
    const _0x573e45 = _0x5d90;
    darkMode = document[_0x573e45(0x1aa)]('darkModeToggle')[_0x573e45(0x1d8)],
    document[_0x573e45(0x1b0)][_0x573e45(0x1d1)][_0x573e45(0x1a2)]('dark-mode', darkMode),
    setValue('darkMode', darkMode);
}
function toggleThreeMode() {
    const _0x4f2a1c = _0x5d90
      , _0x4da02f = document['getElementById'](_0x4f2a1c(0x1c1))[_0x4f2a1c(0x1d8)];
    setValue('threeMode', _0x4da02f),
    gridN = _0x4da02f ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0x20b3ce = _0x5d90;
    mindCheckMode = document[_0x20b3ce(0x1aa)](_0x20b3ce(0x1c8))[_0x20b3ce(0x1d8)],
    Array[_0x20b3ce(0x1bb)](document['getElementsByClassName'](_0x20b3ce(0x1ad)))[_0x20b3ce(0x1a7)](function(_0x12b9c1) {
        const _0x1b3383 = _0x20b3ce;
        _0x12b9c1['classList']['remove'](_0x1b3383(0x1b5)),
        _0x12b9c1[_0x1b3383(0x1d1)][_0x1b3383(0x1bf)]('selected2');
    }),
    selectedItem = null;
}
function _0x5d90(_0x89e860, _0x47d396) {
    const _0x34d5ef = _0x34d5();
    return _0x5d90 = function(_0x5d902, _0x50a645) {
        _0x5d902 = _0x5d902 - 0x19f;
        let _0x2f96a6 = _0x34d5ef[_0x5d902];
        return _0x2f96a6;
    }
    ,
    _0x5d90(_0x89e860, _0x47d396);
}
window['onload'] = function() {
    initializeFromCookies();
}
;
function readGridParam() {
    const _0x5237c3 = _0x5d90;
    let _0x1992c3 = 0x0;
    try {
        const _0x132209 = window['location'][_0x5237c3(0x1bc)][_0x5237c3(0x1df)]('&');
        _0x132209[_0x5237c3(0x1a7)](_0x4191f9 => {
            const _0x32cb26 = _0x5237c3;
            if (_0x4191f9[_0x32cb26(0x1a1)]('q=3'))
                _0x1992c3 = 0x3;
            else
                _0x4191f9[_0x32cb26(0x1a1)](_0x32cb26(0x1ce)) && (_0x1992c3 = 0x4);
        }
        );
    } catch (_0x466f9c) {}
    return _0x1992c3;
}
function _0x34d5() {
    const _0x19de90 = ['704057cQQfAo', 'textarea', 'appendChild', 'selected', '🧩\x20हिन्दी\x20शब्द\x20रचना\x20', 'copy', 'शब्द:\x20चाल\x0a', '3QSQucZ', 'resetKey', 'from', 'search', 'style', '3193840RzTBTs', 'remove', '1338000ZngScO', 'threeModeToggle', 'none', 'share', 'streakMax', 'querySelector', '.overlay', '.sidebar', 'mindCheckToggle', 'round', 'createElement', 'value', 'add', 'playCount', 'q=4', 'solveGrid', 'padStart', 'classList', 'adminFlag', 'dark-mode', '6437223BWGtTF', 'block', 'substring', 'moveCount2', 'checked', 'floor', 'lastPlayed', 'display', 'maxStreak', 'gridSizeDisplay', 'removeChild', 'split', 'दिनाँक:\x20', 'false', 'streakCount', 'कुल\x20चालें:\x20', '2406466FvcRPP', 'winCount', 'yellow', 'movesCounter', 'true', 'darkModeToggle', 'countdownTimer', 'textContent', 'winModal', '1185qFIzia', 'Result\x20copied\x20to\x20clipboard!', 'endsWith', 'toggle', '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a', 'userGrid', 'querySelectorAll', 'slice', 'forEach', '8836sElPVV', 'toString', 'getElementById', 'repeat', 'padEnd', 'grid-item', 'green', '5835312yBpBCa', 'body', 'active'];
    _0x34d5 = function() {
        return _0x19de90;
    }
    ;
    return _0x34d5();
}
function initializeFromCookies() {
    const _0x4b65d7 = _0x5d90;
    !(getValue(_0x4b65d7(0x1ba), '') == resetKey) && (resetAllData(),
    setValue('resetKey', resetKey));
    darkMode = getValue('darkMode', _0x4b65d7(0x1e1)) === _0x4b65d7(0x1e8);
    let _0x2f34f8 = getValue('threeMode', _0x4b65d7(0x1e1)) === _0x4b65d7(0x1e8);
    adminFlag = getValue(_0x4b65d7(0x1d2), '0') === '1';
    const _0x204f8a = document['getElementById'](_0x4b65d7(0x1e9))
      , _0x394e52 = document['getElementById'](_0x4b65d7(0x1c1));
    _0x204f8a && (_0x204f8a[_0x4b65d7(0x1d8)] = darkMode);
    const _0x5d5c1c = readGridParam();
    _0x5d5c1c > 0x0 && (_0x2f34f8 = _0x5d5c1c == 0x3 ? !![] : ![]),
    _0x394e52 && (_0x394e52[_0x4b65d7(0x1d8)] = _0x2f34f8),
    gridN = _0x2f34f8 ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document[_0x4b65d7(0x1b0)]['classList'][_0x4b65d7(0x1cc)](_0x4b65d7(0x1d3)) : document[_0x4b65d7(0x1b0)]['classList']['remove'](_0x4b65d7(0x1d3)),
    initializePuzzle();
}
function updateStats() {
    const _0x3c3ca1 = _0x5d90
      , _0x421126 = getValue(_0x3c3ca1(0x1da) + gridN, '');
    playCount = getValue('playCount' + gridN, 0x0),
    winCount = getValue('winCount' + gridN, 0x0),
    streakCount = getValue(_0x3c3ca1(0x1e2) + gridN, 0x0),
    streakMax = getValue(_0x3c3ca1(0x1c4) + gridN, 0x0),
    solveGrid = getValue(_0x3c3ca1(0x1cf) + gridN, ''),
    document[_0x3c3ca1(0x1aa)](_0x3c3ca1(0x1cd))[_0x3c3ca1(0x1eb)] = playCount,
    winCount == 0x0 ? document[_0x3c3ca1(0x1aa)](_0x3c3ca1(0x1e5))[_0x3c3ca1(0x1eb)] = '0%' : document['getElementById'](_0x3c3ca1(0x1e5))[_0x3c3ca1(0x1eb)] = Math[_0x3c3ca1(0x1c9)](winCount * 0x64 / playCount) + '%',
    document[_0x3c3ca1(0x1aa)]('playStreak')[_0x3c3ca1(0x1eb)] = streakCount,
    document[_0x3c3ca1(0x1aa)](_0x3c3ca1(0x1dc))[_0x3c3ca1(0x1eb)] = streakMax,
    (_0x421126 != today || today == '') && (playCount++,
    setValue(_0x3c3ca1(0x1da) + gridN, today),
    setValue(_0x3c3ca1(0x1cd) + gridN, playCount),
    setValue(_0x3c3ca1(0x1a4) + gridN, ''),
    setValue(_0x3c3ca1(0x1cf) + gridN, ''),
    setValue(_0x3c3ca1(0x1e7) + gridN, 0x0),
    solveGrid = '',
    gridSequence = [],
    idxSequence = [],
    solveSequence = [],
    swapMove = ![]);
}
function showWinModal() {
    const _0x2764e5 = _0x5d90
      , _0x3fb102 = document[_0x2764e5(0x1aa)](_0x2764e5(0x1ec));
    document['getElementById']('moveCount1')[_0x2764e5(0x1eb)] = movesCounter,
    document[_0x2764e5(0x1aa)](_0x2764e5(0x1dd))[_0x2764e5(0x1eb)] = gridN + 'x' + gridN,
    document['getElementById'](_0x2764e5(0x1d7))[_0x2764e5(0x1eb)] = movesCounter,
    _0x3fb102[_0x2764e5(0x1bd)]['display'] = _0x2764e5(0x1d5),
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    const _0x46063e = _0x5d90;
    document['getElementById'](_0x46063e(0x1ec))['style'][_0x46063e(0x1db)] = _0x46063e(0x1c2);
}
function updateCountdown() {
    const _0x20b1f2 = _0x5d90
      , _0x5bf17b = new Date()
      , _0x4a2666 = new Date();
    _0x4a2666['setHours'](0x18, 0x0, 0x0, 0x0);
    const _0x40c628 = _0x4a2666 - _0x5bf17b
      , _0xe74d0e = Math[_0x20b1f2(0x1d9)](_0x40c628 / (0x3e8 * 0x3c * 0x3c))
      , _0x5beddb = Math['floor'](_0x40c628 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x1a57c6 = Math[_0x20b1f2(0x1d9)](_0x40c628 % (0x3e8 * 0x3c) / 0x3e8)
      , _0x353095 = String(_0xe74d0e)[_0x20b1f2(0x1d0)](0x2, '0') + ':' + String(_0x5beddb)['padStart'](0x2, '0') + ':' + String(_0x1a57c6)[_0x20b1f2(0x1d0)](0x2, '0');
    document[_0x20b1f2(0x1aa)](_0x20b1f2(0x1ea))['textContent'] = _0x353095;
}
async function shareResult() {
    const _0x496c3a = _0x5d90
      , _0xf4d250 = new Date()[_0x496c3a(0x1a9)]()[_0x496c3a(0x1d6)](0x4, 0xf);
    let _0x4788a7 = _0x496c3a(0x1b6) + gridN + 'x' + gridN + '\x0a\x0a' + (_0x496c3a(0x1e0) + _0xf4d250 + '\x0a') + (_0x496c3a(0x1e3) + movesCounter + '\x0a\x0a');
    const _0x20a152 = createBarChart(![]);
    _0x4788a7 += _0x20a152,
    _0x4788a7 += _0x496c3a(0x1a3) + ('bit.ly/hindi' + gridN + 'x' + gridN);
    if (navigator[_0x496c3a(0x1c3)])
        try {
            await navigator[_0x496c3a(0x1c3)]({
                'title': 'Hindi\x20Matrix\x20Puzzle',
                'text': _0x4788a7
            });
        } catch (_0x5acfda) {
            fallbackShare(_0x4788a7);
        }
    else
        fallbackShare(_0x4788a7);
}
function createBarChart(_0x1855ea=!![]) {
    const _0x2e1312 = _0x5d90;
    let _0x21a9b1 = 0x0
      , _0x560330 = movesCounter > 0x0 ? _0x2e1312(0x1b8) : '';
    const _0x4374d8 = solveSequence[_0x2e1312(0x1a6)](Math['max'](solveSequence['length'] - gridN, 0x0));
    return _0x4374d8['forEach']( (_0x225127, _0x67e74e) => {
        const _0x714649 = _0x2e1312
          , _0x1907cc = 0xa
          , _0xaa4c69 = Number(_0x225127) - _0x21a9b1
          , _0x52fd31 = _0xaa4c69 > _0x1907cc ? _0x1907cc : _0xaa4c69;
        let _0x11bec7 = '';
        if (_0xaa4c69 >= _0x1907cc)
            _0x11bec7 = boxes['red'];
        else
            _0xaa4c69 > (gridN == 0x3 ? 0x3 : 0x5) ? _0x11bec7 = boxes[_0x714649(0x1e6)] : _0x11bec7 = boxes[_0x714649(0x1ae)];
        const _0x5a0f4d = _0x52fd31 <= 0x0 ? '' : _0x11bec7[_0x714649(0x1ab)](_0x52fd31)
          , _0x59594a = _0x67e74e + 0x1 + ':\x20'
          , _0x24eb8d = _0x59594a[_0x714649(0x1ac)](0x2);
        _0x560330 += '' + _0x24eb8d + _0x5a0f4d,
        _0xaa4c69 > 0xa ? _0x560330 += '\x20(' + _0xaa4c69 + ')\x0a' : _0x560330 += '\x0a',
        _0x21a9b1 += _0xaa4c69;
    }
    ),
    _0x560330;
}
function fallbackShare(_0x48bfb7) {
    const _0x3846e3 = _0x5d90
      , _0x4e7c3a = document[_0x3846e3(0x1ca)](_0x3846e3(0x1b3));
    _0x4e7c3a[_0x3846e3(0x1cb)] = _0x48bfb7,
    document[_0x3846e3(0x1b0)][_0x3846e3(0x1b4)](_0x4e7c3a),
    _0x4e7c3a['select'](),
    document['execCommand'](_0x3846e3(0x1b7)),
    document[_0x3846e3(0x1b0)][_0x3846e3(0x1de)](_0x4e7c3a),
    alert(_0x3846e3(0x1a0));
}
