const subjects = ['Ich', 'Du', 'Er', 'Sie', 'Es', 'Wir'];
const verbs = ['essen', 'geben', 'finden', 'braten', 'zeichnen', 'reparieren', 'mixen'];
const verbsPresent = ['isst', 'gibt', 'findet', 'brät', 'zeichnet', 'repariert', 'mixt'];
const adjectives = ['leckere', 'langsame', 'schnelle', 'helle', 'dunkle', 'grüne', 'rote', 'gelbe', 'moderne', 'antike'];
const objects = ['Freunde', 'Kuchen', 'Autos', 'Computer', 'Lampen', 'Glasflaschen', 'Telefone', 'Werkzeuge', 'Bilder'];

function cutLastChar(string) {
    const newLength = string.length - 1;
    return string.slice(0, newLength);
}

const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

if (randomSubject == 'Ich') {
    // cut last char if subject is 'Ich'
    randomVerb = cutLastChar(randomVerb);
} else if (randomSubject != 'Wir') {
    // subject is 'Du', 'Er', 'Sie' or 'Es' -> set randomVerb to present tense
    const indexOfRandomVerb = verbs.indexOf(randomVerb);
    randomVerb = verbsPresent[indexOfRandomVerb];
}
