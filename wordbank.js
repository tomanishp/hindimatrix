const preMatra = ['ु', 'ू', 'ि', 'ा', 'ी', '्', 'ो', 'ौ', 'े'];
const postMatra = [];

let wordBank33 = [
    'अगर',
    'कलम',
    'कसक',
    'कसम',
    'तरस',
    'नकल',
    'नगर',
    'नरम',
    'नवल',
    'नहर',
    'पकड़',
    'परत',
    'पलट',
    'पहल',
    'बदल',
    'भरम',
    'मगर',
    'शहर',
    'सजग',
    'सड़क',
    'सरस',
    'सहज'
];

let wordBank33L = [
    'माधवी',
    'नकली',
    'तेवर',
    'विधान',
    'किसान',
    'मछली'
];
let wordBank44 = [
    'अकबर',
    'अचकन',
    'अजगर',
    'अटकल',
    'अदरक',
    'अनपढ़',
    'अनबन',
    'अफसर',
    'अरहर',
    'उपवन',
    'उबटन',
    'उलझन',
    'कटहल',
    'करतब',
    'करवट',
    'कलकल',
    'कसरत',
    'खटमल',
    'गरदन',
    'चमचम',
    'जगमग',
    'जबतब',
    'जमघट',
    'झटपट',
    'टसमस',
    'तड़पन',
    'तरकश',
    'दमकल',
    'दमखम',
    'दसरथ',
    'दहशत',
    'धड़कन',
    'नटखट',
    'पतझड़',
    'पनघट',
    'परवल',
    'पलटन',
    'पलभर',
    'बचपन',
    'बरगद',
    'भगदड़',
    'भगवन',
    'भरकर',
    'मखमल',
    'मतलब',
    'मरघट',
    'मरहम',
    'वनचर',
    'शरबत',
    'शलगम',
    'सरगम',
    'सरपट',
    'हड़बड़',
    'हरकत',
    'हरदम',
    'हलचल'
];

let wordBank44L = [
    'परिवार',
    'अनजाने',
    'अनुवाद',
    'अनुकूल',

];

function getRandomWords() {

    const selected = new Set();

    let items = gridN > 3
        ? [...wordBank44, ...(matraOn ? wordBank44L : [])]
        : [...wordBank33, ...(matraOn ? wordBank33L : [])];


    while (selected.size < 4) {
        const randomIndex = Math.floor(Math.random() * items.length);
        selected.add(items[randomIndex]);
    }

    let allChars = Array.from(selected).join('').split('');

    return formatComplexWords(allChars);
}

function formatComplexWords(allChars) {

    let outText = [];

    for (let i = 0; i < allChars.length; i++) {
        if (preMatra.includes(allChars[i])) {
            outText.pop();
            let c2 = ([allChars[i - 1], allChars[i]]).join('');
            outText.push(c2);
        } else {
            outText.push(allChars[i]);
        }
    }
    return outText;
}