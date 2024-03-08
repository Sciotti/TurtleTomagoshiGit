import { TestBed } from '@angular/core/testing';

import { HungerService } from './hunger.service';

describe('HungerService', () => {
  let service: HungerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HungerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
