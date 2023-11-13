import { TestBed } from '@angular/core/testing';

import { WhereService } from './where.service';

describe('WhereService', () => {
  let service: WhereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
