import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  condition = false;
  
users = [
  {
    id: 1234,
    name: 'Abin',
    city: 'Puri'
  },
  {
    id: 4321,
    name: 'Nikhil',
    city: 'Bhubaneswar'
  },
  {
    id: 2341,
    name: 'Balakrishna',
    city: 'Baripada'
  },
  {
    id: 5467,
    name: 'Dipa',
    city: 'Cuttack'
  }
]
  constructor() { }
  removeUser(user){
    let index = this.users.indexOf(user);
    this.users.splice(index, 1); 
    this.condition =true;
  }
  ngOnInit() {
  }

}
