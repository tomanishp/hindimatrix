let startDate = '2025-01-08';
const wordCounter = ['पहला', 'दूसरा', 'तीसरा', 'चौथा'];

function _0x22f1() { const _0x40d5fc = ['20ShPGbG', '740ZlRIdn', 'round', 'replaceAll', 'abs', '13909608GiYKhT', '4756578bANuAC', 'setHours', '5879048GituiH', '16188lmvixa', '44470860wNnBTK', 'reduce', '356MNUlAJ', '1302035bxExZu', '7RLBZxm', 'split']; _0x22f1 = function () { return _0x40d5fc; }; return _0x22f1(); } (function (_0x5035ec, _0x342b8f) { const _0x109ee7 = _0x600d, _0x2d605c = _0x5035ec(); while (!![]) { try { const _0x32dcfd = parseInt(_0x109ee7(0xef)) / 0x1 + parseInt(_0x109ee7(0xee)) / 0x2 * (parseInt(_0x109ee7(0xeb)) / 0x3) + parseInt(_0x109ee7(0xf3)) / 0x4 * (-parseInt(_0x109ee7(0xf2)) / 0x5) + -parseInt(_0x109ee7(0xe8)) / 0x6 * (-parseInt(_0x109ee7(0xf0)) / 0x7) + parseInt(_0x109ee7(0xea)) / 0x8 + parseInt(_0x109ee7(0xf7)) / 0x9 + -parseInt(_0x109ee7(0xec)) / 0xa; if (_0x32dcfd === _0x342b8f) break; else _0x2d605c['push'](_0x2d605c['shift']()); } catch (_0x56200a) { _0x2d605c['push'](_0x2d605c['shift']()); } } }(_0x22f1, 0xd8c2d)); function getIndex(_0x42ac82) { const _0x19291f = _0x600d, _0x7989bf = new Date(_0x42ac82), _0x30b2c8 = new Date()[_0x19291f(0xe9)](0x0, 0x0, 0x0); let _0x52c231 = Math[_0x19291f(0xf6)](Math[_0x19291f(0xf4)]((_0x30b2c8 - _0x7989bf) / 0x5265c00)); return _0x52c231; } function getWordOfTheDay(_0x581e24 = 0x3) { let _0x4fa9b0 = getIndex(startDate); const _0x2c71e2 = _0x581e24 > 0x3 ? [...wordList44] : [...wordList33]; return _0x2c71e2[_0x4fa9b0]; } function _0x600d(_0x5d4498, _0x4c0627) { const _0x22f1a4 = _0x22f1(); return _0x600d = function (_0x600d8d, _0x14f495) { _0x600d8d = _0x600d8d - 0xe8; let _0x1e4e43 = _0x22f1a4[_0x600d8d]; return _0x1e4e43; }, _0x600d(_0x5d4498, _0x4c0627); } function getGridSequence(_0x1fbddd = 0x3) { const _0x3f9df9 = _0x600d; let _0x373b1e = today[_0x3f9df9(0xf5)]('-', '')[_0x3f9df9(0xf1)]('')[_0x3f9df9(0xed)]((_0x206f4c, _0x1eb02d) => { return Number(_0x206f4c) + Number(_0x1eb02d); }, 0x0); const _0x336c2b = new Date()['getDay'](); _0x373b1e = _0x373b1e - 0x9 + _0x336c2b; const _0x3b6e0d = _0x1fbddd > 0x3 ? [...wordIndex44] : [...wordIndex33]; return _0x3b6e0d[_0x373b1e]; }

wordIndex33 = [
    [3, 6, 7, 1, 8, 0, 2, 4, 5], [1, 8, 7, 4, 5, 2, 0, 6, 3], [5, 1, 4, 6, 0, 7, 3, 2, 8], [0, 7, 6, 5, 2, 4, 1, 3, 8], [0, 4, 3, 2, 6, 5, 8, 1, 7], [4, 6, 8, 4, 1, 5, 7, 2, 3],
    [0, 8, 2, 3, 5, 7, 1, 6, 4], [0, 7, 3, 1, 4, 8, 5, 6, 2], [0, 4, 2, 7, 3, 5, 6, 8, 1], [6, 8, 5, 1, 0, 7, 2, 4, 3], [8, 4, 1, 0, 5, 6, 3, 2, 7], [7, 8, 4, 5, 2, 0, 1, 6, 3],
    [2, 5, 8, 1, 7, 3, 0, 6, 4], [3, 5, 6, 1, 0, 8, 7, 4, 2], [1, 4, 0, 5, 3, 8, 6, 2, 7], [0, 1, 8, 7, 6, 2, 5, 4, 3], [5, 1, 6, 4, 7, 0, 2, 3, 8], [3, 1, 2, 0, 6, 8, 5, 4, 7],
    [4, 3, 1, 5, 0, 6, 2, 8, 7], [8, 7, 3, 1, 0, 6, 4, 5, 2], [7, 5, 2, 1, 0, 6, 3, 8, 4], [3, 8, 5, 2, 1, 0, 6, 4, 7], [0, 3, 8, 4, 7, 1, 2, 6, 5], [5, 3, 0, 4, 7, 6, 8, 2, 1],
    [8, 3, 0, 6, 7, 2, 1, 5, 4], [1, 6, 2, 8, 7, 5, 0, 3, 4], [0, 7, 1, 3, 2, 5, 6, 4, 8], [5, 6, 0, 3, 4, 1, 2, 8, 7], [2, 5, 7, 0, 1, 4, 6, 8, 3], [8, 6, 1, 0, 3, 2, 5, 4, 7],
    [7, 1, 2, 5, 4, 0, 3, 8, 6], [0, 8, 4, 2, 5, 7, 3, 6, 1], [6, 5, 0, 7, 3, 1, 2, 4, 8], [6, 3, 0, 8, 7, 1, 5, 4, 2], [6, 2, 8, 0, 4, 5, 1, 3, 7], [2, 4, 0, 1, 3, 8, 5, 7, 6]
];

wordIndex44 = [
    [9, 0, 7, 6, 10, 13, 3, 1, 5, 8, 14, 15, 2, 12, 4, 11], [0, 15, 6, 10, 7, 3, 4, 1, 13, 12, 8, 11, 14, 2, 9, 5], [2, 13, 6, 9, 7, 0, 5, 4, 15, 12, 3, 11, 8, 1, 14, 10],
    [7, 10, 5, 3, 6, 13, 1, 15, 14, 9, 2, 11, 7, 0, 4, 12], [4, 8, 12, 14, 11, 0, 3, 1, 15, 10, 7, 5, 2, 9, 6, 13], [9, 1, 12, 2, 14, 11, 3, 5, 10, 13, 0, 4, 15, 6, 8, 7],
    [0, 1, 13, 2, 11, 8, 15, 14, 5, 12, 6, 4, 7, 9, 3, 10], [3, 1, 11, 15, 0, 6, 2, 13, 4, 5, 9, 7, 8, 14, 10, 12], [15, 10, 0, 11, 1, 4, 8, 7, 2, 13, 9, 12, 6, 3, 14, 5],
    [2, 4, 15, 5, 8, 0, 10, 3, 14, 13, 12, 9, 11, 6, 1, 7], [11, 9, 4, 10, 8, 14, 6, 7, 0, 15, 13, 2, 5, 3, 1, 12], [9, 6, 14, 12, 4, 15, 1, 5, 0, 11, 8, 2, 7, 3, 13, 10],
    [0, 14, 6, 4, 5, 8, 1, 11, 7, 12, 15, 2, 3, 9, 13, 10], [12, 4, 15, 0, 7, 5, 13, 9, 6, 10, 11, 3, 8, 2, 14, 1], [0, 4, 5, 6, 8, 12, 14, 1, 15, 13, 9, 7, 11, 10, 3, 2],
    [13, 0, 2, 12, 4, 10, 9, 3, 7, 15, 1, 14, 6, 11, 8, 5], [0, 4, 6, 2, 15, 14, 9, 8, 5, 11, 7, 3, 12, 1, 13, 10], [13, 4, 14, 12, 8, 0, 1, 15, 11, 7, 10, 6, 5, 2, 3, 9],
    [8, 15, 0, 11, 10, 5, 13, 9, 6, 1, 7, 2, 12, 3, 4, 14], [1, 11, 6, 2, 15, 13, 0, 10, 12, 7, 3, 14, 4, 5, 8, 9], [0, 4, 6, 5, 8, 7, 14, 12, 10, 2, 1, 11, 9, 15, 3, 13],
    [9, 3, 8, 5, 0, 1, 4, 11, 7, 12, 15, 14, 13, 2, 10, 6], [0, 15, 6, 11, 2, 12, 3, 5, 14, 13, 7, 10, 9, 4, 8, 1], [4, 2, 15, 10, 11, 5, 1, 4, 12, 8, 9, 7, 3, 6, 13, 10],
    [9, 15, 12, 14, 0, 10, 3, 5, 13, 1, 4, 2, 8, 11, 6, 7], [9, 4, 1, 0, 14, 8, 11, 13, 3, 5, 7, 12, 2, 6, 10, 15], [0, 14, 11, 1, 8, 10, 3, 5, 13, 15, 6, 2, 7, 4, 12, 9],
    [11, 1, 5, 12, 10, 7, 0, 13, 9, 4, 6, 3, 2, 8, 14, 15], [0, 14, 4, 13, 1, 8, 5, 15, 9, 10, 3, 11, 6, 12, 7, 2], [7, 10, 9, 14, 15, 0, 1, 12, 4, 8, 3, 5, 11, 13, 6, 2],
    [13, 8, 2, 4, 7, 0, 1, 14, 15, 3, 5, 11, 9, 10, 12, 6], [15, 12, 4, 7, 0, 1, 2, 5, 3, 13, 10, 9, 14, 6, 11, 8], [8, 5, 14, 1, 0, 13, 9, 12, 3, 15, 4, 11, 10, 7, 6, 2],
    [0, 3, 15, 13, 1, 4, 2, 14, 7, 8, 6, 11, 9, 10, 5, 12], [0, 2, 3, 1, 14, 15, 12, 7, 5, 11, 4, 9, 6, 13, 8, 10], [0, 4, 2, 5, 15, 10, 6, 7, 9, 1, 11, 8, 3, 12, 13, 14]
];

