import { TestBed, inject } from '@angular/core/testing';

import { EnvelopsService } from './envelops.service';

describe('EnvelopsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvelopsService]
    });
  });

  it('should be created', inject([EnvelopsService], (service: EnvelopsService) => {
    expect(service).toBeTruthy();
  }));
});
