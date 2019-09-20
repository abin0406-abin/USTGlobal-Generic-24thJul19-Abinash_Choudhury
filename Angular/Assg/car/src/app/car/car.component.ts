import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/firebase.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

@NgModule({
  imports:
    [
      FormsModule,
    ]
})
export class CarComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router) { }
  postUser(userForm: NgForm) {
    if (userForm.value.id) {
      this.firebaseService.updateData(userForm.value).subscribe(resData => {
        console.log(resData);
        this.firebaseService.getData();
        userForm.reset();
        this.router.navigateByUrl('car-detail');
      }, err => {
        console.log(err);
      })
    } else {
      this.firebaseService.postData(userForm.value).subscribe(data => {
        console.log(data);
        this.firebaseService.getData();
        userForm.reset();
        this.router.navigateByUrl('car-detail');
      }, err => {
        console.log(err);
      })
    }
  }

  ngOnInit() {
  }

}

