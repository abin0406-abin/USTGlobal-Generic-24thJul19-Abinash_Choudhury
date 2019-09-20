import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technolgy',
  templateUrl: './technolgy.component.html',
  styleUrls: ['./technolgy.component.css']
})
export class TechnolgyComponent implements OnInit {
  technicalNews:any[] =[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=af48fbbf1ce545eeba30832cf4d0561b').subscribe(resData =>{
      this.technicalNews = resData.articles;
      console.log(this.technicalNews);
    })
  }

  ngOnInit() {
  }

}
