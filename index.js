const _0x538782 = _0x346e;
(function(_0x3156f9, _0x3adfee) {
    const _0x1edfc9 = _0x346e
      , _0x390833 = _0x3156f9();
    while (!![]) {
        try {
            const _0xba35d = -parseInt(_0x1edfc9(0xba)) / 0x1 + -parseInt(_0x1edfc9(0xc5)) / 0x2 * (parseInt(_0x1edfc9(0xa8)) / 0x3) + -parseInt(_0x1edfc9(0xdd)) / 0x4 * (-parseInt(_0x1edfc9(0xe4)) / 0x5) + parseInt(_0x1edfc9(0xd2)) / 0x6 * (-parseInt(_0x1edfc9(0xad)) / 0x7) + parseInt(_0x1edfc9(0xd6)) / 0x8 + -parseInt(_0x1edfc9(0xb9)) / 0x9 + parseInt(_0x1edfc9(0xbc)) / 0xa;
            if (_0xba35d === _0x3adfee)
                break;
            else
                _0x390833['push'](_0x390833['shift']());
        } catch (_0x235805) {
            _0x390833['push'](_0x390833['shift']());
        }
    }
}(_0x10c4, 0xf25d5));
const BOX = '█';
function toggleMenu(_0x267ef3) {
    const _0x3c474f = _0x346e
      , _0x49bb72 = document[_0x3c474f(0xd4)]('.' + _0x267ef3 + _0x3c474f(0xc4))
      , _0x43c4df = document[_0x3c474f(0xd4)](_0x3c474f(0xeb))
      , _0x3cc8d1 = document['querySelectorAll']('.sidebar');
    _0x3cc8d1[_0x3c474f(0xc2)](_0x2c756b => {
        const _0x54c5ef = _0x3c474f;
        _0x2c756b !== _0x49bb72 && _0x2c756b['classList'][_0x54c5ef(0xe7)](_0x54c5ef(0xe6));
    }
    ),
    _0x49bb72[_0x3c474f(0xd1)]['toggle']('active'),
    _0x43c4df['classList']['toggle'](_0x3c474f(0xe6));
}
function closeAllMenus() {
    const _0x4e0da9 = _0x346e
      , _0x24cf0b = document[_0x4e0da9(0xb7)]('.sidebar')
      , _0x20f1fb = document[_0x4e0da9(0xd4)](_0x4e0da9(0xeb));
    _0x24cf0b[_0x4e0da9(0xc2)](_0x22f439 => {
        const _0x24fbd9 = _0x4e0da9;
        _0x22f439[_0x24fbd9(0xd1)][_0x24fbd9(0xe7)](_0x24fbd9(0xe6));
    }
    ),
    _0x20f1fb[_0x4e0da9(0xd1)]['remove']('active');
}
function toggleDarkMode() {
    const _0x162a7e = _0x346e
      , _0x3e669c = document[_0x162a7e(0xd8)]('darkModeToggle')[_0x162a7e(0xda)];
    document[_0x162a7e(0xbe)][_0x162a7e(0xd1)][_0x162a7e(0xe2)](_0x162a7e(0xaf), _0x3e669c),
    setValue(_0x162a7e(0xcf), _0x3e669c);
}
function toggleThreeMode() {
    const _0x19b61f = _0x346e
      , _0x2687a0 = document[_0x19b61f(0xd8)](_0x19b61f(0xd7))[_0x19b61f(0xda)];
    setValue(_0x19b61f(0xd3), _0x2687a0),
    gridN = _0x2687a0 ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0x5a1cbc = _0x346e;
    mindCheckMode = document[_0x5a1cbc(0xd8)](_0x5a1cbc(0xb4))[_0x5a1cbc(0xda)],
    Array['from'](document['getElementsByClassName'](_0x5a1cbc(0xea)))[_0x5a1cbc(0xc2)](function(_0x132841) {
        const _0x449201 = _0x5a1cbc;
        _0x132841['classList'][_0x449201(0xe7)]('selected'),
        _0x132841[_0x449201(0xd1)][_0x449201(0xe7)](_0x449201(0xab));
    }),
    selectedItem = null;
}
window[_0x538782(0xed)] = function() {
    initializeFromCookies();
}
;
function readGridParam() {
    const _0x36cf6e = _0x538782;
    let _0x257e77 = 0x0;
    try {
        const _0x5303e1 = window[_0x36cf6e(0xf0)]['search'][_0x36cf6e(0xbb)]('&');
        _0x5303e1[_0x36cf6e(0xc2)](_0x37b8fb => {
            const _0x5ebfcb = _0x36cf6e;
            if (_0x37b8fb[_0x5ebfcb(0xe5)](_0x5ebfcb(0xde)))
                _0x257e77 = 0x3;
            else
                _0x37b8fb['endsWith'](_0x5ebfcb(0xa9)) && (_0x257e77 = 0x4);
        }
        );
    } catch (_0x321562) {}
    return _0x257e77;
}
function initializeFromCookies() {
    const _0x53a4be = _0x538782;
    !(getValue(_0x53a4be(0xe3), '') == resetKey) && (resetAllData(),
    setValue(_0x53a4be(0xe3), resetKey));
    let _0x2bb334 = getValue(_0x53a4be(0xcf), 'false') === _0x53a4be(0xd5)
      , _0x4ff64e = getValue(_0x53a4be(0xd3), _0x53a4be(0xdc)) === _0x53a4be(0xd5);
    const _0x1f8cbb = document['getElementById'](_0x53a4be(0xec))
      , _0x20b88b = document[_0x53a4be(0xd8)](_0x53a4be(0xd7));
    _0x1f8cbb && (_0x1f8cbb[_0x53a4be(0xda)] = _0x2bb334);
    const _0x516083 = readGridParam();
    _0x516083 > 0x0 && (_0x4ff64e = _0x516083 == 0x3 ? !![] : ![]),
    _0x20b88b && (_0x20b88b[_0x53a4be(0xda)] = _0x4ff64e),
    gridN = _0x4ff64e ? 0x3 : 0x4,
    updateStats(),
    _0x2bb334 ? document['body'][_0x53a4be(0xd1)][_0x53a4be(0xb8)](_0x53a4be(0xaf)) : document[_0x53a4be(0xbe)][_0x53a4be(0xd1)][_0x53a4be(0xe7)](_0x53a4be(0xaf)),
    initializePuzzle();
}
function _0x346e(_0x149ad5, _0x1cbea8) {
    const _0x10c465 = _0x10c4();
    return _0x346e = function(_0x346e9a, _0x9d3d5b) {
        _0x346e9a = _0x346e9a - 0xa6;
        let _0x4f5d84 = _0x10c465[_0x346e9a];
        return _0x4f5d84;
    }
    ,
    _0x346e(_0x149ad5, _0x1cbea8);
}
function updateStats() {
    const _0x1726ae = _0x538782
      , _0x2c9067 = getValue(_0x1726ae(0xce) + gridN, '');
    playCount = getValue(_0x1726ae(0xef) + gridN, 0x0),
    winCount = getValue('winCount' + gridN, 0x0),
    streakCount = getValue(_0x1726ae(0xd9) + gridN, 0x0),
    streakMax = getValue(_0x1726ae(0xa7) + gridN, 0x0),
    orgGrid = getValue('orgGrid' + gridN, ''),
    document[_0x1726ae(0xd8)]('playCount')['textContent'] = playCount,
    winCount == 0x0 ? document[_0x1726ae(0xd8)](_0x1726ae(0xc6))[_0x1726ae(0xe9)] = '0%' : document[_0x1726ae(0xd8)]('winCount')[_0x1726ae(0xe9)] = Math['round'](winCount * 0x64 / playCount) + '%',
    document['getElementById'](_0x1726ae(0xca))[_0x1726ae(0xe9)] = streakCount,
    document['getElementById']('maxStreak')[_0x1726ae(0xe9)] = streakMax,
    (_0x2c9067 != today || today == '') && (playCount++,
    setValue(_0x1726ae(0xce) + gridN, today),
    setValue('playCount' + gridN, playCount),
    setValue(_0x1726ae(0xc8) + gridN, ''),
    setValue(_0x1726ae(0xb3) + gridN, ''),
    setValue('solvegGrid' + gridN, ''),
    setValue(_0x1726ae(0xcc) + gridN, 0x0));
}
function showWinModal() {
    const _0x2087a8 = _0x538782
      , _0x5c39e7 = document[_0x2087a8(0xd8)](_0x2087a8(0xe8));
    document['getElementById']('moveCount1')[_0x2087a8(0xe9)] = movesCounter,
    document[_0x2087a8(0xd8)](_0x2087a8(0xee))[_0x2087a8(0xe9)] = gridN + 'x' + gridN,
    document[_0x2087a8(0xd8)](_0x2087a8(0xa6))[_0x2087a8(0xe9)] = movesCounter,
    _0x5c39e7[_0x2087a8(0xbf)][_0x2087a8(0xcd)] = 'block',
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    const _0xed8365 = _0x538782;
    document['getElementById']('winModal')['style']['display'] = _0xed8365(0xc1);
}
function updateCountdown() {
    const _0x25df06 = _0x538782
      , _0x1df6ff = new Date()
      , _0x30bdc9 = new Date();
    _0x30bdc9['setHours'](0x18, 0x0, 0x0, 0x0);
    const _0x3deb1c = _0x30bdc9 - _0x1df6ff
      , _0xda560b = Math[_0x25df06(0xbd)](_0x3deb1c / (0x3e8 * 0x3c * 0x3c))
      , _0x53e756 = Math[_0x25df06(0xbd)](_0x3deb1c % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x2e2138 = Math[_0x25df06(0xbd)](_0x3deb1c % (0x3e8 * 0x3c) / 0x3e8)
      , _0x1c1b2c = String(_0xda560b)[_0x25df06(0xb1)](0x2, '0') + ':' + String(_0x53e756)[_0x25df06(0xb1)](0x2, '0') + ':' + String(_0x2e2138)[_0x25df06(0xb1)](0x2, '0');
    document[_0x25df06(0xd8)](_0x25df06(0xc3))['textContent'] = _0x1c1b2c;
}
async function shareResult() {
    const _0x1b5d23 = _0x538782
      , _0x21cc35 = new Date()[_0x1b5d23(0xe0)]()[_0x1b5d23(0xaa)](0x4, 0xf);
    let _0xff3e59 = _0x1b5d23(0xc0) + gridN + 'x' + gridN + '\x0a\x0a' + ('दिनाँक:\x20' + _0x21cc35 + '\x0a') + (_0x1b5d23(0xc9) + movesCounter + '\x0a\x0a');
    const _0x49a683 = createBarChart();
    _0xff3e59 += _0x49a683,
    _0xff3e59 += '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a' + (_0x1b5d23(0xb2) + gridN + 'x' + gridN);
    if (navigator[_0x1b5d23(0xb0)])
        try {
            await navigator[_0x1b5d23(0xb0)]({
                'title': _0x1b5d23(0xb5),
                'text': _0xff3e59
            });
        } catch (_0x1afca0) {
            fallbackShare(_0xff3e59);
        }
    else
        fallbackShare(_0xff3e59);
}
function _0x10c4() {
    const _0x43a123 = ['Result\x20copied\x20to\x20clipboard!', 'toString', 'appendChild', 'toggle', 'resetKey', '469465CWandw', 'endsWith', 'active', 'remove', 'winModal', 'textContent', 'grid-item', '.overlay', 'darkModeToggle', 'onload', 'gridSizeDisplay', 'playCount', 'location', 'moveCount2', 'streakMax', '3Qoqebt', 'q=4', 'substring', 'selected2', 'padEnd', '13274219SWIuow', 'select', 'dark-mode', 'share', 'padStart', 'bit.ly/hindi', 'orgGrid', 'mindCheckToggle', 'Hindi\x20Matrix\x20Puzzle', 'textarea', 'querySelectorAll', 'add', '7860699GMTMlW', '1605402PKDYOB', 'split', '44849820sAcRhE', 'floor', 'body', 'style', '🧩\x20हिन्दी\x20शब्द\x20रचना\x20', 'none', 'forEach', 'countdownTimer', '-sidebar', '1023234anwxAz', 'winCount', 'execCommand', 'userGrid', 'कुल\x20चालें:\x20', 'playStreak', 'copy', 'movesCounter', 'display', 'lastPlayed', 'darkMode', 'value', 'classList', '6hNaGFY', 'threeMode', 'querySelector', 'true', '1391048RcULRW', 'threeModeToggle', 'getElementById', 'streakCount', 'checked', 'createElement', 'false', '52SoQhdp', 'q=3'];
    _0x10c4 = function() {
        return _0x43a123;
    }
    ;
    return _0x10c4();
}
function createBarChart() {
    const _0x17ce52 = _0x538782;
    let _0x18ae7a = 0x0
      , _0x3a1132 = '';
    return solveSequence[_0x17ce52(0xc2)]( (_0x564c8e, _0x49d23f) => {
        const _0x9d730 = _0x17ce52
          , _0x5777e2 = Number(_0x564c8e) - _0x18ae7a
          , _0x1a36db = _0x5777e2 > 0xa ? 0xa : _0x5777e2
          , _0x426a56 = BOX['repeat'](_0x1a36db)
          , _0x25d195 = _0x49d23f + 0x1 + ':\x20'
          , _0x87469a = _0x25d195[_0x9d730(0xac)](0x4);
        _0x3a1132 += '' + _0x87469a + _0x426a56 + '\x20(' + _0x5777e2 + ')\x0a',
        _0x18ae7a += _0x5777e2;
    }
    ),
    _0x3a1132;
}
function fallbackShare(_0x49d31d) {
    const _0x40fe12 = _0x538782
      , _0x14131e = document[_0x40fe12(0xdb)](_0x40fe12(0xb6));
    _0x14131e[_0x40fe12(0xd0)] = _0x49d31d,
    document['body'][_0x40fe12(0xe1)](_0x14131e),
    _0x14131e[_0x40fe12(0xae)](),
    document[_0x40fe12(0xc7)](_0x40fe12(0xcb)),
    document[_0x40fe12(0xbe)]['removeChild'](_0x14131e),
    alert(_0x40fe12(0xdf));
}
