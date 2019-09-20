let result = new Promise(function(resolve,reject){
    if(10===10){
        reject('Failed');
    }
    else{
        resolve('success');
    }
});
result.then((data)=>{
    console.log('Then block = '+data);
}).catch((error)=>{
    console.log('Catch block = '+error);
});
console.log('=============================================');

let employeeData = new Promise(function(resolve,reject){
    const employee = [
        {
            name : 'Shahrukh',
            age : 45
        },
        {
            name : 'Disha',
            age : 26
        },
        {
            name : 'Akshay',
            age : 50
        }
                         ];
    if(10>10){
        reject('Failed');
    }
    else{
        resolve(employee);
    }
});
employeeData.then((data)=>{
    return data;//it will pass the data to another then block.e.g, we have created another then block whose name is data1.
   // console.log('Employee Data = ',data);
}).catch((error)=>{
   // console.log('Catch block = '+error);
}).then(function(data1){
    console.log('This is then block 2 ',data1)
});
