import { TestBed, inject } from '@angular/core/testing';

import { TestryService } from './testry.service';

describe('TestryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestryService]
    });
  });

  it('should be created', inject([TestryService], (service: TestryService) => {
    expect(service).toBeTruthy();
  }));
});
