import { TestBed, inject } from '@angular/core/testing';

import { GaurdService } from './gaurd.service';

describe('GaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaurdService]
    });
  });

  it('should be created', inject([GaurdService], (service: GaurdService) => {
    expect(service).toBeTruthy();
  }));
});
