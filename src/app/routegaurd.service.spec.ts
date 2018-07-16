import { TestBed, inject } from '@angular/core/testing';

import { RoutegaurdService } from './routegaurd.service';

describe('RoutegaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutegaurdService]
    });
  });

  it('should be created', inject([RoutegaurdService], (service: RoutegaurdService) => {
    expect(service).toBeTruthy();
  }));
});
