(function (_0x3f7b00, _0x447374) {
    const _0xe6aafd = _0x5aa9
        , _0xc6217b = _0x3f7b00();
    while (!![]) {
        try {
            const _0x3a194e = -parseInt(_0xe6aafd(0xd7)) / 0x1 + -parseInt(_0xe6aafd(0xf2)) / 0x2 * (parseInt(_0xe6aafd(0xfc)) / 0x3) + -parseInt(_0xe6aafd(0xdb)) / 0x4 * (parseInt(_0xe6aafd(0xf0)) / 0x5) + -parseInt(_0xe6aafd(0xca)) / 0x6 + parseInt(_0xe6aafd(0xe1)) / 0x7 * (-parseInt(_0xe6aafd(0xf3)) / 0x8) + parseInt(_0xe6aafd(0xfa)) / 0x9 + -parseInt(_0xe6aafd(0x104)) / 0xa * (-parseInt(_0xe6aafd(0xc7)) / 0xb);
            if (_0x3a194e === _0x447374)
                break;
            else
                _0xc6217b['push'](_0xc6217b['shift']());
        } catch (_0x4cd9f5) {
            _0xc6217b['push'](_0xc6217b['shift']());
        }
    }
}(_0x2cd2, 0xb4e2c));
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
function toggleMenu(_0x5baeb5) {
    const _0x3690e7 = _0x5aa9
        , _0x15dd33 = document['querySelector']('.' + _0x5baeb5 + _0x3690e7(0xc0))
        , _0x20913a = document[_0x3690e7(0xf7)]('.overlay')
        , _0x1c513e = document[_0x3690e7(0xe3)](_0x3690e7(0xd3));
    _0x1c513e[_0x3690e7(0xe9)](_0x48a211 => {
        const _0x259086 = _0x3690e7;
        _0x48a211 !== _0x15dd33 && _0x48a211[_0x259086(0x101)][_0x259086(0xbd)](_0x259086(0xe5));
    }
    ),
        _0x15dd33[_0x3690e7(0x101)]['toggle']('active'),
        _0x20913a[_0x3690e7(0x101)][_0x3690e7(0x10b)](_0x3690e7(0xe5));
}
function _0x2cd2() {
    const _0x181c6a = ['green', '136004VHbyYU', 'movesCounter', 'copy', '1354008NdlMeL', 'red', 'true', 'split', 'winCount', 'textContent', 'countdownTimer', 'repeat', 'maxStreak', '.sidebar', 'getElementById', 'mindCheckToggle', 'darkMode', '501052XLHlpU', 'lastPlayed', 'value', 'gridSizeDisplay', '160gjwtGX', 'endsWith', 'दिनाँक:\x20', 'threeModeToggle', 'appendChild', 'checked', '5956657eevXZk', 'from', 'querySelectorAll', 'grid-item', 'active', 'location', 'removeChild', 'playStreak', 'forEach', 'winModal', 'execCommand', 'false', 'padEnd', 'select', 'solveGrid', '15325akrbTk', 'playCount', '2gufxVd', '8DegLyx', 'search', 'dark-mode', 'floor', 'querySelector', 'शब्द:\x20चाल\x0a', '.overlay', '11951613gCjHmQ', 'getElementsByClassName', '2224134uFVwhs', 'textarea', 'Result\x20copied\x20to\x20clipboard!', 'q=4', 'resetKey', 'classList', 'length', 'display', '1500LLSSac', 'substring', 'add', 'setHours', 'selected2', 'padStart', 'darkModeToggle', 'toggle', 'remove', 'moveCount1', 'threeMode', '-sidebar', 'userGrid', 'moveCount2', 'body', 'style', 'share'];
    _0x2cd2 = function () {
        return _0x181c6a;
    }
        ;
    return _0x2cd2();
}
function closeAllMenus() {
    const _0x15254a = _0x5aa9
        , _0x34d380 = document['querySelectorAll'](_0x15254a(0xd3))
        , _0x1c4aa4 = document[_0x15254a(0xf7)](_0x15254a(0xf9));
    _0x34d380[_0x15254a(0xe9)](_0x1dea88 => {
        const _0x572fa6 = _0x15254a;
        _0x1dea88[_0x572fa6(0x101)]['remove'](_0x572fa6(0xe5));
    }
    ),
        _0x1c4aa4[_0x15254a(0x101)][_0x15254a(0xbd)](_0x15254a(0xe5));
}
function toggleDarkMode() {
    const _0x1906e7 = _0x5aa9;
    darkMode = document[_0x1906e7(0xd4)](_0x1906e7(0x10a))[_0x1906e7(0xe0)],
        document[_0x1906e7(0xc3)][_0x1906e7(0x101)]['toggle'](_0x1906e7(0xf5), darkMode),
        setValue(_0x1906e7(0xd6), darkMode);
}
function toggleThreeMode() {
    const _0x5d6d8e = _0x5aa9
        , _0x3a9fd7 = document[_0x5d6d8e(0xd4)](_0x5d6d8e(0xde))[_0x5d6d8e(0xe0)];
    setValue(_0x5d6d8e(0xbf), _0x3a9fd7),
        gridN = _0x3a9fd7 ? 0x3 : 0x4,
        updateStats(),
        initializePuzzle();
}
function toggleMindCheck() {
    const _0x5167b7 = _0x5aa9;
    mindCheckMode = document[_0x5167b7(0xd4)](_0x5167b7(0xd5))[_0x5167b7(0xe0)],
        Array[_0x5167b7(0xe2)](document[_0x5167b7(0xfb)](_0x5167b7(0xe4)))[_0x5167b7(0xe9)](function (_0x426e34) {
            const _0x46d631 = _0x5167b7;
            _0x426e34['classList'][_0x46d631(0xbd)]('selected'),
                _0x426e34[_0x46d631(0x101)]['remove'](_0x46d631(0x108));
        }),
        selectedItem = null;
}
window['onload'] = function () {

    let threeMode = getValue('threeMode', 'false') === 'true';

    gridN = threeMode ? 3 : 4;

    let lastPlayed = getValue('lastPlayed' + gridN, '');
    let forceDate = getValue('forceDate' + gridN, '')

    if (threeMode && lastPlayed == today && forceDate != today && today == '2025-01-19') {

        console.log("Resetting values");
        setValue('lastPlayed' + gridN, '2025-01-18');
        setValue('forceDate' + gridN, today);
        playCount = getValue('playCount' + gridN, 0);
        playCount--;
        setValue('playCount' + gridN, playCount);

    }

    initializeFromCookies();
}
    ;
