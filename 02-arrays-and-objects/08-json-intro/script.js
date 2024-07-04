const post = {
    id: 1,
    title: 'Ciccino al forno',
    body: 'Mortis r35 ton8',
};

//js to JSON
const str = JSON.stringify(post);
// per accedere alle proprieta' non puoi farlo da qui ma devi fare prima il parse
// es. console.log(str.id);  ===  undefined
// se fai il parse e poi riprovi avrai 1


//Parse JSON
const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: 'Ciccino al forno',
        body: 'Mortis r3 ton8',
    },
    {
        id: 2,
        title: 'ALA forno',
        body: 'Mortis r35 ton8',
    },
    {
        id: 3,
        title: 'Ciccino al forno',
        body: 'Dubbio r35 ton8',
    }
];

const str2 = JSON.stringify(posts);


console.log(str2);