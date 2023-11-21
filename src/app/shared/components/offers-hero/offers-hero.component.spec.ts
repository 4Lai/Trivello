import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersHeroComponent } from './offers-hero.component';

describe('OffersHeroComponent', () => {
  let component: OffersHeroComponent;
  let fixture: ComponentFixture<OffersHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersHeroComponent]
    });
    fixture = TestBed.createComponent(OffersHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
