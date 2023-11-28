import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailedHeroComponent } from './offer-detailed-hero.component';

describe('OfferDetailedHeroComponent', () => {
  let component: OfferDetailedHeroComponent;
  let fixture: ComponentFixture<OfferDetailedHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferDetailedHeroComponent]
    });
    fixture = TestBed.createComponent(OfferDetailedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
