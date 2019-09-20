import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businesshNews:any[] =[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=af48fbbf1ce545eeba30832cf4d0561b').subscribe(resData =>{
      this.businesshNews = resData.articles;
      console.log(this.businesshNews);
    })
  }

  ngOnInit() {
  }

}
