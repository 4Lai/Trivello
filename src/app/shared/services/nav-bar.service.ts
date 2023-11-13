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
    {title: 'OFERTY', url: '#'},
    {title: 'EXCLUSIVE', url: '#'},
    {title: 'O NAS', url: '#'},
  ]
}
