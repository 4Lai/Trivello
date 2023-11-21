import { Component, OnInit } from '@angular/core';
import { OffersAll } from '../../interfaces/offers-all';
import { OffersAllService } from '../../services/offers-all.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offers-content',
  templateUrl: './offers-content.component.html',
  styleUrls: ['./offers-content.component.scss'],
})
export class OffersContentComponent implements OnInit {
  allOffers: OffersAll[] = [];

  constructor(private offersAllService: OffersAllService) {}

  ngOnInit(): void {
    this.allOffers = this.offersAllService.offersDataAll;
  }

  offersForm = new FormGroup<OffersFormGroup>({
    typeOfJourney: new FormControl('Zwykła'),
    fromPrice: new FormControl(''),
    toPrice: new FormControl(''),
    lengthOfStay: new FormControl(''),
    country: new FormControl(''),
    deadline: new FormControl(''),
  });

  onSubmit() {
    console.log(this.offersForm.value.typeOfJourney);
    console.log(this.offersForm.value.fromPrice);
    console.log(this.offersForm.value.toPrice);
    console.log(this.offersForm.value);
  }
}

export interface OffersFormGroup {
  typeOfJourney: FormControl<null | string>;
  fromPrice: FormControl<null | string>;
  toPrice: FormControl<null | string>;
  lengthOfStay: FormControl<null | string>;
  country: FormControl<null | string>;
  deadline: FormControl<null | string>;
}
