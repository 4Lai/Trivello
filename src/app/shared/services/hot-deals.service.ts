import { Injectable } from '@angular/core';
import { HotDeals } from '../interfaces/hot-deals';

@Injectable({
  providedIn: 'root',
})
export class HotDealsService {
  constructor() {}

  hotDealsOffer: HotDeals[] = [
    {
      title: 'WENECJA',
      img: './../../../../../../assets/img/hero/hot-deals/wenecja1.jpg',
      price: 'od 15000 PLN',
      description:
        '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sint, quam et odio incidunt dicta modi quibusdam nisi soluta voluptate odit corrupti voluptatum atque quia?',
      url: '/wenecja',
      id: 1,
    },
    {
      title: 'MEKSYK',
      img: './../../../../../../assets/img/hero/hot-deals/meksyk1.jpg',
      price: 'od 10000 PLN',
      description:
        '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sint, quam et odio incidunt dicta modi quibusdam nisi soluta voluptate odit corrupti voluptatum atque quia?',
      url: '/meksyk',
      id: 2,
    },
    {
      title: 'AFRYKA',
      img: './../../../../../../assets/img/hero/hot-deals/afryka1.jpg',
      price: 'od 9000 PLN',
      description:
        '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sint, quam et odio incidunt dicta modi quibusdam nisi soluta voluptate odit corrupti voluptatum atque quia?',
      url: '/afryka',
      id: 3,
    },
  ];
}
