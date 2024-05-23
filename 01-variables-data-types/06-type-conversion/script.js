let amount = 'ciao';


// STRINGA IN NUMERO (UTILE)
//
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);


// NUMERO IN BOOLEAN
//
// amount = Boolean(amount);


// NUMERO INTERO IN STRINGA
//
// amount = amount.toString();
// amount = String(amount);


// NUMERO DECIMALE IN STRINGA
//
// amount = parseFloat(amount);

// Casi particolari
//
// NaN (Not a number) 
// - quando converto una stringa letterale in numero ex. 'ciao' -> parseInt
// - radice di un numero irrazionale console.log(Math.sqrt(-1))
// - console.log(1 + NaN)
// - console.log(undefined + undefined)
// - console.log('stringa' / 3)


console.log(amount, typeof amount);