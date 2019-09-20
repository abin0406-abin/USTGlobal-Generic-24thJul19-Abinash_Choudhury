var todaysDate=new Date();
console.log(todaysDate);

var todaysDate1=new Date(0);//show 1970 jan 1's millisecond
console.log(todaysDate1);

var Date2=new Date("October 2,2014 11:35:00");
console.log(Date2);

var Date3=new Date(2019,11,24,10,33,30,0);
console.log(Date3);





//Methods
var year = todaysDate.getFullYear();
console.log(year);
var mnth= todaysDate.getMonth();
console.log(mnth);
var day=todaysDate.getDay();
console.log(day);
var hour=todaysDate.getHours();
console.log(hour)

var mnth=['jan','feb','mar','apr','may','june','jul','aug',
          'sept','oct','nov','dec'];
var day= ['sun','mon','tue','wed',
          'thu','fri','sat'];

console.log("Month: "+mnth[todaysDate.getMonth()]);
console.log("Day: "+day[todaysDate.getDay()]);
console.log("===========================");

console.log(Math.PI);
console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));
console.log(Math.round(4.5));
console.log(Math.pow(4,5));
console.log(Math.max(1,9,66,854,3265,659));
console.log(Math.random());/*0-1*/ 

console.log("Number is:  "+Math.ceil(Math.random()*100));/*1-100 */
console.log("===========================");

var numValue = 10;
var numValue1 = '10';
if(numValue == numValue1){
    console.log("Equal");
}
else{
    console.log('NotEqual');
}
console.log("+++++++++++++++");

if(numValue === numValue1){
    console.log("Equal");
}
else{
    console.log('NotEqual');
}

console.log("===========================");
console.log("TYPE OF THE DATA");
console.log("===========================");


console.log(typeof numValue);
console.log("************")
console.log(typeof mnth);
console.log("************")
var num2;
console.log(typeof num2);
console.log("************")
var num3=null;
console.log(typeof num3)

console.log("===========================");
console.log("TERNARY OPERATOR");
console.log("===========================");
var age=29;
var isAge = (age>21)?'Greater':(age===21)?'Equal':'Lesser'
console.log(isAge);

console.log("===========================");
console.log("--Storing of complex data in ARRAY--");
console.log("===========================");
var emp=[
{
    nm: 'Varun',
    age : 29
},
{
    nm:'Disha',
    age : 26
},
{
    nm:'Subash',
    age : 128
}
]
for(var i=0;i<emp.length;i++){
    console.log(emp[i]);
}
console.log("=======================")
console.log("forOf");
console.log("------")

var hobbies=['Photography','Painting','Travelling'];
for (const value of hobbies) {
    console.log(value);
}
console.log("=======================")

console.log("forin");
console.log("------")
var day= ['sun','mon','tue','wed',
          'thu','fri','sat'];
for (const index in day) {
    console.log(day[index]);
}






