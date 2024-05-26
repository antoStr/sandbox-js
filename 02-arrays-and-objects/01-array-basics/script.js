let x;

// Array Literal
const num = [3, 4, 5, 6];
const mix = [3, 'ciao', true, 1278/0];

// Array Constructor
const frutta = new Array('mela', 'banana', 'pera');


// accesso agli array
x = num[0];
x = num[0] + num[3];
x = `Il mio frutto preferito e' la ${frutta[2]}`;

// grandezza dell'array
x = num.length;
x = frutta.length;

// cambio elemento di un array
frutta[2] = 'ananas';

// riduzione di un array
//  - >  frutta.length = 3;

// Aggiunge come ultimo elemeno in un array
frutta[2] = 'fragola';
frutta[frutta.length] = 'Pino'


x = frutta;

console.log(x);