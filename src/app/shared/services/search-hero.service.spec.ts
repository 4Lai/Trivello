import { TestBed } from '@angular/core/testing';

import { SearchHeroService } from './search-hero.service';

describe('SearchHeroService', () => {
  let service: SearchHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
