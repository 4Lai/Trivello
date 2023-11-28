import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailTitleComponent } from './offer-detail-title.component';

describe('OfferDetailTitleComponent', () => {
  let component: OfferDetailTitleComponent;
  let fixture: ComponentFixture<OfferDetailTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferDetailTitleComponent]
    });
    fixture = TestBed.createComponent(OfferDetailTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
