import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alphabet-details',
  templateUrl: './alphabet-details.component.html',
  styleUrls: ['./alphabet-details.component.css']
})
export class AlphabetDetailsComponent implements OnInit {
  @Input() letterDetails:any ='';
  constructor() { }

  ngOnInit() {
  }
}

