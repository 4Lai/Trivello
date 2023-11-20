import { Component, OnInit } from '@angular/core';
import { PopUp } from '../../interfaces/pop-up';
import { PopUpService } from '../../services/pop-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  mediaIcons: PopUp[] = [];

  constructor(private popUpService: PopUpService, private router:Router) {}

  ngOnInit(): void {
    this.mediaIcons = this.popUpService.popUpIcons;
  }


  click() {
    this.router.navigate(['/o-nas'], {fragment: 'c'})
  }
}
