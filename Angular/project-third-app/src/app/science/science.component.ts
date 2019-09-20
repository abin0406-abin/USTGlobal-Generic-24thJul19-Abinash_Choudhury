import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  scienceNews:any[] =[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=af48fbbf1ce545eeba30832cf4d0561b').subscribe(resData =>{
      this.scienceNews = resData.articles;
      console.log(this.scienceNews);
    })
  }

  ngOnInit() {
  }

}
