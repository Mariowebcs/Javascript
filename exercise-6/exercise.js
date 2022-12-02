
function printName (){
    let helloName = "Hello John";
    let inner = () => {
     console.log(helloName);
    };
    return inner;
}

printName()();
