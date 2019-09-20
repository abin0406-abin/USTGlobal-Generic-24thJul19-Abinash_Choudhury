import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNews:any[] =[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=af48fbbf1ce545eeba30832cf4d0561b').subscribe(resData =>{
      this.entertainmentNews = resData.articles;
      console.log(this.entertainmentNews);
    })
  }
  ngOnInit() {
  }

}
