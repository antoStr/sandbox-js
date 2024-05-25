x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

//Somma
const somma = x + y;
const outSomma  = `${x} + ${y} = ${somma}`;
console.log(outSomma);

//differenza
const diff = x - y;
const outDiff  = `${x} - ${y} = ${diff}`;
console.log(outDiff);

//Prodotto
const prod = x * y;
const outProd  = `${x} * ${y} = ${prod}`;
console.log(outProd);

//Divisione
const div = x / y;
const divRound = div.toFixed(2);
const outDiv  = `${x} / ${y} = ${divRound}`;
console.log(outDiv);

//Percentuale
const perc = x % y;
const outPerc  = `${x} % ${y} = ${perc}`;
console.log(outPerc);


/*


sum = x + y;
dif = x - y;
prod = x * y;
quot = x / y;
rm = x % y;

console.log('Sum is equal to:', sum);
console.log('Difference is equal to:', dif);
console.log('Product is equal to:', prod);
console.log('Quotient is equal to:', quot);
console.log('Remainder is equal to:',' - ', rm, x, y);

*/