import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDealsSingleComponent } from './hot-deals-single.component';

describe('HotDealsSingleComponent', () => {
  let component: HotDealsSingleComponent;
  let fixture: ComponentFixture<HotDealsSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotDealsSingleComponent]
    });
    fixture = TestBed.createComponent(HotDealsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
