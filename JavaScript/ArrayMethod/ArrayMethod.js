console.log("==============================")
console.log("ForEach Method")
console.log("--------------")
var hobbies=['Photography','Carrom','MonoActing','Dancing'];
console.log("Hobbies");
console.log("-------");
hobbies.forEach(function(value,index){
    if(value.length>=7)
        console.log(value);
    
});
console.log("==============================")

console.log("                              ");
console.log("==============================");
console.log("Variable Hoisting");
console.log("-----------------");
console.log(Name);
var Name='Jhon';
console.log("USING FUNCTION:-");
function getAge(){
    console.log(age);
    var age=22;
    console.log(age);    
}
getAge();
console.log("FUNCTION declaration also hoisted to top but not as function as a variable. e.g., ");
console.log("==================================================================================");
console.log("                                                                                  ");
console.log("==================================================================================");
console.log("Methods of ARRAY");
console.log("----------------");
var Hobbies=['Photography','Carrom','MonoActing','Dancing','numismatics'];

var checkArray = Array.isArray(Hobbies);//check is arrayor not
console.log("Is Array = "+checkArray);
console.log("---------------------------------------------------------------------------------");

var checkIncludes = hobbies.includes('Dancing');//check element is there or not
console.log("Includes = "+checkIncludes);
console.log("---------------------------------------------------------------------------------");

Hobbies.push('Kabadi','Vollyball');//add in last
console.log("Hobbies after push "+Hobbies);
console.log("---------------------------------------------------------------------------------");

Hobbies.pop();//remove from last
console.log("Hobbies after pop "+Hobbies);
console.log("---------------------------------------------------------------------------------");

Hobbies.unshift('Swimming');//add in first
console.log("Hobbie after unshift "+Hobbies);
console.log("---------------------------------------------------------------------------------");

Hobbies.shift();//remove from first
console.log("Hobbie after shift "+Hobbies);
console.log("---------------------------------------------------------------------------------");

Hobbies.splice(1,2,'BasketBall')//adding and removing the elements syntax: (from which element,how many element,'add')
console.log("Hobbie after splice "+Hobbies);
console.log("---------------------------------------------------------------------------------");

var slice1 = Hobbies.slice(1,3)//modify and create another array(fromwhere,towhere)
console.log("New array is "+slice1)
console.log("---------------------------------------------------------------------------------");

var string= Hobbies.join('_');//convert the array into string
console.log("Array after converted into a String: "+string)
console.log("---------------------------------------------------------------------------------");

var ind = Hobbies.indexOf('Photography');//shows the index of the element
console.log("Index of the element is "+ind);
console.log("---------------------------------------------------------------------------------");

var numbers=[10,20,30,40,50,60];
var numbers1=[];
for(var i;i<numbers.length;i++){
    if(numbers[i]>20){
        numbers1.push(numbers[i]);
    }
};
var numbers1 = numbers.map((value,index)=>{
    value = value+10;
    return value;
});
console.log("After push numbers1[] = "+numbers1);
var numbers2=numbers.filter(function(value){
    return value>10;
});
console.log("After filter numbers2[] = "+numbers2)
console.log("---------------------------------------------------------------------------------");

var item=[{
    name: 'shoe',
    price: 2500,
    id: 1
},
{
    name: 'WristWatch',
    price: 3500,
    id: 2
},
{
    name: 'sunglass',
    price: 3000,
    id: 3
},
{
    name: 'cap',
    price: 50,
    id: 4
}]
var mapped = item.map(function(item){
    item.price=item.price+100;
    return item.price;
})
console.log("Item "+mapped);

var afterfilters = item.map(function(item){
    var itemfilter = item.price>100 && item.name.length>5;
    return itemfilter;
});
console.log("Afterfilter : "+afterfilters);
