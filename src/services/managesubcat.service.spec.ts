import { TestBed, inject } from '@angular/core/testing';

import { ManagesubcatService } from './managesubcat.service';

describe('ManagesubcatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagesubcatService]
    });
  });

  it('should be created', inject([ManagesubcatService], (service: ManagesubcatService) => {
    expect(service).toBeTruthy();
  }));
});
