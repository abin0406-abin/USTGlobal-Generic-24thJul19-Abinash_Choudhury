function validForm(){
    let formData = document.forms[0];
    let firstName = formData.fname.value;
    let lastName = formData.lname.value;
    let address1 = formData.add1.value;
    let address2 = formData.add2.value;
    let City = formData.city.value;
    let State = formData.state.value;
    let Pin = formData.pin.value;

    if(firstName.length>0 && lastName.length>0 && address1.length>0 && address2.length>0 && City.length>0 && State.length>0 && Pin.length==6 ){
        console.log('Success');
        formData.fname.style.border = '0.5px solid grey';
        formData.lname.style.border = '0.5px solid grey';
        formData.add1.style.border = '0.5px solid grey';
        formData.add2.style.border = '0.5px solid grey';
        formData.city.style.border = '0.5px solid grey';
        formData.state.style.border = '0.5px solid grey';
        formData.pin.style.border = '0.5px solid grey';
        formData.submit.disabled = false; 
    }
    else{
        formData.fname.style.border = '2px solid red';
        formData.lname.style.border = '2px solid red';
        formData.add1.style.border = '2px solid red';
        formData.add2.style.border = '2px solid red';
        formData.city.style.border = '2px solid red';
        formData.state.style.border = '2px solid red';
        formData.pin.style.border = '2px solid red';
        formData.submit.disabled = true; 
    }
}