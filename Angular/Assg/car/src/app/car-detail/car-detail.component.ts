import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FirebaseService } from 'src/firebase.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private firebaseService:FirebaseService,
    private router:Router) { }
  updateUser(user)
  {
    this.firebaseService.selectedUser = user;
    this.router.navigateByUrl('car');
  }
  deleteUser(user)
  {
    this.firebaseService.deleteData(user).subscribe(resData =>{
      console.log(resData);
      this.firebaseService.getData();
    })
  }
  ngOnInit() {
    this.firebaseService.getData();
    console.log(this.firebaseService.details);
  }

}
