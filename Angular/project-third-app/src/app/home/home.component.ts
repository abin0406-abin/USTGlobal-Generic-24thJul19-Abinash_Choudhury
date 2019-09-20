import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sportsNews: any[] = [];
  scienceNews: any[] = [];
  healthhNews: any[] = [];

  constructor(private http:HttpClient) { 
    http.get <any> ('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=af48fbbf1ce545eeba30832cf4d0561b').subscribe(resData =>{
    this.sportsNews = resData.articles;
    console.log(this.sportsNews);
  })
  http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=af48fbbf1ce545eeba30832cf4d0561b').subscribe(resData =>{
  this.scienceNews = resData.articles;
  console.log(this.scienceNews);
  })
  http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=af48fbbf1ce545eeba30832cf4d0561b').subscribe(resData =>{
  this.healthhNews = resData.articles;
  console.log(this.healthhNews);
  })

}

  ngOnInit() {
  }

}
