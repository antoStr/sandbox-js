let x;
const arr = [1, 2, 3, 4, 5];

// Aggiungere in un array
arr.push(100, 'ciaoarr.pop();');

// Eliminare ultimo elemento
arr.pop();

// Aggiungere all'inizio 
arr.unshift(99);

// Eliminare elemento dell'inizio
arr.shift();

// Capovolge o reversa l'array
arr.reverse();

// Controlla se c'è o non c'è un valore
x = arr.includes(7);

x = arr.indexOf(8);
console.log(arr, x);