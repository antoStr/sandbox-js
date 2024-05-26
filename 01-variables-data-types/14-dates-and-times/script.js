
// Data
let a,b,c,d;

d = new Date();  // timestamps in millisecondi

d = new Date(2021, 0, 10, 12, 30, 10);      //  gennaio e' 0
        // anno mese ora  minuti secondi

a = new Date('2021-07-10T12:30:00');        // gennaio e' 1
b = new Date('07/10/2021 12:30:00'); 
c = new Date('2021-07-10');    // questa da problemi se l'orologio non e' settato
d = new Date('07-10-2021');    // questa funziona perche' e' settata come in us

// Tempo

d = Date.now();    // output da una data predefinita
d = new Date('07-10-2021 12:30:00');
d = d.getTime();
d = d.valueOf();

d = new Date(1625913000000);  // preso dall'output del 7 10 2021 12:30

d = Math.floor(Date.now() / 1000);  // in secondi


console.log(d);