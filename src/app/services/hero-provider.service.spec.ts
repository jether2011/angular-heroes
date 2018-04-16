import { TestBed, inject } from '@angular/core/testing';

import { HeroProviderService } from './hero-provider.service';

describe('HeroProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroProviderService]
    });
  });

  it('should be created', inject([HeroProviderService], (service: HeroProviderService) => {
    expect(service).toBeTruthy();
  }));
});
