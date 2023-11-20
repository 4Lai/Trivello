import { Injectable } from '@angular/core';
import { NavBar } from '../interfaces/nav-bar';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor() { }

  navBarList: NavBar[] = [
    {title: 'GDZIE', url: '#'},
    {title: 'KIEDY', url: '#'},
    {title: 'OFERTY', url: '/oferty'},
    {title: 'EXCLUSIVE', url: '/oferty/exclusive'},
    {title: 'O NAS', url: '/o-nas'},
  ]
}
