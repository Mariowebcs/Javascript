
function printAsyncName(callback,str){
    setTimeout(() => {
        callback();        
    }, 1000);
    
    setTimeout(() => {
        console.log(str);
    }, 3000);
}

printAsyncName(() => console.log('hello'), 'Mario');

/* we need to use an arrow function as a 
callback because with it we can write less code and have the same result
and because with an arrow function we can pass it as a function parameter
without first declare it as a normal function*/