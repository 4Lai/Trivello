import { Injectable } from '@angular/core';
import { Where } from '../interfaces/where';

@Injectable({
  providedIn: 'root',
})
export class WhereService {
  constructor() {}

  whereList: Where[] = [
    {
      title: 'Tajlandia',
      class: 'tajlandia',
      url: 'tajlandia'
    },
    {
      title: 'Szwajcaria',
      class: 'szwajcaria',
      url: 'szwajcaria'
    },
    {
      title: 'Najciekawsze destynacje',
      class: 'single-container',
      specialClass: 'single-text',
      url: 'oferty'
    },
    {
      title: 'Japonia',
      class: 'japonia',
      url: 'japonia'
    },
    {
      title: 'Indie',
      class: 'indie',
      url: 'indie'
    },
    {
      title: 'Hiszpania',
      class: 'hiszpania',
      url: 'hiszpania'
    },
  ];
}
