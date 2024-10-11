/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

const printPets = function(array) {
  
  pets.forEach(array => console.log(array));
}

printPets(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const sortPets = function(array2) {

  array2.sort();
  console.log(array2);
}

sortPets(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const reversePets = function(array3) {
  const pets = ['dog', 'cat', 'hamster', 'redfish'];
  array3.reverse();
  console.log(array3);
}

reversePets(pets);


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const moveFirstToLast = function(array4) {
  const firstPet = array4.shift(); 
  array4.push(firstPet);  
  console.log(array4);
}

moveFirstToLast(pets);



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const addLicensePlate = function(carz) {
  
  carz.forEach(car => {
    car.licensePlate = 'TN95ERF12';
  });

  console.log(carz);
}

addLicensePlate(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const modifyCars = function(carz2) {
 
  const newCar = { brand: 'Tesla', model: 'Model 3', color: 'white', trims: ['standard', 'long-range'] };
  carz2.push(newCar);

  carz2.forEach(car => {
    car.trims.pop();
  });

  console.log(carz2);
}

modifyCars(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

const saveJustTrims = function(carz3) {

  const justTrims = [];

  carz3.forEach(car => {
    justTrims.push(car.trims[0]); 
  });

  console.log(justTrims);
}

saveJustTrims(cars);





/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

const fizzBuzzCars = function(carz4) {


  carz4.forEach(car => {
    if (car.color[0] === 'b') {
      console.log('Fizz');
    } else {
      console.log('Buzz');
    }
  });
}

fizzBuzzCars(cars);




/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/


const conta32 = function() {
  const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
  
  let i = 0;
  while (numericArray[i] !== 32) {
    console.log(numericArray[i]);
    i++;
  }
  console.log(32);  
}

conta32();



/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

// Array di input
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

const getPositionInAlphabet = function(char) {
    let position;

    switch (char) {
        case 'a': position = 1; break;
        case 'b': position = 2; break;
        case 'c': position = 3; break;
        case 'd': position = 4; break;
        case 'e': position = 5; break;
        case 'f': position = 6; break;
        case 'g': position = 7; break;
        case 'h': position = 8; break;
        case 'i': position = 9; break;
        case 'l': position = 10; break; 
        case 'm': position = 11; break;
        case 'n': position = 12; break;
        case 'o': position = 13; break;
        case 'p': position = 14; break;
        case 'q': position = 15; break;
        case 'r': position = 16; break;
        case 's': position = 17; break;
        case 't': position = 18; break;
        case 'u': position = 19; break;
        case 'v': position = 20; break;
        case 'z': position = 21; break;
        default: position = null; 
    }

    return position;
};

const getPositionsArray = function(charsArray) {
    const positionsArray = [];

    for (let i = 0; i < charsArray.length; i++) {
        const position = getPositionInAlphabet(charsArray[i]);
        positionsArray.push(position);
    }

    return positionsArray;
};

const positionArray = getPositionsArray(charactersArray);

// Stampa il risultato
console.log(positionArray); 