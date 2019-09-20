console.log("===================")
console.log("Named Function")
console.log("===================")

var sumval=sum(10,30);
function sum(num1,num2){
    if(num1!==undefined && num2!==undefined){
        sumvalue=num1+num2;
        //console.log('sum= '+sumvalue)
        return sumvalue;
    }
}
console.log(sumval);

console.log("==========================================")
console.log("Function Expression or Anonymous Function")
console.log("==========================================");

function addData(num3,num4){
        sumvalue1=num3+num4;
        //console.log('sum= '+sumvalue);
        return sumvalue1;
};
var addval = addData(20,30);
console.log("SUM "+addval);

console.log("=============================================")
console.log("Immediately Invoked Explicitly Function(IIFE)")
console.log("                    OR                       ")
console.log("               SelfInvoked                   ")
console.log("=============================================");

(function(num1,num2){
    var sumData=num1+num2;
    console.log("Sum Value is= "+sumData);
}(60,40));

console.log("========================")
console.log("Fat arrow Function")
console.log("========================");

var sumValue=(num1,num2)=>{
    var sumval1=num1+num2;
    return sumval1;
}
var sumValueData=sumValue(50,60);
console.log('VALUE= '+sumValueData);
console.log("========================");
var sumVall=(num1,num2)=>num1+num2;
var a=sumVall(10,15);
console.log('Sum= '+a)

console.log("*+*+*+*+*+*+*+*+*+*+*+*+*");

console.log("========================");
console.log("=======28-07-2019=======");
console.log("========================");

console.log("=======Immutable=======");
console.log("-----------------------");
var message = 'Hello';
console.log(message);
message = message+'World';
console.log(message);
var message1 = message;
console.log(message1);
message = 'HI!';
console.log(message);
console.log(message1);

console.log("=======Mutable=======");
console.log("---------------------");
var person={
    name: 'Kirti Sanon',
    age: 26,
    color: 'White'
}
console.log(person);
person.name = 'Disha Patani';

var person1=person;
person1.name='Sara';
console.log(person);
console.log(person1);

console.log("                              ")

console.log("==============================")
console.log("Named function")
console.log("--------------")
function first(){
    setTimeout(function(){
        console.log('First');
    },1000)
    
}
function second(){
    console.log('Second')
}
first(second);
second();
console.log("                              ")

console.log("==============================")
console.log("Callback function")
console.log("-----------------")
// function first(){
//     setTimeout(function(){
//         console.log('First');
//     },1000)
    
// }
function first(Callback){
    setTimeout(function(){
        console.log('first');
        Callback();
    },1000)
}

function second(){
    console.log('Second')
}
first(second);























