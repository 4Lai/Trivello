import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersContentComponent } from './offers-content.component';

describe('OffersContentComponent', () => {
  let component: OffersContentComponent;
  let fixture: ComponentFixture<OffersContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersContentComponent]
    });
    fixture = TestBed.createComponent(OffersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
