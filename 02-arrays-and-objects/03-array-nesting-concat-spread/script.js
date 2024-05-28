let x;

const frutta = ['mela', 'pesca', 'arancia'];
const ortaggi = ['carota', 'zucchina'];

// array in un array
//      frutta.push(ortaggi);
// array nested ed x = 3 che e' uguale all'array nested
// dopo aver selezionato l'array, seleziono l'elemento
//      x = frutta[3][0];

const verde = [frutta, ortaggi];

// array generale -> [1] Primo array -> [1] -> primo elemento
x = verde[1][1];

// unisco gli array con concat
x = frutta.concat(ortaggi);

// unisco gli array con spread
// il primo creo in frutta un array nested (ortaggi)
x = [...frutta, ortaggi];
// questo e' identico a concat
x = [...frutta, ...ortaggi];

// Rendo un insieme di array nested in un unico
const arr = [1, 2, 3, [4], 5, [6, 7, 8], 9];
x = arr.flat();

// Metodo statico 
// checka se e' un array
x = Array.isArray(frutta);  //true
x = Array.isArray('ciao');  //false
// trasforma gli elementi della stringa in un array
x = Array.from('12345');

// crea un array con diverse costanti con il metodo array.of
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c);

console.log(x);