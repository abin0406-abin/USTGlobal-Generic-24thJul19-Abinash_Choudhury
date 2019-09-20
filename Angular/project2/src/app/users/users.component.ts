import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userDetails:any[] = [];

  constructor(private http:HttpClient) {
    http.get<any>('https://api.github.com/users').subscribe(resData => {
      this.userDetails = resData;
      console.log(this.userDetails);
    })
   }
   
  ngOnInit() {
  }

}
