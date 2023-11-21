import { Injectable } from '@angular/core';
import { OffersAll } from '../interfaces/offers-all';

@Injectable({
  providedIn: 'root',
})
export class OffersAllService {
  constructor() {}

  offersDataAll: OffersAll[] = [
    {
      typeOfJourney: 'Zwykła',
      price: 15031,
      lengthOfStay: 9,
      country: 'Włochy',
      deadline: 'Lipiec',
      town: 'Wenecja',
      img: '../../../assets/img/hero/hot-deals/wenecja1.jpg',
      score: 7.5,
    },
    {
      typeOfJourney: 'Zwykła',
      price: 10502,
      lengthOfStay: 14,
      country: 'Meksyk',
      deadline: 'Maj',
      town: 'Meksyk',
      img: '../../../assets/img/hero/hot-deals/meksyk1.jpg',
      score: 8.3,
    },
    {
      typeOfJourney: 'Zwykła',
      price: 9200,
      lengthOfStay: 16,
      country: 'Algieria',
      deadline: 'Maj',
      town: 'Algier',
      img: '../../../assets/img/offers/thumb/Algier-town.jpg',
      score: 9.1,
    },
  ];
}
