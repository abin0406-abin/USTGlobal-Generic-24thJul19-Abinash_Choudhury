function validate(){
   let employeeData = document.forms['employeeForm'];
   let empPassword =  employeeData.pass.value;
   let empCPassword = employeeData.cpass.value;
   if(empPassword ==='' && empCPassword ===''){
       return false;
   }
   else if( empPassword ===  empCPassword){
       alert('Success');
       return true;
   }
   else{
       alert('Password not Matching!');
       return false;
   }
}
