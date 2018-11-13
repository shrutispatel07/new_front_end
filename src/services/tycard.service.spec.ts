import { TestBed, inject } from '@angular/core/testing';

import { TycardService } from './tycard.service';

describe('TycardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TycardService]
    });
  });

  it('should be created', inject([TycardService], (service: TycardService) => {
    expect(service).toBeTruthy();
  }));
});
