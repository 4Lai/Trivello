import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailedStayPlanComponent } from './offer-detailed-stay-plan.component';

describe('OfferDetailedStayPlanComponent', () => {
  let component: OfferDetailedStayPlanComponent;
  let fixture: ComponentFixture<OfferDetailedStayPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferDetailedStayPlanComponent]
    });
    fixture = TestBed.createComponent(OfferDetailedStayPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
