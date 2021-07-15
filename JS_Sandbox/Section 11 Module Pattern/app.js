//Basic structure

// (function(){
// //decalre private vars and functions

// return {
//   //declare public var and functions
// }
// })();

// //Standard Module Pattern
// const UICtrl = (function(){
//   let text = 'Hello World';

//   const changeText = function(){
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }
//   return {
//     callChangeText: function(){
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);

//Revealing module pattern
const ItemCtrl = (function(){
  let _data = [];

  function add(item){
    _data.push(item);
    console.log('Item Added...');
  }

  function get(id){
    return _data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));
