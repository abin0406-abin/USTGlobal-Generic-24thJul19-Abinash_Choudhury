import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  alphabets=[
    {
      letter: 'A',
      img1: 'http://freestencilletters.com/cursive-letters/stencil-a.JPG',
      letterFor: 'A for Apple'
    },
    {
      letter: 'E',
      img1: 'https://previews.123rf.com/images/photoart23d/photoart23d1705/photoart23d170500474/79231024-letter-e-neon-lights-outlined-isolated-on-black-background.jpg',
      letterFor: 'E for Egg'
    },
    {
      letter: 'I',
      img1: 'https://previews.123rf.com/images/artinspiring/artinspiring1606/artinspiring160600061/57949677-i-letter-made-of-colorful-musical-notes-on-white-background-alphabet-for-art-school-trendy-font-grap.jpg',
      letterFor: 'I for Ice'
    }
  ]
  letterData: any ='';

  alphabet(lettervalue){
    this.letterData = lettervalue;
  }
  constructor() { }

  ngOnInit() {
  }

}
