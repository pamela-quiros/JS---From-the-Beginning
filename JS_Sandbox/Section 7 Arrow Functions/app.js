// const sayHello = function(){
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

//One line function does not need braces
// const sayHello = () => console.log('Hello');

//One line returns
// const sayHello = () => 'Hello';

//Sames as above
// const sayHello = function(){
//     return 'Hello';
// }

//Return Objects
// const sayHello = () => ({msg: 'Hello'});

//Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

//More than one param
// const sayHello = (firstName, LastName) => console.log(`Hello ${firstName} ${LastName}`);

// sayHello('Pamela', 'Quirós');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name){
//     return name.length;
// });

//Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

//Shorest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);