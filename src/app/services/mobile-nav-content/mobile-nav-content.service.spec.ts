import { TestBed } from '@angular/core/testing';

import { MobileNavContentService } from './mobile-nav-content.service';

describe('MobileNavContentService', () => {
  let service: MobileNavContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileNavContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
