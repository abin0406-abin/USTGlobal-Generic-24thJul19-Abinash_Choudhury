import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes=[
    {
      brand: 'Royal Enfield classic 350',
      img: 'https://cdn.pixabay.com/photo/2018/07/01/11/42/royal-enfield-3509231__340.jpg',
      description: 'The Royal Enfield Classic 350 is powered by a 346cc single-cylinder air-cooled engine which churns out 20PS at 5250rpm and 28Nm at 4000rpm. ... The motorcycle gets dual-channel ABS as standard for optimum safety and is priced at Rs 1.52 lakh ' 
    },
    {
      brand: 'Duke 390',
      img: 'https://cdn.pixabay.com/photo/2017/11/21/12/37/ktm-2968100_960_720.jpg',
      description:'Call it the baby 1290 Super Duke R or the BMW G310R destroyer, the 2017 390 Duke is a new bike from KTM that is made in India and exported to the world. The older iteration of the 390 Duke was known for its aggressive nature and the ability to keep up with some parallel-twin bikes on the highway.'
    },
    {
      brand: 'BMW',
      img:'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg',
      description:'The Bajaj Dominar 400 has received a price hike of around Rs 5,800. It now retails at Rs 1.80 lakh (ex-showroom Delhi). The 2019 Bajaj Dominar 400 has been spotted with a new metallic red paint scheme, hinting at an imminent launch. The brand may also offer the bike in a silver paint scheme. This would bring the tally up to four paint options: green, black, red and silver.'
    },
    {
      brand: 'Triumph Tiger',
      img: 'https://cdn.pixabay.com/photo/2017/08/24/16/04/motorcycle-2677355__340.jpg',
      description:'The Triumph Tiger 800 is a dual-sport motorcycle launched in 2010 by British manufacturer Triumph Motorcycles. The Tiger 800 XR is a more road-oriented bike, while the Tiger 800 XC is designed as a more off-road vehicle.'
    },
    {
      brand:'Kawasaki Ninja',
      img:'https://cdn.pixabay.com/photo/2017/10/05/14/38/motorcycle-2819604__340.jpg',
      description:'Mated to a six-speed transmission, the Honda CBR300R is powered by a 286cc, single-cylinder, liquid-cooled engine, producing 31PS of power at 8,500rpm and a peak torque of 27Nm at 7,250rpm. The fuel-injected motor is a bored out version of the 249cc engine seen on the CBR250R.'
    },
    {
      brand:'Aprillia Rs250',
      img:'https://cdn.pixabay.com/photo/2018/04/03/20/07/aprilia-rs250-3287890__340.jpg',
      description:'RS250 is one of its kind, sport scooter that comes with a powerful 154.8 cc engine producing 10.06 BHP at 6750 rpm and 10.90 Nm at 5000 rpm. The scooter claims a 100+ kmph of top speed and weighs just 122 kg. Being an automatic scooter, it is quite fun to drive and carries a reasonable high 780 mm of seat height.'
    },
    {
      brand:'Kawasaki Cruiser',
      img:'https://cdn.pixabay.com/photo/2016/04/05/13/24/motorbike-1309435__340.jpg',
      description:'Confederate Motorcycles has a carved out a reputation for creating strikingly designed hand-crafted bikes. Its latest offering serves only to strengthen that reputation. The X132 Hellcat Speedster is an evolution of the original Hellcat and looks just as mouthwatering.p'
    }

  ]
  bikeData: any = '';

  sendBike(bike){
    this.bikeData=bike;
  }
  constructor() { }

  ngOnInit() {
  }

}
