
let x;

const person = {
    name:'John Doe',
    age:'20',
    isAdmin:true,
    address: {
        street: 'via delle vie 17',
        city: 'Bitetto',
        state: 'PA',
    },
    hobbies: ['music', 'sport'],
}

x = person.name;
x = person['age'];
x = person.hobbies[0];

// aggiornamento nome ed admin
person.name = 'Gino Doe';
person['isAdmin'] = false;

// eliminare qualcosa
delete person.age;

// aggiungere qualcosa
person.hasChildren = true;

// inserimento funzione
person.greet = function () {
    console.log(`Hello my name is ${this.name}`);
}

person.greet();

// sconsigliato
const person2 = {
    'first name': 'Brad',
    'last name': 'Attraversato',
};

x = person2['first name'];

console.log(x);