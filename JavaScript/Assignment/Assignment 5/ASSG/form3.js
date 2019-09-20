function validform(){
    let formData = document.forms[0];
    let firstName = formData.fname.value;
    let lastName = formData.lname.value;
    let address1 = formData.sadd.value;
    let address2 = formData.sadd1.value;
    let City = formData.city.value;
    let State = formData.state.value;
    let Pin = formData.pin.value;
    let Email = formData.email.value;
    let areacode = formData.phnumber.value;
    let Phone = formData.phnumber1.value;



    if(firstName.length>0 && lastName.length>0 && address1.length>0 && address2.length>0 && City.length>0 && State.length>0 && Pin.length==6 && Email.length>0 && areacode.length>0 && Phone.length>0){
        console.log('Success');
        formData.fname.style.border = '0.5px solid grey';
        formData.lname.style.border = '0.5px solid grey';
        formData.sadd.style.border = '0.5px solid grey';
        formData.sadd1.style.border = '0.5px solid grey';
        formData.city.style.border = '0.5px solid grey';
        formData.state.style.border = '0.5px solid grey';
        formData.pin.style.border = '0.5px solid grey';
        formData.email.style.border = '0.5px solid grey';
        formData.phnumber.style.border = '0.5px solid grey';
        formData.phnumber1.style.border = '0.5px solid grey';
 
    }
    else{
        formData.fname.style.border = '2px solid red';
        formData.lname.style.border = '2px solid red';
        formData.sadd.style.border = '2px solid red';
        formData.sadd1.style.border = '2px solid red';
        formData.city.style.border = '2px solid red';
        formData.state.style.border = '2px solid red';
        formData.pin.style.border = '2px solid red';
        formData.email.style.border = '2px solid red';
        formData.phnumber.style.border = '2px solid red';
        formData.phnumber1.style.border = '2px solid red';

    }
}