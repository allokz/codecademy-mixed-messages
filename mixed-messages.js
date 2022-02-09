const subjects = ['Ich', 'Du', 'Er', 'Sie', 'Es', 'Wir'];
const verbs = ['essen', 'geben', 'finden', 'braten', 'zeichnen', 'reparieren', 'mixen'];
const verbsPresent = ['isst', 'gibt', 'findet', 'brät', 'zeichnet', 'repariert', 'mixt'];
const adjectives = ['leckere', 'langsame', 'schnelle', 'helle', 'dunkle', 'grüne', 'rote', 'gelbe', 'moderne', 'antike'];
const objects = ['Freunde', 'Kuchen', 'Autos', 'Computer', 'Lampen', 'Glasflaschen', 'Telefone', 'Werkzeuge', 'Bilder'];

const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
console.log('randomSubject', randomSubject);
let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
console.log('randomVerb', randomVerb);


function cutLastChar(string) {
    const newLength = string.length - 1;
    return string.slice(0, newLength);
}
// console.log(cutLastChar(verbs[1]));