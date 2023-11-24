import { Injectable } from '@angular/core';
import { OffersAll } from '../interfaces/offers-all';
import { OffersCountries } from '../interfaces/offers-countries';
import { OffersDeadline } from '../interfaces/offers-deadline';

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
      id: 1,
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
      id: 2,
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
      id: 3,
    },
    {
      typeOfJourney: 'Zwykła',
      price: 6500,
      lengthOfStay: 4,
      country: 'Indie',
      deadline: 'Styczeń',
      town: 'Nowe Delhi',
      img: '../../../assets/img/where/indie2.jpg',
      score: 9.4,
      id: 4,
    },
    {
      typeOfJourney: 'Zwykła',
      price: 10100,
      lengthOfStay: 11,
      country: 'Japonia',
      deadline: 'Listopad',
      town: 'Tokio',
      img: '../../../assets/img/offers/thumb/tokio-town.jpg',
      score: 8.7,
      id: 5,
    },
    {
      typeOfJourney: 'Exclusive',
      price: 17021,
      lengthOfStay: 20,
      country: 'Tajlandia',
      deadline: 'Lipiec',
      town: 'Bangkok',
      img: '../../../assets/img/offers/thumb/bangkok-town.jpg',
      score: 9.6,
      id: 6,
    },
    {
      typeOfJourney: 'Exclusive',
      price: 11127,
      lengthOfStay: 13,
      country: 'Hiszpania',
      deadline: 'Czerwiec',
      town: 'Madryt',
      img: '../../../assets/img/offers/thumb/madryt-town.jpg',
      score: 8.9,
      id: 7,
    },
    {
      typeOfJourney: 'Exclusive',
      price: 9802,
      lengthOfStay: 5,
      country: 'Szwajcaria',
      deadline: 'Grudzień',
      town: 'Berno',
      img: '../../../assets/img/offers/thumb/bern-town.jpg',
      score: 9.2,
      id: 8,
    },
  ];

  offersDataCountries: OffersCountries[] = [
    { country: 'Włochy' },
    { country: 'Meksyk' },
    { country: 'Algieria' },
    { country: 'Indie' },
    { country: 'Japonia' },
    { country: 'Tajlandia' },
    { country: 'Hiszpania' },
    { country: 'Szwajcaria' },
  ];

  offersDeadline: OffersDeadline[] = [
    { month: 'Styczeń' },
    { month: 'Luty' },
    { month: 'Marzec' },
    { month: 'Kwiecień' },
    { month: 'Maj' },
    { month: 'Czerwiec' },
    { month: 'Lipiec' },
    { month: 'Sierpień' },
    { month: 'Wrzesień' },
    { month: 'Październik' },
    { month: 'Listopad' },
    { month: 'Grudzień' },
  ];
}
