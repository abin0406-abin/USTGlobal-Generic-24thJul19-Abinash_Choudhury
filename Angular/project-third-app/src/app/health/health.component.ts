import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthhNews:any[] =[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=af48fbbf1ce545eeba30832cf4d0561b').subscribe(resData =>{
      this.healthhNews = resData.articles;
      console.log(this.healthhNews);
    })
  }

  ngOnInit() {
  }

}
