let x, y, w;
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));



x = 5;                       // questo e' un numero
y = new Number(5);           // questo e' un oggetto

const z = new Number(20);           // creo una costante 20
w = z.toString().length;            // la variabile mi dice quanto e' lunga la costante
w = z.toFixed(3);                   // scrive il numero in cifre in base all'argomento convertendo in stringa
w = z.toPrecision(3)                // approssima per eccesso o difetto in base alle cifre che gli diciamo e converte in stringa
w = z.toExponential(1);             // eleva a potenza e converte in stringa
w = z.toLocaleString('ar-EG');      // scrive il numero in base alla localita' (inconsistente)
w = z.valueOf();
w = Number.MAX_VALUE;               // numero piu' grande utilizzabile
w = Number.MIN_VALUE;               // numero piu' piccolo utilizzabile
console.log(x,w, typeof x, typeof y);

