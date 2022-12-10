class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    if (typeof age === "number") {
      this._age = age;
    } else {
      this._age = Number(age);
    }
  }

  set firstName(value) {
    if (typeof value === "string") {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(value) {
    if (typeof value === "string") {
      this._lastName = value;
    } else {
      this._lastName = "";
    }
  }

  get lastName() {
    return this._lastName;
  }

  set age(value) {
    if (value < 1) {
      this._age = 1;
    } else if (value > 110) {
      this._age = 110;
    } else {
      this._age = value;
    }
  }

  get age() {
    return this._age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
