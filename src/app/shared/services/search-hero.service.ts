import { Injectable } from '@angular/core';
import { SearchHero } from '../interfaces/search-hero';

@Injectable({
  providedIn: 'root',
})
export class SearchHeroService {
  constructor() {}

  searchHeroCountries: SearchHero[] = [
    { option: 'Australia' },
    { option: 'Argentyna' },
    { option: 'Chorwacja' },
    { option: 'Egipt' },
    { option: 'Malediwy' },
    { option: 'Turcja' },
  ];

  searchHeroType: SearchHero[] = [
    { option: 'Exclusive' },
    { option: 'Zwykła' },
  ];

  searchHeroDate: SearchHero[] = [
    { option: 'Styczeń' },
    { option: 'Luty' },
    { option: 'Marzec' },
    { option: 'Kwiecień' },
    { option: 'Maj' },
    { option: 'Czerwiec' },
    { option: 'Lipiec' },
    { option: 'Sierpień' },
    { option: 'Wrzesień' },
    { option: 'Październik' },
    { option: 'Listopad' },
    { option: 'Grudzień' },
  ];
}
