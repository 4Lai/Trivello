import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-detail-score',
  templateUrl: './offer-detail-score.component.html',
  styleUrls: ['./offer-detail-score.component.scss']
})
export class OfferDetailScoreComponent {
  @Input() score: number = 0

}
