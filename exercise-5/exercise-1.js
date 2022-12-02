const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({},person1);

// FOR METHOD----------------------
// const person2 = {};
// for (let key in person1) {
//   person2[key] = person1[key];
// }
//----------------------------------------

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";
console.log(person1);
console.log(person2);
