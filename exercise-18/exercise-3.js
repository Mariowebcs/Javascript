class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromObject(obj){
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.Person = new Person(this.firstName,this.lastName);
    return this.Person;
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};


const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);

console.log(Person.fromObject(obj));

