import { TestBed } from '@angular/core/testing';

import { ArtistSearchService } from './artist-search.service';

describe('ArtistSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistSearchService = TestBed.get(ArtistSearchService);
    expect(service).toBeTruthy();
  });
});
