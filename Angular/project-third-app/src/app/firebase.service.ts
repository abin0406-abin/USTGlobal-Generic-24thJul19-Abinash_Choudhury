import { Injectable, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements DoCheck {
  url = "https://abin-http.firebaseio.com/";

  selectedUser: User = {
    name: null,
    email: null,
    mobile: null,
    id: null
  };
  constructor(private http: HttpClient) { }

  users = [];

  getData() {
    this.http.get(`${this.url}users.json`).pipe(map(resData => {
      let usersArray = [];
      for (let key in resData) {
        usersArray.push({ ...resData[key], id: key });//'...' means spread operator,
        //      which is used to concatinate multiple objects.
      }
      return usersArray;
    })).subscribe(data => {
      this.users = data;
    }, err => {
      console.log(err);
    });
  }

  postData(data) {
    return this.http.post(`${this.url}users.json`, data);
  }

  //to update data
  updateData(data) {
    return this.http.put(`${this.url}users/${data.id}.json`, data);
  }

  //to delete data
  deleteData(data) {
    return this.http.delete(`${this.url}users/${data.id}.json`);
  }

  ngDoCheck() {
    this.getData();
  }
}
