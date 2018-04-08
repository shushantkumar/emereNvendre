import { TestBed, inject } from '@angular/core/testing';

import { AllpostsService } from './allposts.service';

describe('AllpostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllpostsService]
    });
  });

  it('should be created', inject([AllpostsService], (service: AllpostsService) => {
    expect(service).toBeTruthy();
  }));
});
