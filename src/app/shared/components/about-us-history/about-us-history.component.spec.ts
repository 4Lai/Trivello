import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsHistoryComponent } from './about-us-history.component';

describe('AboutUsHistoryComponent', () => {
  let component: AboutUsHistoryComponent;
  let fixture: ComponentFixture<AboutUsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsHistoryComponent]
    });
    fixture = TestBed.createComponent(AboutUsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
