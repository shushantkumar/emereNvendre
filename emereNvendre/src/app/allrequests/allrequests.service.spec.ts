import { TestBed, inject } from '@angular/core/testing';

import { AllrequestsService } from './allrequests.service';

describe('AllrequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllrequestsService]
    });
  });

  it('should be created', inject([AllrequestsService], (service: AllrequestsService) => {
    expect(service).toBeTruthy();
  }));
});
