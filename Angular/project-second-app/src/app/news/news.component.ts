import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news=[
    {
      article:'Former Minister Mrs. Susama Swaraj passed away.',
      img:'https://ichef.bbci.co.uk/images/ic/720x405/p07jylfg.jpg',
      description:'Goodbye, Sushma Swaraj. People minister cremated with full state honours She died on Tuesday night at AIIMS after suffering a cardiac attack. Sushma Swaraj was 67.'
    },
    {
      article:'Article 370 Revoked',
      img:'https://static.toiimg.com/photo/msid-70534360/70534360.jpg',
      description:'Article 370 of the Indian constitution gave special status to the region of Jammu and Kashmir, allowing it to have a separate constitution, a state flag and autonomy over the internal administration of the state. The article was drafted in Part XXI of the Constitution: Temporary, Transitional and Special Provisions.'
    },
    {
      article:'Chandrayan 2',
      img:'https://english.cdn.zeenews.com/sites/default/files/2019/08/04/808880-chandrayaan1.jpg',
      description:'Chandrayaan-2 is India second lunar exploration mission after Chandrayaan-1. Developed by the Indian Space Research Organisation, the mission was launched from the second launch pad at Satish Dhawan Space Centre on 22 July 2019 at 2.43 PM IST to the Moon by a Geosynchronous Satellite Launch Vehicle Mark III.'
    },
    {
      article:'Bill passed on Triple Talaque',
      img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201808/muslim.jpeg?xCyL5vH2OC9CR6Dqx9XXgCp4MeAVsb4o',
      description:"After the Union Cabinet on Thursday introduced three amendments to the Muslim Women (Protection of Rights on Marriage) Bill, it is slated to be tabled in Rajya Sabha today. The government has watered down the triple talaq bill as compared to the one passed by the Lok Sabha in December last year.As per the new amendment, a crime of triple talaq (FIR) will be cognizable only if the victim or her blood relatives or someone associated with the marriage files the complaint. A complaint filed by an agency or outside entity will not be cognizable. In the earlier version, any person could have initiated criminal proceedings against a Muslim man, who pronounces instant triple talaq on his wife."
    },
    {
      article:'India clinch the bilateral t-20 series with WestIndies',
      img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/AP19218652638355-770x433.jpeg?Fxho5FrugHPSvzUbn4AelBgHpR2wFCn2',
      description:'India vs West Indies, ODI series: Virat Kohli will be looking to resume his post-World Cup run in ODI cricket with an eye on a couple of batting records in the West Indies.'
    },


  ]
  workData: any = '';
  sendWork(work){
    this.workData=work;
  }
  constructor() { }

  ngOnInit() {
  }

}
