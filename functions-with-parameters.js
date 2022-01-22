/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
    return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"
function greeter(name) {
    console.log('Hoi ' + name + '!')
}
greeter('Kees')
greeter('Krijn')




/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380
function minutesToSeconds(minutes, seconds){
    const outcome = minutes * seconds

    return outcome
}
const minuteOne = minutesToSeconds(1, 60)
const minutesThree = minutesToSeconds(3,60)
const minutesTwentyThree = minutesToSeconds(23,60)

console.log(minuteOne)
console.log(minutesThree)
console.log(minutesTwentyThree)

/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"
function merge(a, b) {
    const outcome2 = a + b

    return outcome2
}
const abraCadabra = merge('abra', 'cadabra')
const zoetSappig = merge('zoet', 'sappig')

console.log(abraCadabra)
console.log(zoetSappig)


/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."
function calculateDogYears(dog, human){
    const outcome3 = "Jouw hond is " + dog * human + " Jaar oud in mensenjaren"

    return outcome3
}
const dogAge6 = calculateDogYears(6, 7)
const dogAge2 = calculateDogYears(2, 7)

console.log(dogAge6)
console.log(dogAge2)

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"
function wrapper(character1, word, character2){
    const outcome4 = character1 + word + character2

    return outcome4
}

const glasses = wrapper('*', 'bril', '*')
console.log(glasses)
/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."
function createDetailString(firstName, lastName, profession){
    const outcome5 = 'Het beroep van ' + firstName + ' ' + lastName + ' is ' + profession + '.'

    return outcome5
}
const jan = createDetailString('Jan', 'Jansen', 'docent')
const kees = createDetailString('Kees', 'Klaasen', 'brandweerman')

console.log(jan)
console.log(kees)
