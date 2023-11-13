import { Component, OnInit } from '@angular/core';
import { HotDealsService } from '../../services/hot-deals.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  hotDealsData: any;
  widthOfScreen: any;

  constructor(private hotDealsService: HotDealsService) {}

  ngOnInit(): void {
    this.hotDealsData = this.hotDealsService.hotDealsOffer;
    this.widthOfScreen = window.innerWidth;
    };
  }



    


