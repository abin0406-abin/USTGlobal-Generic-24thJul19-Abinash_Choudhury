import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  cars=[
    {
      brand: 'Ferrari Callifornia',
      img: 'https://cdn.pixabay.com/photo/2014/12/03/00/12/ferrari-california-554819__340.jpg',
      description: 'The car utilizes a new 3,855 cc (3.9 L; 235.2 cu in) twin-turbocharged V8 engine that produces 412 kW (560 PS; 553 hp) at 7,500 rpm and 755 N⋅m (557 lb⋅ft) at 4,750 rpm as well as a 7-speed dual clutch transmission with different gear ratios, a revised MagneRide adaptive suspension, as well as a new F1 Trac system.' 
    },
    {
      brand: 'Hyundai Kona',
      img: 'https://cdn.pixabay.com/photo/2018/04/17/20/02/car-3328539__340.jpg',
      description:'Hyundai Kona is the first electric Semisuv of India. It costs arround 25lakhs. With one charge it can run upto 450km.'
    },
    {
      brand: 'BMW',
      img:'https://cdn.pixabay.com/photo/2018/02/21/03/15/bmw-m4-3169357__340.jpg',
      description:'The BMW M4 is a high-performance version of the BMW 4 Series automobile developed by BMWs motorsport division, BMW M GmbH.'
    },
    {
      brand: 'Mercedese Benz',
      img: 'https://cdn.pixabay.com/photo/2016/05/03/23/46/mercedes-benz-1370536__340.jpg',
      description:'Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz. In 2018, Mercedes-Benz was the biggest selling premium vehicle brand in the world, having sold 2.31 million passenger cars.'
    },
    {
      brand:'Tata Nano',
      img:'https://cdn.pixabay.com/photo/2017/10/18/19/54/tata-nano-2865322__340.jpg',
      description:'The Tata Nano has 1 Diesel Engine, 1 Petrol Engine, 1 CNG Engine and The Diesel engine is 624 cc, the Petrol engine is 624 cc, the CNG engine is 624 cc whileIt is available with the transmission. The Nano is a 4 seater Hatchback and has a length of 3099 mm, width of 1495 mm and a wheelbase of 2230 mm.'
    },
    {
      brand:'Honda Civic',
      img:'https://cdn.pixabay.com/photo/2017/08/07/00/28/red-2597961__340.jpg',
      description:'The Honda Civic has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1597 cc while the Petrol engine is 1799 cc. ... Depending upon the variant and fuel type the Civic has a mileage of 16.5 to 26.8 kmpl.'
    },
    {
      brand:'Honda CR-V',
      img:'https://cdn.pixabay.com/photo/2018/05/15/20/58/traffic-3404254__340.jpg',
      description:'Best In Segment Fuel Efficiency-19.5km/l, Panoramic Sunroof, Digital Full-Color TFT Meter. The 9-Speed Automatic Of The New CR-V Delivers Seamless Transmission On Every Drive. Hill Start Assist (HSA) Shark Fin Antenna. Chrome Tailgate Garnish. Driver Attention Monitor.'
    },
    {
      brand: 'Lexusls-F',
      img:'https://cdn.pixabay.com/photo/2017/11/03/13/01/lexus-is-f-2914268__340.jpg',
      description:'The LS 500h is powered by a 3.5-litre V6 petrol engine which works together with two electric motors to provide a combined output of 354 bhp'
    },
    {
      brand: 'Ford-Mustang',
      img:'https://cdn.pixabay.com/photo/2012/11/03/22/41/ford-64041__340.jpg',
      description:'The Ford Mustang is an American car manufactured by Ford. It was originally based on the .... The 1969 Mustang was the last year for the GT option (although it did return on the 3rd ..... Sixth generation Ford Mustang GT (export model) .... The Marc VDS Racing Team was developing the GT3 spec Mustang since 2010.'
    },
    {
      brand: 'Maruti-Suzuki-SX-4',
      img:'https://cdn.pixabay.com/photo/2019/06/29/09/51/suzuki-sx4-4305877__340.jpg',
      description:'SX4 Diesel comes with a 1248cc engine which gives out a power of 90 bhp @ 4000 rpm and gives out a torque of 200 Nm @ 1750 rpm. The sedan has a top speed of 185 kmph and has a claimed mileage of 21.79 kmpl. The car has a boot space of massive 505 litres and has a ground clearance of 180mm.'
    }

  ]
  carData: any = '';

  sendCar(car){
    this.carData=car;
  }
  constructor() { }

  ngOnInit() {
  }

}
