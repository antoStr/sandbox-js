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
arr.reverse();

// Controlla se c'è o non c'è un valore
x = arr.includes(7);

// Restituisce il valore della posizione es. n^5 = 4^a posizione
// -1 significa che non esiste
x = arr.indexOf(5);

// taglia una porzione dell'array
// solo un valore prende i valori seguenti al valore della posizione che gli diamo
x = arr.slice(1,4);

// taglia una porzione di array cambiando anche il vecchio
// x = arr.splice(2,4);

// taglia un elemento (pos. 2 e ne taglio 1 solo) anche dall'array iniziale
// x = arr.splice(2, 1);

// taglia una porzione, reversa, converte in stringa e restituisce un valore con charAt che è una funzione per le stringhe
x = arr.splice(1,4).reverse().toString().charAt();

console.log(x);