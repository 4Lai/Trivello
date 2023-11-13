import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavBar } from '../../interfaces/nav-bar';
import { PopUpService } from '../../services/pop-up.service';
import { PopUp } from '../../interfaces/pop-up';

@Component({
  selector: 'app-pop-up-navbar',
  templateUrl: './pop-up-navbar.component.html',
  styleUrls: ['./pop-up-navbar.component.scss'],
})
export class PopUpNavbarComponent implements OnInit {
  @Input() navBarMobile: NavBar[] = [];
  @Output() onCloseClick = new EventEmitter<boolean>()
  mediaIcons: PopUp[] = []

  constructor(private popUpService: PopUpService) {}

  ngOnInit(): void {
    this.mediaIcons = this.popUpService.popUpIcons
  }

  onClickClose() {
    this.onCloseClick.emit()
  }
}
