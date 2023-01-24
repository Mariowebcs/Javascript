const user = {
  id: 1,
  name: "John",
  age: 25,
};



function addLocalData(obj){
  const json = JSON.stringify(obj);
  localStorage.setItem('user', json);
}

addLocalData(user);
const getData = JSON.parse(localStorage.getItem('user'));
console.log(getData);