/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro ? Abbiamo visto qualcosa di particolare che possiamo usare ?

Consigli del giorno:
 - 1 Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 - 2 Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
     
BONUS 1:
    Crea un container nel DOM, aggiungendo(attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
    Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
    Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/



//Container declaration
const container = document.querySelector('.container');

// For loop application
for (let i = 1; i <= 100; i++) {
    //creation of generic div
    let square = document.createElement('div');

    // square class application
    square.classList.add('square');

    // x variable declaration (for change number in text)
    let x = i;

    // multipler of 15
    if (i % 15 === 0){
        //change value of x in txt
        x = 'FizzBuzz';
        // class fizzbuzz application
        square.classList.add('fizzbuzz');
        console.log('fizzbuzz');
    // multipler of 3
    } else if (i % 3 === 0) { 
        //change value of x in txt
        x = 'Fizz'
        // class fizz application
        square.classList.add('fizz');
        console.log('fizz');
    // multipler of 5
    } else if (i % 5 === 0) {
        //change value of x in txt
        x = 'Buzz'
        // class buzz application
        square.classList.add('buzz'); 
        console.log('buzz');
    } else {
        console.log(i);
    }
    // Print output on display
    container.append(square);
    square.append(x);
};