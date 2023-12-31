import { Injectable } from '@angular/core';
import { SearchHero } from '../interfaces/search-hero';

@Injectable({
  providedIn: 'root',
})
export class SearchHeroService {
  constructor() {}

  searchHeroCountries: SearchHero[] = [
    { option: 'Włochy' },
    { option: 'Meksyk' },
    { option: 'Algieria' },
    { option: 'Indie' },
    { option: 'Japonia' },
    { option: 'Tajlandia' },
    { option: 'Hiszpania' },
    { option: 'Szwajcaria' },
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
