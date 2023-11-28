import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailScoreComponent } from './offer-detail-score.component';

describe('OfferDetailScoreComponent', () => {
  let component: OfferDetailScoreComponent;
  let fixture: ComponentFixture<OfferDetailScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferDetailScoreComponent]
    });
    fixture = TestBed.createComponent(OfferDetailScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
