
function repeatHello(callback){
 setInterval(callback,1000);
}

const printHello = () => console.log('hello');

repeatHello(printHello);