import { Component, OnInit } from '@angular/core';
import { OffersAll } from '../../interfaces/offers-all';
import { OffersAllService } from '../../services/offers-all.service';
import { FormControl, FormGroup } from '@angular/forms';
import { OffersCountries } from '../../interfaces/offers-countries';
import { OffersDeadline } from '../../interfaces/offers-deadline';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offers-content',
  templateUrl: './offers-content.component.html',
  styleUrls: ['./offers-content.component.scss'],
})
export class OffersContentComponent implements OnInit {
  allOffers: OffersAll[] = [];
  allCountries: OffersCountries[] = [];
  deadline: OffersDeadline[] = [];

  constructor(
    private offersAllService: OffersAllService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.allOffers = this.offersAllService.offersDataAll;
    this.allCountries = this.offersAllService.offersDataCountries;
    this.deadline = this.offersAllService.offersDeadline;

    this.activatedRoute.queryParams.subscribe((param) => {
      if (param) {
        this.filterFromMain(
          this.activatedRoute.snapshot.queryParamMap.get('type'),
          this.activatedRoute.snapshot.queryParamMap.get('country'),
          this.activatedRoute.snapshot.queryParamMap.get('date')
        );
      }
    });
  }

  filterFromMain(
    type: string | null,
    country: string | null,
    date: string | null
  ) {
    this.offersForm.value.typeOfJourney = type;
    this.offersForm.value.country = country;
    this.offersForm.value.deadline = date;

    this.onSubmit();
  }

  offersForm = new FormGroup<OffersFormGroup>({
    typeOfJourney: new FormControl(''),
    fromPrice: new FormControl(''),
    toPrice: new FormControl(''),
    lengthOfStay: new FormControl(''),
    country: new FormControl(''),
    deadline: new FormControl(''),
  });

  onSubmit() {
    this.allOffers = this.offersAllService.offersDataAll;

    let filteredOffers = this.allOffers.filter((el) => {
      let match = [];
      if (this.offersForm.value.typeOfJourney) {
        if (el.typeOfJourney === this.offersForm.value.typeOfJourney) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (this.offersForm.value.fromPrice) {
        if (el.price > Number(this.offersForm.value.fromPrice)) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (this.offersForm.value.toPrice) {
        if (el.price < Number(this.offersForm.value.toPrice)) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (this.offersForm.value.lengthOfStay) {
        if (el.lengthOfStay < Number(this.offersForm.value.lengthOfStay)) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (this.offersForm.value.country) {
        if (el.country === this.offersForm.value.country) {
          match.push(true);
        } else {
          match.push(false);
        }
      }
      if (this.offersForm.value.deadline) {
        if (el.deadline === this.offersForm.value.deadline) {
          match.push(true);
        } else {
          match.push(false);
        }
      }

      let isNotMatched = match.some((val) => {
        return val === false;
      });

      return isNotMatched ? null : el;
    });

    this.router.navigate(['/oferty'], {
      queryParams: {
        type: this.offersForm.value.typeOfJourney,
        country: this.offersForm.value.country,
        date: this.offersForm.value.deadline,
      },
    });
    this.allOffers = filteredOffers;
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