wordList33 = [
    ["अ", "स्व", "स्थ", "गु", "ल्ल", "क", "चौ", "प", "ड़"],
    ["नी", "च", "ता", "दी", "वा", "न", "भ", "र", "म"],
    ["ज", "वा", "ब", "नि", "ष्ठु", "र", "दि", "ला", "सा"],
    ["सं", "स्कृ", "त", "जु", "रा", "ब", "उ", "प", "ले"],
    ["चौ", "प", "ड़", "दा", "म", "न", "ज", "ग", "त"],
    ["प", "रं", "तु", "पि", "टा", "ई", "बे", "हा", "ल"],
    ["प", "क", "ड़ी", "सुं", "द", "र", "कि", "ना", "रा"],
    ["रो", "क", "ना", "नि", "र्ब", "ल", "उ", "बा", "ल"],
    ["म", "नी", "ष", "उ", "ल", "झ", "दी", "वा", "ली"],
    ["आ", "ति", "थ्य", "कु", "दा", "ल", "भा", "व", "ना"],
    ["उ", "ध", "र", "दा", "य", "रा", "दु", "वि", "धा"],
    ["प्र", "त्ये", "क", "भा", "र", "त", "अ", "व्व", "ल"],
    ["दू", "भ", "र", "स", "वा", "ली", "बो", "त", "ल"],
    ["पं", "च", "म", "पं", "ग", "त", "वि", "वा", "द"],
    ["सो", "ह", "न", "वि", "लो", "म", "प्र", "भा", "व"],
    ["प्र", "त्या", "शी", "म", "हि", "ना", "आ", "द", "म"],
    ["क", "मा", "ल", "प्रा", "ची", "न", "म", "ध्य", "म"],
    ["आ", "ह", "ट", "उ", "ब", "ला", "जा", "मु", "न"],
    ["है", "वा", "न", "अं", "द", "र", "जु", "ला", "ई"],
    ["नि", "यु", "क्त", "सं", "वि", "दा", "नि", "च", "ली"],
    ["त", "त्प", "र", "लं", "ग", "ड़ी", "कि", "वा", "ड़"],
    ["पा", "र्श्वि", "क", "प्र", "स्ता", "व", "पि", "घ", "ला"],
    ["स", "मा", "प्त", "बा", "लि", "ग", "क", "म", "ला"],
    ["कु", "ली", "न", "वा", "क", "या", "आ", "श", "य"],
    ["स", "वा", "ल", "ल", "प", "का", "न", "र्त", "क"],
    ["जा", "म", "न", "झो", "प", "ड़ी", "ले", "कि", "न"],
    ["ज", "ल", "ज", "मि", "ठा", "ई", "कु", "रे", "द"],
    ["क", "म", "ल", "जू", "ति", "याँ", "वि", "शा", "ल"],
    ["प्र", "शं", "सा", "स", "चि", "व", "त", "मा", "चा"],
    ["मा", "ल", "वी", "नि", "य", "म", "मा", "र", "क"],
    ["प्रा", "ची", "र", "स", "म्मा", "न", "ब", "ग", "ल"],
    ["म", "जा", "क", "म", "वा", "ली", "ज", "ड़", "ता"],
    ["प्र", "ख", "र", "प्र", "दे", "श", "शा", "मि", "ल"],
    ["पु", "ला", "व", "प्र", "सि", "द्ध", "वि", "स्म", "य"],
    ["वा", "स", "ना", "अ", "ति", "थि", "ती", "स", "रा"],
    ["प", "ल", "क", "नि", "ष्क", "र्ष", "सं", "ग्र", "ह"],
    ["स", "म", "झा", "म", "धु", "र", "नि", "वृ", "त्ति"],
    ["ल", "गा", "न", "दा", "य", "रे", "मु", "श्कि", "ल"],
    ["स", "रो", "ज", "पु", "रू", "ष", "ल", "ड़ा", "ई"],
    ["सु", "बो", "ध", "प्र", "का", "श", "दु", "ब", "का"],
    ["हि", "र", "न", "चु", "रा", "ई", "ल", "गा", "ना"],
    ["है", "रा", "न", "गु", "बा", "र", "वि", "ध", "वा"],
    ["अ", "प", "र्णा", "ख", "रा", "ब", "अ", "च", "ल"],
    ["नि", "बा", "ह", "र", "ग", "ड़", "उ", "द्ग", "म"],
    ["अ", "क", "ड़", "सु", "ले", "ख", "सु", "नि", "ए"],
    ["फु", "र्स", "त", "कु", "ख्या", "त", "द", "बा", "या"],
    ["स", "म", "य", "भा", "वु", "क", "ह", "र्ष", "क"],
    ["वि", "धा", "ता", "खु", "ला", "सा", "मौ", "स", "म"],
    ["रो", "हि", "त", "स", "ला", "ह", "पि", "सा", "ई"],
    ["मि", "थु", "न", "न", "र", "म", "चु", "नौ", "ती"],
    ["ल", "प", "की", "सु", "यो", "ग", "खो", "ख", "ला"],
    ["खो", "प", "रा", "फि", "रौ", "ती", "नि", "क", "लो"],
    ["जु", "दा", "ई", "ब", "गी", "चा", "रो", "जा", "ना"],
    ["स", "द", "र", "के", "व", "ड़ा", "ल", "ड़", "का"],
    ["का", "र", "ण", "क", "ल्या", "ण", "ध", "नु", "ष"],
    ["स", "मा", "न", "वि", "नी", "त", "फँ", "सा", "या"],
    ["ग", "ब", "न", "का", "ज", "ल", "र", "सी", "द"],
    ["सु", "चि", "ता", "म", "स", "ला", "कू", "ब", "ड़"],
    ["न", "रे", "न्द्र", "प", "सं", "द", "पा", "ल", "क"],
    ["जु", "ला", "ब", "पा", "र", "द", "ख", "ड़ा", "ऊ"],
    ["दु", "बा", "रा", "छ", "ला", "वा", "चौ", "ध", "री"],
    ["भ", "र", "ण", "अ", "ध", "र", "वि", "द्वा", "न"],
    ["जी", "व", "न", "प", "तं", "गा", "ता", "री", "ख"],
    ["नि", "र्भ", "र", "न", "म", "क", "उ", "ज", "ली"],
    ["सो", "ल", "ह", "अं", "ति", "म", "ब", "ता", "ना"],
    ["आ", "का", "श", "सं", "ता", "न", "फौ", "र", "न"],
    ["मा", "सि", "क", "दु", "का", "न", "वि", "द्रो", "ही"],
    ["अ", "म्बि", "का", "का", "र", "क", "नि", "क", "ल"],
    ["अ", "ध्य", "क्ष", "भा", "र", "ती", "पि", "घ", "ल"],
    ["वि", "न", "य", "म", "क", "ड़ी", "प्र", "चं", "ड"],
    ["प्र", "हा", "र", "सु", "ना", "ई", "लु", "ढ़", "क"],
    ["मो", "ह", "क", "स", "न", "म", "पा", "ग", "ल"],
    ["गा", "ज", "र", "पि", "छ", "ली", "दी", "प", "क"],
    ["रो", "पि", "त", "सु", "जा", "न", "वा", "प", "स"],
    ["क", "रो", "ड़ों", "व", "ह", "म", "र", "ग", "ड़ी"],
    ["इ", "ध", "र", "वि", "हा", "र", "नि", "र्भ", "य"],
    ["द", "स्ता", "ने", "आ", "ग", "त", "प", "चा", "ना"],
    ["प", "ट", "क", "प", "हा", "ड़", "आ", "द", "मी"],
    ["लु", "टि", "या", "सं", "ग", "म", "कु", "म्हा", "र"],
    ["ब", "थु", "आ", "पौ", "रु", "ष", "ब", "ह", "स"],
    ["प्र", "स", "व", "प्र", "चा", "र", "गु", "हा", "र"],
    ["पु", "रा", "ना", "वि", "द्रो", "ह", "च", "ल", "ना"],
    ["बा", "दा", "म", "वि", "चा", "र", "धा", "र्मि", "क"],
    ["मं", "जि", "ल", "स", "ला", "म", "सु", "वि", "धा"],
    ["बो", "रि", "या", "दा", "व", "त", "प", "ग", "ली"],
    ["प", "रि", "धि", "वि", "भ", "क्ति", "सा", "ल", "न"],
    ["बा", "रि", "स", "मो", "हि", "त", "ह", "र्ष", "द"],
    ["न", "क", "ल", "स", "रि", "ता", "प्र", "कृ", "ति"],
    ["पी", "ड़ि", "त", "दु", "हा", "ई", "मं", "ग", "ल"],
    ["सी", "ल", "न", "ता", "री", "फ", "म", "ग", "र"],
    ["स", "र", "क", "दु", "ला", "र", "द", "लि", "त"],
    ["वि", "धा", "न", "दि", "नां", "क", "ल", "ड़", "की"],
    ["ख", "न", "न", "क", "पू", "त", "दि", "ले", "र"],
    ["का", "फि", "र", "नि", "ष्प", "क्ष", "क", "हा", "नी"],
    ["आ", "प", "सी", "स", "ला", "द", "ग", "र्ज", "ना"],
    ["अ", "ल", "ग", "मि", "ल", "ना", "द", "हा", "ड़"],
    ["ओ", "झ", "ल", "स", "प्ता", "ह", "च", "ल", "ता"],
    ["क", "त", "ई", "वि", "षा", "द", "उ", "जा", "ला"],
    ["सी", "ख", "ना", "क", "ह", "ना", "अ", "ध", "म"],
    ["रू", "प", "क", "प", "स", "ली", "ज", "ना", "ब"],
    ["दु", "नि", "या", "बा", "व", "न", "चौ", "हा", "न"],
    ["मु", "स्लि", "म", "ग", "ह", "ना", "भ", "वा", "नी"],
    ["ग", "र्द", "न", "जु", "गा", "ड़", "सा", "र", "थी"],
    ["क", "मा", "ई", "शा", "य", "र", "खु", "मा", "र"],
    ["औ", "र", "त", "पि", "शा", "च", "ख", "ट", "क"],
    ["शा", "य", "द", "दू", "स", "रा", "अ", "का", "ली"],
    ["सु", "ल", "ग", "मा", "धु", "री", "मि", "त्र", "ता"],
    ["सं", "ग", "ति", "नि", "वृ", "त्त", "म", "छ", "ली"],
    ["वि", "ग्र", "ह", "त", "ग", "ड़ी", "ख", "रों", "च"],
    ["कु", "सु", "म", "ला", "ल", "च", "ल", "गा", "व"],
    ["क", "पा", "ट", "ब", "लि", "ष्ठ", "जे", "व", "र"],
    ["लु", "टे", "रे", "अ", "का", "ल", "चि", "ड़ि", "या"],
    ["वि", "जि", "त", "भ", "र", "ते", "यौ", "व", "न"],
    ["द", "ड़", "बा", "च", "ल", "न", "रा", "जी", "व"],
    ["प", "रा", "ग", "प्र", "का", "र", "बे", "ग", "म"],
    ["जु", "म", "ले", "सा", "बि", "त", "दि", "ला", "ता"],
    ["गु", "रे", "ज", "वि", "ला", "प", "चं", "द", "न"],
    ["वि", "भा", "ग", "श", "र्मि", "ला", "नि", "र्बा", "ध"],
    ["अ", "म्ब", "र", "वि", "दे", "शी", "वि", "दु", "र"],
    ["जु", "म", "ला", "जु", "ग", "नू", "सु", "म", "न"],
    ["ज", "ले", "बी", "उ", "ता", "र", "अ", "ज", "य"],
    ["मा", "ध", "वी", "क", "रा", "ह", "चा", "द", "र"],
    ["प्र", "सं", "ग", "वि", "ली", "न", "व", "ज", "ह"],
    ["अं", "त", "र", "उ", "ब", "र", "वि", "स्तृ", "त"],
    ["जी", "वा", "श्म", "अ", "स्व", "स्थ", "क", "सा", "व"],
    ["प्र", "या", "स", "गं", "द", "ली", "स", "पू", "त"],
    ["स", "म", "झ", "खि", "ला", "ड़ी", "वि", "भू", "ति"],
    ["भ", "र", "ना", "रू", "हा", "नी", "म", "स", "ल"],
    ["सं", "ग", "त", "लं", "ग", "ड़ा", "वि", "स्मि", "त"],
    ["खो", "प", "ड़ी", "रु", "दा", "ली", "दु", "ब", "ली"],
    ["वी", "रा", "न", "प", "रो", "क्ष", "भू", "मि", "का"],
    ["छो", "क", "री", "अ", "म", "ल", "वी", "रा", "ना"],
    ["ला", "ल", "सा", "अ", "प", "च", "प", "ठा", "र"],
    ["स", "र्व", "त्र", "वि", "वे", "क", "ध", "व", "ल"],
    ["सं", "ज्ञा", "न", "स", "हि", "त", "ब्रा", "ह्म", "ण"],
    ["कु", "मा", "री", "वि", "स्ता", "र", "क", "न", "खी"],
    ["प", "का", "ना", "प", "र", "त", "सा", "व", "न"],
    ["आ", "र", "ती", "छ", "त", "री", "फा", "य", "दा"],
    ["छु", "पा", "ते", "पो", "षि", "त", "प", "र्व", "त"],
    ["शो", "र", "बा", "पि", "टा", "रा", "फा", "ल", "तू"],
    ["म", "स", "ली", "को", "य", "ल", "सु", "दू", "र"],
    ["नि", "रा", "ला", "प्र", "मा", "द", "ऊ", "प", "र"],
    ["ब", "द", "ल", "प", "रा", "या", "चा", "व", "ल"],
    ["दि", "ला", "ई", "द", "वा", "त", "म", "स्त", "क"],
    ["दो", "ग", "ले", "क", "व", "च", "चं", "प", "क"],
    ["पु", "रा", "नी", "वि", "ज", "य", "नि", "र्ण", "य"],
    ["दू", "स", "रे", "घो", "षि", "त", "प्र", "सि", "द्धि"],
    ["गं", "द", "गी", "क", "पा", "ल", "गि", "र", "ना"],
    ["कं", "गा", "ल", "कि", "ता", "ब", "न", "र्त", "की"],
    ["फौ", "ला", "दी", "श", "र्मी", "ली", "जी", "व", "ट"],
    ["मि", "ला", "ने", "व", "सू", "ल", "बे", "गा", "ना"],
    ["ज", "हा", "ज", "वि", "का", "स", "बो", "ल", "ना"],
    ["आ", "रो", "प", "सु", "श्रु", "त", "वै", "रा", "ग्य"],
    ["उ", "प", "ज", "फौ", "ला", "द", "स्फ", "टि", "क"],
    ["खि", "ला", "ना", "बा", "लि", "का", "ग", "वा", "रा"],
    ["प", "तं", "ग", "के", "व", "ल", "घा", "घ", "रा"],
    ["दो", "ग", "ला", "प", "शु", "त्व", "लँ", "ग", "ड़े"],
    ["मि", "ला", "प", "सा", "ह", "स", "अ", "ग", "म"],
    ["प", "ड़ो", "सी", "क", "र्म", "ठ", "न", "व", "ल"],
    ["म", "हँ", "गी", "प", "पी", "ता", "उ", "द", "र"],
    ["गु", "ल्ल", "क", "स", "ह", "म", "सं", "च", "य"],
    ["प", "ह", "ला", "रि", "वा", "ज", "आँ", "ग", "न"],
    ["रा", "क्ष", "स", "प्र", "यो", "ग", "उ", "थ", "ल"],
    ["भ", "ज", "न", "सु", "चा", "रु", "पा", "र", "सी"],
    ["रो", "क", "ड़ा", "ते", "व", "र", "नि", "र्मा", "ण"],
    ["स", "र", "स", "ब", "र्बा", "दी", "अ", "ट", "ल"],
    ["क", "स", "म", "अ", "ग", "र", "न", "क", "ली"],
    ["पु", "ड़ि", "या", "प्र", "मु", "ख", "प", "सी", "ना"],
    ["क", "ल", "म", "हु", "न", "र", "नि", "यु", "क्ति"],
    ["सा", "ग", "र", "चु", "रा", "या", "खो", "ज", "ना"],
    ["बी", "मा", "र", "दु", "ब", "के", "प", "ड़ो", "स"],
    ["प्र", "ति", "भा", "तो", "ड़", "ना", "मा", "ध्य", "म"],
    ["दु", "ब", "ला", "ब", "गै", "र", "वि", "मा", "न"],
    ["पि", "छ", "ले", "घो", "ष", "णा", "बा", "द", "ल"],
    ["ल", "ग", "न", "नि", "र्भ", "या", "नौ", "क", "री"],
    ["वि", "ज्ञा", "न", "भ", "व", "न", "उ", "न्मु", "क्त"],
    ["लु", "टे", "रा", "छो", "ड़", "ना", "अ", "जे", "य"],
    ["कि", "सा", "न", "हा", "सि", "ल", "इ", "त", "र"],
    ["क", "ड़", "वा", "द", "र्श", "क", "प", "टा", "ई"],
    ["हि", "र", "नी", "पी", "त", "ल", "त", "ग", "ड़ा"],
    ["को", "म", "ल", "प्र", "ति", "मा", "ब", "चा", "ना"],
    ["प्र", "मो", "द", "पा", "षा", "ण", "मि", "ल", "न"],
    ["रा", "ह", "त", "व", "र्च", "स्व", "अ", "जी", "त"],
    ["वि", "स्फो", "ट", "ब", "चा", "व", "गि", "र", "नी"],
    ["कु", "रा", "न", "सु", "ना", "र", "दौ", "ल", "त"],
    ["मि", "ल", "ते", "छ", "ल", "क", "वै", "दि", "क"],
    ["जी", "वं", "त", "सां", "स", "द", "से", "ह", "त"],
    ["प", "र", "ख", "छ", "ल", "की", "स", "म्भ", "व"],
    ["वि", "म", "ल", "शो", "भि", "त", "नि", "का", "ला"],
    ["रू", "क", "ना", "पु", "का", "रा", "उ", "ल", "ट"],
    ["अ", "प्रै", "ल", "आ", "मो", "द", "मो", "ह", "ना"],
    ["मि", "ला", "नी", "वि", "रा", "ट", "र", "ज", "त"],
    ["ह", "र्षि", "त", "पि", "सा", "ना", "को", "ह", "रा"],
    ["ह", "व", "न", "उ", "त", "र", "पै", "द", "ल"],
    ["ओ", "ख", "ली", "फा", "स", "ला", "सु", "गं", "ध"],
    ["का", "नू", "न", "ग", "ह", "ने", "स", "ड़", "क"],
    ["वि", "श्वा", "स", "ऐ", "न", "क", "उ", "च", "ट"],
    ["दु", "ख", "ड़ा", "वि", "म", "र्श", "शो", "ष", "क"],
    ["ल", "प", "क", "प्र", "दी", "प", "क", "हि", "ए"],
    ["गु", "ला", "म", "स", "न", "द", "रु", "त", "बा"],
    ["ब", "हु", "त", "पो", "ष", "क", "वे", "द", "ना"],
    ["कं", "ग", "न", "गु", "रू", "र", "क", "ल", "मा"],
    ["क", "रो", "ड़", "भ्र", "म", "ण", "जी", "वा", "त्मा"],
    ["स", "र", "सों", "वे", "दां", "त", "दु", "ब", "की"],
    ["उ", "द्धा", "र", "अ", "भ", "य", "आ", "जा", "द"],
    ["स", "र्व", "ज्ञ", "अ", "नो", "खे", "वि", "ज", "या"],
    ["वा", "प", "सी", "गु", "ला", "बी", "सा", "म", "ग्री"],
    ["दे", "खि", "ए", "बे", "ह", "द", "नि", "क", "ला"],
    ["स", "ह", "ज", "व", "ज", "न", "खो", "ल", "ना"],
    ["ध", "नि", "या", "खि", "ल", "ते", "प", "रो", "स"],
    ["स", "ज", "ग", "च", "टा", "ई", "दु", "धा", "री"],
    ["ल", "गा", "म", "ग", "म", "ले", "प", "ग", "ड़ी"],
    ["वि", "द्यु", "त", "क", "स", "क", "आ", "रो", "ही"],
    ["प्र", "स्था", "न", "य", "मु", "ना", "स", "ज्ज", "न"],
    ["रो", "प", "ण", "श", "ग", "ल", "स", "रो", "द"],
    ["शा", "गि", "र्द", "छ", "लां", "ग", "जो", "शी", "ला"],
    ["मो", "र", "नी", "दी", "वा", "ना", "अ", "भि", "धा"],
    ["पा", "र", "स", "दु", "ख", "ड़े", "सु", "शी", "ल"],
    ["प्रा", "र", "म्भ", "दू", "स", "री", "सा", "म", "ने"],
    ["प्र", "ग", "ति", "सु", "ग", "म", "को", "प", "ल"],
    ["का", "य", "दा", "वि", "का", "र", "अ", "ग", "ली"],
    ["आ", "ज", "न्म", "कु", "मा", "र", "सं", "य", "म"],
    ["वि", "वा", "ह", "ह", "मे", "शा", "रा", "श", "न"],
    ["भ", "र", "त", "क", "पू", "र", "उ", "त्त", "र"],
    ["प", "ल", "ट", "घ", "मं", "ड", "दी", "वा", "र"],
    ["बे", "ल", "न", "चु", "रा", "ए", "दु", "श्वा", "र"],
    ["शा", "ली", "न", "मो", "ड़", "ना", "को", "ष्ट", "क"],
    ["मि", "ला", "न", "न", "रे", "श", "वि", "भि", "न्न"],
    ["दी", "वा", "नी", "स", "जी", "व", "र", "ब", "ड़ी"],
    ["ब", "या", "न", "वि", "धु", "र", "क", "मी", "ज"],
    ["रा", "हु", "ल", "पु", "रा", "ने", "ग", "र्वि", "त"],
    ["प्र", "त्य", "क्ष", "ज्यो", "ति", "षी", "धा", "र", "क"],
    ["न", "वी", "न", "ध", "न", "क", "भ", "ग", "त"],
    ["च", "र", "ण", "सं", "जी", "व", "द", "बा", "व"],
    ["भा", "वि", "क", "धा", "व", "क", "वि", "ल", "य"],
    ["पा", "त्र", "ता", "च", "रि", "त्र", "प्र", "क", "ल्प"],
    ["पु", "रो", "धा", "अ", "क्ष", "य", "दा", "मि", "नी"],
    ["मा", "या", "वी", "स", "न्मा", "न", "चं", "च", "ल"],
    ["पु", "दी", "ना", "तां", "त्रि", "क", "आ", "ला", "प"],
    ["प", "दा", "र्थ", "प", "ग", "ले", "पो", "ट", "ली"],
    ["का", "लि", "ख", "प्र", "ला", "पी", "प", "रा", "ई"],
    ["मि", "ला", "ना", "प्र", "गा", "ढ़", "क", "गा", "र"],
    ["वि", "नो", "द", "स", "ब", "क", "प्री", "त", "म"],
    ["उ", "धा", "र", "प्र", "भा", "त", "पु", "लि", "स"],
    ["दु", "र्ल", "भ", "पा", "र्थि", "व", "नि", "क", "ली"],
    ["मि", "थ", "क", "पी", "प", "ल", "आ", "ल", "स"],
    ["आ", "नं", "द", "वा", "रि", "स", "क", "हा", "र"],
    ["पु", "लि", "या", "नि", "र्भी", "क", "दु", "धा", "रू"],
    ["मो", "ह", "न", "भौ", "ति", "क", "उ", "दा", "र"],
    ["चा", "ला", "क", "प", "रा", "त", "म", "ल्ला", "ह"],
    ["हा", "लाँ", "कि", "द", "हा", "ई", "ग", "र", "ज"],
    ["सं", "क", "ट", "प", "ट", "ना", "चाँ", "द", "नी"],
    ["प्र", "ला", "प", "चा", "क", "री", "प", "रा", "स्त"],
    ["कं", "डी", "ल", "ब", "गु", "ला", "भौ", "ति", "की"],
    ["लं", "ग", "र", "क", "ड", "क", "ब", "ढ़ि", "या"],
    ["के", "स", "र", "सि", "ता", "र", "का", "य", "र"],
    ["न", "गी", "ना", "बि", "हा", "र", "नि", "र्वा", "ण"],
    ["जु", "ला", "हा", "प्र", "वे", "श", "क", "प", "ड़ा"],
    ["जो", "ग", "न", "घा", "य", "ल", "श", "ह", "र"],
    ["गि", "र", "ने", "छु", "पा", "ता", "गु", "ला", "ब"],
    ["क", "सू", "र", "क", "स", "र", "सं", "य", "मी"],
    ["रु", "बा", "ई", "अ", "म", "र", "द", "बा", "ई"],
    ["स", "द", "न", "मा", "द", "क", "का", "बि", "ल"],
    ["सं", "चि", "त", "छु", "पा", "ने", "पु", "स्त", "क"],
    ["शु", "क्रि", "या", "च", "ट", "क", "वि", "जे", "ता"],
    ["ल", "क", "ड़ी", "च", "प", "टा", "घूँ", "घ", "रू"],
    ["क", "ड़ा", "के", "क", "ला", "ई", "उ", "भा", "र"],
    ["उ", "भ", "र", "सु", "ला", "ईं", "नौ", "ब", "त"],
    ["अ", "ल", "ख", "प", "टा", "खा", "त", "र", "स"],
    ["स", "मु", "द्र", "सं", "स", "द", "प्र", "सा", "द"],
    ["पो", "ष", "ण", "भू", "गो", "ल", "उ", "ज", "ला"],
    ["आ", "ह", "त", "चि", "ल", "म", "कु", "क", "र्म"],
    ["नि", "च", "ला", "का", "य", "म", "सं", "यो", "ग"],
    ["प्र", "वा", "ह", "ज", "ड़ा", "ऊ", "म", "हँ", "गा"],
    ["भ", "ग", "वा", "ल", "ट", "क", "उ", "भ", "य"],
    ["का", "ली", "न", "द", "बो", "चा", "घूँ", "घ", "ट"],
    ["रा", "य", "ता", "ख", "न", "क", "पु", "का", "र"],
    ["प", "ह", "ल", "वि", "शे", "ष", "सु", "ल", "ह"],
    ["प्र", "पं", "च", "वि", "ष", "य", "पा", "र", "खी"],
    ["ल", "ट", "का", "ग", "ठ", "री", "पा", "जे", "ब"],
    ["न", "ग", "र", "क", "वि", "ता", "स", "ह", "र्ष"],
    ["दु", "श्म", "नी", "दे", "व", "र", "वा", "जि", "ब"],
    ["बा", "रू", "द", "पं", "क्ति", "ग", "म", "ला"],
    ["बे", "का", "र", "द", "वा", "ई", "सा", "हि", "ल"],
    ["पो", "षा", "क", "सु", "ब", "ह", "का", "मि", "नी"],
    ["खो", "द", "ना", "म", "हि", "ला", "नि", "श्चि", "त"],
    ["पु", "ष्प", "क", "ता", "क", "त", "चं", "द्र", "मा"],
    ["मा", "लि", "क", "हि", "ला", "ना", "दै", "नि", "क"],
    ["द", "ख", "ल", "वा", "र्षि", "क", "ए", "क", "ल"],
    ["व", "रा", "ह", "सं", "के", "त", "प्र", "थ", "म"],
    ["गं", "ध", "क", "प", "त", "ला", "छु", "पा", "ना"],
    ["आ", "जा", "दी", "ल", "ह", "र", "दे", "व", "ता"],
    ["ख", "री", "द", "प", "री", "क्षा", "प", "क", "ड़ो"],
    ["भू", "त", "ल", "हु", "लि", "या", "पा", "र्ष", "द"],
    ["वा", "क", "ई", "न", "ह", "र", "ल", "गा", "ने"],
    ["दु", "श्म", "न", "पिं", "ज", "रा", "आ", "रो", "पी"],
    ["छु", "पा", "ई", "पू", "र", "ब", "पा", "य", "ल"],
    ["प", "ता", "का", "दै", "वि", "क", "सं", "गी", "त"],
    ["म", "हि", "मा", "चौ", "पा", "ल", "म", "ध्य", "स्थ"],
    ["व", "जू", "द", "मो", "ह", "नी", "म", "ह", "ज"],
    ["ला", "ग", "त", "प", "ढ़ा", "ई", "अं", "गू", "र"],
    ["शो", "ष", "ण", "पो", "ख", "र", "कु", "क", "र"],
    ["पं", "डि", "त", "प", "सी", "ज", "मौ", "लि", "क"],
    ["स", "ज", "न", "चा", "ल", "क", "सु", "ले", "खा"],
    ["आ", "वा", "ज", "रू", "त", "बा", "औ", "स", "त"],
    ["अ", "ट", "क", "चु", "ना", "व", "स", "म", "झी"],
    ["उ", "त्क", "र्ष", "ख", "नि", "ज", "खु", "मा", "री"],
    ["उ", "त्कृ", "ष्ट", "नि", "वे", "श", "वि", "दे", "श"],
    ["सु", "हा", "नी", "स", "बू", "त", "श्र", "व", "ण"],
    ["त्रि", "को", "ण", "को", "शि", "श", "सो", "च", "ना"],
    ["ज्यो", "ति", "ष", "छ", "लि", "या", "आ", "वा", "स"],
    ["सं", "हि", "त", "प्र", "त्य", "य", "मा", "र्मि", "क"],
    ["म", "शी", "न", "सि", "ला", "ई", "वि", "ला", "स"],
    ["चु", "ड़ै", "ल", "क", "पा", "स", "क", "ड़ा", "ई"],
    ["प", "क", "ड़", "बा", "रि", "श", "ता", "बी", "ज"],
    ["ज", "ल", "न", "भू", "चा", "ल", "प", "ट", "ल"],
    ["द", "र्प", "ण", "वि", "नी", "ता", "स्व", "तं", "त्र"],
    ["वा", "स्त", "व", "अ", "स", "र", "सि", "वा", "य"],
    ["खा", "ति", "र", "को", "य", "ला", "ह", "ज", "म"],
    ["च", "म", "न", "प्र", "बं", "ध", "सू", "र", "ज"],
    ["द", "र्श", "न", "ल", "ट", "की", "श", "ही", "द"],
    ["नी", "र", "ज", "की", "म", "त", "ब", "गि", "या"],
    ["क", "री", "ने", "ब", "र्बा", "द", "वि", "क", "ल"]
]

