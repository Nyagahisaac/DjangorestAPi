import { TestBed } from '@angular/core/testing';

import { ConsumeService } from './consume.service';

describe('ConsumeService', () => {
  let service: ConsumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
