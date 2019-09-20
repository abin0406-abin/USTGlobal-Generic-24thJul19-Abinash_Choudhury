import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Details } from './flower-details/details';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  url: String = 'https://practice-3fae1.firebaseio.com/';

  flower: Details = {
    name: null,
    img: null
  };
  constructor(private http:HttpClient) { }
  details = [];

  getData(){
    this.http.get(`${this.url}/details.json`).pipe(map(resData=>{
      let usersArray = [];
      for( let key in resData ){
        usersArray.push({...resData[key], id: key});
      }
      return usersArray;
    })).subscribe(data=>{
      this.details = data;
    }, err => {
      console.log(err);
    });
  }
  postData(data) {
    return this.http.post(`${this.url}/details.json`,data)
  }
  updateData(data) {
    return this.http.put(`${this.url}/details.json`,data)
  }
  deleteData(data) {
    return this.http.delete(`${this.url}/details.json`,data)
  }
  ngDoCheck(){
    this.getData();
  }
}
