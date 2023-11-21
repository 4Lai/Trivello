import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailedComponent } from './offer-detailed.component';

describe('OfferDetailedComponent', () => {
  let component: OfferDetailedComponent;
  let fixture: ComponentFixture<OfferDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferDetailedComponent]
    });
    fixture = TestBed.createComponent(OfferDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
