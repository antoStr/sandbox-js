/* TIPI DI DATI PRIMITIVI


String = Sequenza di caratteri

Number = Numeri interi o con punto

Boolean = si o no

Null = significa che è nullo (Valore apposta fatto nullo)

Undefined = significa che non è definito (Valore non fatto apposta)

Symbol = costrutti che ritornano ad un simbolo (advanced)

BigInt = numeri grandi che il valore number non può controllare.

Reference Types = Objects
Sono valori che assegnamo ad un valore non primitivo come una variabile oppure un array, funzioni etc.
*/


// Stringa
const nome = 'Ciccio';

// Numero
const age = 21;
const temp = 22.1;

// Boolean
const hasKids = false;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 288923793287n;

// Reference Types
const numbers = [1, 2, 3, 4]

const person = {
    nome: 'Gigio',
};

function sayHello() {
    console.log('Hello');
};

const output = sayHello;

// aggiungo type of per verificare che tipo di cacata è

console.log(output, typeof output);