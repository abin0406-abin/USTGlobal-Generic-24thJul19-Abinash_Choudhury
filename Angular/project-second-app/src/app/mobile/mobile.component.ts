import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobiles=[
    {
      brand:'Nokia',
      img:'https://cdn.pixabay.com/photo/2015/09/06/00/50/nokia-926756__340.jpg',
      description:'The Nokia brand has since returned to the mobile and smartphone market through a licensing arrangement with HMD Global.'
    },
    {
      brand:'Samsung',
      img:'https://cdn.pixabay.com/photo/2016/03/27/19/43/smartphone-1283938__340.jpg',
      description:'The Samsung Galaxy M20 comes with a 6.3-inch TFT display having a screen resolution of 1,080 x 2,340 pixels and a pixel density of 409 PPI. ... The performance of the device is handled by 1.8GHz dual-core Cortex A73 and 1.6GHz hexa-core Cortex A53 processor which is seated upon the Samsung Exynos 7 Octa 7904 chipset.'
    },
    {
      brand:'Apple',
      img:'https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723__340.jpg',
      description:'The Apple iPhone X 256GB mobile features a 5.8" (14.73 cm) display with a screen resolution of 1125 x 2436 pixels and runs on iOS v11.0.1 operating system. The device is powered by Hexa Core (2.39 GHz, Dual core, Monsoon + 1.42 GHz, Quad core, Mistral) processor paired with 3 GB of RAM.'
    },
    {
      brand:'One Plus',
      img:'https://cdn.pixabay.com/photo/2016/05/07/05/13/china-1377067__340.jpg',
      description:'Sandstone Black, Silk White & provides a host of connectivity options in terms of 3G, GPS, Wifi capabilities. The phone is available with 64 GB of internal storage. The Smartphone is powered by 2.5 GHz Quad core Qualcomm Snapdragon 801 Processor.'
    },
    {
      brand:'Oppo',
      img:'https://image.shutterstock.com/image-photo/bangkok-thailand-oppo-launch-new-600w-1237680487.jpg',
      description:'OPPO Electronics Corp. is an electronics manufacturer based in Guangdong, China. Known for its smartphones, the company also makes MP3 players, portable media players, LCD-TVs, and DVD/Blu-ray players. It was founded in 2004. The company is also a smartphone maker.'
    },
    {
      brand:'Nokia 1600',
      img:'https://image.shutterstock.com/image-photo/budapest-hungary-march-01-2018-600w-1039931581.jpg',
      description:'The all new Nokia 1600 phone makes life so much easier! Put yourself center-stage with the 65,536 color screen and spice it up with the MP3 and 20 polyphonic ringing tones. With the speaking alarm and clock, you will never miss a party again. Break through your daily routine and enjoy more out of life with the Nokia 1600 phone.'
    },
    {
      brand:'Mi',
      img:'https://image.shutterstock.com/image-photo/bojonegoro-east-java-indonesia-20-600w-1402535063.jpg',
      description:'Xiaomi Corporation is a Chinese electronics company founded in 2010 and headquartered in Beijing. Xiaomi makes and invests in smartphones, mobile apps, laptops, bags, trimmers, earphones, MI Television, Shoes, fitness bands, and many other products.'
    },
    {
      brand:'Moto',
      img:'https://cdn.pixabay.com/photo/2017/08/06/18/16/mobile-2594848__340.jpg',
      description:'The Motorola One Power is the companys first Android One smartphone. It sports a 6.2-inch IPS display with fullHD+ resolution and a notch. Powering the phone is a Snapdragon 636 processor clocked at 1.6GHz. There is 4GB of RAM and 64GB of internal storage which is further expandable via a dedicated microSD card slot.'
    },
    {
      brand:'Samsung',
      img:'https://image.shutterstock.com/image-photo/new-york-usa-may-27-600w-236957617.jpg',
      description:'The Samsung Galaxy J6 mobile features a 5.6" (14.22 cm) display with a screen resolution of 720 x 1480 pixels and runs on Android v8.0 (Oreo) operating system. The device is powered by Octa core, 1.6 GHz, Cortex A53 processor paired with 3 GB of RAM. As far as the battery is concerned it has 3000 mAh.'
    },
    {
      brand:'GooglePixel',
      img:'https://cdn.pixabay.com/photo/2017/10/21/06/29/google-pixel-2-2873921__340.png',
      description:'Google Pixel 2 smartphone comes with a 5-inch touchscreen display with a resolution of 1080 * 1920 pixels. The phone is powered by 1.9GHz octa-core Qualcomm Snapdragon 835 processor clubbed with 4GB RAM. ... The phone sports a 12.2-megapixel primary camera on the rear and an 8-megapixel front shooter for selfies.'
    },
    
  ]
  mobileData: any = '';

  sendMobile(mobile){
    this.mobileData=mobile;
  }
  constructor() { }

  ngOnInit() {
  }

}
