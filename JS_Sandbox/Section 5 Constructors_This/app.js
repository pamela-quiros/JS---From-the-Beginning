//Person constructor
function Person(name, dob){
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const dif = Date.now() - this.birthday.getTime();
    const ageDate = new Date(dif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('Brad', 36);
// const jhon = new Person('Jhon', 30);

// console.log(jhon.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());