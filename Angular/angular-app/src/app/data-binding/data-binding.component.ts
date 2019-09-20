import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent  {

  redColor = true;
  Name = 'Abin';
  textClasses = 'bg-primary text-warning';
  paragraphStyle = true ;
  padding = "50px";
  colSpan = 2; 
  imgURL = "https://cdn.pixabay.com/photo/2018/10/16/21/03/slr-camera-3752493_960_720.jpg";

  constructor() { 
    setTimeout(()=>{
      this.redColor = false;
      this.paragraphStyle = false;
    },5000)
  }

}