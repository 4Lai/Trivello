import { Component, OnInit } from '@angular/core';
import { OffersAllService } from '../../services/offers-all.service';
import { OffersAll } from '../../interfaces/offers-all';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-detailed-rec',
  templateUrl: './offers-detailed-rec.component.html',
  styleUrls: ['./offers-detailed-rec.component.scss'],
})
export class OffersDetailedRecComponent implements OnInit {
  offers: OffersAll[] = [];
  constructor(
    private offersAllService: OffersAllService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.offers = this.offersAllService.offersDataAll;
    let filteredOffers = this.offers.filter((el) => {
      return (
        el.id.toString() != this.activatedRoute.snapshot.paramMap.get('id')
      );
    });
    let slicedElements = filteredOffers.slice(0, 6)
    this.offers = slicedElements;
  }
}
