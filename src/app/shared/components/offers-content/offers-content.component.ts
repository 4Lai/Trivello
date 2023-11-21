import { Component, OnInit } from '@angular/core';
import { OffersAll } from '../../interfaces/offers-all';
import { OffersAllService } from '../../services/offers-all.service';

@Component({
  selector: 'app-offers-content',
  templateUrl: './offers-content.component.html',
  styleUrls: ['./offers-content.component.scss']
})
export class OffersContentComponent implements OnInit {
  allOffers: OffersAll[] = []

  constructor(private offersAllService: OffersAllService) {}

  ngOnInit(): void {
    this.allOffers = this.offersAllService.offersDataAll
  }

}
