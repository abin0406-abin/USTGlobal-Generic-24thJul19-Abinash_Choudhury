function sum(a,b){
    function addsum(){
        return a+b;
    }
    return addsum;
}
var addFunc = sum(10,20);
var total = addFunc();
console.log('Total ',total);
console.log("                         ");
console.log("=========================");
console.log(window);
console.log(this);
console.log(this===window);
var name="Abin";
console.log(window.name);
console.log("                         ");
var person={
    name: 'Virat',
    age: 32,
    getName: function(){
        console.log('GetName method  =',this.name);
        console.log(window);
        getData();
        function getData(){
            console.log('Get data method =',this.name);
        }
        return this.name;
    }
}
var a = person.getName();
console.log('Name = '+a);
console.log("=========================");
console.log("                         ");
console.log("=========================");
for (var i=0;i<5;i++){
    console.log("Value of i  = ",i);
}
console.log("Value of i outside for loop= ",i);
for (let j=0;j<6;j++){
    console.log("Value of j  = ",j);
}
//console.log("Value of j outside for loop= ",j);
console.log("=========================");
console.log("                         ");
console.log("=========================");
console.log("var keyword");
console.log("-----------");
var hobbies = ['a','b','c'];
console.log('Hobbies ',hobbies);
var hobbies = ['numismatics'];
console.log('Hobbies ',hobbies)
hobbies=['Photography'];
console.log('Hobbies ',hobbies)
console.log("                         ");

console.log("let keyword");
console.log("-----------");
let fruits = ['x','y','z'];
console.log('fruits ',fruits);
fruits = ['MANGO'];
console.log('fruits ',fruits);//POSSIBLE
// let fruits = ['MANGO'];//NOT POSSIBLE
// console.log('fruits ',fruits);
console.log("                         ");

console.log("const keyword");
console.log("-------------");
const items = ['p','q','r','s'];
console.log('ITEMS = ',items);
// const items = ['p','q','r','s'];//Not Possible
// console.log('ITEMS = ',items);
// items = ['t'];
// console.log('ITEMS = ',items);
items [0] = ['t'];//Possible
console.log('ITEMS = ',items);

console.log('ITEMS[0] = ',items[0]);




