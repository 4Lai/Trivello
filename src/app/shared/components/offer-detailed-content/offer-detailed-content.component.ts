import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersAll } from '../../interfaces/offers-all';
import { OffersAllService } from '../../services/offers-all.service';

@Component({
  selector: 'app-offer-detailed-content',
  templateUrl: './offer-detailed-content.component.html',
  styleUrls: ['./offer-detailed-content.component.scss'],
})
export class OfferDetailedContentComponent implements OnInit {
  allOffers: OffersAll[] = [];
  foundElement: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private offersAll: OffersAllService
  ) {}

  ngOnInit(): void {
    this.allOffers = this.offersAll.offersDataAll;
    this.foundElement = this.allOffers.find((el) => {
      return (
        el.id.toString() === this.activatedRoute.snapshot.paramMap.get('id')
      );
    });
  }
}
