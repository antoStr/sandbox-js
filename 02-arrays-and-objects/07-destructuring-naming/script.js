const firstName = 'Mortis';
const lastName = 'Bringabadu';
const age = '36';

// partendo da proprietà che ho dato posso raggrupparle in questo caso con pg (personaggio) ed ho messo quelle che mi servivano
const pg = {
 firstName,
 lastName,
 age,
};

console.log(pg.age);

// Destructuring

const todo = {
 id: 1,
 title: 'Mamma mia pizzeria',
 user : {
  name: 'Jonno',
 }
};

// const todo = todo.id; ho lo stesso output di quello sotto
const { 
 id: todoId, 
 title, 
 user: { name }, 
} = todo;
// con le { x } sto decostruendo mentre se non metto niente le sto rinominando

// Deconstrucring Arrays
const numeri = [ 21, 19, 92, 10];

// const [ciccio, cappuccio, sembroglio, imbroglio, gianluca] = numeri 

// con ... raggruppo in un array il resto dei numeri
const [primo, secondo, ...rest] = numeri

console.log(primo, secondo, rest);