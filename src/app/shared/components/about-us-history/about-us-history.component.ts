import { Component, OnInit } from '@angular/core';
import { AboutUsHistory } from '../../interfaces/about-us-history';
import { AboutUsHistoryService } from '../../services/about-us-history.service';

@Component({
  selector: 'app-about-us-history',
  templateUrl: './about-us-history.component.html',
  styleUrls: ['./about-us-history.component.scss'],
})
export class AboutUsHistoryComponent implements OnInit {
  historyText: AboutUsHistory[] = [];

  constructor(private aboutUsHistory: AboutUsHistoryService) {}

  ngOnInit(): void {
    this.historyText = this.aboutUsHistory.aboutUsHistory;
  }
}
