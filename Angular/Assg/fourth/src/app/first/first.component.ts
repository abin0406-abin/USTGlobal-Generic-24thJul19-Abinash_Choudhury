import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  first:any[] =[];
  constructor(private http:HttpClient) { 
    http.get<any>('http://api.github.com/users').subscribe(resData =>{
      this.first = resData;
      console.log(this.first);
    })
  }

  ngOnInit() {
  }

}
