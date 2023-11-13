import { Component, Input } from '@angular/core';
import { HotDeals } from '../../interfaces/hot-deals';

@Component({
  selector: 'app-hot-deals-single',
  templateUrl: './hot-deals-single.component.html',
  styleUrls: ['./hot-deals-single.component.scss'],
})
export class HotDealsSingleComponent {
  @Input() deal: HotDeals[] = [];
}
