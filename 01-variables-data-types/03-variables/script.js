// Ways to declare a variable
// var, let, const

// Var e let sono piu' o meno la stessa cosa

let nome = 'Luca';

let cognome = 'Giovanni';

console.log(nome, cognome);

let age = 31;

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase

console.log(age);

age = 333;
console.log(age);

// Let e' una variabile riassegnabile 
// Const e' una costante non riassegnabile

const x = 2;
console.log(x);

const arr = [1, 2, 3, 4];

// console.log(arr);
// arr = [2, 3, 4, 5, 6]
// console.log(arr);
//                 ↑
//                 ↑
// Non posso farlo poiche' riassegno una costante ma posso pushare l'array con un suo metodo riaggiornandolo

arr.push(5);

console.log(arr);

const person = {
    name: 'Gigio',
};

person.name = 'Giano';
person.email = 'gigino.gigetto@sottoaletto.oof';

console.log(person);

// Ho utilizzato un metodo per aggiornare una costante

let a,b,c;

const d = 10, 
    e = 20, 
    f = 30;
console.log(f);

console.log(a);
// Dice undefined perche' non l'abbiamo assegnata