function readGridParam() {
    const _0x26ec14 = _0x5aa9;
    let _0x21f039 = 0x0;
    try {
        const _0x16c2f6 = window[_0x26ec14(0xe6)][_0x26ec14(0xf4)][_0x26ec14(0xcd)]('&');
        _0x16c2f6[_0x26ec14(0xe9)](_0x41c3ff => {
            const _0x2e7af0 = _0x26ec14;
            if (_0x41c3ff[_0x2e7af0(0xdc)]('q=3'))
                _0x21f039 = 0x3;
            else
                _0x41c3ff[_0x2e7af0(0xdc)](_0x2e7af0(0xff)) && (_0x21f039 = 0x4);
        }
        );
    } catch (_0x2cdd2e) { }
    return _0x21f039;
}
function initializeFromCookies() {
    const _0x1bf307 = _0x5aa9;
    !(getValue('resetKey', '') == resetKey) && (resetAllData(),
        setValue(_0x1bf307(0x100), resetKey));
    darkMode = getValue(_0x1bf307(0xd6), 'false') === _0x1bf307(0xcc);
    let _0x31395c = getValue(_0x1bf307(0xbf), _0x1bf307(0xec)) === _0x1bf307(0xcc);
    const _0xcb71d6 = document['getElementById'](_0x1bf307(0x10a))
        , _0x5d46c5 = document['getElementById'](_0x1bf307(0xde));
    _0xcb71d6 && (_0xcb71d6[_0x1bf307(0xe0)] = darkMode);
    const _0x12be47 = readGridParam();
    _0x12be47 > 0x0 && (_0x31395c = _0x12be47 == 0x3 ? !![] : ![]),
        _0x5d46c5 && (_0x5d46c5[_0x1bf307(0xe0)] = _0x31395c),
        gridN = _0x31395c ? 0x3 : 0x4,
        updateStats(),
        darkMode ? document[_0x1bf307(0xc3)][_0x1bf307(0x101)][_0x1bf307(0x106)](_0x1bf307(0xf5)) : document['body']['classList'][_0x1bf307(0xbd)](_0x1bf307(0xf5)),
        initializePuzzle();
}
function updateStats() {
    const _0x39f865 = _0x5aa9
        , _0x362a8a = getValue('lastPlayed' + gridN, '');
    playCount = getValue(_0x39f865(0xf1) + gridN, 0x0),
        winCount = getValue('winCount' + gridN, 0x0),
        streakCount = getValue('streakCount' + gridN, 0x0),
        streakMax = getValue('streakMax' + gridN, 0x0),
        solveGrid = getValue(_0x39f865(0xef) + gridN, ''),
        document[_0x39f865(0xd4)](_0x39f865(0xf1))[_0x39f865(0xcf)] = playCount,
        winCount == 0x0 ? document['getElementById']('winCount')[_0x39f865(0xcf)] = '0%' : document['getElementById'](_0x39f865(0xce))['textContent'] = Math['round'](winCount * 0x64 / playCount) + '%',
        document[_0x39f865(0xd4)](_0x39f865(0xe8))[_0x39f865(0xcf)] = streakCount,
        document['getElementById'](_0x39f865(0xd2))[_0x39f865(0xcf)] = streakMax,
        (_0x362a8a != today || today == '') && (playCount++,
            setValue(_0x39f865(0xd8) + gridN, today),
            setValue(_0x39f865(0xf1) + gridN, playCount),
            setValue(_0x39f865(0xc1) + gridN, ''),
            setValue('solveGrid' + gridN, ''),
            setValue(_0x39f865(0xc8) + gridN, 0x0),
            solveGrid = '',
            gridSequence = [],
            idxSequence = [],
            solveSequence = [],
            swapMove = ![]);
}
function showWinModal() {
    const _0x360a86 = _0x5aa9
        , _0x50af2 = document[_0x360a86(0xd4)]('winModal');
    document[_0x360a86(0xd4)](_0x360a86(0xbe))[_0x360a86(0xcf)] = movesCounter,
        document[_0x360a86(0xd4)](_0x360a86(0xda))[_0x360a86(0xcf)] = gridN + 'x' + gridN,
        document[_0x360a86(0xd4)](_0x360a86(0xc2))[_0x360a86(0xcf)] = movesCounter,
        _0x50af2[_0x360a86(0xc4)][_0x360a86(0x103)] = 'block',
        updateCountdown(),
        setInterval(updateCountdown, 0x3e8);
}
function _0x5aa9(_0xd6bddb, _0x564979) {
    const _0x2cd2ac = _0x2cd2();
    return _0x5aa9 = function (_0x5aa944, _0xe9b7a3) {
        _0x5aa944 = _0x5aa944 - 0xbd;
        let _0x5bc6e1 = _0x2cd2ac[_0x5aa944];
        return _0x5bc6e1;
    }
        ,
        _0x5aa9(_0xd6bddb, _0x564979);
}
function closeWinModal() {
    const _0x489646 = _0x5aa9;
    document[_0x489646(0xd4)](_0x489646(0xea))['style'][_0x489646(0x103)] = 'none';
}
function updateCountdown() {
    const _0x3d1179 = _0x5aa9
        , _0x18056f = new Date()
        , _0x24e9d6 = new Date();
    _0x24e9d6[_0x3d1179(0x107)](0x18, 0x0, 0x0, 0x0);
    const _0x4c3aa1 = _0x24e9d6 - _0x18056f
        , _0x42886b = Math[_0x3d1179(0xf6)](_0x4c3aa1 / (0x3e8 * 0x3c * 0x3c))
        , _0x540982 = Math['floor'](_0x4c3aa1 % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c))
        , _0x1fa63a = Math[_0x3d1179(0xf6)](_0x4c3aa1 % (0x3e8 * 0x3c) / 0x3e8)
        , _0x586012 = String(_0x42886b)[_0x3d1179(0x109)](0x2, '0') + ':' + String(_0x540982)[_0x3d1179(0x109)](0x2, '0') + ':' + String(_0x1fa63a)[_0x3d1179(0x109)](0x2, '0');
    document[_0x3d1179(0xd4)](_0x3d1179(0xd0))[_0x3d1179(0xcf)] = _0x586012;
}
async function shareResult() {
    const _0x2ca6cf = _0x5aa9
        , _0x383349 = new Date()['toString']()[_0x2ca6cf(0x105)](0x4, 0xf);
    let _0x3b0bcf = '🧩\x20हिन्दी\x20शब्द\x20रचना\x20' + gridN + 'x' + gridN + '\x0a\x0a' + (_0x2ca6cf(0xdd) + _0x383349 + '\x0a') + ('कुल\x20चालें:\x20' + movesCounter + '\x0a\x0a');
    const _0x32212b = createBarChart(![]);
    _0x3b0bcf += _0x32212b,
        _0x3b0bcf += '\x0aआप\x20भी\x20खेल\x20कर\x20देखें!\x20🎮\x0a' + ('bit.ly/hindi' + gridN + 'x' + gridN);
    if (navigator[_0x2ca6cf(0xc5)])
        try {
            await navigator[_0x2ca6cf(0xc5)]({
                'title': 'Hindi\x20Matrix\x20Puzzle',
                'text': _0x3b0bcf
            });
        } catch (_0x2311be) {
            fallbackShare(_0x3b0bcf);
        }
    else
        fallbackShare(_0x3b0bcf);
}
function createBarChart(_0x49eecf = !![]) {
    const _0x383af5 = _0x5aa9;
    let _0x1f9dcb = 0x0
        , _0x113a4b = movesCounter > 0x0 ? _0x383af5(0xf8) : '';
    const _0xd0bfc1 = solveSequence['slice'](Math['max'](solveSequence[_0x383af5(0x102)] - gridN, 0x0));
    return _0xd0bfc1[_0x383af5(0xe9)]((_0x5f3348, _0x5cea98) => {
        const _0x4a2364 = _0x383af5
            , _0x35ec5b = 0xa
            , _0x581b5c = Number(_0x5f3348) - _0x1f9dcb
            , _0x4e6042 = _0x581b5c > _0x35ec5b ? _0x35ec5b : _0x581b5c;
        let _0x55a953 = '';
        if (_0x581b5c >= _0x35ec5b)
            _0x55a953 = boxes[_0x4a2364(0xcb)];
        else
            _0x581b5c > (gridN == 0x3 ? 0x3 : 0x5) ? _0x55a953 = boxes['yellow'] : _0x55a953 = boxes[_0x4a2364(0xc6)];
        const _0x31ae84 = _0x4e6042 <= 0x0 ? '' : _0x55a953[_0x4a2364(0xd1)](_0x4e6042)
            , _0x4e4064 = _0x5cea98 + 0x1 + ':\x20'
            , _0x551021 = _0x4e4064[_0x4a2364(0xed)](0x2);
        _0x113a4b += '' + _0x551021 + _0x31ae84,
            _0x581b5c > 0xa ? _0x113a4b += '\x20(' + _0x581b5c + ')\x0a' : _0x113a4b += '\x0a',
            _0x1f9dcb += _0x581b5c;
    }
    ),
        _0x113a4b;
}
function fallbackShare(_0x4a9885) {
    const _0xb3c863 = _0x5aa9
        , _0x379c5e = document['createElement'](_0xb3c863(0xfd));
    _0x379c5e[_0xb3c863(0xd9)] = _0x4a9885,
        document[_0xb3c863(0xc3)][_0xb3c863(0xdf)](_0x379c5e),
        _0x379c5e[_0xb3c863(0xee)](),
        document[_0xb3c863(0xeb)](_0xb3c863(0xc9)),
        document[_0xb3c863(0xc3)][_0xb3c863(0xe7)](_0x379c5e),
        alert(_0xb3c863(0xfe));
}
