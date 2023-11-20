import { TestBed } from '@angular/core/testing';

import { AboutUsHistoryService } from './about-us-history.service';

describe('AboutUsHistoryService', () => {
  let service: AboutUsHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutUsHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
