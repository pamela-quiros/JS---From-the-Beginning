const firstName = 'Pamela';
const lastName = 'Quiros';
const age = 24; 
const str = 'Hello there my name is Pamela';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello my name is ' + firstName + ' and I am ' + age;

//Escaping
val = 'That\'s awesome, I can\'t wait';

//Length
val = firstName.length;

//Concat()
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

//Index of
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

//ChartAt()
val = firstName.charAt(2);
//Get last char
val = firstName.charAt(firstName.length-1);

//Substring()
val = firstName.substring(0,4);

//Slice
val = firstName.slice(0,4);
val = firstName.slice(-3);

//Split()
val = str.split(' ');
val = tags.split(',');

//relplace()
val = str.replace('Pamela', 'Shirley');

//Includes()

console.log(val);