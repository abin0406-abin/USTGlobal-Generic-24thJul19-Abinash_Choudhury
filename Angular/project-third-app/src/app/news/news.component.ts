import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
indianNews:any[] = [];
  constructor(private http: HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=af48fbbf1ce545eeba30832cf4d0561b').subscribe(resData =>{
      this.indianNews = resData.articles;
      console.log(this.indianNews);

    })
   }

  ngOnInit() {
  }

}
