let x;

// per creare un oggetto per quello che ho capito lo puoi fare in questi due modi che ti lasciano in output un oggetto
// const todo = {};


// creo un costrutto oggetto con proprieta'
const todo = new Object;

todo.id = 1;
todo.name = 'la mia lista';
todo.completed = false;

// x = todo;

const person = {
 address: {
  cords: {
   lat: 31.28937,
   lng: 71.09189,
  },
 },
}; // ricordati il punto e virgola alla chiusura e la virgola nel mezzo etc (:

// per accedere alle proprietà dell'oggetto uso il punto e procedo
x = person.address.cords.lng;

// per creare un oggetto con proprietà 
const obj1 = { a: 1, b: 'cicci'}; 
const obj2 = { c: 99, d: 3}; 

// unione di due oggetti in un oeggetto
const obj3 = { obj1, obj2};

// unione di proprietà di più oggetti in un oggetto 
const obj4 = { ...obj1, ...obj2 };
// fa la stessa cosa di questo di sopra, crea un oggetto vuoto ed aggiunge da solo le proprietà degli oggetti nel nuovo oggetto
const obj5 = Object.assign({}, obj1, obj2);

const todos = [
 {id:1, name: 'Fare Mortis rank 35'},
 {id:2, name: 'Allenare il trachi'},
 {id:3, name: 'Dailis su gienscin'},
];

// faccio un log dell'array in generale
x = todos;

// Ho trasformato l'oggetto di prima con le sue proprietà in un array
x = Object.keys(todo);

// non posso vedere la lungezza dell'array
x = todo.length;

//metodi per verifica utili

// quante robe ci sono dentro
x = Object.keys(todo).length;

// mostra i valori che compongono quell array
x = Object.values(todo);

// mostra gli array con gli attributi che lo compongono
x = Object.entries(todo);

// vedo se quell'oggetto ha la proprietà che cerco 
x = todo.hasOwnProperty('name'); // todo ha una proprietà chiamata nome

x = todo.hasOwnProperty('cicci'); // todo non ha una proprietà chiamata cicci

console.log(x);