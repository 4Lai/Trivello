import { Injectable } from '@angular/core';
import { NavBar } from '../interfaces/nav-bar';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  constructor() {}

  navBarList: NavBar[] = [
    { title: 'GDZIE', url: '', frag: 'frag' },
    { title: 'OFERTY', url: '/oferty', specialClass: 'of'},
    { title: 'EXCLUSIVE', url: '/oferty', query: 'Exclusive', specialClass:'ex' },
    { title: 'O NAS', url: '/o-nas' },
  ];
}
