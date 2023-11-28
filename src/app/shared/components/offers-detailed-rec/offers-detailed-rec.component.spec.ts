import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDetailedRecComponent } from './offers-detailed-rec.component';

describe('OffersDetailedRecComponent', () => {
  let component: OffersDetailedRecComponent;
  let fixture: ComponentFixture<OffersDetailedRecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersDetailedRecComponent]
    });
    fixture = TestBed.createComponent(OffersDetailedRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
