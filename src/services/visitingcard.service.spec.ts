import { TestBed, inject } from '@angular/core/testing';

import { VisitingcardService } from './visitingcard.service';

describe('VisitingcardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitingcardService]
    });
  });

  it('should be created', inject([VisitingcardService], (service: VisitingcardService) => {
    expect(service).toBeTruthy();
  }));
});
