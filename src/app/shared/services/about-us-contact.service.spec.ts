import { TestBed } from '@angular/core/testing';

import { AboutUsContactService } from './about-us-contact.service';

describe('AboutUsContactService', () => {
  let service: AboutUsContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutUsContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
