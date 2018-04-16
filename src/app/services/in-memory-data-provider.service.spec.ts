import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDataProviderService } from './in-memory-data-provider.service';

describe('InMemoryDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataProviderService]
    });
  });

  it('should be created', inject([InMemoryDataProviderService], (service: InMemoryDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});
