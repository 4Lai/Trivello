import { Component, OnInit } from '@angular/core';
import { HotDeals } from '../../interfaces/hot-deals';
import { HotDealsService } from '../../services/hot-deals.service';

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.scss']
})
export class HotDealsComponent implements OnInit {
  hotDealData: HotDeals[] = []

  constructor(private hotDealsService: HotDealsService) {}

  ngOnInit(): void {
    this.hotDealData = this.hotDealsService.hotDealsOffer
  }

}
