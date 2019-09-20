import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportsNews:any[]=[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=af48fbbf1ce545eeba30832cf4d0561b').subscribe(resData =>{
    this.sportsNews = resData.articles;
    console.log(this.sportsNews);
  })
}

  ngOnInit() {
  }

}
