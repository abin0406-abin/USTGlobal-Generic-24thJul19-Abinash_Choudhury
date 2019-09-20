function validateForm1(){
    let formData1 = document.forms[0];
    let firstName = formData1.fname.value;
    if(firstName.length>0){
        console.log('Success');
        formData1.fname.style.border = '0.5px solid grey';
        formData.submit.disabled = false; 
    }
    else{
        formData1.fname.style.border = '2px solid red';
        formData1.submit.disabled = true; 
    }
}
function validateForm2(){
    let formData2 = document.forms[0];
    let lastName = formData2.lname.value;
    if(lastName.length>0){
        console.log('Success');
        formData2.lname.style.border = '0.5px solid grey';
        formData2.submit.disabled = false; 
    }
    else{
        formData2.lname.style.border = '2px solid red';
        formData2.submit.disabled = true; 
    }
}
function validateForm3(){
    let formData3 = document.forms[0];
    let companyName = formData3.cname.value;
    if(companyName.length>0){
        console.log('Success');
        formData3.cname.style.border = '0.5px solid grey';
        formData3.submit.disabled = false; 
    }
    else{
        formData3.cname.style.border = '2px solid red';
        formData3.submit.disabled = true; 
    }
}
function validateForm4(){
    let formData4 = document.forms[0];
    let empID = formData4.empid.value;
    if(empID.length>0){
        console.log('Success');
        formData4.empid.style.border = '0.5px solid grey';
        formData4.submit.disabled = false; 
    }
    else{
        formData4.empid.style.border = '2px solid red';
        formData4.submit.disabled = true; 
    }
}