// Per aprire la console = F12, inspector
// Per pulire la console = clear(); oppure CTRL+L

console.log(100);

// Console è un oggetto e quindi ha proprietà e metodi (log) e per eseguire una funzione o un metodo uso le parentesi quindi:
// Console => oggetto che ha bisogno di un metodo => uso il . per dire che deve utilizzare un metodo => log il metodo che vado ad utilizzare => () uso le parentesi per eseguire il metodo o una funzione.

console.log('Ciao')

// Le stringhe devono avere i ' '
// Posso fare più log nella parentesi utilizzando la , 

console.log(100, 'ciao', false);

const x = 100;

// Con l'estensione ES6 snippets posso fare clg per scrivere console.log() più velocemente

console.log(x);

//Tipi di console log

console.error(22);

console.warn('attenzion');

console.table({ name: 'Tizio', surname: 'Sembroglio', email: 'tizio.sembroglio@gmail.com' });

// creare un gruppo di comandi nella console, uso console.group() dandogli un nome con una stringa e metto tutte i log uno sotto l'altro senza spazi. Quando ho finito scrivo alla fine console.groupEnd;

console.group('semplice');
const a = 11;
console.log(a);
console.error('Questo è un errore');
console.warn('Questo è un avvertimento');
console.groupEnd;

// Aggiungere css nella console 

const style = 'padding: 10px; background-color: #101010; border-radius: 20px; font-family: sans-serif; color: black'

console.log('%cCiao mondino');