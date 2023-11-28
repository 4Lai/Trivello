import { Component, OnInit } from '@angular/core';
import { SearchHeroService } from '../../services/search-hero.service';
import { SearchHero } from '../../interfaces/search-hero';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss'],
})
export class SearchHeroComponent implements OnInit {
  searchHeroCountries: SearchHero[] = [];
  searchHeroType: SearchHero[] = [];
  searchHeroDate: SearchHero[] = [];

  constructor(private searchHeroService: SearchHeroService, private router:Router) {}

  ngOnInit(): void {
    this.searchHeroCountries = this.searchHeroService.searchHeroCountries;
    this.searchHeroType = this.searchHeroService.searchHeroType;
    this.searchHeroDate = this.searchHeroService.searchHeroDate;
  }

  travelForm = new FormGroup<travelFormInterface>({
    country: new FormControl(''),
    type: new FormControl(''),
    month: new FormControl(''),
  });

  onSubmit() {
    console.log(this.travelForm.value);
    this.router.navigate(['/oferty'], {queryParams: {type: this.travelForm.value.type, country: this.travelForm.value.country, date: this.travelForm.value.month }})
  }
}

export interface travelFormInterface {
  country: FormControl<string | null>;
  type: FormControl<string | null>;
  month: FormControl<string | null>;
}
