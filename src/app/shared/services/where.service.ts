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
      id: 6
    },
    {
      title: 'Szwajcaria',
      class: 'szwajcaria',
      id: 8
    },
    {
      title: 'Najciekawsze destynacje',
      class: 'single-container',
      specialClass: 'single-text',
    },
    {
      title: 'Japonia',
      class: 'japonia',
      id: 5
    },
    {
      title: 'Indie',
      class: 'indie',
      id: 4
    },
    {
      title: 'Hiszpania',
      class: 'hiszpania',
      id: 7
    },
  ];
}
