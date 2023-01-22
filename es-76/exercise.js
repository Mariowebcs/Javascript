const number = 15;

function checkNumber(){
    return new Promise((res,rej)=>{
        if(number>10){
            res(number);
        }else{
            rej(new Error('Number is less or equal than 10'));
        }
    })
}

checkNumber()
    .then((response)=> console.log(response))
    .catch((err)=> console.log(err));