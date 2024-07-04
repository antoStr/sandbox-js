// creo un array con = []
// aggiungo oggetti con {}
const library = [
    //oggetto 1
    {
        title: 'Alessandro rosso',
        author: 'Billi Cancelli',
        status: {
            own: 'true',
            reading: false,
            read: false,
        },
    },
    //oggetto 2
    {
        title: 'Guida per fornelli',
        author: 'Luca Giurato',
        status: {
            own: 'true',
            reading: false,
            read: false,
        },
    },
    //oggetto 3
    {
        title: 'Affogare nei fluidi corporei',
        author: 'Abi Ababbua',
        status: {
            own: 'true',
            reading: false,
            read: false,
        },
    },
];

// dopo aver letto i libri accedo alla proprieta' e metto true poiche' li ho finiti
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// decostruisco l'array in modo da prendermi la variabile del titolo del primo libro da modificare. Se da undefined e' perche' devi selezionare un oggetto nell'array (ci sono 3 oggetti nell'arr library) 
const { title: firstBook } = library[0]; 

// conversione json

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);