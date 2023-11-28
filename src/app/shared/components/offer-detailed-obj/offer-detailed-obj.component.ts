import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-detailed-obj',
  templateUrl: './offer-detailed-obj.component.html',
  styleUrls: ['./offer-detailed-obj.component.scss'],
})
export class OfferDetailedObjComponent {
  @Input() fElement:any
}
