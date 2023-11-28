import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailedContentComponent } from './offer-detailed-content.component';

describe('OfferDetailedContentComponent', () => {
  let component: OfferDetailedContentComponent;
  let fixture: ComponentFixture<OfferDetailedContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferDetailedContentComponent]
    });
    fixture = TestBed.createComponent(OfferDetailedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
