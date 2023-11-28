import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-detail-title',
  templateUrl: './offer-detail-title.component.html',
  styleUrls: ['./offer-detail-title.component.scss'],
})
export class OfferDetailTitleComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
