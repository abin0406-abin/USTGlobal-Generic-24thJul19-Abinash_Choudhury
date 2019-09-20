function validateForm(){
    let formData = document.forms[0];
    // console.log(formData.uname.value);
    let userName = formData.uname.value;
    let passwordValue = formData.pwd.value;
    if(userName.length>4 && passwordValue.length>7){
        console.log('Success');
        formData.uname.style.border = '0.5px solid grey';
        formData.pwd.style.border = '0.5px solid grey';
        formData.loginSubmit.disabled = false; 
    }
    else{
        formData.uname.style.border = '2px solid red';
        formData.pwd.style.border = '2px solid red';
        formData.loginSubmit.disabled = true; 

    }
}
/*function validateForm1(){
    let formData1 = document.forms[0];
    let password1 = formData1.pwd.value;
    if(password1.length>7){
        console.log('Success');
        formData1.pwd.style.border = '0.5px solid grey';
    }
    else{
        formData1.pwd.style.border = '2px solid red';
    }
}*/  