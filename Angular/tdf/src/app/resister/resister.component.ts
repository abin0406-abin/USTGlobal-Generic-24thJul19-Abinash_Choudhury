import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent implements OnInit {
  
  constructor() { }

  get uname(){
    return this.ResisterForm.get('uname');
  }
  get email(){
    return this.ResisterForm.get('email');
  }
  get mob(){
    return this.ResisterForm.get('mob');
  }
  get pwd(){
    return this.ResisterForm.get('pwd');
  }
  ResisterForm = new FormGroup({
    uname: new FormControl('',[Validators.minLength(4),Validators.required]),
    email: new FormControl('',[Validators.email,Validators.minLength(5),Validators.required]),
    mob: new FormControl('',[Validators.minLength(10),Validators.maxLength(11)]),
    pwd: new FormControl('',[Validators.minLength(5),Validators.required,Validators.pattern('abin0406')])
  });
  showForm(ResisterForm){
    console.log(ResisterForm.value);
    ResisterForm.reset();
  }
  ngOnInit() {
  }

}
