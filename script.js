/*------------------------------------------------------------------------*/
                        /////* SNACK 2 */////

/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

/*
let number1 = prompt("Type a number");
let number2 = prompt("Type another number");

if (number1 > number2) {
    document.writeln(number1 + " is the bigger one");
} else if (number1 < number2) {
    document.writeln(number2 + " is the bigger one");
} else {
    document.writeln("Numbers are equal");
}
*/



/*------------------------------------------------------------------------*/
                        /////* SNACK 2 */////

/* L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

/*
let word1 = prompt("Type a word");
let word2 = prompt("Type another word");

if (word1.length < word2.length) {
    alert("Short word: " +  word1 + ", " + "Long word: " + word2);
} else if (word1.length > word2.length) {
    alert("Short word: " + word2 + ", " + "Long word: " + word1);
} else {
    alert(word1 + " and " + word2 + " have the same lenght");
} */



/*------------------------------------------------------------------------*/
                        /////* SNACK 3 */////

/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


/* method simple */

/*
let number1 = parseInt(prompt("Type first number"));
let number2 = parseInt(prompt("Type second number"));
let number3 = parseInt(prompt("Type third number"));
let number4 = parseInt(prompt("Type fourth number"));
let number5 = parseInt(prompt("Type fifth number"));
let number6 = parseInt(prompt("Type sixth number"));
let number7 = parseInt(prompt("Type seventh number"));
let number8 = parseInt(prompt("Type eighth number"));
let number9 = parseInt(prompt("Type nineth number"));
let number10 = parseInt(prompt("Type tenth number"));

const numbers = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10]
let sumNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    sumNumbers = sumNumbers + numbers[i];
}

document.writeln("The sum of the numbers is: " + sumNumbers);
*/


/* better */

/*
let numbers = [];

for (let i = 0; i < 10; i++) {
    let numbersDigit = parseInt(prompt("Type a number"));
    numbers.push(numbersDigit);
}

let sumNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
}

document.writeln("The sum of the numbers is: " + sumNumbers);
*/


/*------------------------------------------------------------------------*/
                        /////* SNACK 4 */////

/* In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. */

/*
let arrNouns = ["Nick Carraway", "Daisy Buchanan", "Tom Buchanan", "Jordan Baker", "Myrtle Wilson", "George Wilson", "Meyer Wolfsheim", "Catherine", "Owl Eyes", "Dan Cody" ];

let guestName = prompt("Type your name & surname");

let onList = false;

for (let i = 0; i < arrNouns.length; i++) {
    if (guestName.toUpperCase() == arrNouns[i].toUpperCase()) {
        onList = true;
    }
}

if (onList == true) {
    document.writeln("Welcome, " + guestName + " !");
} else {
    document.write("We're sorry Sir but your name is not on the list")
}
*/


/*------------------------------------------------------------------------*/
                        /////* SNACK 5 */////

/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. 
*/

/*
let arrOddNumbers = [];

for (let i = 0; i < 6; i++) {
    let userNumber = parseInt(prompt("Type a number")); 
    if (userNumber % 2 == 1) {
        arrOddNumbers.push(userNumber);
    }
}

document.writeln("These numbers are the odd ones: " + arrOddNumbers);
*/ 


/*------------------------------------------------------------------------*/
                        /////* SNACK 6 */////

/* Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.*/
let number = prompt("Type a 4-digit number");

if (number < 1000 || number > 9999 || number == " ") {
    document.writeln("Please try again and type a 4-digit number");
    
} else {
    let singleNumberFromDIgit = [...number];
    let sumNumbers = 0;

    for (let i = 0; i < singleNumberFromDIgit.length; i++){
        sumNumbers += parseInt(singleNumberFromDIgit[i]);
    }
    document.writeln("The sum of the numbers is: " + sumNumbers);
}