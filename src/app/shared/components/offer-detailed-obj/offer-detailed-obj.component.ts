import { Component, Input } from '@angular/core';
import { OffersAll } from '../../interfaces/offers-all';

@Component({
  selector: 'app-offer-detailed-obj',
  templateUrl: './offer-detailed-obj.component.html',
  styleUrls: ['./offer-detailed-obj.component.scss'],
})
export class OfferDetailedObjComponent {
  @Input() fElement:any;
}
