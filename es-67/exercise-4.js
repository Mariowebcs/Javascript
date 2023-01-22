function sum(...numbers) {
  return numbers.reduce((counter,total)=> total += counter,0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));