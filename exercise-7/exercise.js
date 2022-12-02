function printName (){
    let helloName = "Hello John"
    let inner = () => setTimeout(() => {
        console.log(helloName)
    }, 1000); 
    return inner;
}

printName()();
