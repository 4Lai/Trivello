import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailedObjComponent } from './offer-detailed-obj.component';

describe('OfferDetailedObjComponent', () => {
  let component: OfferDetailedObjComponent;
  let fixture: ComponentFixture<OfferDetailedObjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferDetailedObjComponent]
    });
    fixture = TestBed.createComponent(OfferDetailedObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
