import { Component, OnInit } from '@angular/core';
import { WhereService } from '../../services/where.service';
import { Where } from '../../interfaces/where';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.scss']
})
export class WhereComponent implements OnInit {
  whereList: Where[] = []

  constructor(private whereService: WhereService) {}

  ngOnInit(): void {
    this.whereList = this.whereService.whereList
  }
}
