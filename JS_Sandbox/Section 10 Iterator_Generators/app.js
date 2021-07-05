// //Iterator 
// function nameIterator(names){
//   let nextIndex = 0;

//   return {
//     next: function(){
//       return nextIndex < names.length ? 
//       {value: names[nextIndex++], done: false} :
//       {done: true}
//     }
//   }
// }

// //Create an array of name
// const namesArr = ['Jack', 'Jill', 'John']
// //Init iterator and pass in the same array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

//Generators
// function* sayNames(){
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());

//Id creator
function* createIds(){
  let index = 1;

  while(true){
    yield index ++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



