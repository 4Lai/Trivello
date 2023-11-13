import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDealsComponent } from './hot-deals.component';

describe('HotDealsComponent', () => {
  let component: HotDealsComponent;
  let fixture: ComponentFixture<HotDealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotDealsComponent]
    });
    fixture = TestBed.createComponent(HotDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
