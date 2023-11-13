import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNavbarComponent } from './pop-up-navbar.component';

describe('PopUpNavbarComponent', () => {
  let component: PopUpNavbarComponent;
  let fixture: ComponentFixture<PopUpNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpNavbarComponent]
    });
    fixture = TestBed.createComponent(PopUpNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
