import { TestBed } from '@angular/core/testing';

import { AlphabetsService } from './alphabets.service';

describe('AlphabetsService', () => {
  let service: AlphabetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlphabetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
