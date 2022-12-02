const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys

// 1 REQUESTED METHOD--------------------------------------
function printKeysValues(array){
  let keys = Object.keys(array);
  let values = Object.values(array);
  let keysLength = Object.keys(array).length;
  for (i=0;i<keysLength;i++){
    console.log(keys[i] + " : " + values[i]);
  }
}

printKeysValues(person);


// 2 FOR IN METHOD -----------------------------------
// for (let key in person) {
//   let value = person[key];
//   console.log(key + " : " + value);
// }----------------------------------------------------

//----------------------------------------------------------