const preMatra = ['्', 'ा', 'ु', 'ू', 'ि', 'ी', 'ो', 'ौ', 'े', 'ै', 'ं','ः'];
const postMatra = ['्'];

let wordBank33 = [
    'अगर',
    'आदमी',
    'उजला',
    'औरत',
    'कलम',
    'कसक',
    'कसम',
    'किसान',
    'कीमत',
    'केवल',
    'जहाज',
    'तरस',
    'ताकत',
    'तेवर',
    'नकल',
    'नकली',
    'नगर',
    'नरम',
    'नवल',
    'नवीन',
    'नहर',
    'नौबत',
    'पकड़',
    'पगली',
    'परत',
    'पलट',
    'पहल',
    'पहाड़',
    'बदल',
    'बादल',
    'बेलन',
    'भरम',
    'मगर',
    'मछली',
    'मशीन',
    'माधवी',
    'मालिक',
    'राहत',
    'विधान',
    'शहर',
    'संतान',
    'सजग',
    'सड़क',
    'सरस',
    'सहज',
    'सुजान'

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
    'अभिषेक',
    'अरहर',
    'उपवन',
    'उबटन',
    'उलझन',
    'कटहल',
    'करतब',
    'करवट',
    'कलकल',
    'कसरत',
    'कालातीत',
    'किफायती',
    'खटमल',
    'गरदन',
    'चमचम',
    'जगमग',
    'जबतब',
    'जमघट',
    'जागरूक',
    'झटपट',
    'टसमस',
    'तड़पन',
    'तरकश',
    'दमकल',
    'दमखम',
    'दसरथ',
    'दहशत',
    'दुराचार',
    'धड़कन',
    'नटखट',
    'नियोजन',
    'निराधार',
    'पतझड़',
    'पनघट',
    'परवल',
    'परिवार',
    'पलटन',
    'पलभर',
    'पहचान',
    'पारिजात',
    'पैदावार',
    'प्रावधान',
    'बचपन',
    'बरगद',
    'बहीखाता',
    'बुलेटिन',
    'भगदड़',
    'भगवन',
    'भरकर',
    'मखमल',
    'मतलब',
    'मरघट',
    'मरहम',
    'राजभाषा',
    'रूपरेखा',
    'रोजगार',
    'वकालत',
    'वनचर',
    'वसीयत',
    'विज्ञापन',
    'वितरण',
    'विभागीय',
    'विवरण',
    'विवादित',
    'शरबत',
    'शलगम',
    'शिकायत',
    'समझना',
    'समझौता',
    'समूहिक',
    'सरकार',
    'सरगम',
    'सरपट',
    'सराहना',
    'सहमति',
    'साधारण',
    'सेवाकाल',
    'हड़ताल',
    'हड़बड़',
    'हरकत',
    'हरदम',
    'हलचल',

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

    const selected = new Set();

    let items = gridN > 3 ? [...wordBank44] : [...wordBank33];


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