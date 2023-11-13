import { Injectable } from '@angular/core';
import { PopUp } from '../interfaces/pop-up';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  constructor() {}

  popUpIcons: PopUp[] = [
    { url: '../../../../assets/img/nav-bar-links/fb.png' },
    { url: '../../../../assets/img/nav-bar-links/yt.png' },
    { url: '../../../../assets/img/nav-bar-links/ig.png' },
  ];
}
