class Person {
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

    greeting(){
      return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
      const dif = Date.now() - this.birthday.getTime();
      const ageDate = new Date(dif);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
      this.lastName = newLastName;
    }

    static addNumbers(x, y){
      return x + y;
    }
}

const mary = new Person('Pam', 'Quiros', '2-12-1997');

mary.getsMarried('Ureña');

console.log(mary);

console.log(Person.addNumbers(1,2));

