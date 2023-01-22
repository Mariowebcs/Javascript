function sum(...numbers) {
    return numbers.reduce((counter,total)=>
        total += counter
    ,0);
}

console.log(sum(1, 2, 3, 4, 5));

