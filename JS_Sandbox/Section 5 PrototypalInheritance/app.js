//PErson constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;

}

//Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Jhon', 'Doe');

console.log(person1.greeting());

//Customer constructor
function Customer(firstName, lastName, phoneNumber, membership){
  Person.call(this, firstName, lastName);
  this.phoneNumber = phoneNumber;
  this.membership = membership;
}

//Inherit the Person prtotype
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create Customer
const customer1 = new Customer('Pam', 'Quiros', '60761584', 'Standard');

console.log(customer1);

//Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;

}

console.log(customer1.greeting());
