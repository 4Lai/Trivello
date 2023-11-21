import { TestBed } from '@angular/core/testing';

import { OffersAllService } from './offers-all.service';

describe('OffersAllService', () => {
  let service: OffersAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
