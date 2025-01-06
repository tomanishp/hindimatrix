function _0x30f2() {
    const _0x31e50c = ['winModal', '.sidebar', 'from', 'padStart', 'lastPlayed', 'false', '60ZXWdUH', 'resetKey', 'grid-item', 'display', 'threeMode', 'darkModeToggle', 'none', '126594EJQKRK', 'endsWith', 'streakMax', 'कुल\x20चालें:\x20', 'search', 'setHours', '229090pPptgl', 'select', 'classList', 'repeat', '657957AOtqcT', '6494KEyLFB', 'floor', 'green', 'textarea', 'maxStreak', 'body', 'toggle', 'q=4', 'block', 'substring', 'darkMode', '1357536tcsgCE', 'querySelector', 'orgGrid', '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a', 'playCount', '170SyRvaw', 'getElementById', 'appendChild', 'forEach', 'playStreak', 'querySelectorAll', 'share', 'winCount', 'gridSizeDisplay', 'dark-mode', 'checked', 'red', '16054148AINzVg', 'solveGrid', 'true', '-sidebar', 'getElementsByClassName', 'moveCount2', 'Result\x20copied\x20to\x20clipboard!', '6367606ksxdlC', 'selected2', 'solvegGrid', 'bit.ly/hindi', '107PaRfKz', 'active', 'userGrid', 'execCommand', 'onload', 'q=3', 'mindCheckToggle', 'movesCounter', 'textContent', 'remove', '🧩\x20हिन्दी\x20शब्द\x20रचना\x20', '12rBVACF', 'removeChild', 'streakCount'];
    _0x30f2 = function() {
        return _0x31e50c;
    }
    ;
    return _0x30f2();
}
const _0xdffc98 = _0x680a;
(function(_0x38c502, _0x3e82c7) {
    const _0x119d74 = _0x680a
      , _0x156b7c = _0x38c502();
    while (!![]) {
        try {
            const _0x5dec60 = -parseInt(_0x119d74(0x21a)) / 0x1 * (-parseInt(_0x119d74(0x1f3)) / 0x2) + parseInt(_0x119d74(0x23f)) / 0x3 * (parseInt(_0x119d74(0x225)) / 0x4) + parseInt(_0x119d74(0x23b)) / 0x5 * (-parseInt(_0x119d74(0x22e)) / 0x6) + -parseInt(_0x119d74(0x216)) / 0x7 + -parseInt(_0x119d74(0x1fe)) / 0x8 + -parseInt(_0x119d74(0x235)) / 0x9 * (parseInt(_0x119d74(0x203)) / 0xa) + parseInt(_0x119d74(0x20f)) / 0xb;
            if (_0x5dec60 === _0x3e82c7)
                break;
            else
                _0x156b7c['push'](_0x156b7c['shift']());
        } catch (_0x5841b9) {
            _0x156b7c['push'](_0x156b7c['shift']());
        }
    }
}(_0x30f2, 0xa804a));
function _0x680a(_0x4c8fe1, _0x2da012) {
    const _0x30f28a = _0x30f2();
    return _0x680a = function(_0x680a7f, _0x5e29bc) {
        _0x680a7f = _0x680a7f - 0x1f3;
        let _0x22b512 = _0x30f28a[_0x680a7f];
        return _0x22b512;
    }
    ,
    _0x680a(_0x4c8fe1, _0x2da012);
}
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
function toggleMenu(_0x1ca71b) {
    const _0x530e89 = _0x680a
      , _0x30c5e3 = document[_0x530e89(0x1ff)]('.' + _0x1ca71b + _0x530e89(0x212))
      , _0x881603 = document[_0x530e89(0x1ff)]('.overlay')
      , _0x57340c = document[_0x530e89(0x208)](_0x530e89(0x229));
    _0x57340c[_0x530e89(0x206)](_0x3cc5f5 => {
        const _0x435f0f = _0x530e89;
        _0x3cc5f5 !== _0x30c5e3 && _0x3cc5f5[_0x435f0f(0x23d)]['remove'](_0x435f0f(0x21b));
    }
    ),
    _0x30c5e3['classList'][_0x530e89(0x1f9)](_0x530e89(0x21b)),
    _0x881603[_0x530e89(0x23d)][_0x530e89(0x1f9)](_0x530e89(0x21b));
}
function closeAllMenus() {
    const _0x4f1b94 = _0x680a
      , _0x49ced2 = document['querySelectorAll'](_0x4f1b94(0x229))
      , _0x4c9a30 = document['querySelector']('.overlay');
    _0x49ced2[_0x4f1b94(0x206)](_0xfbc136 => {
        const _0x3ccf1c = _0x4f1b94;
        _0xfbc136[_0x3ccf1c(0x23d)][_0x3ccf1c(0x223)](_0x3ccf1c(0x21b));
    }
    ),
    _0x4c9a30[_0x4f1b94(0x23d)]['remove'](_0x4f1b94(0x21b));
}
function toggleDarkMode() {
    const _0x37bec3 = _0x680a;
    darkMode = document[_0x37bec3(0x204)](_0x37bec3(0x233))['checked'],
    document['body']['classList'][_0x37bec3(0x1f9)](_0x37bec3(0x20c), darkMode),
    setValue('darkMode', darkMode);
}
function toggleThreeMode() {
    const _0x45878 = _0x680a
      , _0xf771ea = document[_0x45878(0x204)]('threeModeToggle')[_0x45878(0x20d)];
    setValue('threeMode', _0xf771ea),
    gridN = _0xf771ea ? 0x3 : 0x4,
    updateStats(),
    initializePuzzle();
}
function toggleMindCheck() {
    const _0x1c279a = _0x680a;
    mindCheckMode = document['getElementById'](_0x1c279a(0x220))['checked'],
    Array[_0x1c279a(0x22a)](document[_0x1c279a(0x213)](_0x1c279a(0x230)))[_0x1c279a(0x206)](function(_0xc96aee) {
        const _0x21341b = _0x1c279a;
        _0xc96aee[_0x21341b(0x23d)]['remove']('selected'),
        _0xc96aee[_0x21341b(0x23d)][_0x21341b(0x223)](_0x21341b(0x217));
    }),
    selectedItem = null;
}
window[_0xdffc98(0x21e)] = function() {
    initializeFromCookies();
}
;
function readGridParam() {
    const _0x56db93 = _0xdffc98;
    let _0x15350b = 0x0;
    try {
        const _0x47a7f5 = window['location'][_0x56db93(0x239)]['split']('&');
        _0x47a7f5[_0x56db93(0x206)](_0x3687bc => {
            const _0xe7d15c = _0x56db93;
            if (_0x3687bc[_0xe7d15c(0x236)](_0xe7d15c(0x21f)))
                _0x15350b = 0x3;
            else
                _0x3687bc['endsWith'](_0xe7d15c(0x1fa)) && (_0x15350b = 0x4);
        }
        );
    } catch (_0x19f858) {}
    return _0x15350b;
}
function initializeFromCookies() {
    const _0x4269c7 = _0xdffc98;
    !(getValue(_0x4269c7(0x22f), '') == resetKey) && (resetAllData(),
    setValue(_0x4269c7(0x22f), resetKey));
    darkMode = getValue(_0x4269c7(0x1fd), _0x4269c7(0x22d)) === 'true';
    let _0x17002f = getValue(_0x4269c7(0x232), _0x4269c7(0x22d)) === _0x4269c7(0x211);
    const _0x5e961a = document[_0x4269c7(0x204)]('darkModeToggle')
      , _0x58abb8 = document[_0x4269c7(0x204)]('threeModeToggle');
    _0x5e961a && (_0x5e961a[_0x4269c7(0x20d)] = darkMode);
    const _0x31b677 = readGridParam();
    _0x31b677 > 0x0 && (_0x17002f = _0x31b677 == 0x3 ? !![] : ![]),
    _0x58abb8 && (_0x58abb8[_0x4269c7(0x20d)] = _0x17002f),
    gridN = _0x17002f ? 0x3 : 0x4,
    updateStats(),
    darkMode ? document['body'][_0x4269c7(0x23d)]['add'](_0x4269c7(0x20c)) : document[_0x4269c7(0x1f8)]['classList'][_0x4269c7(0x223)]('dark-mode'),
    initializePuzzle();
}
function updateStats() {
    const _0x204aa7 = _0xdffc98
      , _0x3b6b96 = getValue(_0x204aa7(0x22c) + gridN, '');
    playCount = getValue(_0x204aa7(0x202) + gridN, 0x0),
    winCount = getValue('winCount' + gridN, 0x0),
    streakCount = getValue(_0x204aa7(0x227) + gridN, 0x0),
    streakMax = getValue(_0x204aa7(0x237) + gridN, 0x0),
    orgGrid = getValue(_0x204aa7(0x200) + gridN, ''),
    solveGrid = getValue(_0x204aa7(0x210) + gridN, ''),
    document[_0x204aa7(0x204)](_0x204aa7(0x202))[_0x204aa7(0x222)] = playCount,
    winCount == 0x0 ? document[_0x204aa7(0x204)]('winCount')[_0x204aa7(0x222)] = '0%' : document[_0x204aa7(0x204)](_0x204aa7(0x20a))[_0x204aa7(0x222)] = Math['round'](winCount * 0x64 / playCount) + '%',
    document['getElementById'](_0x204aa7(0x207))['textContent'] = streakCount,
    document[_0x204aa7(0x204)](_0x204aa7(0x1f7))['textContent'] = streakMax,
    (_0x3b6b96 != today || today == '') && (playCount++,
    setValue(_0x204aa7(0x22c) + gridN, today),
    setValue(_0x204aa7(0x202) + gridN, playCount),
    setValue(_0x204aa7(0x21c) + gridN, ''),
    setValue('orgGrid' + gridN, ''),
    setValue(_0x204aa7(0x218) + gridN, ''),
    setValue(_0x204aa7(0x221) + gridN, 0x0));
}
function showWinModal() {
    const _0x4f8d81 = _0xdffc98
      , _0x48ae37 = document['getElementById'](_0x4f8d81(0x228));
    document[_0x4f8d81(0x204)]('moveCount1')[_0x4f8d81(0x222)] = movesCounter,
    document[_0x4f8d81(0x204)](_0x4f8d81(0x20b))[_0x4f8d81(0x222)] = gridN + 'x' + gridN,
    document[_0x4f8d81(0x204)](_0x4f8d81(0x214))[_0x4f8d81(0x222)] = movesCounter,
    _0x48ae37['style'][_0x4f8d81(0x231)] = _0x4f8d81(0x1fb),
    updateCountdown(),
    setInterval(updateCountdown, 0x3e8);
}
function closeWinModal() {
    const _0x3e61d = _0xdffc98;
    document['getElementById'](_0x3e61d(0x228))['style'][_0x3e61d(0x231)] = _0x3e61d(0x234);
}
function updateCountdown() {
    const _0xf707a1 = _0xdffc98
      , _0x2ab152 = new Date()
      , _0x359ecd = new Date();
    _0x359ecd[_0xf707a1(0x23a)](0x18, 0x0, 0x0, 0x0);
    const _0x30e65a = _0x359ecd - _0x2ab152
      , _0x1f6a18 = Math[_0xf707a1(0x1f4)](_0x30e65a / (0x3e8 * 0x3c * 0x3c))
      , _0x3d0207 = Math[_0xf707a1(0x1f4)](_0x30e65a % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
      , _0x110c80 = Math[_0xf707a1(0x1f4)](_0x30e65a % (0x3e8 * 0x3c) / 0x3e8)
      , _0x14dfe5 = String(_0x1f6a18)['padStart'](0x2, '0') + ':' + String(_0x3d0207)['padStart'](0x2, '0') + ':' + String(_0x110c80)[_0xf707a1(0x22b)](0x2, '0');
    document['getElementById']('countdownTimer')[_0xf707a1(0x222)] = _0x14dfe5;
}
async function shareResult() {
    const _0x4d2d9c = _0xdffc98
      , _0x52ef73 = new Date()['toString']()[_0x4d2d9c(0x1fc)](0x4, 0xf);
    let _0x56088f = _0x4d2d9c(0x224) + gridN + 'x' + gridN + '\x0a\x0a' + ('दिनाँक:\x20' + _0x52ef73 + '\x0a') + (_0x4d2d9c(0x238) + movesCounter + '\x0a\x0a');
    const _0x3df037 = createBarChart(![]);
    _0x56088f += _0x3df037,
    _0x56088f += _0x4d2d9c(0x201) + (_0x4d2d9c(0x219) + gridN + 'x' + gridN);
    if (navigator[_0x4d2d9c(0x209)])
        try {
            await navigator[_0x4d2d9c(0x209)]({
                'title': 'Hindi\x20Matrix\x20Puzzle',
                'text': _0x56088f
            });
        } catch (_0x4754e) {
            fallbackShare(_0x56088f);
        }
    else
        fallbackShare(_0x56088f);
}
function createBarChart(_0x4c17d6=!![]) {
    let _0x264c07 = 0x0
      , _0x466cbb = '';
    return solveSequence['forEach']( (_0x17bc55, _0xebb523) => {
        const _0x4f1714 = _0x680a
          , _0x141598 = 0xa
          , _0x397f28 = Number(_0x17bc55) - _0x264c07
          , _0x2485c2 = _0x397f28 > _0x141598 ? _0x141598 : _0x397f28;
        let _0x43718e = '';
        if (_0x397f28 >= _0x141598)
            _0x43718e = boxes[_0x4f1714(0x20e)];
        else
            _0x397f28 > (gridN == 0x3 ? 0x3 : 0x5) ? _0x43718e = boxes['yellow'] : _0x43718e = boxes[_0x4f1714(0x1f5)];
        const _0x3f4a56 = _0x2485c2 <= 0x0 ? '' : _0x43718e[_0x4f1714(0x23e)](_0x2485c2)
          , _0x26fbe3 = _0xebb523 + 0x1 + ':\x20'
          , _0x19cf65 = _0x26fbe3['padEnd'](0x2);
        _0x466cbb += '' + _0x19cf65 + _0x3f4a56 + '\x20(' + _0x397f28 + ')\x0a',
        _0x264c07 += _0x397f28;
    }
    ),
    _0x466cbb;
}
function fallbackShare(_0x14f976) {
    const _0x3a5489 = _0xdffc98
      , _0x1d6aa1 = document['createElement'](_0x3a5489(0x1f6));
    _0x1d6aa1['value'] = _0x14f976,
    document['body'][_0x3a5489(0x205)](_0x1d6aa1),
    _0x1d6aa1[_0x3a5489(0x23c)](),
    document[_0x3a5489(0x21d)]('copy'),
    document[_0x3a5489(0x1f8)][_0x3a5489(0x226)](_0x1d6aa1),
    alert(_0x3a5489(0x215));
}
