import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-detailed-stay-plan',
  templateUrl: './offer-detailed-stay-plan.component.html',
  styleUrls: ['./offer-detailed-stay-plan.component.scss']
})
export class OfferDetailedStayPlanComponent {
  @Input() plan:string = ''

}
