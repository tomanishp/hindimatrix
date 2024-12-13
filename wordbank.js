const preMatra = ['्', 'ा', 'ु', 'ू', 'ि', 'ी', 'ो', 'ौ', 'े', 'ै', 'ं', 'ः'];
const postMatra = ['्'];

let wordBank33 = [
    'बदल',
    'परत',
    'शहर',
    'मालिक',
    'विधान',
    'जहाज',
    'किसान',
    'बादल',
    'कसम',
    'अगर',
    'सड़क',
    'नवीन',
    'संतान',
    'माधवी',
    'तरस',
    'मशीन',
    'मछली',
    'ताकत',
    'नकली',
    'राहत',
    'पहाड़',
    'नौबत',
    'कसक',
    'पहल',
    'पकड़',
    'भरम',
    'कलम',
    'नरम',
    'सहज',
    'सरस',
    'मगर',
    'औरत',
    'सजग',
    'नवल',
    'केवल',
    'नकल',
    'नहर',
    'बेलन',
    'पलट',
    'तेवर',
    'आदमी',
    'कीमत',
    'पगली',
    'नगर',
    'सुजान',
    'उजला'
];

let wordBank44 = [
    'दमखम',
    'अजगर',
    'हड़बड़',
    'बहीखाता',
    'कलकल',
    'परिवार',
    'पैदावार',
    'सामूहिक',
    'सरगम',
    'गरदन',
    'शरबत',
    'अफसर',
    'मखमल',
    'सरपट',
    'मरहम',
    'तरकश',
    'सेवाकाल',
    'खटमल',
    'शलगम',
    'जगमग',
    'पहचान',
    'दसरथ',
    'दहशत',
    'विवादित',
    'झटपट',
    'तड़पन',
    'दमकल',
    'बचपन',
    'जागरूक',
    'समझना',
    'हलचल',
    'साधारण',
    'करवट',
    'सराहना',
    'हरकत',
    'परवल',
    'किफायती',
    'अरहर',
    'विभागीय',
    'पलटन',
    'अटकल',
    'अनबन',
    'सरकार',
    'समझौता',
    'वसीयत',
    'भरकर',
    'पारिजात',
    'मतलब',
    'अदरक',
    'भगदड़',
    'कटहल',
    'अचकन',
    'प्रावधान',
    'उलझन',
    'धड़कन',
    'बुलेटिन',
    'निराधार',
    'कसरत',
    'विज्ञापन',
    'राजभाषा',
    'सहमति',
    'अकबर',
    'दुराचार',
    'विवरण',
    'हड़ताल',
    'नटखट',
    'वकालत',
    'मरघट',
    'रोजगार',
    'अभिषेक',
    'अनपढ़',
    'नियोजन',
    'वितरण',
    'रूपरेखा',
    'शिकायत',
    'वनचर',
    'कालातीत',
    'हरदम',
    'पनघट',
    'बरगद',
    'भगवन',
    'करतब',
    'पतझड़',
    'जमघट',
    'उबटन',
    'टसमस',
    'चमचम',
    'जबतब',
    'उपवन',
    'पलभर'
];

let wordBank44La = [
    'प्रावधान',
    'मध्यस्थ',
    'व्यवहार',
    'प्रचलित',
    'व्यवधान',
    'कल्पनीय'

]
    ;


function getRandomWords() {

    const d1 = new Date('2024-12-13');
    const d2 = new Date().setHours(0, 0, 0);

    let idx = Math.abs(Math.round((d2 - d1) / 864e5)) * 4;

    const selected = new Set();

    let items = gridN > 3 ? [...wordBank44] : [...wordBank33];


    while (selected.size < gridN) {
        //const randomIndex = Math.floor(Math.random() * items.length);
        selected.add(items[idx]);
        idx++;
    }

    let allChars = Array.from(selected).join('').split('');

    return formatComplexWords(allChars);
}

function formatComplexWords(allChars) {

    let outText = [];

    for (let i = 0; i < allChars.length; i++) {
        if (postMatra.includes(allChars[i])) {
            let t1 = outText.pop();
            let c1 = ([t1, allChars[i], allChars[i + 1]]).join('');
            outText.push(c1);
            i++;
        } else if (preMatra.includes(allChars[i])) {
            let t2 = outText.pop();
            let c2 = ([t2, allChars[i]]).join('');
            outText.push(c2);
        } else {
            outText.push(allChars[i]);
        }
    }
    return outText;
}