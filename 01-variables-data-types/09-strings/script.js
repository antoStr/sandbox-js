/*
` (AltGr + ')
~ (AltGr + ì)
À (AltGr + shift + a)
È (AltGr + shift + e)
Ì (AltGr + shift + i)
Ò (AltGr + shift + o)
Ù (AltGr + shift + u)
® (AltGr + r) registered
© (AltGr + c) copyright
*/

let x;

const name = 'Pino';
const age = '3'

x = 'hello my name is ' + name + ' and i am ' + age + ' anni vecchi';

// Template Literals
x = `Hello my name is ${name} and i am ${age}`;

// Proprieta' stringa e metodi

const s = new String('Hello World');

x = typeof s;
// Le proprieta' non hanno bisogno delle parentesi in qunanto tali ma le funzioni e metodi si 
x = s.length;

//  H = 1
//  e = 2
//  l = 3
//  l = 4
//  . . 
x = s[1];   // H
// Seleziona tramite array la corrispondenza fra il numero che cerchi e la stringa da dove lo prende

x = s.__proto__;  // per vedere le proprieta' che possiamo utilizzare 

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);  // <- stessa cosa della roba precedente dell'array

x = s.indexOf('l'); // l'inverso di charAt, ci restituisce un numero corrispondente

x = s.substring(0,4);  // Ci ritorna 'Hell' che sono le prime 4 lettere di Hello World, quindi da 0 a 4
x = s.substring(7);    // Ci ritorna 'orld', pratcamente ha iniziato dal settimo carattere fino alla fine

x = s.slice(-8,-1);      // Simile a substring ma possiamo utilizzare anche i numeri negativi


x = '                   Hello World'
//console.log(x);         // '                 Hello World';
x = s.trim();
//console.log(x);         // 'Hello World';


//          il primo argomento cerca la cosa da sostituire
//             |       il secondo lo rimpiazza con la cosa che vuoi
//             |            |
//             |            |
x = s.replace('World', 'Gigino')

x = s.includes('elli')  // cerca qualcosa e ti dice di si o di no

x = s.valueOf();        // ci dice la primitiva che in questo caso e' una stringa anche se in realta' e' un oggetto (riga 25)

x = s.split(' ');       // ci divide le robe in array tramite l'argomento
x = s.split('');


// IMPORTANTE

/* POSSO USARE PIU' METODI METTENDO UN PUNTO ALLA FINE TIPO:
 const myNewString = myString.toUpperCase().substring(0,1) + myString.substring(1);
*/














console.log(x);