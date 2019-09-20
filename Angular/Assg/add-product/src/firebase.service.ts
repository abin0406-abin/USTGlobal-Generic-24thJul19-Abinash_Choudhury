import { Injectable, DoCheck } from '@angular/core';
import { Details } from './app/product-details/details';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService implements DoCheck {
  url: string = 'https://abinproduct.firebaseio.com';

  selectedproduct: Details = {
    img_url: null,
    title: null,
    description: null,
    id:null
  };
  
  constructor(private http: HttpClient) { }
  details = [];

  getData() {
    this.http.get(`${this.url}/details.json`).pipe(map(resData => {
      let usersArray = [];
      for (let key in resData) {
        usersArray.push({ ...resData[key], id: key });
      }
      return usersArray;
    })).subscribe(data => {
      this.details = data;
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
  postData(data) {
    return this.http.post(`${this.url}/details.json`, data);
  }
  updateData(data) {
    return this.http.put(`${this.url}/details/${data.id}.json`, data);
  }
  deleteData(data) {
    return this.http.delete(`${this.url}/details/${data.id}.json`, data);
  }
  ngDoCheck() {
    this.getData();
  }
}