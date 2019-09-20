let employeeJSON = {
                      name : 'Dinga',
                      age : 24,
                      hobbies : ['Photography','Numismatics']
                   }
console.log(`My name is ${employeeJSON.name}`);
console.log(employeeJSON);
let  jsonObject = JSON.stringify(employeeJSON);//TO convert the javascript object to json object
console.log(jsonObject);
let  jsObject = JSON.parse(jsonObject);//TO convert the json object to javascript object
console.log(jsObject);

//let {name, age, hobbies} = employeeJSON; //TO show the element of the object