//Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('symb2');

// console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${sym1}`);

//Unique obcject
const Key1 = Symbol();
const Key2 = Symbol('symb2');

const myObj = {};

myObj[Key1] = 'Prop1';
myObj[Key2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[Key1]);
// console.log(myObj[Key2]);

// //Symbol are not enumerable in for... in
// for(let i  in myObj){
//     console.log(`${i}: ${myObj[i]}`);
// }

//Symbol are ignore by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));