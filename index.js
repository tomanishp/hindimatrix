(function(_0x271ee3, _0x3f15f2) {
    const _0x5d9bc2 = _0x4671
      , _0x35be04 = _0x271ee3();
    while (!![]) {
        try {
            const _0x955c1b = parseInt(_0x5d9bc2(0x15a)) / 0x1 + parseInt(_0x5d9bc2(0x153)) / 0x2 + -parseInt(_0x5d9bc2(0x16b)) / 0x3 + parseInt(_0x5d9bc2(0x141)) / 0x4 * (parseInt(_0x5d9bc2(0x172)) / 0x5) + -parseInt(_0x5d9bc2(0x133)) / 0x6 * (-parseInt(_0x5d9bc2(0x13f)) / 0x7) + parseInt(_0x5d9bc2(0x15f)) / 0x8 + -parseInt(_0x5d9bc2(0x13d)) / 0x9;
            if (_0x955c1b === _0x3f15f2)
                break;
            else
                _0x35be04['push'](_0x35be04['shift']());
        } catch (_0x1be425) {
            _0x35be04['push'](_0x35be04['shift']());
        }
    }
}(_0x4dde, 0xee4cf));
function toggleMenu(_0x360015) {
    const _0x1a5314 = _0x4671
      , _0x3ddd3a = document[_0x1a5314(0x166)]('.' + _0x360015 + _0x1a5314(0x140))
      , _0xbeb1db = document['querySelector'](_0x1a5314(0x146))
      , _0x5735dd = document['querySelectorAll']('.sidebar');
    _0x5735dd[_0x1a5314(0x173)](_0x4a5af6 => {
        const _0x4ca98c = _0x1a5314;
        _0x4a5af6 !== _0x3ddd3a && _0x4a5af6[_0x4ca98c(0x16f)][_0x4ca98c(0x154)](_0x4ca98c(0x139));
    }
    ),
    _0x3ddd3a['classList'][_0x1a5314(0x14f)]('active'),
    _0xbeb1db[_0x1a5314(0x16f)][_0x1a5314(0x14f)](_0x1a5314(0x139));
}
function closeAllMenus() {
    const _0x453ad5 = _0x4671
      , _0x51c8d7 = document['querySelectorAll'](_0x453ad5(0x171))
      , _0x3b577f = document[_0x453ad5(0x166)]('.overlay');
    _0x51c8d7[_0x453ad5(0x173)](_0x433632 => {
        const _0x8edd2a = _0x453ad5;
        _0x433632['classList'][_0x8edd2a(0x154)](_0x8edd2a(0x139));
    }
    ),
    _0x3b577f['classList']['remove'](_0x453ad5(0x139));
}
function toggleDarkMode() {
    const _0x1ef852 = _0x4671
      , _0x3c8b46 = document[_0x1ef852(0x15e)](_0x1ef852(0x14e))[_0x1ef852(0x12d)];
    document[_0x1ef852(0x13b)][_0x1ef852(0x16f)][_0x1ef852(0x14f)](_0x1ef852(0x150), _0x3c8b46),
    setValue(_0x1ef852(0x145), _0x3c8b46);
}
function toggleThreeMode() {
    const _0x2b18d9 = _0x4671
      , _0x31965d = document[_0x2b18d9(0x15e)](_0x2b18d9(0x13c))[_0x2b18d9(0x12d)];
    setValue(_0x2b18d9(0x144), _0x31965d),
    gridN = _0x31965d ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0x1af6f1 = _0x4671;
    mindCheckMode = document[_0x1af6f1(0x15e)](_0x1af6f1(0x12f))[_0x1af6f1(0x12d)],
    Array[_0x1af6f1(0x151)](document[_0x1af6f1(0x155)]('grid-item'))['forEach'](function(_0x4e4c6c) {
        const _0x350949 = _0x1af6f1;
        _0x4e4c6c[_0x350949(0x16f)][_0x350949(0x154)](_0x350949(0x16a)),
        _0x4e4c6c['classList'][_0x350949(0x154)](_0x350949(0x143));
    }),
    selectedItem = null;
}
window['onload'] = function() {
    initializeFromCookies();
}
;
function readGridParam() {
    const _0x459afd = _0x4671;
    let _0x3832d2 = 0x0;
    try {
        const _0xd4004a = window[_0x459afd(0x134)]['search'][_0x459afd(0x16d)]('&');
        _0xd4004a[_0x459afd(0x173)](_0x8531ad => {
            const _0x2e7dd9 = _0x459afd;
            if (_0x8531ad[_0x2e7dd9(0x15d)](_0x2e7dd9(0x167)))
                _0x3832d2 = 0x3;
            else
                _0x8531ad[_0x2e7dd9(0x15d)]('q=4') && (_0x3832d2 = 0x4);
        }
        );
    } catch (_0x24ffb6) {}
    return _0x3832d2;
}
function initializeFromCookies() {
    const _0x5ac67d = _0x4671;
    !(getValue(_0x5ac67d(0x168), '') == resetKey) && (resetAllData(),
    setValue(_0x5ac67d(0x168), resetKey));
    let _0x20482e = getValue('darkMode', _0x5ac67d(0x131)) === _0x5ac67d(0x149)
      , _0x4ea9c1 = getValue(_0x5ac67d(0x144), 'false') === _0x5ac67d(0x149);
    const _0x3fd3d = document[_0x5ac67d(0x15e)](_0x5ac67d(0x14e))
      , _0x550c12 = document[_0x5ac67d(0x15e)](_0x5ac67d(0x13c));
    _0x3fd3d && (_0x3fd3d[_0x5ac67d(0x12d)] = _0x20482e);
    const _0x4bb64b = readGridParam();
    _0x4bb64b > 0x0 && (_0x4ea9c1 = _0x4bb64b == 0x3 ? !![] : ![]),
    _0x550c12 && (_0x550c12[_0x5ac67d(0x12d)] = _0x4ea9c1),
    gridN = _0x4ea9c1 ? 0x3 : 0x4,
    updateStats(),
    _0x20482e ? document['body'][_0x5ac67d(0x16f)][_0x5ac67d(0x163)](_0x5ac67d(0x150)) : document['body'][_0x5ac67d(0x16f)][_0x5ac67d(0x154)](_0x5ac67d(0x150)),
    initializePuzzle();
}
function _0x4671(_0x23a321, _0x19c4f4) {
    const _0x4dde02 = _0x4dde();
    return _0x4671 = function(_0x46718e, _0x35cbeb) {
        _0x46718e = _0x46718e - 0x12c;
        let _0x4bc7e9 = _0x4dde02[_0x46718e];
        return _0x4bc7e9;
    }
    ,
    _0x4671(_0x23a321, _0x19c4f4);
}
function _0x4dde() {
    const _0x2f7598 = ['कुल\x20चालें:\x20', 'endsWith', 'getElementById', '11861608oAqOHY', 'countdownTimer', 'display', 'playCount', 'add', 'createElement', 'toString', 'querySelector', 'q=3', 'resetKey', 'substring', 'selected', '118785dQXomS', 'copy', 'split', 'userGrid', 'classList', 'block', '.sidebar', '5mJHnqI', 'forEach', 'value', 'setHours', 'checked', 'none', 'mindCheckToggle', 'share', 'false', 'दिनाँक:\x20', '966EfikFb', 'location', '\x20\x20*\x20', 'round', 'winCount', 'Hindi\x20Matrix\x20Puzzle', 'active', 'select', 'body', 'threeModeToggle', '29078694cbrNkb', 'textContent', '65716WMfiYy', '-sidebar', '780980mbSBXM', 'Result\x20copied\x20to\x20clipboard!', 'selected2', 'threeMode', 'darkMode', '.overlay', 'floor', 'orgGrid', 'true', 'padStart', 'execCommand', '🧩\x20हिन्दी\x20शब्द\x20रचना\x20', 'streakCount', 'darkModeToggle', 'toggle', 'dark-mode', 'from', 'winModal', '565268ZDIWRj', 'remove', 'getElementsByClassName', 'style', 'gridSizeDisplay', 'lastPlayed', 'appendChild', '774592cdSnKU', 'removeChild'];
    _0x4dde = function() {
        return _0x2f7598;
    }
    ;
    return _0x4dde();
}
function updateStats() {
    const _0x3e56db = _0x4671
      , _0x5b8bd1 = getValue('lastPlayed' + gridN, '');
    playCount = getValue(_0x3e56db(0x162) + gridN, 0x0),
    winCount = getValue('winCount' + gridN, 0x0),
    streakCount = getValue(_0x3e56db(0x14d) + gridN, 0x0),
    streakMax = getValue('streakMax' + gridN, 0x0),
    orgGrid = getValue(_0x3e56db(0x148) + gridN, ''),
    document[_0x3e56db(0x15e)](_0x3e56db(0x162))['textContent'] = playCount,
    winCount == 0x0 ? document[_0x3e56db(0x15e)](_0x3e56db(0x137))['textContent'] = '0%' : document[_0x3e56db(0x15e)](_0x3e56db(0x137))[_0x3e56db(0x13e)] = Math[_0x3e56db(0x136)](winCount * 0x64 / playCount) + '%',
    document[_0x3e56db(0x15e)]('playStreak')[_0x3e56db(0x13e)] = streakCount,
    document['getElementById']('maxStreak')[_0x3e56db(0x13e)] = streakMax,
    (_0x5b8bd1 != today || today == '') && (playCount++,
    setValue(_0x3e56db(0x158) + gridN, today),
    setValue('playCount' + gridN, playCount),
    setValue(_0x3e56db(0x16e) + gridN, ''),
    setValue(_0x3e56db(0x148) + gridN, ''),
    setValue('solveGrid' + gridN, ''),
    setValue('movesCounter' + gridN, 0x0));
}
function showWinModal() {
    const _0xd8a333 = _0x4671
      , _0x2daad0 = document[_0xd8a333(0x15e)](_0xd8a333(0x152));
    document[_0xd8a333(0x15e)]('moveCount1')[_0xd8a333(0x13e)] = movesCounter,
    document[_0xd8a333(0x15e)](_0xd8a333(0x157))[_0xd8a333(0x13e)] = gridN + 'x' + gridN,
    document['getElementById']('moveCount2')[_0xd8a333(0x13e)] = movesCounter,
    _0x2daad0[_0xd8a333(0x156)]['display'] = _0xd8a333(0x170),
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    const _0x229b34 = _0x4671;
    document[_0x229b34(0x15e)]('winModal')[_0x229b34(0x156)][_0x229b34(0x161)] = _0x229b34(0x12e);
}
function updateCountdown() {
    const _0x3078c5 = _0x4671
      , _0x43ceb7 = new Date()
      , _0x8263a7 = new Date();
    _0x8263a7[_0x3078c5(0x12c)](0x18, 0x0, 0x0, 0x0);
    const _0x3798e1 = _0x8263a7 - _0x43ceb7
      , _0x51f686 = Math['floor'](_0x3798e1 / (0x3e8 * 0x3c * 0x3c))
      , _0x2b4a3f = Math[_0x3078c5(0x147)](_0x3798e1 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x32eeec = Math[_0x3078c5(0x147)](_0x3798e1 % (0x3e8 * 0x3c) / 0x3e8)
      , _0x51b3be = String(_0x51f686)['padStart'](0x2, '0') + ':' + String(_0x2b4a3f)[_0x3078c5(0x14a)](0x2, '0') + ':' + String(_0x32eeec)['padStart'](0x2, '0');
    document['getElementById'](_0x3078c5(0x160))[_0x3078c5(0x13e)] = _0x51b3be;
}
async function shareResult() {
    const _0x8ecca2 = _0x4671
      , _0x5f3750 = new Date()[_0x8ecca2(0x165)]()[_0x8ecca2(0x169)](0x4, 0xf);
    let _0x48132e = _0x8ecca2(0x14c) + gridN + 'x' + gridN + '\x0a\x0a' + (_0x8ecca2(0x132) + _0x5f3750 + '\x0a') + (_0x8ecca2(0x15c) + movesCounter + '\x0a');
    try {
        let _0x135c47 = 0x0;
        for (let _0x99e2f5 = 0x0; _0x99e2f5 < solveSequence['length']; _0x99e2f5++) {
            const _0x5e4635 = solveSequence[_0x99e2f5] - _0x135c47;
            _0x48132e += _0x8ecca2(0x135) + wordCounter[_0x99e2f5] + '\x20शब्द\x20' + _0x5e4635 + '\x20चाल\x20में\x0a',
            _0x135c47 = solveSequence[_0x99e2f5];
        }
    } catch (_0x523402) {}
    _0x48132e += '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a' + ('bit.ly/hindi' + gridN + 'x' + gridN);
    if (navigator[_0x8ecca2(0x130)])
        try {
            await navigator['share']({
                'title': _0x8ecca2(0x138),
                'text': _0x48132e
            });
        } catch (_0x26e9dc) {
            fallbackShare(_0x48132e);
        }
    else
        fallbackShare(_0x48132e);
}
function fallbackShare(_0x2514a3) {
    const _0x1cb575 = _0x4671
      , _0x53b60d = document[_0x1cb575(0x164)]('textarea');
    _0x53b60d[_0x1cb575(0x174)] = _0x2514a3,
    document[_0x1cb575(0x13b)][_0x1cb575(0x159)](_0x53b60d),
    _0x53b60d[_0x1cb575(0x13a)](),
    document[_0x1cb575(0x14b)](_0x1cb575(0x16c)),
    document[_0x1cb575(0x13b)][_0x1cb575(0x15b)](_0x53b60d),
    alert(_0x1cb575(0x142));
}