wordList44 = [
    ["म", "ज", "बू", "त", "प", "त", "वा", "र", "स", "र्व", "ना", "म", "दि", "ल", "ब", "र"],
    ["स", "जा", "व", "ट", "दु", "रा", "चा", "र", "अं", "त", "रा", "ल", "प", "ख", "वा", "ड़े"],
    ["ब", "ना", "व", "ट", "हि", "फा", "ज", "त", "अं", "त", "रि", "क्ष", "म", "ज", "बू", "री"],
    ["प", "र", "तं", "त्र", "व", "का", "ल", "त", "प", "रि", "हा", "र", "वि", "शे", "ष", "ता"],
    ["दि", "वा", "क", "र", "प", "क", "वा", "न", "का", "रा", "गा", "र", "अ", "भि", "न", "व"],
    ["स", "र", "ह", "द", "अ", "वि", "रा", "म", "अ", "भि", "ने", "त्री", "ब", "गा", "व", "त"],
    ["झ", "ट", "प", "ट", "हि", "दा", "य", "त", "प्र", "ता", "ड़", "ना", "भ", "ग", "द", "ड़"],
    ["प", "त", "झ", "ड़", "प्र", "लो", "भ", "न", "प्री", "ति", "भो", "ज", "ज", "ल", "प", "री"],
    ["म", "ज", "बू", "त", "से", "वा", "का", "ल", "सि", "ल", "सि", "ला", "जा", "ग", "रू", "क"],
    ["ह", "ड़", "ब", "ड़", "ह", "ड़", "ब", "ड़ी", "वि", "ला", "य", "त", "प्र", "ता", "ड़ि", "त"],
    ["ता", "त्का", "लि", "क", "ला", "ज", "वा", "ब", "वि", "ज्ञा", "प", "न", "वि", "वि", "ध", "ता"],
    ["वि", "त", "र", "ण", "भ", "र", "मा", "र", "रा", "ज", "भा", "षा", "प्रा", "व", "धा", "न"],
    ["प्र", "च", "लि", "त", "हु", "ड़", "दं", "ग", "का", "म", "या", "ब", "ज", "म", "घ", "ट"],
    ["पा", "रा", "वा", "र", "सा", "मू", "हि", "क", "उ", "प", "व", "न", "म", "ल", "ह", "म"],
    ["घ", "ड़ि", "या", "ल", "सो", "वि", "य", "त", "अ", "च", "क", "न", "म", "ज", "बू", "र"],
    ["र", "वि", "वा", "र", "श", "ल", "ग", "म", "व", "शी", "भू", "त", "सि", "र", "हा", "ने"],
    ["प्र", "ति", "वा", "दी", "मां", "ग", "लि", "क", "अ", "न", "ब", "न", "प्र", "ति", "द्वं", "द्वी"],
    ["गो", "ली", "बा", "री", "अ", "र", "ह", "र", "का", "री", "ग", "र", "द", "म", "क", "ल"],
    ["ब", "द", "हा", "ली", "बु", "ले", "टि", "न", "गु", "म", "ना", "मी", "प", "त", "लू", "न"],
    ["ह", "ल", "च", "ल", "आ", "ज", "मा", "ने", "सु", "प्र", "भा", "त", "प", "र", "हे", "ज"],
    ["जा", "दू", "ग", "री", "अ", "नु", "मा", "न", "अ", "मू", "म", "न", "अ", "न", "प", "ढ़"],
    ["व", "र", "दा", "न", "क", "हा", "व", "त", "म", "त", "ल", "ब", "अ", "नु", "सा", "र"],
    ["वि", "व", "र", "ण", "शो", "भा", "या", "त्रा", "मि", "ला", "व", "ट", "भा", "ग", "व", "त"],
    ["क", "था", "का", "र", "भ", "र", "पू", "र", "ब", "ज", "रं", "ग", "प", "रि", "भा", "षा"],
    ["अ", "हं", "का", "र", "उ", "प", "स्थि", "त", "श", "रा", "फ", "त", "वि", "व", "श", "ता"],
    ["शु", "क्र", "वा", "र", "स", "रा", "ह", "ना", "प", "ल", "भ", "र", "रा", "ज", "पू", "त"],
    ["द", "ह", "श", "त", "स्वा", "भा", "वि", "क", "कै", "फि", "य", "त", "गि", "रा", "व", "ट"],
    ["जा", "दू", "ग", "र", "स", "र्व", "ना", "म", "जा", "ल", "सा", "ज", "प", "ख", "वा", "ड़ा"],
    ["अ", "नु", "म", "ति", "चि", "ल", "म", "न", "सां", "स", "रि", "क", "गो", "ला", "का", "र"],
    ["आ", "क", "स्मि", "क", "ह", "ड़", "ता", "ल", "कि", "फा", "य", "ती", "म", "र", "घ", "ट"],
    ["ब", "ल", "वा", "न", "फु", "ल", "वा", "री", "अ", "न", "श", "न", "प", "ह", "चा", "न"],
    ["आ", "ज", "क", "ल", "अ", "ट", "क", "ल", "का", "म", "चो", "र", "अं", "डा", "का", "र"],
    ["आ", "क", "र्ष", "क", "स", "रो", "का", "र", "प", "रि", "णा", "म", "अ", "नु", "लो", "म"],
    ["अं", "त", "रं", "ग", "म", "ज", "दू", "र", "आ", "ग", "म", "न", "प्र", "ति", "वा", "द"],
    ["ट", "स", "म", "स", "अ", "नु", "दा", "न", "रू", "प", "वा", "न", "प", "रि", "वा", "र"],
    ["का", "रा", "वा", "स", "ख", "र", "गो", "श", "ल", "गा", "ता", "र", "ख", "र", "बू", "जा"],
    ["भू", "मि", "ही", "न", "स", "दा", "चा", "र", "व", "सी", "य", "त", "उ", "ल", "झ", "न"],
    ["म", "ख", "म", "ल", "रा", "ज", "मा", "ता", "भू", "त", "का", "ल", "घो", "ड़ा", "गा", "ड़ी"],
    ["ब", "हु", "म", "त", "अ", "भि", "सा", "र", "अ", "न", "जा", "ने", "हा", "था", "पा", "ई"],
    ["रा", "ज", "की", "य", "ह", "ड़", "ब", "ड़ा", "व्य", "व", "धा", "न", "स", "म", "झ", "ना"],
    ["वि", "वा", "हि", "त", "वि", "भा", "गी", "य", "ध", "न", "वा", "न", "सि", "ल", "सि", "ले"],
    ["अ", "द", "र", "क", "इ", "ति", "हा", "स", "क", "ट", "ह", "ल", "शि", "का", "य", "त"],
    ["अ", "भि", "मा", "न", "हो", "न", "हा", "र", "भ", "ग", "व", "न", "क", "था", "न", "क"],
    ["ब", "ही", "खा", "ता", "आ", "ज", "मा", "ना", "रू", "प", "रे", "खा", "प्रा", "थ", "मि", "क"],
    ["पि", "घ", "ला", "ती", "प्र", "का", "शि", "त", "ज", "ग", "म", "ग", "रो", "ज", "गा", "र"],
    ["पु", "रो", "हि", "त", "प्रा", "कृ", "ति", "क", "ब", "द", "मा", "श", "ध", "ड़", "क", "न"],
    ["भ", "र", "क", "र", "बा", "ग", "बा", "नी", "भ", "र", "स", "क", "त", "र", "क", "श"],
    ["अ", "भि", "ले", "ख", "गु", "रू", "वा", "र", "प्रा", "मा", "णि", "क", "स", "ह", "म", "ति"],
    ["अ", "भि", "या", "न", "अ", "ख", "बा", "र", "अ", "धि", "का", "र", "अ", "भि", "ने", "ता"],
    ["ग", "ड़", "ब", "ड़", "घ", "मा", "सा", "न", "ब", "ड़", "ब", "ड़ा", "वि", "शे", "ष", "ज्ञ"],
    ["खु", "र", "द", "रा", "ज", "ब", "त", "ब", "आ", "वे", "द", "न", "प", "र", "वा", "ना"],
    ["प", "ल", "ट", "न", "अ", "भि", "षे", "क", "प", "र", "व", "ल", "रा", "ज", "मा", "र्ग"],
    ["ह", "र", "द", "म", "अ", "ना", "चा", "र", "आ", "जी", "वि", "का", "का", "म", "या", "बी"],
    ["का", "ला", "ती", "त", "सा", "धा", "र", "ण", "प", "र", "वा", "न", "क", "वा", "य", "द"],
    ["इ", "त", "वा", "री", "पं", "चा", "य", "त", "भू", "त", "पू", "र्व", "आ", "जी", "व", "न"],
    ["अ", "भि", "शा", "प", "द", "स", "र", "थ", "वै", "चा", "रि", "क", "भू", "मि", "ग", "त"],
    ["वै", "ज्ञा", "नि", "क", "स", "म", "झौ", "ता", "क", "ला", "का", "र", "मा", "ल", "दा", "र"],
    ["अ", "वि", "ना", "श", "खा", "सि", "य", "त", "ह", "नु", "मा", "न", "प्र", "ति", "यो", "गी"],
    ["पा", "ठ", "शा", "ला", "क", "र", "व", "ट", "इ", "ना", "य", "त", "नि", "हा", "य", "त"],
    ["लो", "ग", "बा", "ग", "आं", "च", "लि", "क", "घ", "न", "घो", "र", "गो", "व", "र्ध", "न"],
    ["स", "र", "का", "र", "ल", "ग", "भ", "ग", "ब", "हु", "ते", "रे", "जा", "न", "ले", "वा"],
    ["जा", "ली", "दा", "र", "नि", "रा", "धा", "र", "वि", "शा", "ल", "ता", " ", "वै", "वा", "हि", "क"],
    ["अ", "व", "रो", "ध", "मु", "सी", "ब", "त", "अ", "ज", "ग", "र", "नि", "यो", "ज", "न"],
    ["प्र", "ती", "का", "र", "अ", "नु", "रो", "ध", "क", "न", "प", "टी", "हि", "का", "य", "त"],
    ["द", "म", "ख", "म", "बी", "र", "ब", "ल", "अ", "नु", "वा", "द", "च", "म", "च", "म"],
    ["द", "र", "बा", "न", "प्र", "का", "श", "क", "अ", "ल", "गा", "व", "पि", "घ", "ल", "ता"],
    ["म", "र", "ह", "म", "जा", "न", "व", "र", "उ", "पे", "क्षि", "त", "ब", "ड़", "ब", "ड़"],
    ["बु", "ध", "वा", "र", "प्र", "सा", "र", "ण", "ख", "ट", "म", "ल", "ब", "र", "ग", "द"],
    ["क", "ल", "क", "ल", "क", "स", "र", "त", "अ", "भि", "मा", "नी", "वि", "वा", "दि", "त"],
    ["क", "ल्प", "नी", "य", "प", "न", "घ", "ट", "बा", "ग", "बा", "न", "प", "रि", "धा", "न"],
    ["अ", "भि", "न", "य", "दि", "ल", "ब", "र", "पा", "रि", "जा", "त", "ह", "ड़", "कं", "प"],
    ["उ", "प", "न्या", "स", "प", "र", "दे", "स", "ना", "ग", "रि", "क", "अ", "भि", "भू", "त"],
    ["उ", "प", "हा", "र", "अं", "त", "रं", "गी", "प्र", "ति", "नि", "धि", "प्र", "का", "श", "न"],
    ["भ", "ग", "वा", "न", "झा", "ड़ी", "दा", "र", "अ", "र", "विं", "द", "दि", "न", "क", "र"],
    ["ब", "द", "हा", "ल", "स", "र", "ग", "म", "सि", "ह", "र", "न", "क", "बू", "त", "र"],
    ["क", "र", "त", "ब", "श", "र", "ब", "त", "त", "ड़", "प", "न", "भू", "मि", "हा", "र"],
    ["अं", "त", "रि", "म", "बि", "ल", "कु", "ल", "म", "नु", "हा", "र", "स", "र", "प", "ट"],
    ["अ", "क", "ब", "र", "क", "दा", "चा", "र", "सो", "म", "वा", "र", "ग", "ड़", "ब", "ड़ी"],
    ["अ", "पे", "क्षि", "त", "पै", "दा", "वा", "र", "द", "र", "वे", "श", "वि", "दू", "ष", "क"],
    ["अ", "वि", "र", "ल", "ह", "त", "प्र", "भ", "च", "ल", "चि", "त्र", "उ", "ब", "ट", "न"],
    ["श", "रा", "र", "त", "दि", "न", "मा", "न", "अ", "नु", "भू", "ति", "प", "त", "वा", "र"],
    ["आ", "ध्या", "त्मि", "क", "चि", "कि", "त्स", "क", "का", "र", "ग", "र", "त", "बी", "य", "त"],
    ["ह", "र", "क", "त", "मा", "न", "सि", "क", "ह", "की", "क", "त", "बा", "व", "जू", "द"],
    ["अ", "नु", "कू", "ल", "सि", "ल", "व", "ट", "स", "र", "ग", "ना", "खु", "रा", "फा", "त"],
    ["श", "नि", "वा", "र", "गु", "म", "ना", "म", "प्र", "ति", "दि", "न", "व", "न", "च", "र"],
    ["को", "म", "ल", "ता", "मु", "हौ", "ब", "त", "अ", "न", "जा", "न", "अ", "फ", "स", "र"],
    ["ला", "वा", "रि", "स", "ज", "ल", "ज", "ला", "न", "ट", "ख", "ट", "द", "र", "गा", "ह"],
    ["व्य", "व", "हा", "र", "ब", "च", "प", "न", "मु", "ज", "रि", "म", "द", "र", "वा", "जा"],
    ["स", "र", "ता", "ज", "ह", "ला", "ह", "ल", "को", "ला", "ह", "ल", "झि", "ल", "मि", "ल"],
    ["पा", "य", "दा", "न", "ख", "लि", "या", "न", "च", "क्र", "वा", "त", "ख", "लि", "हा", "न"],
    ["जि", "जी", "वि", "षा", "द्र", "व्य", "मा", "न", "पी", "क", "दा", "न", "फू", "ल", "दा", "न"],
    ["गा", "ड़ी", "वा", "न", "भ", "र", "पा", "ई", "भ्र", "ष्टा", "चा", "र", "व्या", "पा", "र"],
    ["व्या", "भि", "चा", "र", "वि", "ला", "सि", "ता", "भा", "र", "ती", "य", "वै", "म", "न", "स्य"],
    ["म", "हँ", "गा", "ई", "मा", "र", "का", "ट", "मा", "र", "पी", "ट", "ज", "य", "मा", "ला"],
    ["अ", "मि", "ता", "भ", "अ", "मा", "न", "त", "अ", "मा", "व", "स्या", "ध", "न्य", "वा", "द"],
    ["द", "स्त", "ख", "त", "द", "स्ता", "वे", "ज", "गु", "ल", "द", "स्ता", "गु", "ल", "जा", "र"],
    ["गु", "ल", "श", "न", "गि", "र", "गि", "ट", "चा", "रा", "ग", "र", "बि", "रा", "द", "री"],
    ["उ", "जा", "ग", "र", "वि", "रा", "स", "त", "ब", "रा", "ब", "र", "ब", "र", "सा", "त"],
    ["ब", "र", "सा", "ना", "ब", "ह", "ला", "व", "ब", "ह", "ला", "ना", "ब", "ह", "का", "ना"],
    ["मा", "ला", "मा", "ल", "ब", "रा", "म", "द", "ब", "रा", "म", "दा", "व", "र्त", "मा", "न"],
    ["भौ", "गो", "लि", "क", "भू", "मं", "ड", "ल", "स", "म", "को", "ण", "को", "षा", "ध्य", "क्ष"],
    ["अ", "ध्य", "य", "न", "उ", "पा", "ध्य", "क्ष", "अ", "धि", "कां", "श", "प", "र", "चू", "न"],
    ["प", "र", "च", "म", "प", "रि", "ज", "न", "सं", "वि", "धा", "न", "सं", "ग", "ठ", "न"],
    ["सं", "ग", "ठि", "त", "सो", "ह", "ब", "त", "दु", "र्घ", "ट", "ना", "पा", "र", "द", "र्शी"],
    ["वि", "क", "रा", "ल", "अ", "का", "र", "ण", "अ", "भि", "ला", "षा", "अ", "भि", "प्रा", "य"],
    ["आ", "म", "र", "ण", "आ", "म", "तौ", "र", "आ", "च", "म", "न", "आ", "च", "र", "ण"],
    ["व्य", "व", "स्था", "ट", "मा", "ट", "र", "प", "त्ता", "गो", "भी", "प्र", "स्ता", "व", "ना"],
    ["प", "रि", "स", "र", "न", "पुं", "स", "क", "न", "र", "भ", "क्षी", "वि", "ल", "क्ष", "ण"],
    ["स", "म्भा", "व", "ना", "स", "म्भा", "वि", "त", "अ", "स्प", "ता", "ल", "अ", "स", "म्भ", "व"],
    ["प", "सं", "दी", "दा", "पि", "रा", "मि", "ड", "पौ", "रा", "णि", "क", "प", "र", "हि", "त"],
    ["ज", "न", "हि", "त", "प", "रा", "जि", "त", "प", "रा", "धी", "न", "पु", "रा", "त", "त्व"],
    ["वा", "स्त", "वि", "क", "वा", "र", "दा", "त", "वा", "य", "र", "स", "किं", "व", "दं", "ती"],
    ["का", "र्य", "क्र", "म", "का", "र", "ना", "मा", "को", "ह", "रा", "म", "का", "य", "ना", "त"],
    ["का", "ग", "जा", "त", "कु", "री", "ति", "याँ", "कु", "रु", "क्षे", "त्र", "दु", "र्ब", "ल", "ता"],
    ["दे", "व", "लो", "क", "दो", "ह", "रा", "ता", "दो", "ह", "रा", "ना", "दो", "ह", "रा", "ई"],
    ["दो", "ह", "रा", "व", "दो", "ह", "रा", "ने", "दु", "त्का", "र", "ते", "दु", "त्का", "र", "ना"],
    ["ब", "ज", "रं", "गी", "छा", "न", "बी", "न", "छा", "त्रा", "वा", "स", "वि", "द्या", "ल", "य"],
    ["वि", "ना", "य", "क", "वि", "दा", "र", "क", "इ", "मा", "र", "त", "मो", "ह", "ल", "त"],
    ["मो", "र", "धा", "न", "त", "र", "बू", "ज", "फ", "टा", "फ", "ट", "पु", "र", "स्का", "र"],
    ["पु", "र", "स्कृ", "त", "प", "रि", "णी", "ता", "उ", "द्घो", "ष", "णा", "उ", "द्घो", "ष", "क"],
    ["उ", "द्घा", "ट", "न", "उ", "द्ध", "र", "ण", "न", "फ", "र", "त", "न", "व", "रा", "त्रि"],
    ["द", "श", "ह", "रा", "द", "श", "र", "थ", "द", "शा", "न", "न", "प", "ला", "य", "न"],
    ["पि", "तृ", "दो", "ष", "क", "न्या", "दा", "न", "पिं", "ड", "दा", "न", "दा", "र्श", "नि", "क", " "],
    ["बु", "द्धि", "मा", "न", "बु", "द्धि", "जी", "वी", "बा", "द", "शा", "ह", "म", "न", "मी", "त"],
    ["न", "व", "नी", "त", "का", "द", "म्ब", "री", "का", "द", "म्ब", "नी", "म", "न", "मा", "ने"],
    ["म", "न", "म", "र्जी", "म", "न", "चा", "हा", "म", "न", "चा", "ही", "मु", "स्कु", "रा", "ते"],
    ["मु", "स्क", "रा", "ता", "मु", "स्कु", "रा", "ना", "मे", "ह", "न", "त", "मे", "ह", "मा", "न"],
    ["मे", "ह", "न", "ती", "मु", "बा", "र", "क", "ना", "ला", "य", "क", "आ", "द", "त", "न"],
    ["भ", "र", "वा", "ने", "भ", "र", "मा", "ने", "ज", "मा", "न", "त", "मा", "न", "दे", "य"],
    ["मा", "प", "दं", "ड", "मा", "न", "सू", "न", "मा", "या", "जा", "ल", "पि", "ता", "म", "ह"],
    ["प्र", "क", "ल्पि", "त", "प्र", "ति", "सा", "द", "अ", "प्र", "त्य", "क्ष", "प", "रा", "ज", "य"],
    ["प", "रा", "म", "र्श", "प", "र", "मा", "णु", "प", "र", "मा", "त्मा", "प", "रि", "च", "य"],
    ["प", "रि", "चि", "त", "प", "र्व", "ती", "य", "गि", "रे", "बा", "न", "बा", "ग", "वा", "नी"],
    ["स", "र", "दा", "र", "स", "र", "का", "री", "रो", "ज", "गा", "री", "ब", "र", "ब", "स"],
    ["अ", "चा", "न", "क", "च", "म", "क", "ते", "द", "म", "क", "ते", "सु", "न", "ह", "रे"],
    ["रं", "ग", "ही", "न", "रं", "ग", "बा", "ज", "अ", "मा", "व", "स", "उ", "प", "वा", "स"],
    ["उ", "पा", "स", "क", "उ", "प", "चा", "र", "उ", "प", "यो", "ग", "उ", "पा", "स", "ना"],
    ["उ", "ला", "ह", "ना", "उ", "जा", "ड़", "ना", "उ", "ज", "ड़", "ना", "उ", "ल", "झ", "ना"],
    ["उ", "ल", "झा", "ना", "मा", "ध्य", "मि", "क", "मा", "न", "चि", "त्र", "मा", "न", "वी", "य"],
    ["बा", "त", "ची", "त", "अ", "नु", "रा", "ग", "प्र", "बं", "ध", "न", "प्रा", "रं", "भि", "क"],
    ["अ", "नु", "वृ", "द्धि", "अ", "नु", "प्रा", "स", "आं", "त", "रि", "क", "प्र", "सा", "ध", "न"],
    ["वि", "धा", "य", "क", "वि", "धे", "य", "क", "स", "र्व", "श्रे", "ष्ठ", "स", "र्वां", "गी", "ण"],
    ["स", "र्व", "हा", "रा", "स", "र्व", "मा", "न्य", "शा", "ह", "का", "र", "सा", "हू", "का", "र"],
    ["पि", "ल", "पि", "ला", "आ", "रो", "पि", "त", "आ", "रा", "ध", "ना", "अ", "प", "ना", "ई"],
    ["अ", "प", "ना", "ना", "अ", "प", "ना", "या", "ख", "ड़", "का", "ए", "ख", "ड़", "का", "या"],
    ["खं", "ड", "का", "व्य", "पं", "थ", "ही", "न", "प", "रि", "स्थि", "ति", "प्रा", "दे", "शि", "क"],
    ["न", "व", "र", "स", "न", "व", "र", "त्न", "न", "वो", "दि", "त", "न", "वा", "चा", "र"],
    ["बे", "र", "ह", "म", "बे", "ख", "ब", "र", "बे", "ल", "गा", "म", "न", "म", "की", "न"],
    ["मो", "ह", "ब्ब", "त", "खा", "रा", "प", "न", "खा", "ली", "प", "न", "प", "रि", "मि", "त"],
    ["प", "रि", "मे", "य", "प", "रि", "म", "ल", "प", "र", "चू", "नी", "प", "रि", "वे", "श"],
    ["घ", "ब", "रा", "ए", "घ", "ब", "रा", "ना", "धा", "र", "दा", "र", "ध", "रा", "शा", "यी"],
    ["ध", "र्म", "सू", "त्र", "ध", "र्म", "गु", "रु", "ध", "र्म", "शा", "ला", "ध", "र्म", "यु", "द्ध"],
    ["व्या", "क", "र", "ण", "प्र", "भा", "वि", "त", "प्र", "वा", "हि", "त", "झं", "झा", "व", "त"],
    ["प्र", "फु", "ल्लि", "त", "प्र", "दू", "ष", "ण", "प्र", "दू", "षि", "त", "प्र", "द", "र्श", "न"],
    ["प्र", "द", "र्श", "नी", "हि", "रा", "स", "त", "जि", "म्मे", "दा", "र", "जि", "म्मे", "दा", "री"],
    ["ज", "ह", "न्नु", "म", "ज", "ग", "न्ना", "थ", "जा", "ल", "सा", "जी", "चा", "ल", "बा", "ज"],
    ["चा", "ल", "बा", "जी", "प्र", "क", "र", "ण", "अ", "व", "धू", "त", "दे", "व", "दू", "त"],
    ["य", "म", "दू", "त", "अ", "धि", "ष्ठा", "न", "अ", "धि", "कृ", "त", "अ", "धि", "कां", "स"],
    ["अ", "धि", "प", "ति", "र", "मा", "प", "ति", "उ", "मा", "प", "ति", "म", "हा", "दे", "व"],
    ["म", "हा", "रा", "ज", "म", "हा", "रा", "जा", "म", "हा", "रा", "नी", "म", "हा", "दे", "वी"],
    ["म", "हो", "द", "य", "मु", "म", "कि", "न", "ना", "मा", "कू", "ल", "ना", "म", "ची", "न"],
    ["ना", "म", "व", "र", "रा", "म", "धा", "री", "रा", "म", "दा", "स", "रा", "म", "ना", "म"],
    ["रा", "धे", "श्या", "म", "सी", "ता", "रा", "म", "ना", "रा", "य", "ण", "न", "रो", "त्त", "म"]
]