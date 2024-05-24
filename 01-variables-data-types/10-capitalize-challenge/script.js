// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

// 1 const myNewString = myString.replace('d','D');

const myNewString = myString.toUpperCase().substring(0,1) + myString.substring(1);

console.log(myNewString);