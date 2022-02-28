/*------------------------------------------------------------------------*/
                        /////* SNACK 1.1 */////

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
                        /////* SNACK 1.2 */////

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
                        /////* SNACK 1.3 */////

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
                        /////* SNACK 1.4 */////

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
                        /////* SNACK 1.5 */////

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
                        /////* SNACK 1.6 */////

/* Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.*/

/*
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
*/

/*------------------------------------------------------------------------*/
                        /////* SNACK 1.9 */////



/* Calcola la somma e la media dei primi 10 numeri */

/* METHOD WITH FOR */

/*
let sum = 0;
let average = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
    average = sum / i;
}

document.writeln("The sum of the numbers 1-10 is: " + sum);
document.writeln("The average value of the numbers 1-10 is: " + average);
/*


/* METHOD WITH WHILE */

/*
let arrNum = [];

for (let i = 0; i < 10; i++) {
    let userNumbers = parseInt(prompt("Type a number between 1 and 10 !=0"));
    arrNum.push(userNumbers);
}

let sum = 0;
let average = 0;

let i = 0;
while (i < arrNum.length) {
    sum += arrNum[i];
    average = sum / arrNum[i];
    i++;
}

document.writeln("These are your numbers: " + arrNum);
document.writeln("This is their sum: " + sum);
document.writeln("This is the average value of your numbers: " + average);
*/


/*------------------------------------------------------------------------*/
                        /////* SNACK 2.1 */////



/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */


/* METHOD WITH FOR */

/*
let userNumbers = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
    let inputNumbers = parseInt(prompt("Type a number"));
    userNumbers.push(inputNumbers);
    sum += inputNumbers;
}

document.writeln("These are your typed numbers: " + userNumbers);
document.writeln("This is their sum: " + sum);
*/


/* METHOD WITH WHILE */

/*
let userNumbers = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
    let inputNumbers = parseInt(prompt("Type a number"));
    userNumbers.push(inputNumbers);
}

let i = 0;
while (i < userNumbers.length) {
    sum += i;
    i++;
}

document.writeln("These are your typed numbers: " + userNumbers);
document.writeln("This is their sum: " + sum);
*/


/*------------------------------------------------------------------------*/
                        /////* SNACK 2.2 */////



/* Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */


/*
let userNumbers = [];
let inputNumber;
let evenNumbers = [];

while ((inputNumber = parseInt(prompt("Type a number"))) != 0 ) {
    userNumbers.push(inputNumber);
    inputNumber++;
}

document.writeln("These are your typed numbers: " + userNumbers);

for (let i = 0; i < userNumbers.length; i++) {
    
    if (userNumbers[i] % 2 == 1) {
        userNumbers[i] += 1;
        evenNumbers.push(userNumbers[i]);
    } else if (userNumbers[i] % 2 == 0) {
        evenNumbers.push(userNumbers[i]);
    }
}
document.writeln("These are the even numbers; 1 was added to the odd numbers : " + evenNumbers);
*/



/*------------------------------------------------------------------------*/
                        /////* SNACK 2.3 */////



/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati. */


/* METHOD WITH FOR */

/*
let nouns = ["Agostino", "Alberto", "Alessandro", "Alessio", "Alfio", "Alfonso", "Amedeo", "Angelo", "Antonio", "Aurelio"];
let surnames = ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa", "Fontana", "Conti", "Esposito"];
let fullName = [];

for (let i = 0; i < 3; i++) {
    let nameRandom = Math.floor(Math.random() * nouns.length);
    let surnameRandom = Math.floor(Math.random() * surnames.length);
    fullName.push(nouns[nameRandom] + " " + surnames[surnameRandom]);
}

document.writeln("These are your 3 new guests: " + fullName);
*/


/* METHOD WITH WHILE */


let nouns = ["Agostino", "Alberto", "Alessandro", "Alessio", "Alfio", "Alfonso", "Amedeo", "Angelo", "Antonio", "Aurelio"];
let surnames = ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa", "Fontana", "Conti", "Esposito"];
let fullName = [];

let i = 0;
while (i < 3) {
    let nameRandom = Math.floor(Math.random() * nouns.length);
    let surnameRandom = Math.floor(Math.random() * surnames.length);
    fullName.push(nouns[nameRandom] + " " + surnames[surnameRandom]);
    i++;
}

document.writeln("These are your 3 new guests: " + fullName);
