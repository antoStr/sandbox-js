let x;
let d = new Date();

x = d.toString();  

x = d.getTime();      // timestamp of the day in millisecond
x = d.valueOf();      // timestamp of the day in millisecond

x = d.getFullYear();     // anno corrente in base alla data
x = d.getMonth();        // mese corrente in base alla data - i mesi iniziano da zero (Gennaio = 0)
x = d.getDate();         // giorno corrente in base alla data
x = d.getDay();          // giorno della settimana
x = d.getHours();        // ora in base alla data 
x = d.getMinutes();      // minuti in base alla data
x = d.getSeconds();      // secondi in base alla data
x = d.getMilliseconds(); // millisecondi in base alla data

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);  //  Formattazione con Intl, fa praticamente quello che fa la funzione sopra (Questo per esempio e' americano)
x = Intl.DateTimeFormat('it-IT').format(d);  // Questo e' italiano
x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);  // Posso selezionare il mese ed il formato

x = d.toLocaleString('default', {month: 'short'});  // Simile a quella di prima 
x = d.toLocaleString('defautl', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
});
console.log(x);